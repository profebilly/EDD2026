// ============================================================
//  SimulaDocente — Banco de Preguntas (Examen Filtrado)
//  40 preguntas extraídas del PDF oficial
// ============================================================

const preguntas = [

  {
    id: 1,
    categoria: "Planificación",
    pregunta: "El docente trabaja en un contexto en el que el acceso a internet es limitado y la mayoría del estudiantado no dispone de dispositivos tecnológicos en el hogar. Algunas actividades propuestas suponen trabajo en línea fuera del aula. El docente busca asegurar la continuidad del aprendizaje sin generar brechas debido a las condiciones socioeconómicas. ¿Qué estrategia de planificación permitiría ajustar las actividades a estas condiciones y garantizar oportunidades de aprendizaje equitativas?",
    opciones: [
      "Mantener el uso exclusivo de herramientas digitales en la planificación, sin considerar las limitaciones de acceso de los estudiantes.",
      "Reducir los contenidos del currículo para no exigir demasiado a los estudiantes en un entorno con pocos recursos.",
      "Esperar a que las condiciones tecnológicas de la comunidad mejoren antes de implementar ajustes en la planificación.",
      "Diseñar actividades que aprovechen los recursos disponibles en la comunidad, como aprendizajes basados en proyectos con materiales físicos, observaciones directas y trabajo colaborativo."
    ],
    correcta: 3,
    explicacion: "La opción D responde de manera pertinente al contexto real del estudiantado, garantizando la continuidad del aprendizaje sin depender del acceso a internet y promoviendo un enfoque por competencias con estrategias activas y contextualizadas."
  },

  {
    id: 2,
    categoria: "Evaluación",
    pregunta: "Al finalizar una unidad de Lengua Española, el docente quiere identificar en qué medida los estudiantes han logrado los aprendizajes esperados en comprensión lectora y producción escrita. Le interesa contar con evidencias del nivel alcanzado para retroalimentar al grupo, ajustar la enseñanza posterior y comunicar avances, sin que la evaluación se limite a la memorización de contenidos. ¿Qué tipo de evaluación le brindaría información más pertinente sobre los conocimientos y habilidades adquiridos por sus estudiantes al cierre del tema?",
    opciones: [
      "Evaluación sumativa, ya que busca medir el rendimiento final de los estudiantes y asignar calificaciones.",
      "Evaluación diagnóstica, le permite ver lo que saben los estudiantes del tema a continuación y de allí puede tener claro lo que aprendieron del anterior.",
      "Ninguna evaluación es necesaria al finalizar un tema, el docente debe esperar al momento de realizar la evaluación de fin de período.",
      "Evaluación formativa, ya que se aplica durante todo el proceso de aprendizaje."
    ],
    correcta: 0,
    explicacion: "La evaluación sumativa es la más adecuada porque se aplica al finalizar una unidad y permite verificar el nivel de logro de los aprendizajes esperados, proporcionando evidencias claras para retroalimentar, comunicar avances y ajustar la enseñanza posterior."
  },

  {
    id: 3,
    categoria: "Metodología",
    pregunta: "Un docente de primaria necesita diseñar una actividad de cierre del primer período que evidencie los aprendizajes logrados por sus estudiantes. Busca una estrategia que no se limite a la repetición de contenidos, sino que permita observar la aplicación de saberes en situaciones significativas, la integración de conocimientos, habilidades y actitudes, y el desempeño en contextos cercanos a la realidad del estudiantado. ¿Qué estrategia metodológica resultaría más adecuada para evidenciar aprendizajes de manera auténtica y alineada con el enfoque por competencias?",
    opciones: [
      "Pedir a los estudiantes que se organicen en grupos, sortear el área que trabajará cada uno y entregarles una pauta de trabajo que cada grupo deberá preparar de forma independiente para presentar.",
      "Plantear la idea a los estudiantes, invitándolos a integrarse al grupo de acuerdo al área de su preferencia y preparar una exposición que incluya material audiovisual.",
      "Organizar grupos de estudiantes por asignatura para que preparen una exposición de sus aprendizajes durante el período.",
      "Implementar un proyecto en el que, con la participación de los estudiantes, se definan roles, responsabilidades y se tomen decisiones sobre los contenidos a presentar y la forma en que se hará."
    ],
    correcta: 3,
    explicacion: "La opción D permite una evaluación auténtica basada en el enfoque por competencias, donde el estudiante no solo reproduce contenidos, sino que los aplica en situaciones significativas, integra conocimientos, habilidades y actitudes, y promueve la toma de decisiones y el trabajo colaborativo."
  },

  {
    id: 4,
    categoria: "Inclusión y Equidad",
    pregunta: "En sexto grado, algunos estudiantes tienen acceso a dispositivos en casa y otros no. El docente quiere evitar que las tareas tecnológicas amplíen las brechas de aprendizaje y asegurar que todos se beneficien del uso de las TIC en el aula. ¿Cómo puede el docente organizar el uso de la tecnología para garantizar condiciones de equidad en el aprendizaje de todo el grupo?",
    opciones: [
      "Depender completamente de los dispositivos personales de los estudiantes, sin considerar la brecha digital existente en el grupo.",
      "Utilizar principalmente plataformas en línea para todas las actividades, sin ofrecer alternativas para quienes no tienen acceso a tecnología en casa.",
      "Diseñar actividades que combinen recursos digitales y analógicos, permitiendo que todos los estudiantes participen sin importar sus recursos personales.",
      "Excluir la tecnología del aula para evitar desigualdades, enfocándose solo en métodos tradicionales de enseñanza."
    ],
    correcta: 2,
    explicacion: "La opción C promueve la equidad educativa reconociendo que no todos los estudiantes tienen las mismas condiciones de acceso. Al combinar recursos digitales y analógicos, el docente garantiza que todos puedan participar y aprender, evitando que la tecnología amplíe las desigualdades."
  },

  {
    id: 5,
    categoria: "Planificación",
    pregunta: "Durante el desarrollo de una unidad, el docente observa que algunos estudiantes comprenden rápidamente los contenidos y exigen mayores desafíos, mientras que otros requieren más tiempo, apoyos concretos y andamiaje para avanzar. Mantener una única secuencia y ritmo de trabajo ha generado desmotivación en ambos grupos. ¿Cómo debería ajustar la planificación para atender la diversidad de ritmos y promover aprendizajes significativos para todo el grupo?",
    opciones: [
      "Ajustar la planificación reduciendo el nivel de complejidad de los contenidos para todo el grupo, con el fin de sostener un ritmo común de avance, aun cuando se limite la profundidad de los aprendizajes.",
      "Ajustar la planificación condicionando el avance de la unidad a que todo el grupo alcance el mismo nivel de logro, incorporando apoyos diferenciados de manera puntual para quienes presentan mayores dificultades.",
      "Ajustar la planificación incorporando itinerarios de trabajo con niveles de desafío diferenciados, tiempos flexibles y apoyos graduados, para atender necesidades diversas sin frenar el avance del grupo.",
      "Ajustar la planificación manteniendo el ritmo de trabajo del grupo que progresa con mayor rapidez y esperando que el resto se adapte gradualmente, sin introducir cambios sustantivos en las actividades."
    ],
    correcta: 2,
    explicacion: "La opción C responde al enfoque de atención a la diversidad, proponiendo una enseñanza diferenciada donde se ajustan los niveles de dificultad, los tiempos y los apoyos según las necesidades de los estudiantes, manteniendo la motivación de todos."
  },

  {
    id: 6,
    categoria: "Gestión del Aula",
    pregunta: "Durante un proyecto grupal, dos estudiantes entran en desacuerdos frecuentes sobre cómo organizar las tareas y quién debe asumir determinadas responsabilidades. La tensión ha comenzado a afectar al resto del equipo, que se muestra incómodo y ha reducido su nivel de participación. El docente advierte que, si no se interviene oportunamente, el conflicto podría escalar y afectar tanto el clima del aula como los aprendizajes del grupo. ¿Cómo debería intervenir el docente para promover la convivencia y la corresponsabilidad, y restablecer la productividad del equipo?",
    opciones: [
      "Intervenir como mediador, solicitando apoyo al orientador o psicólogo del centro para que le provea estrategias de resolución de conflictos y así finalizar la situación y retomar la clase.",
      "Intervenir como mediador, ayudando a los estudiantes a comunicarse de manera efectiva y a negociar una solución en la que ambos se sientan escuchados y valorados.",
      "Permitir que los estudiantes resuelvan el conflicto por sí solos, evitando cualquier intervención docente para no interrumpir la dinámica grupal.",
      "Asignar una práctica a ambos estudiantes involucrados en el conflicto, con el fin de mantener el orden y prevenir futuras discusiones."
    ],
    correcta: 1,
    explicacion: "La opción B promueve una intervención pedagógica adecuada basada en la mediación y la educación socioemocional. El docente facilita el diálogo, fortalece habilidades de comunicación, fomenta la empatía y ayuda a construir acuerdos que benefician al grupo."
  },

  {
    id: 7,
    categoria: "Evaluación",
    pregunta: "Luego de evaluar el desempeño en matemáticas, el docente debe informar a las familias y a los propios estudiantes sobre el progreso en relación con los indicadores de logro. Busca una forma de comunicar los resultados que no se limite a una nota numérica, sino que sea comprensible, accesible para distintos niveles de escolaridad de las familias y útil para acompañar el aprendizaje en casa. ¿Cuál sería la manera más pertinente de comunicar el progreso, promoviendo la mejora continua y la corresponsabilidad entre la escuela, la familia y el estudiante?",
    opciones: [
      "Entregar solo una calificación numérica en un informe, proporcionando detalles sobre los indicadores de logro alcanzados o las oportunidades de mejora al final del año.",
      "Organizar reuniones individuales o grupales con los padres y estudiantes, explicando el progreso con base en evidencia, fortalezas y áreas de mejora, así como sugerencias para continuar avanzando.",
      "Informar principalmente a los padres, sin involucrar a los estudiantes en el proceso de evaluación.",
      "Realizar encuentros con los estudiantes para comentar de forma general su desempeño, sin involucrar a los padres."
    ],
    correcta: 1,
    explicacion: "La opción B promueve una evaluación formativa y participativa donde se involucra tanto a la familia como al estudiante. Ofrece información clara, basada en evidencias, destacando fortalezas y áreas de mejora con orientaciones prácticas, favoreciendo la corresponsabilidad y la mejora continua."
  },

  {
    id: 8,
    categoria: "Inclusión y Equidad",
    pregunta: "En un aula de primaria de jornada extendida, el docente atiende a estudiantes con discapacidad visual y a otros con dificultades de lectura. La mayoría de los materiales están en formato impreso con letra pequeña y se utilizan frecuentemente consignas escritas en la pizarra. El docente quiere ajustar su planificación para garantizar que todos los estudiantes puedan acceder al contenido, participar activamente y demostrar sus aprendizajes en condiciones de equidad. ¿Qué ajustes en la planificación y en los recursos favorecerían un aprendizaje inclusivo y accesible para todo el grupo?",
    opciones: [
      "Ajustar la planificación incorporando materiales accesibles y apoyos multimodales, y adaptando las estrategias para garantizar la participación y el acceso equitativo de todo el grupo.",
      "Ajustar la planificación asignando a los estudiantes con dificultades tareas simplificadas de forma paralela, e integrarlos plenamente en las actividades comunes del aula.",
      "Ajustar la planificación manteniendo los materiales impresos y las consignas en la pizarra sin modificaciones, a la espera de que el estudiantado se adapte progresivamente.",
      "Ajustar la planificación exigiendo el uso de los mismos materiales para todo el grupo, hacer adaptaciones cuando sea necesario para promover autonomía."
    ],
    correcta: 0,
    explicacion: "La opción A responde a los principios de la educación inclusiva y el Diseño Universal para el Aprendizaje (DUA). Propone el uso de materiales accesibles y apoyos multimodales, asegurando que todos los estudiantes puedan acceder, participar y demostrar sus aprendizajes en igualdad de condiciones."
  },

  {
    id: 9,
    categoria: "Gestión del Aula",
    pregunta: "Durante una actividad en parejas para resolver una tarea, el docente observa que uno de los estudiantes se desentiende del proceso, permanece pasivo y deja que su compañero asuma la mayor parte del trabajo. Aunque el producto final se completa, no se evidencian aprendizajes compartidos ni corresponsabilidad en el proceso. El docente busca una intervención que promueva la implicación activa de ambos estudiantes y el aprendizaje colaborativo genuino. ¿Qué acción pedagógica permitiría fortalecer el compromiso, la responsabilidad compartida y la participación equitativa de ambos integrantes de la pareja?",
    opciones: [
      "Solicitar que el estudiante más activo modele el procedimiento para su compañero y complete las partes más complejas de la tarea, mientras el otro observa y al final replica.",
      "Mantener la dinámica de trabajo en parejas y recordar las normas de participación en el grupo, reforzando la importancia del respeto mutuo y del cumplimiento de la tarea.",
      "Establecer roles con responsabilidades claras, monitorear el proceso y promover breves instancias de metacognición y coevaluación para equilibrar la participación durante la tarea.",
      "Reasignar la pareja para evitar el desbalance observado y pedir que cada estudiante entregue una parte individual del producto final."
    ],
    correcta: 2,
    explicacion: "La opción C promueve un aprendizaje colaborativo estructurado, donde cada estudiante tiene un rol definido y responsabilidades claras. El monitoreo docente y las instancias de metacognición y coevaluación aseguran que ambos reflexionen sobre su contribución y regulen su participación."
  },

  {
    id: 10,
    categoria: "Planificación",
    pregunta: "Al planificar una unidad sobre fracciones, el docente reconoce que el grupo ya ha trabajado en años anteriores nociones como mitades y tercios en contextos cotidianos. Al iniciar la nueva unidad, detecta que algunos estudiantes recuerdan procedimientos de forma mecánica, mientras que otros no relacionan las fracciones con representaciones gráficas ni con situaciones reales de reparto. El docente busca una progresión que conecte los saberes previos con nuevas nociones (equivalencias, representación en recta numérica, comparación de fracciones) sin generar rupturas en el aprendizaje. ¿Qué estrategia permitiría continuar la secuencia de aprendizaje de manera progresiva, articulada y con sentido para todo el grupo?",
    opciones: [
      "Mantenerse en la enseñanza de mitades y tercios sin introducir nuevos conceptos, para asegurar que los estudiantes no se sientan abrumados.",
      "Diseñar actividades progresivas que inicien con la revisión de fracciones simples y avancen hacia operaciones con fracciones, contextualizando el aprendizaje en situaciones del mundo real.",
      "Diseñar actividades donde se enseñen los conceptos alternando entre fracciones y otros temas para hacer la clase más dinámica.",
      "Iniciar directamente con problemas de fracciones mixtas y equivalentes, ya que los estudiantes recordarán los conocimientos previos sin necesidad de repaso."
    ],
    correcta: 1,
    explicacion: "La opción B plantea una progresión didáctica adecuada, partiendo de los conocimientos previos (mitades, tercios) y avanzando gradualmente hacia conceptos más complejos. Incorpora contextos reales, facilitando la comprensión significativa y la conexión entre lo concreto, lo gráfico y lo abstracto."
  },

  {
    id: 11,
    categoria: "Metodología",
    pregunta: "Durante una clase de geografía, un estudiante presenta dificultades para diferenciar los conceptos de meridianos, paralelos y husos horarios. Tiende a memorizar las definiciones, pero no logra explicar su función ni utilizarlas para ubicar lugares en el mapa ni interpretar diferencias horarias entre países. Además, confunde los términos al trabajar con planisferios o globos terráqueos, lo que limita la transferencia de lo aprendido a situaciones prácticas. ¿Cómo podría el docente apoyar la construcción de significado de estos conceptos y su uso funcional en actividades de ubicación espacial y comprensión del tiempo geográfico?",
    opciones: [
      "Trabajar los conceptos usando ejemplos puntuales del Ecuador y del meridiano de Greenwich para ubicar lugares en el mapa y profundizar en la función de los términos.",
      "Realizar correcciones inmediatas cada vez que confunda los términos, repitiendo las definiciones para reforzar su memorización y el uso correcto del vocabulario.",
      "Solicitar que consulte los términos en el diccionario y elabore un pequeño glosario personal para tener las definiciones a mano cuando surjan dudas.",
      "Explicar los términos con apoyo del mapa, globos terráqueos y otros recursos visuales, promoviendo actividades de ubicación y comparación para que comprendan su significado, uso y función."
    ],
    correcta: 3,
    explicacion: "La opción D promueve un aprendizaje significativo y funcional, superando la memorización. El uso de recursos visuales y manipulativos (mapas, globos) junto con actividades prácticas permite comprender, relacionar y aplicar los conceptos en situaciones reales, favoreciendo la transferencia del conocimiento."
  },

  {
    id: 12,
    categoria: "Metodología",
    pregunta: "En una secuencia de lectura comprensiva, el docente propone que el estudiantado identifique ideas primarias, ideas secundarias y conectores en textos breves. Sin embargo, observa que muchos estudiantes subrayan frases al azar, confunden ejemplos con las ideas principales y no reconocen la función de los conectores en la organización del texto. Aunque leen con fluidez, les cuesta explicar por qué una idea es central o cómo los conectores articulan el sentido global del texto. ¿Qué acción pedagógica concreta permitiría al docente aclarar estos conceptos y guiar a los estudiantes para identificar con mayor precisión lo solicitado en los textos?",
    opciones: [
      "Pedir que busquen ejemplos en el libro y traten de replicarlos con el texto proporcionado, promoviendo que se organicen de manera autónoma.",
      "Leer en conjunto las definiciones del libro con los estudiantes, aclarar dudas generales y pedirles que realicen la actividad de forma individual.",
      "Solicitar a un estudiante voluntario que modele en la pizarra el procedimiento, mientras el resto del grupo observa y luego intenta aplicar lo explicado.",
      "Modelar con un texto en la pizarra o proyectado, leer y comentar en conjunto, señalar las partes indicadas, permitir equivocaciones y ofrecer retroalimentación, luego pedir que cada quien trabaje de forma individual y comparta."
    ],
    correcta: 3,
    explicacion: "La opción D utiliza la estrategia de modelado docente y práctica guiada, fundamental para enseñar habilidades de comprensión lectora. El docente hace visible el proceso, aclara conceptos en contexto, y brinda retroalimentación inmediata, ayudando a comprender el 'cómo y por qué'."
  },

  {
    id: 13,
    categoria: "Evaluación",
    pregunta: "Al aplicar una evaluación diagnóstica al inicio de una unidad, el docente identifica que la mayoría del grupo presenta vacíos en conceptos previos esenciales para abordar los nuevos contenidos. Continuar con la planificación original implicaría avanzar sin bases sólidas, lo que podría profundizar las dificultades. El docente busca una respuesta pedagógica que atienda estas brechas sin perder de vista los aprendizajes esperados del grado. ¿Qué decisión de planificación resultaría más adecuada ante estos resultados diagnósticos?",
    opciones: [
      "Seguir con la planificación original sin hacer ajustes, esperando que los estudiantes superen sus dificultades con el tiempo.",
      "Modificar la planificación inicial para incluir actividades de refuerzo sobre los conceptos previos antes de avanzar con el contenido nuevo.",
      "Omitir la enseñanza de los conceptos previos y centrarse solo en los contenidos nuevos, ya que están programados en el currículo.",
      "Repetir la evaluación hasta que los estudiantes obtengan mejores resultados sin modificar la planificación."
    ],
    correcta: 1,
    explicacion: "La opción B responde adecuadamente al propósito de la evaluación diagnóstica: identificar conocimientos previos y ajustar la enseñanza. Al integrar actividades de refuerzo, el docente asegura que los estudiantes cuenten con las bases necesarias para comprender los nuevos contenidos."
  },

  {
    id: 14,
    categoria: "Evaluación",
    pregunta: "Tras implementar el Aprendizaje Basado en Proyectos (ABP) en la clase de ciencias, el docente desea determinar si la estrategia ha sido efectiva. Observa productos finales variados, pero le interesa valorar no solo el resultado, sino también los procesos de investigación, la colaboración, la aplicación de conocimientos científicos y el desarrollo de competencias como la resolución de problemas y la comunicación. ¿Qué enfoque de evaluación permitiría valorar de manera más pertinente la efectividad del ABP en términos de aprendizajes y desarrollo de competencias?",
    opciones: [
      "Implementar una evaluación auténtica que integre evidencias de proceso y de producto, alineadas con las competencias, con retroalimentación durante el proyecto.",
      "Aplicar una prueba escrita estandarizada al finalizar el proyecto para comparar resultados entre estudiantes.",
      "Solicitar informes individuales al cierre del proyecto para verificar la comprensión de conceptos, dejando la valoración del trabajo en equipo como un criterio secundario.",
      "Valorar principalmente el producto final del proyecto con una rúbrica de presentación, priorizando la calidad del informe o maqueta."
    ],
    correcta: 0,
    explicacion: "La opción A es la más pertinente porque el ABP requiere una evaluación auténtica e integral que no solo considere el producto final, sino también el proceso: investigación, colaboración, aplicación del conocimiento y resolución de problemas. La retroalimentación continua mejora el aprendizaje."
  },

  {
    id: 15,
    categoria: "Desarrollo Profesional",
    pregunta: "Un estudiante presenta dificultades persistentes de aprendizaje y problemas de integración social. El docente reconoce que la situación supera el abordaje exclusivo del aula y requiere una intervención articulada con otros actores de la comunidad educativa. ¿Qué estrategia de trabajo colaborativo con la comunidad educativa permitiría brindar un apoyo integral al estudiante?",
    opciones: [
      "Establecer comunicación con la familia para recoger información contextual y conocer las estrategias implementadas previamente, integrando estos insumos en la toma de decisiones pedagógicas dentro del aula.",
      "Remitir formalmente la situación al equipo de orientación y a la dirección del centro, activando los protocolos institucionales correspondientes y delegando en instancias especializadas.",
      "Desarrollar estrategias de intervención pedagógica inicial en el aula, documentando evidencias de avance y, de persistir las dificultades, gestionar la derivación al equipo de orientación.",
      "Coordinar intercambios con el equipo de orientación, la familia y docentes vinculados al estudiante, a fin de acordar estrategias compartidas que favorezcan su desempeño académico y su participación."
    ],
    correcta: 3,
    explicacion: "La opción D propone un enfoque de trabajo colaborativo integral donde participan todos los actores clave: docente, familia, equipo de orientación y otros docentes. Esto permite analizar la situación desde múltiples perspectivas y diseñar estrategias coherentes, promoviendo la corresponsabilidad."
  },

  {
    id: 16,
    categoria: "Metodología",
    pregunta: "Durante la secuencia didáctica sobre relaciones de cantidad y comparación de números, el docente observa que un grupo de estudiantes logra identificar los resultados cuando se presentan ejercicios simbólicos, mientras que otros muestran confusión, se frustran con facilidad y tienden a memorizar procedimientos sin comprender el significado. Además, se evidencian diferencias en el ritmo de trabajo, en la capacidad de explicar con palabras lo que hacen y en la transferencia de lo aprendido a situaciones cotidianas. ¿Cuál de las siguientes estrategias permitiría atender esta diversidad y favorecer la comprensión significativa de los conceptos matemáticos?",
    opciones: [
      "Implementar evaluaciones periódicas de carácter formativo para identificar brechas de aprendizaje y asignar actividades de refuerzo focalizadas, manteniendo el enfoque metodológico inicial.",
      "Diseñar secuencias de trabajo en papel y lápiz que integren esquemas, pictogramas y el uso ocasional de material manipulativo, con ejercicios graduados que refuercen la práctica de procedimientos.",
      "Presentar explicaciones orales estructuradas, apoyadas en organizadores visuales y ejemplos modelados por el docente, promoviendo la repetición guiada de los procedimientos.",
      "Integrar de manera planificada materiales concretos, recursos digitales interactivos y entornos de simulación que permitan explorar, representar y manipular los conceptos matemáticos en múltiples registros con retroalimentación durante el proceso."
    ],
    correcta: 3,
    explicacion: "La opción D responde a un enfoque de enseñanza basado en la comprensión significativa y atención a la diversidad, integrando múltiples representaciones (concreta, pictórica, simbólica y digital), permitiendo que los estudiantes exploren y comprendan en lugar de memorizar."
  },

  {
    id: 17,
    categoria: "Inclusión y Equidad",
    pregunta: "Con el propósito de ampliar el acceso a la información, un docente incorpora recursos digitales (presentaciones, videos, actividades interactivas) en el aula. Sin embargo, observa que algunos estudiantes presentan barreras para acceder a los contenidos debido a diferencias en habilidades digitales, necesidades educativas específicas o limitaciones en los formatos de los materiales. El docente desea asegurarse de que la tecnología no genere nuevas exclusiones. ¿Cuál de las siguientes estrategias permitiría garantizar una accesibilidad plena y equitativa al contenido para todo el estudiantado?",
    opciones: [
      "Utilizar dispositivos electrónicos personales de quienes los tienen para acceder a recursos digitales y organizar pares académicos con quienes no los poseen para que compartan los materiales.",
      "Integrar plataformas digitales interactivas y algunos materiales adaptados, manteniendo como base la misma planificación digital para todo el grupo.",
      "Utilizar plataformas digitales interactivas, audiolibros y materiales adaptados a diferentes estilos de aprendizaje, combinándolos con alternativas no digitales para garantizar el acceso equitativo a la información.",
      "Priorizar libros impresos y explicaciones orales como estrategia principal, incorporando tecnología solo cuando esté disponible para no generar desigualdades de acceso."
    ],
    correcta: 2,
    explicacion: "La opción C responde a un enfoque de educación inclusiva y accesibilidad universal, integrando múltiples formatos (digital, auditivo, visual, impreso) y atendiendo distintos estilos, necesidades y condiciones de acceso, alineándose con el Diseño Universal para el Aprendizaje (DUA)."
  },

  {
    id: 18,
    categoria: "Metodología",
    pregunta: "Un docente desea fortalecer los aprendizajes mediante la incorporación de metodologías innovadoras en su práctica. Sin embargo, su grupo presenta diversidad en ritmos de aprendizaje, niveles de autonomía y acceso a recursos, y el contexto de la escuela plantea restricciones de tiempo y conectividad. Además, los contenidos a trabajar combinan saberes conceptuales, procedimentales y actitudinales. El docente busca un enfoque que no solo sea novedoso, sino también pedagógicamente pertinente y contextualizado. ¿Qué criterios y procesos de selección permitirían elegir el enfoque metodológico más adecuado para este grupo y contexto educativo?",
    opciones: [
      "Utilizar exclusivamente métodos expositivos tradicionales, incorporando actividades activas que favorezcan la participación de los estudiantes.",
      "Seleccionar estrategias metodológicas solo en función de la disponibilidad de materiales y tiempo, sin considerar las diferencias del grupo.",
      "Enfocarse en cubrir el contenido curricular, priorizando la memorización de información y el desarrollo de habilidades prácticas.",
      "Analizar las características de los estudiantes, sus estilos de aprendizaje y el contexto educativo, eligiendo estrategias activas como el aprendizaje basado en proyectos o en problemas."
    ],
    correcta: 3,
    explicacion: "La opción D plantea un enfoque pedagógico contextualizado, flexible y centrado en el estudiante. Parte del análisis del grupo y del contexto real para seleccionar metodologías activas pertinentes, integrando saberes conceptuales, procedimentales y actitudinales y promoviendo aprendizajes significativos."
  },

  {
    id: 19,
    categoria: "Metodología",
    pregunta: "En el marco del desarrollo de la competencia escritora, el docente observa que el grupo es capaz de construir oraciones y párrafos cortos, pero presenta dificultades para organizar ideas en una secuencia narrativa coherente. Algunos estudiantes escriben de forma impulsiva sin planificar, mientras que otros se bloquean al iniciar el texto o no revisan lo escrito. El docente desea acompañar el proceso de producción de cuentos breves respetando los distintos ritmos de aprendizaje y promoviendo la mejora progresiva de los textos. ¿Qué pasos didácticos debería implementar el docente para guiar la planificación, la escritura y la revisión del cuento?",
    opciones: [
      "Pedirles que libremente escriban un cuento como les parezca y luego lo lean para que los demás den sus impresiones. Corregir ortografía.",
      "Explicar la estructura del cuento con una lámina resumen y proporcionar una plantilla fija para que todos completen el mismo esquema narrativo.",
      "Presentar ejemplos de cuentos ya terminados y pedir que los estudiantes identifiquen sus partes; luego, asignar la escritura del cuento siguiendo el modelo, con una corrección final del docente.",
      "Modelar la estructura con un minicuento, usar un organizador gráfico y dar tiempo de escritura independiente con apoyos puntuales; finalizar con una revisión sencilla."
    ],
    correcta: 3,
    explicacion: "La opción D propone un proceso de enseñanza de la escritura por etapas: modelación, planificación, producción y revisión. Incluye apoyos como organizadores gráficos y acompañamiento diferenciado, ajustándose a los distintos ritmos y necesidades, y promueve la mejora progresiva y habilidades metacognitivas."
  },

  {
    id: 20,
    categoria: "Evaluación",
    pregunta: "Al inicio del año escolar, un docente necesita conocer el nivel de conocimientos previos, habilidades y concepciones erróneas de sus estudiantes en matemáticas para ajustar su planificación didáctica. Busca información que le permita tomar decisiones pedagógicas (agrupamientos flexibles, apoyos diferenciados, secuencias de aprendizaje), más allá de asignar una calificación. ¿Qué tipo de evaluación le proporcionaría información relevante para orientar su planificación y atender la diversidad del grupo?",
    opciones: [
      "Evaluación formativa, ya que se aplica durante todo el proceso de aprendizaje y no antes de iniciar un tema nuevo.",
      "Evaluación diagnóstica, ya que permite identificar fortalezas y áreas de oportunidad del estudiantado antes de iniciar la enseñanza de nuevos contenidos.",
      "Evaluación diagnóstica, aplicada durante el desarrollo de la unidad para identificar dificultades emergentes y ajustar las actividades.",
      "Evaluación sumativa, ya que busca medir el rendimiento final de los estudiantes y asignar calificaciones."
    ],
    correcta: 1,
    explicacion: "La opción B es correcta porque la evaluación diagnóstica se realiza al inicio del proceso de enseñanza-aprendizaje y permite identificar conocimientos previos, habilidades y posibles errores conceptuales. Esta información es clave para ajustar la planificación y diseñar apoyos diferenciados."
  },

  {
    id: 21,
    categoria: "Inclusión y Equidad",
    pregunta: "En un grupo de 3er grado, la docente tiene cuatro estudiantes en condición de sobreedad. A nivel académico, alcanzan los aprendizajes esperados del curso; sin embargo, muestran menor interés por algunas actividades propuestas, tienden a aislarse en los trabajos en grupo y expresan que las dinámicas del aula no siempre conectan con sus vivencias e intereses personales. Esto ha generado dificultades en la convivencia y en su sentido de pertenencia al grupo. ¿Qué estrategia favorecería una integración efectiva de estos estudiantes, fortaleciendo su participación, motivación y vinculación con el grupo?",
    opciones: [
      "Distribuir a los estudiantes en el aula para que puedan apoyarse en otros compañeros, evitando así que entre ellos se distraigan conversando sobre temas distintos de la clase.",
      "Colocar a esos estudiantes en un espacio cercano a la docente en el aula para monitorear de cerca su trabajo y brindar acompañamiento puntual.",
      "Incluir en la dinámica de la clase el trabajo en pequeños grupos y aprovechar esos espacios para integrar recursos y materiales seleccionados de acuerdo con las necesidades de los estudiantes.",
      "Adaptar los materiales disponibles a temáticas que resulten interesantes para estos cuatro estudiantes, distintas de las de los demás. Asignarles actividades diferenciadas."
    ],
    correcta: 2,
    explicacion: "La opción C promueve la integración activa de los estudiantes dentro del grupo mediante el trabajo colaborativo, permitiendo atender sus necesidades e intereses sin aislarlos. Favorece la participación, el sentido de pertenencia y la convivencia positiva en el aula."
  },

  {
    id: 22,
    categoria: "Metodología",
    pregunta: "En una escuela pública con acceso limitado a internet, el docente quiere integrar tecnología para fortalecer el pensamiento crítico y la resolución de problemas. Sin embargo, no todos los recursos digitales propuestos en el currículo son accesibles en tiempo real y el acceso a dispositivos es intermitente. El docente busca una alternativa que aproveche la tecnología disponible sin depender de una conectividad permanente. ¿Qué estrategia permitiría integrar la tecnología de manera pertinente para desarrollar habilidades de pensamiento crítico en este contexto?",
    opciones: [
      "Incorporar la tecnología principalmente como apoyo ocasional, articulándola con tareas estructuradas y con secuencias didácticas orientadas al desarrollo de habilidades de pensamiento.",
      "Sustituir la mediación presencial por videos y presentaciones en línea como recurso principal, reduciendo la interacción docente y limitando la retroalimentación.",
      "Destinar el uso de dispositivos a la visualización de diapositivas con información teórica, priorizando la transmisión de contenidos sobre actividades prácticas o interactivas.",
      "Integrar recursos tecnológicos que funcionen sin conexión permanente para explorar problemas del entorno, formular hipótesis y sustentar soluciones con evidencia."
    ],
    correcta: 3,
    explicacion: "La opción D plantea un uso significativo y contextualizado de la tecnología, adaptado a las limitaciones de conectividad. Promueve el pensamiento crítico mediante la exploración de problemas reales, la formulación de hipótesis y la búsqueda de soluciones basadas en evidencia, usando recursos accesibles sin conexión continua."
  },

  {
    id: 23,
    categoria: "Metodología",
    pregunta: "El docente identifica que el estudiantado incorpora de manera acrítica expresiones de canciones populares en su comunicación cotidiana, lo que empobrece el registro lingüístico en contextos académicos. El docente no busca censurar, sino ampliar el repertorio lingüístico y favorecer el uso adecuado de distintos registros según el contexto. ¿Qué intervención pedagógica permitiría enriquecer el lenguaje oral y promover el uso consciente de los registros lingüísticos?",
    opciones: [
      "Realizar correcciones puntuales cuando surjan dichas expresiones, orientando a los estudiantes hacia alternativas consideradas más apropiadas para el contexto escolar.",
      "Delimitar explícitamente el uso de determinadas expresiones dentro del aula, recordando periódicamente que el espacio académico requiere un registro lingüístico específico.",
      "Integrar momentos breves de análisis del lenguaje utilizado en clase, invitando a los estudiantes a identificar matices de significado y posibles equivalencias en distintos registros comunicativos.",
      "Tolerar el uso de estas expresiones en el intercambio cotidiano, entendiendo que forman parte del repertorio sociolingüístico del estudiantado y que su regulación puede darse de manera gradual."
    ],
    correcta: 2,
    explicacion: "La opción C promueve una reflexión consciente sobre el uso del lenguaje, permitiendo que los estudiantes comprendan cuándo y cómo utilizar distintos registros lingüísticos según el contexto. Esta estrategia amplía el repertorio comunicativo sin censurar, favoreciendo el pensamiento crítico."
  },

  {
    id: 24,
    categoria: "Metodología",
    pregunta: "Un docente de tercer grado quiere fortalecer la comunicación efectiva de sus estudiantes en distintos contextos: presentaciones académicas, resolución de conflictos cotidianos y simulaciones de situaciones profesionales sencillas (entrevistas, atención al público, etc.). ¿Qué estrategia de aula permitiría desarrollar habilidades comunicativas transferibles a diversos contextos de interacción?",
    opciones: [
      "Evitar la enseñanza explícita de estrategias de comunicación, permitiendo que los estudiantes aprendan a expresarse por sí mismos sin guía.",
      "Enseñar a los estudiantes a comunicarse utilizando un solo registro formal, sin importar el contexto en el que se encuentren.",
      "Instruir a los estudiantes para que utilicen frases memorizadas en sus interacciones, sin enfatizar la construcción del significado en el diálogo.",
      "Fomentar el uso de un lenguaje claro, estructurado y adaptado a cada contexto, promoviendo la escucha activa y el respeto en la interacción oral y escrita."
    ],
    correcta: 3,
    explicacion: "La opción D promueve el desarrollo de habilidades comunicativas flexibles y transferibles, adaptadas a distintos contextos. Integra elementos clave como la claridad, la organización del discurso, la escucha activa y el respeto, fundamentales para una comunicación efectiva en situaciones académicas, sociales y cotidianas."
  },

  {
    id: 25,
    categoria: "Metodología",
    pregunta: "En una clase de matemáticas de primaria, el docente propone que los estudiantes formulen problemas a partir de situaciones cotidianas, los resuelvan y luego expliquen cómo pensaron para llegar a la solución. Observa que algunos llegan al resultado, pero no logran verbalizar ni representar las estrategias utilizadas; otros se limitan a repetir procedimientos sin justificar sus decisiones. El docente busca una dinámica que estimule el pensamiento crítico y creativo y, además, haga visible el proceso de razonamiento de cada estudiante. ¿Qué estrategia de aula permitiría promover la metacognición y evidenciar los procesos de pensamiento durante la resolución de problemas?",
    opciones: [
      "Presentar un problema y acordar en plenaria una única forma de resolverlo; después, todos aplican esa misma estrategia en otro ejercicio y comparten resultados para verificar que siguieron el proceso.",
      "Presentar un problema y pedir que propongan varias maneras de resolverlo; usando una tabla, dibujo u organizador, registran pasos y razones; al final comparan enfoques y explican cuál fue más claro y eficiente.",
      "Modelar un ejemplo paso a paso y dejar visibles en una cartulina los pasos a seguir; luego, pedir que resuelvan problemas similares aplicando ese procedimiento.",
      "Organizar grupos pequeños para resolver problemas de forma colaborativa, promoviendo que se apoyen entre sí; al finalizar, cada grupo presenta su respuesta brevemente."
    ],
    correcta: 1,
    explicacion: "La opción B promueve explícitamente la metacognición al hacer visible el proceso de pensamiento. Invita a los estudiantes no solo a resolver el problema, sino a explicar, representar y reflexionar sobre cómo lo resolvieron, comparando estrategias y evaluando su eficacia, fortaleciendo el pensamiento crítico y creativo."
  },

  {
    id: 26,
    categoria: "Inclusión y Equidad",
    pregunta: "En el aula, un estudiante con discapacidad visual presenta dificultades para acceder a textos impresos, consignas escritas en la pizarra y fichas de trabajo. Aunque el docente repite las instrucciones de forma oral, el estudiante depende constantemente de sus compañeros para completar las actividades, lo que limita su autonomía y participación. El docente busca una respuesta pedagógica que promueva el acceso directo a la información curricular en condiciones de equidad. ¿Qué estrategia de adaptación sería más adecuada para garantizar su inclusión, su autonomía y su acceso efectivo a los contenidos curriculares?",
    opciones: [
      "Utilizar los mismos materiales con ajustes puntuales de acceso, esperando que el estudiante desarrolle progresivamente estrategias compensatorias propias.",
      "Incorporar algunos apoyos y formatos alternativos de acceso al contenido, como recursos auditivos o herramientas tecnológicas de lectura, facilitando que el estudiante pueda seguir el desarrollo de las actividades junto al resto del grupo.",
      "Eximir al estudiante de actividades centradas en la lectura escrita, priorizando su participación en tareas orales y evaluaciones alternativas.",
      "Asignar un compañero tutor que apoye la lectura de textos durante la clase, complementando ocasionalmente con recursos tecnológicos adaptativos."
    ],
    correcta: 1,
    explicacion: "La opción B propone una adaptación de acceso que permite al estudiante interactuar directamente con los contenidos mediante recursos adecuados (audio, lectores de pantalla, materiales digitales accesibles), favoreciendo su autonomía, participación e inclusión en igualdad de condiciones."
  },

  {
    id: 27,
    categoria: "Planificación",
    pregunta: "En una comunidad rural, el docente cuenta con acceso limitado a internet y con pocos materiales impresos actualizados. Al revisar su planificación trimestral, identifica actividades del currículo nacional que implican el uso de plataformas digitales, videos en línea y recursos interactivos. El docente busca alternativas que mantengan la intencionalidad pedagógica y los aprendizajes esperados, sin depender de la conectividad. ¿Qué ajuste curricular permitiría garantizar aprendizajes de calidad en este contexto, sin desvirtuar el enfoque por competencias?",
    opciones: [
      "Solicitar a los estudiantes que busquen información en internet y ofrecerles alternativas cuando no tengan acceso a dispositivos o conectividad.",
      "Reducir los contenidos del currículo y evitar la enseñanza de temas complejos, para que los estudiantes no enfrenten dificultades.",
      "Seguir estrictamente los materiales digitales sugeridos en el currículo sin hacer adaptaciones, aunque los estudiantes no tengan acceso a ellos.",
      "Diseñar estrategias didácticas que utilicen recursos disponibles en la comunidad, como la observación del entorno, la experimentación y la narración oral para reforzar los aprendizajes."
    ],
    correcta: 3,
    explicacion: "La opción D plantea una adaptación contextualizada del currículo, manteniendo la intencionalidad pedagógica y el desarrollo de competencias. Aprovecha los recursos del entorno y promueve aprendizajes significativos mediante experiencias directas, siendo coherente con el enfoque por competencias sin depender de la conectividad."
  },

  {
    id: 28,
    categoria: "Gestión del Aula",
    pregunta: "En una actividad de lectura guiada en parejas, el docente conforma parejas con niveles de desempeño distintos para favorecer el apoyo entre pares. Durante el proceso, observa que el estudiante con mayor dominio de la lectura corrige de forma directa y descalificadora a su compañero, realiza las correcciones por él y avanza sin explicitar estrategias. Esto ha generado desmotivación en el estudiante con mayores dificultades y una relación asimétrica que limita su participación y su autonomía. ¿Cuál debería ser el rol del docente y qué tipo de intervención favorecería un apoyo entre pares respetuoso, formativo y orientado al desarrollo de la autonomía lectora?",
    opciones: [
      "Modelar la lectura guiada entre pares, ejemplificando preguntas de profundización, tipos de comentarios constructivos y conductas a evitar, además de establecer roles rotativos que promuevan la equidad en la participación.",
      "Reorganizar temporalmente la actividad en parejas, asumiendo el docente un rol más directivo en la mediación del proceso de lectura, ofreciendo retroalimentación inmediata.",
      "Observar sistemáticamente los comportamientos, registrando incidencias relevantes para posteriormente realizar orientaciones generales al grupo.",
      "Permitir que entre ellos puedan resolver sus conflictos como compañeros."
    ],
    correcta: 0,
    explicacion: "La opción A es correcta porque el docente asume un rol activo como mediador pedagógico, enseñando explícitamente cómo brindar apoyo entre pares de manera respetuosa y formativa. Al modelar estrategias, establecer roles y promover interacciones constructivas, se favorece la autonomía, la participación equitativa y el aprendizaje colaborativo."
  },

  {
    id: 29,
    categoria: "Inclusión y Equidad",
    pregunta: "De acuerdo con el marco normativo del Sistema Educativo, el docente busca garantizar la equidad educativa en su aula, reconociendo la diversidad de condiciones sociales, culturales y de aprendizaje de su estudiantado. ¿Qué práctica docente se alinea con el principio de equidad educativa establecido en las leyes y políticas educativas?",
    opciones: [
      "Priorizar el reconocimiento del esfuerzo individual y la participación, reduciendo la corrección de errores para preservar la motivación, independientemente del nivel de logro alcanzado.",
      "Aplicar el mismo enfoque metodológico y los mismos criterios de evaluación para todo el grupo, bajo el principio de trato igualitario, evitando ajustes diferenciados.",
      "Adaptar las estrategias de enseñanza y evaluación a partir de la evaluación diagnóstica, priorizando un mismo plan de actividades para todo el estudiantado sin realizar ajustes diferenciados.",
      "Adaptar la enseñanza y la evaluación según la evaluación diagnóstica y las necesidades del grupo, incorporando apoyos diferenciados y ajustes razonables para garantizar oportunidades reales de aprendizaje."
    ],
    correcta: 3,
    explicacion: "La opción D refleja el principio de equidad educativa, que implica ofrecer a cada estudiante las condiciones y apoyos necesarios según sus características y necesidades, garantizando oportunidades reales de aprendizaje, promoviendo la inclusión y la atención a la diversidad."
  },

  {
    id: 30,
    categoria: "Inclusión y Equidad",
    pregunta: "En un aula del primer ciclo, el docente identifica que un estudiante con dislexia se esfuerza por seguir las actividades, pero se cansa rápidamente al leer consignas extensas, omite información clave y requiere apoyo constante para iniciar las tareas. Aunque comprende mejor cuando las explicaciones se presentan de forma oral o visual, las evaluaciones y materiales del aula están mayormente basados en textos largos y escritos continuos. Esto ha impactado su autonomía, su ritmo de trabajo y su participación en actividades colaborativas. ¿Qué adaptación pedagógica y de recursos favorecería de manera más efectiva su acceso al aprendizaje y su participación activa en el aula?",
    opciones: [
      "Mantener la misma metodología, realizar ajustes mínimos asegurando que todos los estudiantes trabajen con los mismos materiales, incorporando apoyos específicos en momentos clave.",
      "Mantener la misma metodología, promoviendo la lectura frecuente en voz alta y la adaptación gradual de textos, incorporando apoyos visuales complementarios en momentos específicos.",
      "Mantener la misma metodología, realizando ajustes mínimos asegurando que todos los estudiantes trabajen con los mismos materiales, actividades y criterios de evaluación para garantizar la equidad.",
      "Mantener la misma metodología, proponiendo actividades adicionales individuales complementadas con apoyos concretos durante la actividad principal."
    ],
    correcta: 1,
    explicacion: "La opción B introduce adaptaciones pedagógicas y de acceso centradas en las necesidades del estudiante con dislexia, incorporando múltiples canales de aprendizaje (oral y visual) y ajustes progresivos en los textos. Favorece su comprensión, autonomía y participación sin excluirlo del grupo."
  },

  {
    id: 31,
    categoria: "Gestión del Aula",
    pregunta: "En la asignatura de ciencias sociales, el docente propone actividades de trabajo en equipo para analizar situaciones del entorno. Sin embargo, varios estudiantes evitan participar, algunos por conflictos interpersonales no resueltos y otros por desinterés en la temática. Esto genera equipos desbalanceados, baja corresponsabilidad y productos grupales de poca calidad. El docente busca una estrategia que no solo reactive la participación, sino que también promueva habilidades genuinas de convivencia y colaboración. ¿Qué estrategia favorecería la implicación progresiva del estudiantado y la construcción de un trabajo cooperativo productivo?",
    opciones: [
      "Permitir que los estudiantes decidan libremente su nivel de participación y dirección del proceso, delegando en ellos la gestión del aprendizaje bajo el principio de autonomía.",
      "Realizar actividades grupales manteniendo la metodología previamente establecida, priorizando la estabilidad organizativa del aula y la prevención de conflictos.",
      "Organizar actividades grupales estructuradas y motivadoras, asignando roles definidos según fortalezas e intereses, promoviendo la interdependencia positiva, la corresponsabilidad y el aprendizaje colaborativo.",
      "Proponer recompensas individuales que incentiven una competencia saludable, orientando a cada estudiante a asumir metas personales de logro y autorregulación."
    ],
    correcta: 2,
    explicacion: "La opción C promueve un enfoque de aprendizaje cooperativo estructurado, donde cada estudiante asume un rol y responsabilidad dentro del grupo. Favorece la participación activa, la resolución de conflictos, la corresponsabilidad y el sentido de pertenencia, mejorando tanto la convivencia como la calidad de los productos grupales."
  },

  {
    id: 32,
    categoria: "Inclusión y Equidad",
    pregunta: "En una clase de matemáticas del primer ciclo, la docente observa que un estudiante con discalculia presenta dificultades persistentes para reconocer números, establecer correspondencias uno a uno y comprender el sentido de las operaciones básicas. A pesar de recibir explicaciones repetidas, tiende a memorizar los pasos sin entenderlos y se frustra cuando las actividades avanzan hacia representaciones simbólicas. Además, le cuesta transferir lo aprendido a situaciones cotidianas. ¿Qué tipo de apoyo pedagógico permitiría fortalecer la comprensión numérica y promover avances sostenidos en su aprendizaje matemático?",
    opciones: [
      "Darle más tiempo para realizar las actividades que involucren el trabajo con números o la resolución de problemas numéricos. Revisar y retroalimentar su trabajo de manera constante.",
      "Facilitar material fotocopiado o preparado previamente para ayudarle a agilizar las asignaciones en el aula, favoreciendo su participación en el trabajo del grupo.",
      "Ofrecer materiales concretos para que el estudiante pueda realizar conteo, agrupación de cantidades como apoyo a las actividades matemáticas.",
      "Mantener su planificación de acuerdo a los lineamientos del diseño curricular para el grado, asegurando el principio de equidad, permitiendo que el estudiante tenga acceso a todos los recursos disponibles."
    ],
    correcta: 2,
    explicacion: "La opción C permite al estudiante construir el concepto numérico a partir de experiencias concretas y manipulativas, facilitando la comprensión del sentido de las cantidades y las operaciones. Es fundamental en estudiantes con discalculia para favorecer el paso progresivo de lo concreto a lo simbólico."
  },

  {
    id: 33,
    categoria: "Evaluación",
    pregunta: "Tras revisar un texto producido por sus estudiantes, el docente observa avances en la organización de ideas, pero también errores recurrentes en el uso de conectores y en la coherencia entre párrafos. Hasta ahora, la retroalimentación se ha centrado en señalar errores y asignar una calificación, lo que no siempre se traduce en mejoras en los trabajos posteriores. El docente busca una forma de retroalimentar que ayude a los estudiantes a comprender qué están logrando, qué necesitan mejorar y cómo pueden hacerlo por sí mismos. ¿Qué tipo de retroalimentación favorecería la autorregulación y el aprendizaje autónomo?",
    opciones: [
      "\"Lograste organizar las ideas principales; ahora revisa el uso de conectores entre párrafos (por ejemplo, 'además', 'por eso') y corrige dos fragmentos específicos para mejorar la coherencia de tu texto.\"",
      "\"Buen trabajo. Continúa así, se nota tu esfuerzo en la organización del texto y en mantener la idea principal a lo largo del escrito.\"",
      "\"La próxima vez intenta hacerlo mejor; con más práctica podrás superar estas dificultades. Cuenta con mi apoyo para seguir avanzando.\"",
      "\"El texto presenta varios errores y falta coherencia entre párrafos; necesitas esforzarte más para mejorar tus resultados en esta actividad.\""
    ],
    correcta: 0,
    explicacion: "La opción A ofrece una retroalimentación específica, constructiva y orientada a la mejora, destacando lo logrado y señalando con claridad qué debe mejorar y cómo hacerlo. Además, promueve la autorregulación al dar indicaciones concretas que el estudiante puede aplicar de forma autónoma."
  },

  {
    id: 34,
    categoria: "Evaluación",
    pregunta: "Un docente implementa una plataforma de aprendizaje en línea para reforzar los contenidos fuera del aula. Tras algunas semanas de uso, percibe que ciertos estudiantes acceden con frecuencia y completan las actividades, mientras que otros presentan baja participación o dificultades para interactuar con los recursos digitales. El docente desea evaluar si la plataforma realmente cumple con el objetivo de garantizar el acceso equitativo y la accesibilidad a la información curricular para todo el grupo. ¿Qué enfoque de evaluación permitiría valorar de manera más pertinente la equidad en el acceso, la usabilidad de la plataforma y su impacto en los aprendizajes?",
    opciones: [
      "Registrando la cantidad de veces que los estudiantes ingresan a la plataforma, analizar su participación y en ocasiones recoger información sobre sus experiencias.",
      "Promoviendo actividades lúdicas dentro de la plataforma para mantener el interés de los estudiantes, sin aplicar evaluaciones, pero sí instrumentos de retroalimentación.",
      "Usando la plataforma principalmente como una alternativa para quienes desean utilizarla, sin integrarla en la planificación ni evaluar su impacto en el aprendizaje.",
      "Realizando un seguimiento del uso de la plataforma, observando la participación de los estudiantes y aplicando encuestas para conocer sus experiencias y dificultades."
    ],
    correcta: 3,
    explicacion: "La opción D propone un enfoque de evaluación integral y formativo que combina datos cuantitativos (uso y participación) con información cualitativa (experiencias, dificultades, percepciones). Esto permite analizar la equidad en el acceso, la usabilidad de la plataforma y su impacto real en los aprendizajes."
  },

  {
    id: 35,
    categoria: "Metodología",
    pregunta: "El docente observa que algunos estudiantes tienen dificultades para organizar ideas, usar vocabulario preciso y estructurar textos tanto orales como escritos. Aunque participan en clase, sus producciones carecen de claridad y coherencia. ¿Qué estrategia didáctica permitiría fortalecer progresivamente la expresión oral y escrita de estos estudiantes?",
    opciones: [
      "Permitir que solo los estudiantes con mayor fluidez verbal participen en actividades de expresión oral, para no presionar al resto y que vayan a su propio ritmo.",
      "Fomentar la escritura creativa y la práctica de la expresión oral mediante presentaciones, debates y actividades de escritura reflexiva, involucrando a todos según sus niveles y posibilidades.",
      "Reducir la cantidad de actividades escritas y orales en el aula para evitar que los estudiantes se sientan presionados.",
      "Pedir a los estudiantes que memoricen textos sin necesidad de analizarlos ni producir sus propias ideas."
    ],
    correcta: 1,
    explicacion: "La opción B promueve el desarrollo progresivo de la expresión oral y escrita a través de la práctica constante, significativa y contextualizada. Integra diferentes estrategias que permiten mejorar la organización de ideas, el uso del vocabulario y la coherencia, respetando los distintos niveles de desempeño."
  },

  {
    id: 36,
    categoria: "Inclusión y Equidad",
    pregunta: "En un aula de primer ciclo, la docente cuenta con un estudiante con discapacidad auditiva que se esfuerza por seguir las explicaciones orales, pero con frecuencia pierde información clave durante las consignas, las discusiones grupales y los momentos de retroalimentación. Esto ha comenzado a afectar su participación en actividades colaborativas y su autonomía para resolver tareas. ¿Cuál sería la adaptación pedagógica más pertinente para garantizar el acceso al contenido, la participación activa y la equidad en el aprendizaje de este estudiante?",
    opciones: [
      "Ubicar al estudiante cerca del docente y reforzar la proyección de la voz, incorporando apoyos visuales puntuales en la pizarra para aclarar consignas específicas.",
      "Incorporar apoyos multimodales de forma ocasional (consignas visuales y resúmenes escritos), manteniendo la dinámica habitual de la clase sin ajustar las interacciones colaborativas.",
      "Regular temporalmente su participación en actividades grupales para no afectar el ritmo del curso, compensando con ejercicios de refuerzo adaptados fuera del trabajo colaborativo.",
      "Incorporar apoyos multimodales de forma sistemática (consignas visuales, resúmenes escritos y videos con subtítulos o apoyo en lengua de señas) y ajustar las interacciones para favorecer su participación activa."
    ],
    correcta: 3,
    explicacion: "La opción D garantiza un acceso equitativo al contenido mediante apoyos multimodales constantes, no solo ocasionales. Adapta tanto los recursos como las dinámicas de interacción, favoreciendo la participación activa, la comprensión y el desarrollo de la autonomía del estudiante con discapacidad auditiva."
  },

  {
    id: 37,
    categoria: "Evaluación",
    pregunta: "En distintas asignaturas, el docente ofrece comentarios generales como 'bien' o 'debes esforzarte más', pero nota que los estudiantes no saben exactamente qué cambiar ni cómo mejorar su desempeño en tareas futuras. Además, algunos repiten los mismos errores a pesar de haber recibido observaciones previas. El docente desea aplicar una estrategia de retroalimentación que se traduzca en acciones concretas para mejorar el desempeño de los estudiantes. ¿Qué enfoque de retroalimentación permitiría orientar con claridad los próximos pasos de aprendizaje?",
    opciones: [
      "Corregir los errores, explicar las razones y ofrecer orientación sobre cómo mejorar, para que el estudiante desarrolle las competencias necesarias.",
      "Dar principalmente calificaciones numéricas y comentarios adicionales sobre el desempeño solo a los que tuvieron dificultades.",
      "Esperar hasta la evaluación final para dar retroalimentación, de modo que el estudiante tenga oportunidades de mejora durante el proceso de aprendizaje.",
      "Brindar retroalimentación en sesiones individuales o grupales, resaltando aspectos positivos y proporcionando sugerencias claras para mejorar."
    ],
    correcta: 0,
    explicacion: "La opción A propone una retroalimentación específica, explicativa y orientada a la acción, permitiendo al estudiante entender qué hizo mal, por qué ocurrió el error y cómo puede mejorar. Este enfoque favorece la autorregulación y el aprendizaje autónomo, brindando herramientas concretas para avanzar."
  },

  {
    id: 38,
    categoria: "Gestión del Aula",
    pregunta: "La profesora observa que, durante los proyectos grupales, su grupo muestra un bajo nivel de compromiso: algunos estudiantes cumplen de manera mínima, otros delegan en sus compañeros y la mayoría percibe las tareas como poco relevantes para su vida cotidiana. Aunque se cumplen los pasos del proyecto, no se evidencia apropiación de los aprendizajes ni entusiasmo por el trabajo colaborativo. La docente desea rediseñar su enfoque para aumentar la motivación y fortalecer la colaboración. ¿Qué acción pedagógica permitiría incrementar el sentido de propósito del proyecto y favorecer una colaboración más auténtica entre los estudiantes?",
    opciones: [
      "Seleccionar objetivos que tengan conexión con intereses y situaciones reales de los estudiantes, logrando así que encuentren sentido y valor personal en las actividades realizadas.",
      "Definir objetivos que se ajusten principalmente a los contenidos del currículo oficial, priorizando la cobertura del programa por encima de su relevancia para el estudiante.",
      "Seleccionar objetivos uniformes para todo el grupo, adaptados a los intereses, ritmos y contextos de los estudiantes y alineados al currículo.",
      "Seleccionar objetivos enfocados en la adquisición de información, asegurando que los estudiantes adquieran datos relevantes relacionados con su vida cotidiana."
    ],
    correcta: 0,
    explicacion: "La opción A promueve el aprendizaje significativo, conectando los contenidos con la realidad, intereses y experiencias del estudiantado. Esto incrementa la motivación, el compromiso y la participación activa, favoreciendo una colaboración auténtica y el sentido de propósito en los proyectos."
  },

  {
    id: 39,
    categoria: "Planificación",
    pregunta: "Al inicio del año escolar, un docente de educación inicial diseña la ambientación del aula como un espacio que refleja los intereses y saberes culturales de la comunidad, incorpora materiales manipulativos y propone una rutina de bienvenida con canciones y juegos conocidos por los niños. Busca que el espacio sea acogedor y que los primeros días generen un sentido de pertenencia. ¿Cuál es el propósito pedagógico central de estas decisiones al inicio del año?",
    opciones: [
      "Cubrir de manera anticipada los contenidos más difíciles del currículo antes de que los niños se adapten al ritmo escolar.",
      "Crear un ambiente familiar y significativo que facilite la transición al aula, fortalezca el vínculo con la cultura local y propicie el aprendizaje desde el inicio.",
      "Reducir el tiempo de planificación formal, aprovechando recursos ya disponibles sin necesidad de diseñar actividades pedagógicas específicas.",
      "Mantener a los estudiantes entretenidos durante la primera semana mientras se organiza la planificación definitiva del año escolar."
    ],
    correcta: 1,
    explicacion: "La opción B reconoce que las decisiones iniciales del docente tienen una clara intención pedagógica: crear un entorno acogedor y culturalmente relevante que facilite la adaptación de los niños, genere sentido de pertenencia y propicie aprendizajes significativos desde el primer día."
  },

  {
    id: 40,
    categoria: "Evaluación",
    pregunta: "Un docente de educación primaria ha implementado una secuencia de aprendizaje cooperativo en la que los estudiantes trabajan en equipos para resolver situaciones-problema. Al finalizar la actividad, quiere evaluar no solo el producto obtenido por cada equipo, sino también la calidad de los procesos colaborativos: cómo se distribuyeron las responsabilidades, cómo se comunicaron, cómo resolvieron desacuerdos y cómo se apoyaron mutuamente. ¿Qué instrumento o estrategia de evaluación sería más pertinente para valorar estos procesos colaborativos de manera sistemática?",
    opciones: [
      "Aplicar una prueba escrita individual al finalizar la actividad para verificar la comprensión de los contenidos trabajados en equipo.",
      "Observar los grupos durante la actividad y registrar en una lista de cotejo o rúbrica los indicadores de colaboración (participación, comunicación, resolución de conflictos, apoyo mutuo).",
      "Solicitar que cada equipo presente su producto final ante el grupo y asignar una calificación grupal única basada en la calidad de la presentación.",
      "Pedir que cada estudiante complete al final una autoevaluación general sobre su nivel de satisfacción con el trabajo en equipo realizado."
    ],
    correcta: 1,
    explicacion: "La opción B es la más pertinente porque permite evaluar de manera sistemática y con evidencia observable los procesos colaborativos durante la actividad. La lista de cotejo o rúbrica con indicadores específicos asegura una valoración objetiva, formativa y alineada con los objetivos del aprendizaje cooperativo."
  }

];