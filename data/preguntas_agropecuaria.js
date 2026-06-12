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
  },
  {
    id: 11,
    categoria: "Evaluación",
    pregunta: "El docente asigna a los estudiantes la preparación de un bocashi (abono orgánico fermentado). Desea evaluar no solo la calidad del abono final, sino también cómo los estudiantes gestionan las temperaturas y volteos diarios durante tres semanas. ¿Qué instrumento evaluativo asegura un seguimiento sistemático del proceso?",
    opciones: [
      "Una rúbrica aplicada únicamente el último día cuando el abono está listo.",
      "Un examen teórico final sobre los componentes químicos del bocashi.",
      "El uso obligatorio de una bitácora de campo revisada semanalmente, complementada con una escala de apreciación de su labor diaria.",
      "Una autoevaluación oral donde cada estudiante diga si volteó la pila o no."
    ],
    correcta: 2,
    explicacion: "La opción C permite la evaluación formativa del proceso técnico continuo. En los módulos agropecuarios, la bitácora de campo es el estándar de la industria para documentar trazabilidad y rigor técnico, lo que fomenta la autorregulación."
  },
  {
    id: 12,
    categoria: "Metodología",
    pregunta: "En una clase de propagación de plantas, el docente desea enseñar técnicas de injerto en frutales. ¿Qué estrategia didáctica asegura la mejor transferencia de esta competencia psicomotora?",
    opciones: [
      "Leer un manual detallado paso a paso durante toda la clase.",
      "Realizar una demostración (modelado) en vivo del corte y unión, seguida inmediatamente de práctica guiada individual con navajas y patrones reales.",
      "Asignarles que practiquen en sus casas y traigan la planta injertada la próxima semana.",
      "Mostrar una presentación con animaciones 3D sobre cómo circulan los nutrientes en el injerto."
    ],
    correcta: 1,
    explicacion: "La opción B utiliza el método Demostrativo-Práctico (aprender haciendo). En habilidades manipulativas de precisión agrícola, observar al experto y practicar inmediatamente bajo supervisión es la forma más efectiva de evitar errores de técnica."
  },
  {
    id: 13,
    categoria: "Inclusión y Equidad",
    pregunta: "En el módulo de Maquinaria e Implementos Agrícolas, un estudiante con dislexia severa presenta mucha ansiedad al intentar leer el grueso manual del tractor para aprender sobre el mantenimiento preventivo. ¿Qué adaptación favorece su aprendizaje técnico sin frustrarlo?",
    opciones: [
      "Exigirle que lea el manual con más tiempo para que mejore su lectura.",
      "Proporcionar recursos multimodales: tutoriales en video, diagramas de flujo visuales codificados por colores y demostraciones directas en el motor del tractor.",
      "Eximirlo de aprender el mantenimiento y dejar que solo conduzca.",
      "Pedirle a otro estudiante que le lea todo el manual en voz alta en el patio."
    ],
    correcta: 1,
    explicacion: "La opción B aplica el Diseño Universal para el Aprendizaje (DUA). Reemplazar barreras textuales por información gráfica e interactiva garantiza que comprenda el funcionamiento mecánico, cumpliendo con el perfil sin depender de decodificación textual extensa."
  },
  {
    id: 14,
    categoria: "Gestión del Aula",
    pregunta: "Durante una sesión de sanidad animal, solo hay dos microscopios disponibles para diagnosticar parásitos en muestras de heces bovinas. Los estudiantes comienzan a discutir por el acceso a los equipos, generando caos. ¿Cómo debe intervenir el docente?",
    opciones: [
      "Retirar los microscopios y dictar la teoría para evitar conflictos.",
      "Dejar que se organicen solos, simulando la competitividad del mundo laboral.",
      "Estructurar un sistema de estaciones rotativas, donde unos preparan muestras, otros buscan información en manuales veterinarios y otros usan los microscopios.",
      "Sancionar a los que discuten y dejar que solo los más calmados usen los equipos."
    ],
    correcta: 2,
    explicacion: "La opción C gestiona eficazmente los recursos limitados mediante estaciones de aprendizaje (práctica rotativa). Esto maximiza el tiempo de todos los estudiantes de forma productiva, elimina el conflicto y desarrolla la colaboración."
  },
  {
    id: 15,
    categoria: "Planificación",
    pregunta: "Al enseñar dosificación de plaguicidas, el docente nota que los estudiantes no logran calcular correctamente las proporciones por hectárea usando regla de tres, lo que podría resultar en aplicaciones tóxicas. ¿Qué ajuste debe hacer en su planificación?",
    opciones: [
      "Ignorarlo y dejar que un estudiante avanzado haga los cálculos por todo el grupo.",
      "Suspender las aplicaciones prácticas y enseñar matemáticas puras por tres semanas.",
      "Articular transversalmente con el docente de matemáticas e integrar talleres de resolución de problemas con casos reales de cálculo de agroquímicos antes de ir al campo.",
      "Usar proporciones al 'ojo por ciento' como se hace tradicionalmente en algunos campos."
    ],
    correcta: 2,
    explicacion: "La opción C fomenta la interdisciplinariedad. Las matemáticas aplicadas a la agricultura (cálculo de dosis) son fundamentales; trabajarlas en conjunto con el área académica garantiza un aprendizaje profundo y la prevención de riesgos fitosanitarios."
  },
  {
    id: 16,
    categoria: "Metodología",
    pregunta: "El currículo exige enseñar la competencia de Inseminación Artificial en vacas, pero el centro educativo no posee ganado bovino y el costo de alquilar uno es muy alto. ¿Qué estrategia metodológica sustitutiva es la más pertinente?",
    opciones: [
      "Impartir el tema solo de manera teórica mediante diapositivas.",
      "Visitar un matadero local para practicar en tractos reproductivos de vacas recién faenadas y utilizar simuladores pélvicos artesanales en el aula.",
      "Saltarse ese resultado de aprendizaje porque es imposible lograrlo.",
      "Practicar con animales pequeños de la escuela, aunque no sean bovinos."
    ],
    correcta: 1,
    explicacion: "La opción B recurre a la simulación y al aprovechamiento de recursos de la comunidad agroindustrial (mataderos). Practicar con órganos reales (in vitro) desarrolla la memoria muscular y la orientación espacial anatómica requerida en la competencia real."
  },
  {
    id: 17,
    categoria: "Inclusión y Equidad",
    pregunta: "En una planta escolar de procesamiento de cárnicos, hay un alto nivel de ruido por la maquinaria (molinos, sierras). Un estudiante con hipoacusia (disminución auditiva) no escucha las instrucciones de seguridad cuando se encienden los motores. ¿Qué acción asegura su protección e inclusión?",
    opciones: [
      "Hablarle al oído constantemente mientras usa la sierra.",
      "Prohibirle usar maquinaria peligrosa y asignarle tareas de limpieza.",
      "Establecer señales visuales (luces o códigos manuales) universales para todo el taller y realizar demostraciones previas con los equipos apagados.",
      "Darle un folleto con las normas de seguridad y dejar que opere las máquinas solo."
    ],
    correcta: 2,
    explicacion: "La opción C aplica ajustes razonables efectivos. Las señales visuales estandarizadas en agroindustria (donde todos usan protectores auditivos de todos modos) benefician a todo el grupo, previniendo accidentes y asegurando una participación plena y segura."
  },
  {
    id: 18,
    categoria: "Gestión del Aula",
    pregunta: "Los estudiantes de primer año muestran apatía y rechazo a las labores de limpieza de los corrales de cerdos (limpieza de excretas). Se quejan de que 'vinieron a estudiar, no a limpiar'. ¿Cómo puede el docente transformar esta actitud en una experiencia formativa?",
    opciones: [
      "Darles puntos extra en otras materias si terminan rápido.",
      "Explicarles que el saneamiento es la base profiláctica para prevenir epizootias (enfermedades), vincular la limpieza al bienestar animal e incluir parámetros de higiene en la rúbrica.",
      "Castigarlos dejándolos más tiempo limpiando hasta que aprendan a no quejarse.",
      "Hacer la limpieza el docente mismo para evitar discusiones en el grupo."
    ],
    correcta: 1,
    explicacion: "La opción B otorga un sentido técnico y propósito a una labor operativa y repetitiva. Relacionar la limpieza directamente con la sanidad veterinaria y el rendimiento productivo profesionaliza la tarea y mejora la motivación intrínseca."
  },
  {
    id: 19,
    categoria: "Evaluación",
    pregunta: "Durante un ciclo fenológico del cultivo de tomate (que dura meses), ¿qué evidencia de aprendizaje permite al docente evaluar el seguimiento sistemático, el cuidado y la identificación de anomalías fisiológicas por parte del estudiante?",
    opciones: [
      "Un examen escrito al final de la cosecha.",
      "La calidad y el peso de los tomates el día de la recolección.",
      "Un portafolio digital técnico que incluya registros diarios, mediciones y fotografías secuenciales del desarrollo, anotando plagas o carencias identificadas y decisiones tomadas.",
      "Un ensayo teórico sobre el origen geográfico del tomate."
    ],
    correcta: 2,
    explicacion: "La opción C (portafolio técnico) es la herramienta de evaluación formativa por excelencia en ciclos largos. Permite evidenciar el desarrollo del juicio crítico, la resolución de problemas y la capacidad de observación agrícola a lo largo de las semanas."
  },
  {
    id: 20,
    categoria: "Planificación",
    pregunta: "El docente planifica cultivar leguminosas (habichuelas) en una parcela que la promoción anterior utilizó para cultivar maíz durante mucho tiempo, lo que agotó el nitrógeno del suelo. ¿Qué concepto técnico está aplicando pedagógicamente en su secuencia didáctica?",
    opciones: [
      "Monocultivo intensivo.",
      "Rotación de cultivos y aprovechamiento de fijación biológica de nitrógeno, enseñando a los estudiantes manejo integrado de fertilidad de suelos.",
      "Agricultura hidropónica de precisión.",
      "Dejar descansar el suelo indefinidamente sin sembrar nada."
    ],
    correcta: 1,
    explicacion: "La opción B alinea el conocimiento técnico agronómico (las leguminosas fijan nitrógeno) con la planificación curricular, utilizando problemas reales del suelo escolar como un caso de estudio activo de conservación de suelos."
  },
  {
    id: 21,
    categoria: "Metodología",
    pregunta: "Para evaluar la viabilidad comercial de un apiario (producción de miel), los estudiantes trabajan con apicultores locales, investigan costos, diseñan el plan de sanidad y elaboran etiquetas para envasado. ¿Qué estrategia metodológica se está aplicando?",
    opciones: [
      "Aprendizaje Basado en Proyectos (ABP) con un enfoque de emprendimiento agroempresarial.",
      "Clase magistral expositiva.",
      "Gamificación de conceptos botánicos.",
      "Aprendizaje memorístico de equipos apícolas."
    ],
    correcta: 0,
    explicacion: "La opción A involucra a los estudiantes en un proyecto productivo real de inicio a fin (desde el diseño hasta el marketing), lo que desarrolla competencias complejas, emprendimiento y contacto directo con el sector agrario real."
  },
  {
    id: 22,
    categoria: "Inclusión y Equidad",
    pregunta: "En una tarea monótona como el deshierbe manual de media hectárea, un estudiante diagnosticado con TDAH pierde la concentración rápidamente, abandona su área y distrae a otros. ¿Qué ajuste metodológico ayuda a focalizar su energía productivamente?",
    opciones: [
      "Expulsarlo de la parcela.",
      "Obligarlo a quedarse en el mismo sitio vigilándolo constantemente.",
      "Segmentar su labor usando la técnica Pomodoro (tiempos cortos e intensos) y asignarle el rol dinámico de transportar la maleza recolectada hacia la compostera.",
      "Asignarle más terreno como medida disciplinaria."
    ],
    correcta: 2,
    explicacion: "La opción C aplica ajustes curriculares para la neurodivergencia. Dividir el tiempo y proporcionar un rol que requiera movilidad física focaliza constructivamente la necesidad de movimiento del estudiante con TDAH."
  },
  {
    id: 23,
    categoria: "Gestión del Aula",
    pregunta: "Durante la época de cosecha de mango en la parcela escolar, el docente descubre que varios estudiantes se comen los frutos o se los llevan a casa de manera clandestina, arruinando los datos de rendimiento por hectárea. ¿Cómo corregir esta situación formativamente?",
    opciones: [
      "Prohibir tajantemente el consumo y poner candados en toda la finca.",
      "Hacer un inventario contable junto con ellos, mostrando cómo el 'robo hormiga' destruye la rentabilidad de una empresa agraria y establecer una cuota permitida de consumo ético.",
      "Dejar que se los coman porque es comida y no importa.",
      "Reprobar automáticamente a todos los sospechosos."
    ],
    correcta: 1,
    explicacion: "La opción B transforma una falta disciplinaria en una valiosa lección de gestión de agronegocios y ética laboral, demostrando las consecuencias económicas directas que los desvíos tienen en el rendimiento empresarial."
  },
  {
    id: 24,
    categoria: "Evaluación",
    pregunta: "Al finalizar el sub-módulo de elaboración de mermeladas y conservas, el docente pide a los equipos que intercambien sus productos para analizar el color, el grado Brix (dulzor), la textura y la limpieza del envase de sus compañeros. ¿Qué proceso evaluativo está promoviendo?",
    opciones: [
      "Autoevaluación.",
      "Heteroevaluación estandarizada.",
      "Coevaluación técnica (evaluación entre pares) basada en estándares de control de calidad agroindustrial.",
      "Evaluación sumativa externa."
    ],
    correcta: 2,
    explicacion: "La opción C promueve la coevaluación con rigor técnico. Al evaluar a sus pares usando parámetros de control de calidad (grados Brix, colorimetría), los estudiantes internalizan las normas de la industria alimentaria."
  },
  {
    id: 25,
    categoria: "Planificación",
    pregunta: "Una sequía inesperada agota la reserva de agua de la cisterna de la escuela técnica, poniendo en peligro el proyecto de pepinos de los estudiantes de tercer año. ¿Qué adaptación de planificación es la más resiliente?",
    opciones: [
      "Suspender la unidad didáctica hasta que llueva.",
      "Implementar urgentemente un taller sobre diseño artesanal de riego por goteo usando botellas plásticas recicladas y técnicas de mulching (cobertura) para retener humedad.",
      "Regar con agua residual sin tratar, ignorando las normas de inocuidad.",
      "Solo darles charlas teóricas sobre la historia del clima."
    ],
    correcta: 1,
    explicacion: "La opción B es una solución adaptativa (Agroecología/Cambio Climático). Enseña a los futuros profesionales agrarios a enfrentar contingencias reales con soluciones tecnológicas de bajo costo y alto impacto."
  },
  {
    id: 26,
    categoria: "Metodología",
    pregunta: "Los estudiantes deben aprender a calibrar una mochila aspersora (bomba de fumigar), lo cual implica matemáticas (gasto, presión, velocidad). Muchos se confunden con las fórmulas. ¿Qué paso metodológico aclara este proceso?",
    opciones: [
      "Llenar la pizarra de fórmulas y no salir al patio hasta que las aprendan.",
      "Ir al patio, marcar un área de 100m², y usar la bomba con agua pura para medir el tiempo y volumen gastado físicamente, deduciendo la fórmula desde la práctica.",
      "Dejar de lado la calibración y solo echar el líquido hasta que se acabe.",
      "Usar exclusivamente un simulador en la computadora."
    ],
    correcta: 1,
    explicacion: "La opción B concreta un concepto abstracto. Integrar el conocimiento teórico (matemáticas) con la experiencia somática y visual (el uso de la bomba con agua) consolida el aprendizaje por competencias."
  },
  {
    id: 27,
    categoria: "Inclusión y Equidad",
    pregunta: "Un estudiante de Altas Capacidades (superdotado) asimila la instalación de sistemas de riego en una fracción del tiempo y comienza a aburrirse y desmotivar al resto por su exceso de velocidad. ¿Cómo integrar a este estudiante?",
    opciones: [
      "Darle permiso para ir a jugar en el patio mientras los demás terminan.",
      "Exigirle que repita lo mismo varias veces para que no moleste.",
      "Asignarle el diseño de una automatización básica para el riego (usando sensores de humedad o temporizadores) o el rol de auditor de presión de la red grupal.",
      "Sancionarlo por mostrar impaciencia con sus compañeros."
    ],
    correcta: 2,
    explicacion: "La opción C ofrece enriquecimiento curricular. Se aumenta el nivel de complejidad del reto (automatización, auditoría técnica) para canalizar su talento sin aislarlo del objetivo general del grupo."
  },
  {
    id: 28,
    categoria: "Gestión del Aula",
    pregunta: "En la cosecha de yuca (un trabajo muy físico), los varones apartan a las chicas argumentando que ellas 'no tienen fuerza para arrancar las raíces'. Las jóvenes quedan marginadas observando. ¿Qué intervención promueve la equidad de género en el aula técnica?",
    opciones: [
      "Darles la razón y mandar a las chicas a lavar las yucas a la pileta.",
      "Detener la cosecha, realizar un diálogo sobre la participación equitativa de la mujer en la agropecuaria y asignar roles mixtos donde técnicas como el aflojamiento previo del suelo reduzcan el esfuerzo físico bruto.",
      "Obligar a las chicas a arrancar las yucas más grandes para que demuestren fuerza.",
      "Poner a las chicas a competir contra los varones."
    ],
    correcta: 1,
    explicacion: "La opción B deconstruye estereotipos de género in situ. Promueve la ergonomía agrícola (usar técnica en vez de fuerza bruta) y asegura que las jóvenes adquieran las mismas competencias y confianza que sus compañeros."
  },
  {
    id: 29,
    categoria: "Evaluación",
    pregunta: "El docente quiere asegurarse de que los estudiantes utilicen correctamente los Equipos de Protección Personal (EPP: botas, mascarillas, guantes) en todas las clases, no solo cuando hay examen. ¿Qué estrategia evaluativa consolida este hábito?",
    opciones: [
      "Hacer un examen sorpresa de 10 preguntas sobre leyes laborales.",
      "Incluir el parámetro 'Uso correcto del EPP y medidas de bioseguridad' como un criterio de evaluación continua y obligatoria en todas las rúbricas de prácticas de campo.",
      "Recordarles verbalmente de vez en cuando.",
      "Sancionar a un estudiante para dar el ejemplo a los demás."
    ],
    correcta: 1,
    explicacion: "La opción B integra la seguridad laboral como una actitud y procedimiento constante (competencia transversal). Al estar en todas las rúbricas, el estudiante internaliza el EPP como parte integral de su trabajo y no como una teoría."
  },
  {
    id: 30,
    categoria: "Planificación",
    pregunta: "El programa indica enseñar 'Fotosíntesis y respiración vegetal'. El docente de Agropecuaria sabe que esto ya lo ven en Ciencias de la Naturaleza (Biología). ¿Cómo debe abordar el tema para no ser repetitivo y darle valor profesional?",
    opciones: [
      "Omitir el tema por completo porque ya se dio en otra materia.",
      "Enseñar la fotosíntesis pura y abstracta repitiendo el currículo general.",
      "Enfocar el tema hacia el 'manejo agronómico': cómo las distancias de siembra, la poda para entrada de luz y el estrés hídrico afectan la tasa fotosintética y el rendimiento en toneladas de un cultivo.",
      "Poner a los estudiantes a debatir qué materia es más importante."
    ],
    correcta: 2,
    explicacion: "La opción C aplica el conocimiento científico a la tecnología agraria. Transforma un concepto básico en una variable productiva que el técnico agrícola debe manejar para tomar decisiones gerenciales sobre el cultivo."
  },
  {
    id: 31,
    categoria: "Metodología",
    pregunta: "Para estudiar la anatomía del sistema digestivo de los rumiantes (vaca, chivo), el docente asigna que investiguen y vean videos en casa (Flipped Classroom). Al llegar al aula-laboratorio, ¿cuál debe ser la actividad principal?",
    opciones: [
      "El docente vuelve a explicar los videos con diapositivas por dos horas.",
      "Hacer un examen escrito de inmediato y no hacer nada más.",
      "Someter los conocimientos a prueba mediante la disección guiada de un tracto digestivo de rumiante (conseguido en carnicería) o armando maquetas funcionales.",
      "Que los estudiantes expongan con cartulinas los videos que vieron."
    ],
    correcta: 2,
    explicacion: "La opción C capitaliza el Aula Invertida. Como el conocimiento pasivo (teoría) se adquirió en casa, el valioso tiempo de taller se invierte en aprendizaje activo y transferencia práctica (disección o modelado)."
  },
  {
    id: 32,
    categoria: "Inclusión y Equidad",
    pregunta: "Durante la cosecha y clasificación post-cosecha de tomates, el docente nota que un estudiante mezcla constantemente tomates verdes inmaduros con los rojos maduros, y se da cuenta de que el estudiante tiene daltonismo. ¿Qué ajuste asegura su buen desempeño técnico?",
    opciones: [
      "Quitarlo del área de post-cosecha porque no sirve para clasificar.",
      "Hacer que sus compañeros clasifiquen y él solo cargue las cajas.",
      "Enseñarle a clasificar la madurez basándose en la firmeza al tacto, el aroma y los indicadores de madurez fisiológica (como el estado de la cicatriz floral), usando múltiples sentidos.",
      "Exigirle que se esfuerce más en ver los colores correctos."
    ],
    correcta: 2,
    explicacion: "La opción C aplica el Diseño Universal para el Aprendizaje aprovechando los sentidos alternativos. Permite al estudiante realizar el control de calidad con parámetros táctiles y olfativos profesionales, manteniéndolo plenamente involucrado."
  },
  {
    id: 33,
    categoria: "Gestión del Aula",
    pregunta: "Los estudiantes tienen la mala costumbre de saltarse los pediluvios (piscinas desinfectantes para zapatos) al entrar a la granja avícola, porque les molesta mojarse las botas. ¿Cuál es el manejo correcto de esta situación?",
    opciones: [
      "Poner un guardia en la puerta para forzarlos.",
      "Cerrar la granja por una semana como castigo colectivo.",
      "Impartir un caso de estudio sobre las pérdidas millonarias causadas por bioseguridad laxcsa (como la gripe aviar o fiebre porcina) y hacer que firmen un compromiso de bioseguridad del técnico agropecuario.",
      "Rellenar los pediluvios con agua sin desinfectante para que no se quejen."
    ],
    correcta: 2,
    explicacion: "La opción C utiliza la concientización basada en impactos económicos reales de la industria. Formar el criterio ético y la responsabilidad sanitaria del técnico es superior y más duradero que la simple vigilancia coercitiva."
  },
  {
    id: 34,
    categoria: "Evaluación",
    pregunta: "Un estudiante calcula mal la formulación de una ración de concentrado para cerdos usando el Cuadrado de Pearson (le queda baja en proteínas). El docente le entrega el examen con un 'X' y le dice 'Estudia más'. ¿Qué principio de evaluación formativa falló?",
    opciones: [
      "Falló en usar una rúbrica sumativa en vez de un examen.",
      "Falló la retroalimentación cualitativa (Feedback). El docente debió señalar exactamente dónde se equivocó en el cruce del cálculo y cómo eso afectaría el crecimiento del cerdo, indicando cómo corregirlo.",
      "Falló en que debió haberle puesto la calificación en público.",
      "No falló nada, en las matemáticas la respuesta es correcta o incorrecta."
    ],
    correcta: 1,
    explicacion: "La opción B describe el deber de una retroalimentación efectiva. En la agropecuaria, los errores de cálculo pueden ser mortales para los animales o costosos. La corrección debe ser un andamiaje que explique las consecuencias técnicas y cómo solucionarlo."
  },
  {
    id: 35,
    categoria: "Planificación",
    pregunta: "El docente tenía planificada una importante salida técnica a un ingenio azucarero comercial para observar maquinaria pesada, pero la dirección suspende el autobús a última hora. ¿Qué alternativa salva los resultados de aprendizaje?",
    opciones: [
      "Dejar a los estudiantes en hora libre.",
      "Dar la clase leyendo el capítulo del libro sobre caña de azúcar.",
      "Organizar un recorrido virtual utilizando videos 360°, Google Earth o contactar al agrónomo del ingenio para que les dé un tour interactivo en vivo vía videollamada desde el campo.",
      "Hacerles un examen sobre un tema que ya hayan visto para hacer tiempo."
    ],
    correcta: 2,
    explicacion: "La opción C incorpora la competencia digital docente (TIC). Las visitas virtuales guiadas e interacciones telemáticas con profesionales del sector salvan las distancias y mantienen el estándar técnico y la motivación frente a imprevistos logísticos."
  },
  {
    id: 36,
    categoria: "Metodología",
    pregunta: "En las prácticas de finca, los estudiantes hacen el trabajo mecánicamente (ej. tirar semillas) pero no analizan el 'porqué'. ¿Qué herramienta metodológica promueve la reflexión y la metacognición en la agricultura?",
    opciones: [
      "El examen de fin de mes.",
      "El dictado diario de lo que deben hacer.",
      "La exigencia de documentar una Bitácora o Diario de Campo Técnico al final del día, donde anoten parámetros, observaciones del clima y la razón agronómica detrás de las decisiones tomadas hoy.",
      "Hacer que se memoricen el nombre científico de las plantas."
    ],
    correcta: 2,
    explicacion: "La opción C describe el uso metacognitivo de la bitácora técnica. Transforma la labor mecánica del campo en una reflexión profesional, desarrollando el juicio experto y la capacidad de registro requerida en perfiles agronómicos."
  },
  {
    id: 37,
    categoria: "Inclusión y Equidad",
    pregunta: "Un estudiante mayor (sobreedad) proviene de una zona rural y tiene mucha experiencia práctica empírica (sabe manejar la tierra), pero rechaza la teoría en el aula diciendo 'mi abuelo no necesitaba estos libros'. ¿Cómo integrar a este estudiante?",
    opciones: [
      "Enfrentarlo frente a la clase para demostrar que la ciencia siempre tiene la razón.",
      "Ignorarlo y dejar que repruebe la teoría.",
      "Reconocer públicamente sus saberes empíricos, asignarle el rol de 'Líder de parcela' y desafiarlo a contrastar sus técnicas tradicionales con parámetros científicos modernos de rendimiento e inocuidad.",
      "Exigirle que se calle en clase y solo hable cuando se le pregunte."
    ],
    correcta: 2,
    explicacion: "La opción C valida el conocimiento previo (andragogía e interculturalidad). Empoderar al estudiante al conectar la tradición agrícola con la innovación técnica lo convierte en un puente colaborativo para toda la clase en lugar de una resistencia."
  },
  {
    id: 38,
    categoria: "Gestión del Aula",
    pregunta: "Al finalizar la práctica de aplicación foliar, el docente descubre los frascos vacíos de agroquímicos tirados en los linderos del patio, un grave riesgo de contaminación cruzada. ¿Cómo debe proceder el docente técnico?",
    opciones: [
      "Recogerlos él mismo rápidamente antes de que el director los vea.",
      "Culpar al curso entero y no volver a usar agroquímicos en el año.",
      "Convocar de inmediato al grupo, establecer el protocolo de 'Triple Lavado' y perforación de envases vacíos (Norma FAO) como una práctica obligatoria supervisada en la limpieza final de cada taller.",
      "Dejar que el conserje los recoja al día siguiente."
    ],
    correcta: 2,
    explicacion: "La opción C aprovecha un grave incidente de seguridad ambiental para institucionalizar protocolos de manejo de desechos tóxicos (Triple Lavado). Esto convierte el error en una práctica sistemática y rigurosa de protección ambiental agraria."
  },
  {
    id: 39,
    categoria: "Evaluación",
    pregunta: "Para evaluar la competencia 'Identificar insumos agrícolas', el docente diseña una estación práctica (gymkana técnica) donde hay semillas, fertilizantes granulados y forrajes sin etiquetas, y cada estudiante debe identificarlos y clasificarlos en 1 minuto. ¿A qué tipo de evaluación corresponde?",
    opciones: [
      "Prueba escrita tradicional.",
      "Prueba de desempeño o ejecución estandarizada (Prueba objetiva de reconocimiento práctico).",
      "Evaluación sociométrica.",
      "Autoevaluación de conocimientos."
    ],
    correcta: 1,
    explicacion: "La opción B (prueba de desempeño práctico/identificación in situ) simula las condiciones de reconocimiento rápido que un técnico en agropecuaria necesitará en un almacén de insumos, evaluando agudeza visual, táctil y de conocimiento técnico."
  },
  {
    id: 40,
    categoria: "Planificación",
    pregunta: "Al inicio del semestre, el docente de Operaciones Agropecuarias invita a los estudiantes a recorrer toda la instalación escolar (aulas, almacenes de colines, área de animales, lagunas) para elaborar juntos un 'Mapa de Riesgos Agropecuarios'. ¿Cuál es el propósito pedagógico de esta actividad inicial?",
    opciones: [
      "Hacer tiempo mientras se organizan las clases teóricas.",
      "Que los estudiantes memoricen las rutas de escape en caso de terremotos.",
      "Desarrollar desde el día uno la competencia de evaluación preventiva de riesgos laborales agropecuarios (accidentes con máquinas, mordeduras, caídas) creando sentido de pertenencia y corresponsabilidad.",
      "Asustar a los estudiantes sobre los peligros de estudiar una carrera agrícola."
    ],
    correcta: 2,
    explicacion: "La opción C aborda la seguridad como pilar formativo. Involucrar a los alumnos en el diagnóstico espacial de su área técnica fomenta la autonomía y la conciencia crítica sobre salud ocupacional antes de iniciar cualquier manipulación de riesgo."
  }
];