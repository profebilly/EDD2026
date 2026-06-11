// ============================================================
//  SimulaDocente — Lógica del Quiz
//  Funcionalidades: shuffle, timer, feedback, resultados
// ============================================================

'use strict';

/* ── Estado global ─────────────────────────────────────── */
const STATE = {
  questions:    [],   // preguntas seleccionadas y mezcladas
  current:      0,    // índice de pregunta actual
  score:        0,    // respuestas correctas
  answers:      [],   // registro detallado de cada respuesta
  total:        10,   // total de preguntas en esta sesión
  timerSecs:    40,   // segundos por pregunta
  timerInterval: null,
  answered:     false
};

/* ── Constantes ────────────────────────────────────────── */
const LETTERS        = ['A', 'B', 'C', 'D', 'E'];
const TIMER_WARN     = 300;   // 5 minutos
const TIMER_DANGER   = 60;    // 1 minuto
const TIMER_DEFAULT  = 5400;  // 90 minutos en segundos

/* Colores de categoría para el badge */
const CAT_COLORS = {
  'Planificación':          '#a78bfa',
  'Gestión del Aula':       '#34d399',
  'Evaluación':             '#60a5fa',
  'Inclusión y Equidad':    '#fb923c',
  'Desarrollo Profesional': '#f472b6'
};

/* ── Utilidades DOM ────────────────────────────────────── */
const $ = id => document.getElementById(id);

function formatTime(secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

/* ── Selector de cantidad ──────────────────────────────── */
let selectedN = 40;

window.setN = function(n) {
  selectedN = n;
  document.querySelectorAll('.btn-config').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.n) === n);
  });
};

/* ── Inicio del quiz ───────────────────────────────────── */
window.startQuiz = function() {
  const pool = [...preguntas].sort(() => Math.random() - 0.5);
  STATE.questions = pool.slice(0, Math.min(selectedN, preguntas.length));
  STATE.current   = 0;
  STATE.score     = 0;
  STATE.answers   = [];
  STATE.total     = STATE.questions.length;

  showScreen('screen-quiz');
  startTimer(TIMER_DEFAULT);
  renderQuestion();
};

/* ── Renderizar pregunta ───────────────────────────────── */
function renderQuestion() {
  const q = STATE.questions[STATE.current];
  STATE.answered = false;

  /* Header */
  $('q-counter').textContent = `${STATE.current + 1} / ${STATE.total}`;

  const catEl = $('q-category');
  catEl.textContent = q.categoria || 'General';
  const catColor = CAT_COLORS[q.categoria] || '#a78bfa';
  catEl.style.setProperty('background', `${catColor}22`);
  catEl.style.setProperty('color', catColor);
  catEl.style.setProperty('border-color', `${catColor}44`);

  /* Barra de progreso */
  $('progress-bar').style.width = `${(STATE.current / STATE.total) * 100}%`;
  $('progress-bar').parentElement.setAttribute('aria-valuenow',
    Math.round((STATE.current / STATE.total) * 100));

  /* Texto de la pregunta */
  let qText = escapeHtml(q.pregunta);
  // Separar el contexto de la pregunta con un resaltado visual
  qText = qText.replace(/(¿.*?\?)/g, '<span class="question-highlight">$1</span>');
  $('question-text').innerHTML = qText;

  /* ── Mezclar opciones ── */
  const indices = q.opciones.map((_, i) => i);
  shuffleArray(indices);
  const correctDisplayIdx = indices.indexOf(q.correcta);

  /* Renderizar opciones */
  const grid = $('options-grid');
  grid.innerHTML = '';

  indices.forEach((origIdx, displayIdx) => {
    const btn = document.createElement('button');
    btn.className     = 'option-btn';
    btn.id            = `opt-${displayIdx}`;
    btn.dataset.di    = displayIdx;
    btn.dataset.oi    = origIdx;
    btn.setAttribute('role', 'listitem');
    btn.setAttribute('aria-label', `Opción ${LETTERS[displayIdx]}: ${q.opciones[origIdx]}`);

    btn.innerHTML = `
      <span class="option-letter">${LETTERS[displayIdx]}</span>
      <span class="option-text">${escapeHtml(q.opciones[origIdx])}</span>
    `;

    btn.addEventListener('click', () => {
      selectAnswer(displayIdx, correctDisplayIdx, q, indices);
    });

    grid.appendChild(btn);
  });

  /* Ocultar feedback y botón siguiente */
  $('feedback-box').style.display    = 'none';
  $('feedback-box').className        = 'feedback-box';
  $('btn-next-wrap').style.display   = 'none';

  /* Animación */
  const card = $('question-card');
  card.classList.remove('card-anim');
  void card.offsetWidth; // reflow
  card.classList.add('card-anim');
}

/* ── Temporizador ──────────────────────────────────────── */
function startTimer(seconds) {
  clearInterval(STATE.timerInterval);
  STATE.timerSecs = seconds;

  const display = $('timer-display');
  const box     = $('timer-box');

  display.textContent = formatTime(seconds);
  box.className = 'timer-box';

  STATE.timerInterval = setInterval(() => {
    STATE.timerSecs--;
    display.textContent = formatTime(STATE.timerSecs);

    /* Cambiar estado visual */
    if (STATE.timerSecs <= TIMER_DANGER) {
      box.className = 'timer-box danger';
    } else if (STATE.timerSecs <= TIMER_WARN) {
      box.className = 'timer-box warn';
    }

    /* Tiempo agotado */
    if (STATE.timerSecs <= 0) {
      clearInterval(STATE.timerInterval);
      handleGlobalTimeout();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(STATE.timerInterval);
  $('timer-box').className = 'timer-box';
}

/* ── Timeout Global ─────────────────────────────── */
function handleGlobalTimeout() {
  STATE.answered = true;
  
  for (let i = STATE.current; i < STATE.total; i++) {
    const q = STATE.questions[i];
    // Evitar duplicar si la actual ya había sido respondida
    if (i === STATE.current && STATE.answers.length > i) continue;
    
    STATE.answers.push({
      pregunta:       q.pregunta,
      correctaTexto:  q.opciones[q.correcta],
      selectedTexto:  '(Sin respuesta - Tiempo agotado)',
      correct:        false
    });
  }

  showResults(true);
}

/* ── Seleccionar respuesta ─────────────────────────────── */
function selectAnswer(displayIdx, correctDisplayIdx, q, indices) {
  if (STATE.answered) return;
  STATE.answered = true;

  const isCorrect = displayIdx === correctDisplayIdx;
  if (isCorrect) STATE.score++;

  const origIdxSelected = indices[displayIdx];

  /* Registrar */
  STATE.answers.push({
    pregunta:       q.pregunta,
    correctaTexto:  q.opciones[q.correcta],
    selectedTexto:  q.opciones[origIdxSelected],
    correct:        isCorrect
  });

  /* Colorear opciones */
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.disabled = true;
    const di = parseInt(btn.dataset.di);
    const oi = parseInt(btn.dataset.oi);

    if (di === correctDisplayIdx) {
      btn.classList.add('opt-correct');
    } else if (di === displayIdx && !isCorrect) {
      btn.classList.add('opt-wrong');
    } else {
      btn.classList.add('opt-disabled');
    }
  });

  /* Feedback */
  if (isCorrect) {
    showFeedback('correct', '✅ ¡Correcto!', q.explicacion || 'Muy bien, sigue así.');
  } else {
    const expl = q.explicacion ? ` ${q.explicacion}` : '';
    showFeedback('wrong', '❌ Incorrecto',
      `La respuesta correcta es: "${escapeHtml(q.opciones[q.correcta])}".${expl}`
    );
  }

  $('btn-next-wrap').style.display = 'block';
}

function showFeedback(type, headline, text) {
  const box = $('feedback-box');
  const typeClass = {
    correct: 'fb-correct',
    wrong:   'fb-wrong',
    timeout: 'fb-timeout'
  }[type] || 'fb-wrong';

  box.className = `feedback-box ${typeClass}`;
  box.style.display = 'flex';

  $('feedback-icon').textContent    = type === 'correct' ? '✅' : type === 'timeout' ? '⏰' : '❌';
  $('feedback-headline').textContent = headline.replace(/^[✅❌⏰]\s*/, '');
  $('feedback-text').textContent     = text;
}

/* ── Siguiente pregunta ────────────────────────────────── */
window.nextQuestion = function() {
  STATE.current++;
  if (STATE.current >= STATE.total) {
    showResults();
  } else {
    renderQuestion();
  }
};

/* ── Mostrar resultados ────────────────────────────────── */
function showResults(isTimeout = false) {
  stopTimer();
  showScreen('screen-result');

  const pct = Math.round((STATE.score / STATE.total) * 100);
  
  if (isTimeout === true) {
    $('result-emoji').textContent    = '⏰';
    $('result-title').textContent    = '¡Tiempo Agotado!';
    $('result-subtitle').textContent = 'Se acabaron los 90 minutos.';
  } else {
    const { emoji, title, subtitle } = getResultMessage(pct);
    $('result-emoji').textContent    = emoji;
    $('result-title').textContent    = title;
    $('result-subtitle').textContent = subtitle;
  }

  $('score-num').textContent       = STATE.score;
  $('score-denom').textContent     = `/${STATE.total}`;
  $('r-correct').textContent       = STATE.score;
  $('r-wrong').textContent         = STATE.total - STATE.score;
  $('r-pct').textContent           = `${pct}%`;

  /* Barra de progreso al 100% */
  $('progress-bar').style.width = '100%';

  /* Animar arco SVG */
  const circumference = 314; // 2π × 50
  const offset = circumference - (pct / 100) * circumference;
  const arc = $('score-arc');
  arc.style.transition = 'none';
  arc.style.strokeDashoffset = circumference;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      arc.style.transition = 'stroke-dashoffset 1.3s cubic-bezier(0.4,0,0.2,1)';
      arc.style.strokeDashoffset = offset;
    });
  });

  /* Lista de revisión */
  const list = $('review-list');
  list.innerHTML = '';
  STATE.answers.forEach((a, i) => {
    const div = document.createElement('div');
    div.className = `review-item ${a.correct ? 'ri-ok' : 'ri-err'}`;
    div.setAttribute('role', 'listitem');

    const ansHtml = a.correct
      ? `Tu respuesta: <span class="ans-correct">${escapeHtml(a.selectedTexto)}</span>`
      : `Tu respuesta: <span class="ans-wrong">${escapeHtml(a.selectedTexto)}</span>
         &nbsp;·&nbsp; Correcta: <span class="ans-correct">${escapeHtml(a.correctaTexto)}</span>`;

    div.innerHTML = `
      <span class="review-icon">${a.correct ? '✅' : '❌'}</span>
      <div>
        <div class="review-q">${i + 1}. ${escapeHtml(a.pregunta)}</div>
        <div class="review-ans">${ansHtml}</div>
      </div>
    `;
    list.appendChild(div);
  });
}

function getResultMessage(pct) {
  if (pct >= 90) return { emoji: '🏆', title: '¡Sobresaliente!',     subtitle: 'Estás muy bien preparado/a para el concurso.' };
  if (pct >= 75) return { emoji: '🎯', title: '¡Muy bien!',          subtitle: 'Buen desempeño, sigue perfeccionándote.' };
  if (pct >= 60) return { emoji: '📚', title: '¡Vas por buen camino!', subtitle: 'Repasa las respuestas incorrectas para mejorar.' };
  if (pct >= 40) return { emoji: '💡', title: 'Puedes mejorar',       subtitle: 'Revisa los conceptos y vuelve a intentarlo.' };
  return              { emoji: '💪', title: '¡Sigue practicando!',  subtitle: 'La práctica constante es clave para mejorar.' };
}

/* ── Acciones de resultado ─────────────────────────────── */
window.restartQuiz = function() { startQuiz(); };
window.goHome = function() {
  stopTimer();
  showScreen('screen-home');
};

/* ── Helpers ───────────────────────────────────────────── */
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ── Inicialización ────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  /* Mostrar total de preguntas disponibles */
  if (typeof preguntas !== 'undefined') {
    $('stat-total').textContent = preguntas.length;
  }
  /* Mostrar pantalla inicial */
  showScreen('screen-home');
});
