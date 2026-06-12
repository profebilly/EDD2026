// ============================================================
//  SimulaDocente — Banco de Preguntas
//  Área: Familia Profesional Agraria (Agropecuaria y Veterinaria)
// ============================================================

const preguntas = [
  {
    id: 1,
    categoria: "Planificación",
    pregunta: "El docente planificó una práctica de campo para la siembra de hortalizas, pero una tormenta tropical imprevista inunda la parcela escolar. ¿Qué ajuste a la planificación garantiza la continuidad del aprendizaje técnico sin poner en riesgo a los estudiantes?",
    opciones: [
      "Suspender la clase y permitir que los estudiantes tengan tiempo libre hasta que el terreno se seque.",
      "Obligar a los estudiantes a sembrar bajo la lluvia para enseñarles que el agricultor no se detiene por el clima.",
      "Aplicar un examen escrito no planificado sobre la taxonomía de las plantas para aprovechar el tiempo.",
      "Adaptar la sesión trasladándose al invernadero o al laboratorio para realizar prácticas de preparación de semilleros o mantenimiento de herramientas."
    ],
    correcta: 3,
    explicacion: "La opción D demuestra flexibilidad pedagógica. Trasladar la práctica a un entorno controlado permite alcanzar competencias relacionadas con el módulo agrario (semilleros, equipos) respetando las normas de seguridad ocupacional ante condiciones climáticas adversas."
  },
  {
    id: 2,
    categoria: "Gestión del Aula",
    pregunta: "Durante una práctica de poda de frutales, el docente nota que dos estudiantes están jugando con los colines (machetes) y las tijeras de podar. ¿Cuál debe ser la intervención inmediata del docente técnico?",
    opciones: [
      "Ignorar la situación para no interrumpir el flujo de la clase, anotando bajarles puntos al final.",
      "Gritarles desde lejos que tengan cuidado, confiando en que son lo suficientemente maduros.",
      "Detener la actividad de inmediato, desarmar a los estudiantes y hacer una reflexión obligatoria sobre bioseguridad y prevención de riesgos laborales agropecuarios.",
      "Expulsarlos definitivamente del bachillerato técnico agrícola por indisciplina."
    ],
    correcta: 2,
    explicacion: "La opción C prioriza la Seguridad y Salud en el Trabajo, una competencia transversal vital en la ETP. Detener la acción e intervenir formativamente previene accidentes graves (cortes) y fomenta la cultura de prevención de riesgos en el campo."
  },
  {
    id: 3,
    categoria: "Evaluación",
    pregunta: "En el módulo de Producción Pecuaria, el docente debe evaluar la competencia de los estudiantes para aplicar vacunas intramusculares en cerdos. ¿Qué instrumento de evaluación es el más pertinente para medir este saber hacer?",
    opciones: [
      "Una prueba de selección múltiple sobre los tipos de jeringas.",
      "Una exposición grupal con diapositivas sobre enfermedades porcinas.",
      "Una lista de cotejo o rúbrica de desempeño aplicada durante la práctica en la granja, evaluando el trato al animal, cálculo de dosis y técnica de inyección.",
      "Pedir a los estudiantes que escriban un ensayo sobre la importancia de la vacunación."
    ],
    correcta: 2,
    explicacion: "La opción C es una evaluación auténtica y basada en competencias. Las rúbricas de desempeño in situ permiten observar directamente las habilidades prácticas (psicomotoras y procedimentales) requeridas en el perfil del técnico agropecuario/veterinario."
  },
  {
    id: 4,
    categoria: "Metodología",
    pregunta: "Los estudiantes tienen dificultades para comprender teóricamente la diferencia entre frutos climatéricos y no climatéricos en la post-cosecha. ¿Qué estrategia metodológica facilitaría un aprendizaje significativo?",
    opciones: [
      "Hacerles leer un documento técnico de 20 páginas y realizar un resumen.",
      "Diseñar una práctica de laboratorio donde observen y registren durante una semana la maduración de guineos (climatéricos) vs. naranjas (no climatéricos) bajo distintas temperaturas.",
      "Dictar las definiciones y exigirles que las memoricen para el examen.",
      "Asignarles que busquen la información en internet y que no pregunten más."
    ],
    correcta: 1,
    explicacion: "La opción B aplica el aprendizaje basado en la experimentación y observación directa. Manipular productos reales permite a los estudiantes interiorizar conceptos fisiológicos complejos de la agronomía de forma visual y práctica."
  },
  {
    id: 5,
    categoria: "Inclusión y Equidad",
    pregunta: "Un estudiante usuario de silla de ruedas ingresa al Bachillerato Técnico en Agropecuaria. No puede acceder al terreno lodoso donde el grupo está tomando muestras de suelo para análisis. ¿Cómo garantiza el docente su participación equitativa?",
    opciones: [
      "Eximirlo de esa unidad porque la agronomía requiere trabajo físico pesado.",
      "Organizar equipos donde sus compañeros recolecten las muestras en el campo y se las lleven a una mesa accesible en el laboratorio para que él lidere el análisis de pH y textura.",
      "Reprobarlo porque no puede cumplir con el perfil del egresado.",
      "Decirle que observe a sus compañeros desde lejos mientras ellos hacen todo el trabajo."
    ],
    correcta: 1,
    explicacion: "La opción B aplica ajustes razonables y Diseño Universal para el Aprendizaje (DUA). Se fomenta el trabajo en equipo, permitiendo que el estudiante desarrolle competencias clave (análisis de laboratorio) sin que su discapacidad física sea una barrera."
  },
  {
    id: 6,
    categoria: "Planificación",
    pregunta: "A mitad de un proyecto de horticultura, la finca escolar se queda sin fertilizantes comerciales y el MINERD demorará en enviar fondos. ¿Qué decisión pedagógica es más adecuada?",
    opciones: [
      "Detener las siembras y dar clases teóricas hasta que lleguen los fertilizantes.",
      "Aprovechar la situación para adaptar el plan e introducir un taller de elaboración de abonos orgánicos (compost, bocashi) con residuos de la escuela.",
      "Obligar a los estudiantes a comprar fertilizantes con su propio dinero.",
      "Sembrar sin ningún tipo de nutrientes y justificar que las plantas murieron por falta de presupuesto."
    ],
    correcta: 1,
    explicacion: "La opción B demuestra resiliencia y promueve la agroecología. Convertir la falta de insumos en una oportunidad para enseñar producción sostenible es una competencia altamente valorada en la agricultura moderna."
  },
  {
    id: 7,
    categoria: "Gestión del Aula",
    pregunta: "Durante las prácticas de limpieza y desinfección de naves avícolas, el docente nota que un estudiante siempre asume el trabajo pesado (sacar la gallinaza), mientras su compañero de equipo solo anota datos en la bitácora. ¿Qué acción fomenta un aprendizaje equitativo?",
    opciones: [
      "Dejarlos trabajar así, ya que ambos están cumpliendo y se sienten cómodos.",
      "Regañar públicamente al estudiante que solo escribe por ser perezoso.",
      "Establecer roles rotativos obligatorios para que todos desarrollen tanto las destrezas operativas y físicas como las habilidades de gestión y registro de datos.",
      "Separarlos y obligarlos a limpiar una nave avícola entera cada uno por su cuenta."
    ],
    correcta: 2,
    explicacion: "La opción C asegura que todos los estudiantes adquieran el perfil completo del egresado técnico, evitando que el trabajo en equipo se convierta en una especialización prematura donde unos solo ejecutan y otros solo administran."
  },
  {
    id: 8,
    categoria: "Evaluación",
    pregunta: "Antes de iniciar el módulo de Procesamiento de Lácteos, el docente necesita saber el nivel previo de los estudiantes sobre inocuidad alimentaria. ¿Qué enfoque evaluativo le brindará la información más útil para arrancar sus clases?",
    opciones: [
      "Aplicar directamente una evaluación sumativa con un examen sorpresa muy difícil.",
      "Realizar una evaluación diagnóstica mediante una lluvia de ideas y una práctica simulada de lavado de manos e indumentaria en la planta procesadora.",
      "No evaluar nada y asumir que los estudiantes no saben nada de microbiología.",
      "Asignarles una tarea de investigación para entregar al final de mes."
    ],
    correcta: 1,
    explicacion: "La opción B (evaluación diagnóstica práctica) no solo revela los saberes previos de forma amena, sino que contextualiza inmediatamente a los estudiantes en el entorno de la agroindustria láctea y sus estrictas normas de higiene."
  },
  {
    id: 9,
    categoria: "Inclusión y Equidad",
    pregunta: "Algunas estudiantes de menor contextura física se frustran al intentar preparar camas de siembra porque las azadas (coas) tradicionales son demasiado pesadas para ellas. ¿Qué adaptación apoya mejor su proceso formativo?",
    opciones: [
      "Recomendarles que se cambien a una carrera técnica menos exigente físicamente.",
      "Proporcionar herramientas más ergonómicas y ligeras, o asignarles temporalmente tareas de precisión (como distribución de semillas o cálculo de densidades).",
      "Ignorar sus quejas y exigirles que terminen el surco cueste lo que cueste.",
      "Hacer que los varones hagan el trabajo pesado siempre por ellas."
    ],
    correcta: 1,
    explicacion: "La opción B promueve la ergonomía y la equidad de género en el campo. Brindar herramientas adecuadas y diversificar las tareas previene lesiones, evita estereotipos y asegura que todas logren las competencias agronómicas."
  },
  {
    id: 10,
    categoria: "Metodología",
    pregunta: "En la unidad de Sanidad Vegetal, los estudiantes no logran identificar las plagas basándose solo en fotografías proyectadas en clase. ¿Qué estrategia metodológica solucionaría esto?",
    opciones: [
      "Ponerles más fotografías y dictar apuntes sobre morfología de insectos.",
      "Asignarles un documental para que lo vean en sus casas.",
      "Organizar un recorrido entomológico (caminata de campo) para recolectar insectos vivos, analizarlos con lupas y clasificarlos in situ.",
      "Aplicar insecticida de forma preventiva en toda la parcela sin identificar la plaga."
    ],
    correcta: 2,
    explicacion: "La opción C utiliza el aprendizaje basado en el entorno (trabajo de campo). Observar los insectos interactuando con los cultivos reales permite a los estudiantes aplicar claves taxonómicas y entender la dinámica de las plagas en la práctica."
  }
];