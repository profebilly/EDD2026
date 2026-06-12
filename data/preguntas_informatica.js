// ============================================================
//  SimulaDocente — Banco de Preguntas (Examen Filtrado)
//  40 preguntas adaptadas al área de Informática y Comunicaciones
// ============================================================

const preguntas = [
  {
    id: 1,
    categoria: "Planificación",
    pregunta: "El docente imparte el módulo de Desarrollo de Aplicaciones Web en un contexto donde el acceso a internet es limitado y la mayoría de estudiantes no tiene computadoras en casa. Algunas prácticas requieren codificación fuera del aula. ¿Qué estrategia de planificación permitiría ajustar las actividades a estas condiciones y garantizar oportunidades de aprendizaje equitativas?",
    opciones: [
      "Mantener las asignaciones en línea, asumiendo que los estudiantes buscarán un centro de internet.",
      "Reducir el currículo y enseñar solo teoría de programación sin exigir prácticas.",
      "Esperar a que las condiciones tecnológicas mejoren antes de evaluar competencias técnicas.",
      "Diseñar actividades de programación desenchufada en casa y optimizar el trabajo colaborativo en el laboratorio durante la clase."
    ],
    correcta: 3,
    explicacion: "La opción D responde de manera pertinente al contexto real, garantizando el aprendizaje técnico continuo sin depender de recursos externos y promoviendo el trabajo en equipo en el laboratorio."
  },
  {
    id: 2,
    categoria: "Evaluación",
    pregunta: "Al finalizar el módulo de Configuración de Redes LAN, el docente quiere identificar en qué medida los estudiantes han logrado instalar y configurar la topología. Le interesa retroalimentar el desempeño técnico. ¿Qué tipo de evaluación le brindaría información más pertinente sobre las habilidades prácticas adquiridas?",
    opciones: [
      "Evaluación sumativa y auténtica, basada en la entrega de un proyecto final funcional evaluado con rúbrica técnica.",
      "Evaluación diagnóstica, para ver qué saben sobre servidores antes de evaluarlos en redes.",
      "Ninguna evaluación formal, la evaluación debe basarse solo en la asistencia al laboratorio.",
      "Evaluación formativa exclusiva, aplicada durante el proceso sin valoración del producto final."
    ],
    correcta: 0,
    explicacion: "La evaluación sumativa y auténtica es la más adecuada para módulos técnicos porque permite verificar el desempeño real configurando una red funcional."
  },
  {
    id: 3,
    categoria: "Metodología",
    pregunta: "Un docente técnico necesita diseñar una actividad de cierre para el módulo de Soporte y Mantenimiento de Equipos que evidencie las competencias logradas en contextos reales. ¿Qué estrategia metodológica resultaría más adecuada?",
    opciones: [
      "Un examen escrito estandarizado sobre las especificaciones de procesadores y memorias RAM.",
      "Una exposición individual con diapositivas sobre cómo se formatea una computadora.",
      "Organizar grupos para elaborar un glosario técnico sobre herramientas de hardware.",
      "Implementar un proyecto (ABP) donde instalen un Centro de Soporte para diagnosticar y reparar equipos reales del área administrativa."
    ],
    correcta: 3,
    explicacion: "La opción D permite una evaluación auténtica basada en competencias, donde el estudiante aplica sus conocimientos técnicos en situaciones reales de soporte."
  },
  {
    id: 4,
    categoria: "Inclusión y Equidad",
    pregunta: "En una clase de Desarrollo de Software, algunos estudiantes tienen laptops potentes y otros no. El docente quiere evitar que las tareas amplíen la brecha digital. ¿Cómo organizar el uso de tecnología para garantizar equidad?",
    opciones: [
      "Depender completamente de los dispositivos personales de cada estudiante.",
      "Utilizar simuladores online muy pesados y exigir que los usen en casa.",
      "Diseñar programación en parejas (Pair Programming) utilizando equitativamente los recursos del laboratorio escolar.",
      "Excluir la programación práctica para evitar desigualdades."
    ],
    correcta: 2,
    explicacion: "El Pair Programming promueve la equidad educativa garantizando que todos participen usando los recursos disponibles en el aula sin depender del hardware en casa."
  },
  {
    id: 5,
    categoria: "Planificación",
    pregunta: "Durante una unidad de bases de datos, algunos estudiantes comprenden rápido y exigen retos de normalización avanzada, mientras otros necesitan apoyo en la sintaxis SQL básica. ¿Cómo ajustar la planificación?",
    opciones: [
      "Reducir el nivel de las consultas SQL para todo el grupo y no ver temas avanzados.",
      "Condicionar el avance a que todos dominen lo básico antes de avanzar a normalización.",
      "Ajustar la planificación con niveles de desafío diferenciados: proyectos básicos para unos y retos de optimización de BD para otros.",
      "Avanzar al ritmo de los rápidos y dejar que los demás se pongan al día como puedan."
    ],
    correcta: 2,
    explicacion: "El diseño de desafíos diferenciados atiende a la diversidad de ritmos en el taller técnico, manteniendo la motivación sin frenar al grupo."
  },
  {
    id: 6,
    categoria: "Gestión del Aula",
    pregunta: "Durante un proyecto de Diseño Web, el diseñador frontend y el programador backend discuten fuertemente por la integración de la API, afectando al equipo. ¿Cómo debe intervenir el docente técnico?",
    opciones: [
      "Intervenir como mediador, solicitando apoyo de un psicólogo para resolver el problema técnico.",
      "Mediar ayudándoles a comunicarse técnicamente, revisar la documentación y negociar una solución de integración.",
      "Permitir que resuelvan el conflicto solos como si fuera una empresa real.",
      "Asignarles una práctica escrita sobre protocolos de red como castigo."
    ],
    correcta: 1,
    explicacion: "La mediación técnica y pedagógica fortalece habilidades blandas (Soft Skills) esenciales en el mundo TI, como la comunicación y negociación."
  },
  {
    id: 7,
    categoria: "Evaluación",
    pregunta: "Luego de evaluar un módulo de Administración de Servidores, el docente debe informar el progreso. Busca comunicar los resultados técnicos de forma comprensible para las familias y los estudiantes. ¿Cuál es la forma más pertinente?",
    opciones: [
      "Entregar solo la calificación numérica del examen de servidores Linux.",
      "Organizar reuniones explicando el progreso con evidencias de los laboratorios, fortalezas y áreas técnicas a mejorar.",
      "Informar solo a los padres sobre el comportamiento en el laboratorio.",
      "Entregar un reporte técnico altamente complejo que solo un ingeniero entendería."
    ],
    correcta: 1,
    explicacion: "Comunicar con evidencias prácticas de laboratorio hace que la evaluación formativa sea transparente para el estudiante y su entorno familiar."
  },
  {
    id: 8,
    categoria: "Inclusión y Equidad",
    pregunta: "En el laboratorio de Diseño Multimedia, hay estudiantes con discapacidad visual y otros con dificultades de lectura ante textos largos. ¿Qué ajustes favorecerían un aprendizaje inclusivo?",
    opciones: [
      "Aplicar Diseño Universal para el Aprendizaje (DUA) con editores de alto contraste, lectores de pantalla y manuales en audio y texto escalable.",
      "Darles tareas de hardware simplificadas en vez de diseño web.",
      "Mantener los manuales impresos sin modificaciones.",
      "Exigir el mismo material pero darles un poco más de tiempo para leer los tutoriales."
    ],
    correcta: 0,
    explicacion: "La accesibilidad digital (DUA) garantiza que todo estudiante interactúe con los entornos de desarrollo en igualdad de condiciones."
  },
  {
    id: 9,
    categoria: "Gestión del Aula",
    pregunta: "En una práctica de cableado estructurado en parejas, un estudiante asume todo el trabajo de crimpar cables mientras el otro se mantiene pasivo. ¿Qué acción pedagógica promueve la responsabilidad compartida?",
    opciones: [
      "Felicitar al estudiante rápido y dejar que siga su ritmo.",
      "Recordar las normas del laboratorio de forma general.",
      "Establecer roles técnicos rotativos (Ej. Técnico Instalador y Auditor de Red) con coevaluación del desempeño de cada uno.",
      "Deshacer la pareja y que cada quien trabaje solo."
    ],
    correcta: 2,
    explicacion: "Definir roles rotativos asegura la participación activa, la corresponsabilidad y que todos adquieran destrezas manipulativas."
  },
  {
    id: 10,
    categoria: "Planificación",
    pregunta: "Al planificar Lógica de Programación, el docente detecta que algunos estudiantes confunden bucles iterativos con condiciones simples, mientras que otros sí logran estructurar el algoritmo mentalmente. ¿Qué progresión conectaría mejor los saberes previos?",
    opciones: [
      "Avanzar directamente a Programación Orientada a Objetos.",
      "Diseñar actividades progresivas desde diagramas de flujo y pseudocódigo hacia la codificación real en un IDE.",
      "Alternar clases de programación con clases de redes para distraer.",
      "Dar clases teóricas magistrales sobre lenguajes de bajo nivel."
    ],
    correcta: 1,
    explicacion: "Avanzar desde la lógica visual (diagramas) hacia el código fomenta la transición conceptual, previniendo lagunas de comprensión."
  },
  {
    id: 11,
    categoria: "Metodología",
    pregunta: "En una clase de Sistemas Operativos, un estudiante memoriza los comandos de Linux pero no sabe usarlos para gestionar permisos ni solucionar problemas reales en la terminal. ¿Cómo apoyar el aprendizaje funcional?",
    opciones: [
      "Asignarle más comandos para memorizar y evaluar por escrito.",
      "Corregirle verbalmente cada vez que escriba mal la sintaxis.",
      "Hacerle un glosario de comandos de Linux.",
      "Promover prácticas en máquinas virtuales enfrentando escenarios reales de fallos de permisos para aplicar comandos."
    ],
    correcta: 3,
    explicacion: "El aprendizaje basado en escenarios reales con máquinas virtuales desarrolla competencias técnicas que superan la memorización."
  },
  {
    id: 12,
    categoria: "Metodología",
    pregunta: "Al interpretar documentación técnica (APIs), los estudiantes subrayan de forma errónea y no identifican los endpoints de las respuestas JSON. ¿Qué acción pedagógica guiaría mejor esta lectura técnica?",
    opciones: [
      "Que lean la documentación técnica en inglés en su casa de forma autónoma.",
      "Leer juntos las definiciones de API y mandar un cuestionario.",
      "Que el mejor programador del aula lo explique.",
      "Modelar en pantalla completa cómo leer la documentación usando herramientas como Postman, aclarando dudas en tiempo real y haciendo prácticas guiadas."
    ],
    correcta: 3,
    explicacion: "El modelado (live coding) con herramientas de prueba de APIs enseña a los estudiantes exactamente cómo abordar documentación técnica real."
  },
  {
    id: 13,
    categoria: "Evaluación",
    pregunta: "La evaluación diagnóstica de un módulo de Ciberseguridad indica que el grupo no domina los conceptos básicos de redes (IP, DNS). ¿Qué decisión de planificación es más adecuada?",
    opciones: [
      "Seguir el currículo de ciberseguridad esperando que aprendan redes sobre la marcha.",
      "Ajustar la planificación integrando talleres intensivos de nivelación en fundamentos de redes antes de ver vulnerabilidades.",
      "Omitir las redes y enseñar a usar herramientas de hacking automatizado.",
      "Repetir el examen diagnóstico hasta que pasen."
    ],
    correcta: 1,
    explicacion: "Ajustar la enseñanza para suplir lagunas fundamentales garantiza la correcta comprensión de los conceptos técnicos avanzados."
  },
  {
    id: 14,
    categoria: "Evaluación",
    pregunta: "Tras un proyecto (ABP) de creación de una tienda virtual, ¿qué enfoque permite valorar pertinentemente la efectividad del proyecto además del funcionamiento de la página web?",
    opciones: [
      "Una evaluación auténtica que integre evidencias del código (repositorios), la arquitectura, el diseño UI/UX y la colaboración en equipo.",
      "Una prueba escrita estandarizada de etiquetas HTML.",
      "Un ensayo individual sobre qué es el comercio electrónico.",
      "Calificar solo el diseño visual de la interfaz."
    ],
    correcta: 0,
    explicacion: "La evaluación auténtica en desarrollo de software abarca el proceso de versionado de código, el diseño técnico y la colaboración, no solo el producto visual."
  },
  {
    id: 15,
    categoria: "Desarrollo Profesional",
    pregunta: "Un estudiante técnico tiene habilidades excepcionales en programación pero problemas severos de integración social y comunicación en proyectos de equipo. ¿Qué estrategia colaborativa es la mejor?",
    opciones: [
      "Ignorar el aspecto social y dejar que programe solo siempre.",
      "Remitir al estudiante a la dirección para que cambie de carrera.",
      "Forzarlo a exponer todos los proyectos para que pierda el miedo.",
      "Coordinar con orientación y familia estrategias que incorporen sus habilidades técnicas en roles que fomenten comunicación paulatina (como Code Reviewer)."
    ],
    correcta: 3,
    explicacion: "Un enfoque integral con orientación y familia, apoyándose en las fortalezas del estudiante, fomenta la mejora de Soft Skills en el área de TI."
  },
  {
    id: 16,
    categoria: "Metodología",
    pregunta: "En lógica de algoritmos, algunos resuelven problemas abstractos fácilmente, pero otros se bloquean. ¿Qué estrategia favorece la comprensión significativa de ambas partes?",
    opciones: [
      "Aplicar solo exámenes formativos constantes.",
      "Diseñar secuencias exclusivas de papel y lápiz.",
      "Dar exposiciones magistrales sobre algoritmos complejos.",
      "Integrar simuladores lógicos, juegos interactivos de codificación (Scratch) y diagramas visuales para representar problemas."
    ],
    correcta: 3,
    explicacion: "Usar entornos visuales e interactivos como andamiaje cognitivo es clave en TI para transitar del problema a la codificación real."
  },
  {
    id: 17,
    categoria: "Inclusión y Equidad",
    pregunta: "Al usar material multimedia para enseñar ensamblaje de PC, el docente quiere asegurar accesibilidad plena. ¿Qué estrategia la garantiza?",
    opciones: [
      "Hacer que los que tienen celular compartan su pantalla.",
      "Usar solo videos de YouTube genéricos sin subtítulos.",
      "Proveer videos con subtítulos, esquemas táctiles, manuales con buen contraste y prácticas con componentes de hardware físico manipulable.",
      "Priorizar explicaciones orales y omitir el componente práctico multimedia."
    ],
    correcta: 2,
    explicacion: "Combinar recursos multimodales e interactivos asegura un Diseño Universal para el Aprendizaje, esencial en laboratorios técnicos."
  },
  {
    id: 18,
    categoria: "Metodología",
    pregunta: "El docente quiere usar metodologías innovadoras en redes, pero hay limitaciones de routers en el laboratorio. ¿Qué enfoque es más adecuado?",
    opciones: [
      "Método expositivo clásico con diapositivas de routers.",
      "Hacer prácticas solo con los pocos routers sin importar el tiempo.",
      "Dar prioridad a la teoría de redes sin práctica.",
      "Implementar un enfoque híbrido usando simuladores virtuales de red (Cisco Packet Tracer) combinado con prácticas rotativas en los equipos físicos."
    ],
    correcta: 3,
    explicacion: "El uso de simuladores virtuales de la industria es el estándar para suplir carencias de equipos y habilitar prácticas activas simultáneas."
  },
  {
    id: 19,
    categoria: "Metodología",
    pregunta: "Al estructurar bases de datos, los estudiantes crean tablas impulsivamente sin planificar relaciones (claves foráneas). ¿Qué pasos didácticos debería implementar el docente?",
    opciones: [
      "Dejarlos hacer y corregir la base al final del semestre.",
      "Darles una plantilla ya estructurada y que solo llenen datos.",
      "Mostrar bases hechas para que solo copien.",
      "Modelar la creación de un Modelo Entidad-Relación (MER) en la pizarra y exigir su aprobación antes de crear las tablas en SQL."
    ],
    correcta: 3,
    explicacion: "El modelado (MER) es el paso de planificación crucial en ingeniería de software. Exigirlo antes de codificar previene errores de diseño de base de datos."
  },
  {
    id: 20,
    categoria: "Evaluación",
    pregunta: "Para iniciar un módulo de Programación en Python, el docente necesita conocer las nociones de lógica de los estudiantes. ¿Qué evaluación le da información para tomar decisiones pedagógicas (agrupamientos, secuencias)?",
    opciones: [
      "Formativa, aplicada durante todo el proceso.",
      "Diagnóstica, enfocada en retos lógicos y de pensamiento computacional antes de iniciar la sintaxis del lenguaje.",
      "Diagnóstica a mitad del módulo para ajustar actividades.",
      "Sumativa, para dar notas rápidas."
    ],
    correcta: 1,
    explicacion: "La evaluación diagnóstica de pensamiento computacional inicial determina el nivel de soporte (andamiaje) requerido antes de codificar."
  },
  {
    id: 21,
    categoria: "Inclusión y Equidad",
    pregunta: "Cuatro estudiantes en condición de sobreedad técnica dominan las competencias, pero se aburren con las dinámicas generales y se aíslan. ¿Qué estrategia favorece su motivación en proyectos de TI?",
    opciones: [
      "Sentarlos separados para que no distraigan.",
      "Sentarlos cerca del profesor para vigilarlos.",
      "Asignarles roles de liderazgo o \"Scrum Master\" en pequeños grupos y dejarles proponer mejoras tecnológicas reales de su interés.",
      "Hacerles proyectos distintos pero aislados del grupo."
    ],
    correcta: 2,
    explicacion: "Aprovechar su madurez asignándoles roles de gestión ágil (Scrum) fomenta el liderazgo técnico, el sentido de pertenencia y la convivencia."
  },
  {
    id: 22,
    categoria: "Metodología",
    pregunta: "Para desarrollar pensamiento computacional sin conectividad permanente, ¿qué estrategia pertinente puede usar el docente técnico?",
    opciones: [
      "Usar tecnología solo como premio por terminar tareas escritas.",
      "Darles PDFs de libros de programación.",
      "Usar videos tutoriales sin práctica interactiva.",
      "Instalar IDEs locales y entornos de desarrollo (como XAMPP o editores offline) para que resuelvan problemas de algoritmos sin requerir internet."
    ],
    correcta: 3,
    explicacion: "Los entornos de desarrollo locales permiten la resolución interactiva de problemas de codificación burlando las limitaciones de conectividad."
  },
  {
    id: 23,
    categoria: "Metodología",
    pregunta: "Los estudiantes usan jerga informal en su documentación de código y nombres de variables (ej: variable 'loko'). ¿Qué intervención pedagógica promueve registros lingüísticos técnicos adecuados?",
    opciones: [
      "Bajarles puntos inmediatamente sin explicación.",
      "Prohibir palabras coloquiales recordando normas disciplinarias.",
      "Integrar análisis de buenas prácticas de clean code y convenciones de la industria (CamelCase, nombres descriptivos en inglés).",
      "Tolerarlo porque están aprendiendo a programar."
    ],
    correcta: 2,
    explicacion: "Enseñar estándares y convenciones de la industria TI (Clean Code) profesionaliza sus productos y enriquece su vocabulario técnico sin censura directa."
  },
  {
    id: 24,
    categoria: "Metodología",
    pregunta: "Para fortalecer la comunicación técnica efectiva ante clientes y en equipos de soporte TI, ¿qué estrategia de aula es ideal?",
    opciones: [
      "Evitar enseñar oratoria, no es necesario en TI.",
      "Enseñarles un guion formal estricto.",
      "Que hablen como deseen con los clientes simulados.",
      "Simular escenarios reales (Role-Play) de Mesa de Ayuda (Help Desk) fomentando escucha activa, preguntas de diagnóstico y empatía."
    ],
    correcta: 3,
    explicacion: "Las simulaciones de Help Desk desarrollan habilidades comunicativas transferibles y esenciales para el soporte a usuarios en Informática."
  },
  {
    id: 25,
    categoria: "Metodología",
    pregunta: "Los estudiantes logran resolver algoritmos pero no saben explicar su lógica y solo copian código. ¿Cómo fomentar la metacognición?",
    opciones: [
      "Darles el código ya hecho y que lo peguen.",
      "Exigirles documentar el código línea por línea y hacer code reviews (revisiones cruzadas) donde expliquen su solución a sus pares.",
      "Poner en una cartulina los pasos fijos de los bucles FOR.",
      "Hacer grupos que resuelvan algoritmos rápido."
    ],
    correcta: 1,
    explicacion: "Las Code Reviews entre pares y la documentación obligan a verbalizar la lógica, fortaleciendo el pensamiento computacional y la metacognición."
  },
  {
    id: 26,
    categoria: "Inclusión y Equidad",
    pregunta: "Un estudiante con discapacidad visual en un módulo de redes tiene dificultades para interpretar topologías en papel. ¿Qué adaptación garantiza su acceso a la información?",
    opciones: [
      "Usar el papel y esperar que un compañero se lo dicte.",
      "Utilizar maquetas físicas de topologías y equipos reales para reconocimiento táctil, e instalar software lector de pantalla (NVDA) en su equipo.",
      "Eximirlo de las evaluaciones de diagramas.",
      "Asignarle un tutor que dibuje por él."
    ],
    correcta: 1,
    explicacion: "La adaptación táctil (maquetas) y el software de accesibilidad (NVDA) garantizan su autonomía e inclusión funcional en el laboratorio de TI."
  },
  {
    id: 27,
    categoria: "Planificación",
    pregunta: "En un centro rural, el currículo exige aprender Cloud Computing, pero el internet es inestable. ¿Qué ajuste permite lograr las competencias del módulo?",
    opciones: [
      "Dejar de lado el tema porque es imposible.",
      "Evitar temas de redes y dar solo mantenimiento de PC.",
      "Seguir el programa oficial y quejarse de que no hay internet.",
      "Simular servidores Cloud instalando máquinas virtuales locales (VirtualBox) y contenedores (Docker) explicando que operan con los mismos principios."
    ],
    correcta: 3,
    explicacion: "La virtualización local permite el aprendizaje de arquitecturas complejas (Cloud/DevOps) cumpliendo los resultados de aprendizaje sin depender del internet externo."
  },
  {
    id: 28,
    categoria: "Gestión del Aula",
    pregunta: "En programación en parejas (Pair Programming), el estudiante avanzado corrige borrando el código de su compañero rápidamente, desmotivándolo. ¿Qué rol asume el docente?",
    opciones: [
      "Modelar las dinámicas de 'Driver' (conductor) y 'Navigator' (observador), enseñando cómo guiar al compañero mediante preguntas en lugar de quitarle el teclado.",
      "Reorganizar las parejas con un rol más punitivo.",
      "Registrar incidentes sin intervenir.",
      "Dejar que se arreglen como programadores adultos."
    ],
    correcta: 0,
    explicacion: "Enseñar formalmente la metodología de Pair Programming (Driver/Navigator) con reglas claras evita asimetrías y mejora el aprendizaje colaborativo de TI."
  },
  {
    id: 29,
    categoria: "Inclusión y Equidad",
    pregunta: "Para garantizar equidad educativa en los laboratorios de informática de la escuela técnica, ¿qué práctica es correcta?",
    opciones: [
      "No corregir errores de código para preservar motivación.",
      "Asignar proyectos estandarizados a todos por igual.",
      "Hacer ajustes priorizando la evaluación estricta.",
      "Adaptar las tareas, proporcionando extensiones (plugins) de ayuda en el IDE y andamiaje para asegurar oportunidades reales de dominar la tecnología."
    ],
    correcta: 3,
    explicacion: "La provisión de apoyos técnicos (snippets, plugins) e integraciones adaptativas representa el principio de equidad en la capacitación técnica."
  },
  {
    id: 30,
    categoria: "Inclusión y Equidad",
    pregunta: "Un estudiante con TDAH tiene problemas para completar prácticas largas de desarrollo de aplicaciones, aunque entiende los conceptos. ¿Qué adaptación favorecería su autonomía técnica?",
    opciones: [
      "Mantener el mismo proyecto monolítico para todos.",
      "Dividir el desarrollo de la aplicación en microtareas o sprints ágiles, revisando pequeños módulos funcionales frecuentes.",
      "Reducir las evaluaciones y los criterios.",
      "Mandar el proyecto como tarea para la casa."
    ],
    correcta: 1,
    explicacion: "Las metodologías ágiles (Sprints) benefician la gestión del tiempo y la atención de estudiantes neurodivergentes, fragmentando un gran problema en pequeñas victorias."
  },
  {
    id: 31,
    categoria: "Gestión del Aula",
    pregunta: "En un proyecto técnico de Redes LAN, varios estudiantes evitan hacer el cableado y se desconectan del grupo. ¿Cómo estructurar un trabajo colaborativo exitoso?",
    opciones: [
      "Dejar que decidan libremente qué hacer.",
      "Mantener el equipo sin intervenir y evaluar a todos con la misma nota final.",
      "Organizar el proyecto asignando roles (Jefe de Proyecto, Técnico de Cableado, Especialista de Configuración), promoviendo interdependencia positiva y rotación de funciones.",
      "Aplicar competencia individual y dar puntos extra al más rápido."
    ],
    correcta: 2,
    explicacion: "La simulación de roles organizacionales reales (TI) con responsabilidades concretas fomenta la interdependencia y reduce el desinterés."
  },
  {
    id: 32,
    categoria: "Inclusión y Equidad",
    pregunta: "Un estudiante con dislexia confunde frecuentemente la sintaxis del lenguaje HTML (ej. <body> vs </body>, <script> vs <src>). ¿Qué apoyo pedagógico le fortalece su comprensión sintáctica?",
    opciones: [
      "Darle más tiempo para que revise sus errores manuales.",
      "Entregarle el código ya fotocopiado y que no escriba.",
      "Enseñarle a utilizar linters, resaltado semántico de código (color coding) y autocompletado en editores como VS Code.",
      "Evaluarlo basándose estrictamente en los lineamientos visuales curriculares sin ayudas externas."
    ],
    correcta: 2,
    explicacion: "Las herramientas del entorno de desarrollo (linters, Intellisense) son apoyos tecnológicos estándar que asisten en las dificultades de decodificación de sintaxis."
  },
  {
    id: 33,
    categoria: "Evaluación",
    pregunta: "Al corregir un programa, el docente da retroalimentación diciendo 'Tus funciones tienen errores'. El estudiante no mejora. ¿Qué tipo de feedback fomentaría su aprendizaje autónomo?",
    opciones: [
      "'Veo que la lógica del bucle For es correcta; revisa el retorno (return) de la línea 14, ya que está devolviendo nulo en vez de un entero. Corrige eso e inténtalo de nuevo'.",
      "'El código se ve bien pero no compila, esfuérzate'.",
      "'Intenta programar mejor la próxima vez'.",
      "'El proyecto tiene muchos bugs, debes rehacerlo todo'."
    ],
    correcta: 0,
    explicacion: "El feedback técnico específico señala fortalezas, apunta a la línea y el concepto exacto del error y provee un paso concreto para corregir y autorregularse."
  },
  {
    id: 34,
    categoria: "Evaluación",
    pregunta: "El docente usa plataformas de retos de programación (ej. HackerRank, Moodle) fuera del aula. ¿Cómo evaluar que el uso de estas herramientas es equitativo e impacta el aprendizaje?",
    opciones: [
      "Solo ver cuántas veces inician sesión.",
      "Asignar puntos extra sin evaluar el progreso real de las competencias.",
      "Usarlas sin vincularlas al currículo.",
      "Hacer seguimiento analítico de los ejercicios resueltos y encuestar sobre qué barreras (de acceso, usabilidad o lógicas) presentan al usarlas."
    ],
    correcta: 3,
    explicacion: "La analítica de aprendizaje combinada con retroalimentación cualitativa evalúa efectivamente tanto el progreso técnico como las barreras de accesibilidad digital."
  },
  {
    id: 35,
    categoria: "Metodología",
    pregunta: "Estudiantes con buena técnica para reparar equipos no saben documentar informes técnicos (bitácoras) claros para el cliente. ¿Qué estrategia desarrolla su expresión técnica?",
    opciones: [
      "No evaluarlo porque lo importante es la reparación.",
      "Fomentar la elaboración de manuales, uso de plataformas de gestión de tickets (HelpDesk) y simulaciones de explicación de averías al cliente.",
      "Quitar reportes escritos para no presionarlos.",
      "Que copien de internet manuales de servicio completos."
    ],
    correcta: 1,
    explicacion: "Integrar la redacción de bitácoras y gestión de tickets TI desarrolla la competencia comunicativa técnica requerida en el sector laboral."
  },
  {
    id: 36,
    categoria: "Inclusión y Equidad",
    pregunta: "Un estudiante con discapacidad auditiva pierde explicaciones importantes durante clases donde el docente programa en vivo (live coding). ¿Cuál es la adaptación más pertinente?",
    opciones: [
      "Hablarle más fuerte desde el escritorio y usar la pizarra tradicional.",
      "Darle un manual y que lea mientras los demás ven la pantalla.",
      "Pedirle que no participe en trabajos grupales por el momento.",
      "Facilitar el código fuente previamente, usar subtítulos en proyecciones y compartir la sesión del IDE (Live Share) para que vea las acciones directamente en su monitor."
    ],
    correcta: 3,
    explicacion: "Herramientas de trabajo colaborativo en tiempo real (Live Share) y apoyos visuales aseguran que el estudiante acceda a la demostración de código equitativamente."
  },
  {
    id: 37,
    categoria: "Evaluación",
    pregunta: "El docente comenta 'Bien hecho' o 'Falla la lógica' en los repositorios de GitHub de sus estudiantes. Nota que los errores se repiten. ¿Qué enfoque corrige esto?",
    opciones: [
      "Hacer 'Code Reviews' (Revisiones de código) con comentarios específicos sobre qué patrón de diseño falló y enlazar a documentación pertinente.",
      "Asignar calificación por rúbrica oculta.",
      "Esperar a la entrega final del software para corregir.",
      "Decir en público quién tuvo más errores de compilación."
    ],
    correcta: 0,
    explicacion: "En desarrollo de software, la revisión de código específica y fundamentada genera una retroalimentación formativa y accionable que orienta el desarrollo profesional."
  },
  {
    id: 38,
    categoria: "Gestión del Aula",
    pregunta: "En un proyecto de Creación de Redes, los estudiantes se aburren armando cables sin propósito. ¿Qué acción aumenta la motivación del equipo?",
    opciones: [
      "Simular que son una empresa consultora TI que debe instalar la red de un cibercafé o de las oficinas administrativas de la escuela basándose en requerimientos reales.",
      "Obligarlos a hacer 20 cables de red como castigo para que aprendan.",
      "Darles una red distinta a cada uno para evaluarlos más rápido.",
      "Centrarse en la memorización de la norma T568A y T568B."
    ],
    correcta: 0,
    explicacion: "El aprendizaje basado en escenarios reales/industriales otorga sentido y propósito a las tareas operativas, incrementando significativamente la motivación en áreas técnicas."
  },
  {
    id: 39,
    categoria: "Planificación",
    pregunta: "El primer día en el taller técnico, el docente muestra componentes reales desarmados, consolas antiguas, y herramientas de soporte. ¿Cuál es su propósito pedagógico inicial?",
    opciones: [
      "Dar miedo sobre la dificultad del módulo técnico.",
      "Crear un ambiente de inmersión tecnológica que despierte curiosidad, motivación y un sentido de identidad técnica en el laboratorio.",
      "Aprovechar chatarra porque no tenía planificación lista.",
      "Que los estudiantes jueguen y no estudien."
    ],
    correcta: 1,
    explicacion: "La ambientación inmersiva en los talleres de FP (Formación Profesional) vincula inmediatamente al estudiante con su campo profesional y despierta curiosidad técnica."
  },
  {
    id: 40,
    categoria: "Evaluación",
    pregunta: "Al finalizar un proyecto de Desarrollo de Software con metodología Scrum, el docente desea evaluar los procesos colaborativos (Daily, asignación de tareas en Trello, resolución de conflictos). ¿Qué instrumento es más pertinente?",
    opciones: [
      "Una prueba escrita estandarizada de términos ágiles.",
      "Observación directa y una rúbrica de Soft Skills y desempeño de roles dentro del equipo ágil, complementado con autoevaluación (Sprint Retrospective).",
      "Calificar todo el proyecto basándose en el diseño de los botones de la app.",
      "Preguntar al finalizar si todos trabajaron igual."
    ],
    correcta: 1,
    explicacion: "La rúbrica centrada en la metodología de trabajo, apoyada por eventos propios de Scrum como la retrospectiva, permite evaluar la colaboración y procesos ágiles rigurosamente."
  }
];