const initialData = [
  // --- DÍA 1 ---
  {
    id: "1",
    date: "2026-04-16",
    time: "06:00",
    activity: "Recoger a los directores del aeropuerto/terrapuerto",
    description: "Recibir a los directores y embarcarlos en sus buses",
    responsible: "Gus, Dani, Isa, Cyn",
    type: "logistic",
    subtasks: [
      { id: "1-1", text: "Walter lleva a Gus y Dani de SFS al Aeropuerto", completed: false },
      { id: "1-2", text: "Tener carteles de EPE que los puedan identificar", completed: false },
      { id: "1-3", text: "Incluir a Gus y Dani en el grupo de movilidad", completed: false }
    ]
  },
  {
    id: "2",
    date: "2026-04-16",
    time: "07:00",
    activity: "Equipo SFA se traslada / Dejar bienvenida",
    description: "Dejar en cada cuarto, la carta y el chocolate por participante",
    responsible: "Todo el equipo",
    type: "logistic",
    subtasks: [
      { id: "2-1", text: "SFS: Enviar listas y placas de autos a la puerta para que los dejen pasar", completed: false },
      { id: "2-2", text: "Tener los carteles para las habitaciones, así como la carta impresa + el chocolate", completed: false },
      { id: "2-3", text: "Todo el equipo ayuda a colocar la carta y chocolate en las habitaciones", completed: false }
    ]
  },
  {
    id: "3",
    date: "2026-04-16",
    time: "08:00",
    activity: "Desayuno",
    description: "Desayuno de participantes y equipo",
    responsible: "",
    type: "meal",
    subtasks: [
      { id: "3-1", text: "Asegurar que todos tomen desayuno a tiempo", completed: false }
    ]
  },
  {
    id: "4",
    date: "2026-04-16",
    time: "08:00 - 13:00",
    activity: "Recepción",
    description: "Las delegaciones van llegando. Los directores reciben su kit, gafete. Firman asistencia y se toman fotos.",
    responsible: "Shirley, Samu, Equipo",
    type: "main",
    subtasks: [
      { id: "4-1", text: "Kits armados: bolso, polo, tomatodo, lapicero, cuaderno, bloqueador y repelente", completed: false },
      { id: "4-2", text: "Entregar llaves de la habitación", completed: false },
      { id: "4-3", text: "Tener listas impresas por casa para la firma", completed: false },
      { id: "4-4", text: "Asignar los espacios para las fotos (burbujas/marcos)", completed: false },
      { id: "4-5", text: "Cartel de Bienvenida (2)", completed: false },
      { id: "4-6", text: "Dividir al equipo: Quién está en mesa, quién en fotos, quién ubica en habitaciones", completed: false }
    ]
  },
  {
    id: "5",
    date: "2026-04-16",
    time: "13:30",
    activity: "Almuerzo",
    description: "Almuerzo general",
    responsible: "Todo el equipo",
    type: "meal",
    subtasks: [
      { id: "5-1", text: "Separar mesas para vegetarianos y dietas", completed: false },
      { id: "5-2", text: "El equipo se asegura que sus participantes estén almorzando", completed: false }
    ]
  },
  {
    id: "6",
    date: "2026-04-16",
    time: "14:00",
    activity: "Fotos grupales",
    description: "Tenemos un espacio para tomar las fotos a los equipos: SFA, 5 regiones",
    responsible: "",
    type: "main",
    subtasks: [
      { id: "6-1", text: "Ver espacios para tomar las fotos grupales utilizando los marcos y burbujas", completed: false },
      { id: "6-2", text: "Movilizar a los participantes para las fotos", completed: false }
    ]
  },
  {
    id: "7",
    date: "2026-04-16",
    time: "15:00 - 16:30",
    activity: "Bienvenida",
    description: "Normas de la casa, presentación del equipo, Ejercicio de bienvenida.",
    responsible: "Cecilia, Andy, Isa",
    type: "main",
    subtasks: [
      { id: "7-1", text: "Tener listos los Materiales para la bienvenida", completed: false },
      { id: "7-2", text: "Preparar Espacios: SFA: Auditorio primer piso / SFS: Aula grande", completed: false },
      { id: "7-3", text: "Bienvenida y Normas: SFA: Vilma / SFS: Charo", completed: false },
      { id: "7-4", text: "Comentar la distribución de las aulas", completed: false }
    ]
  },
  {
    id: "8",
    date: "2026-04-16",
    time: "16:30 - 17:00",
    activity: "Traslado y Break",
    description: "Pausa para café",
    responsible: "Equipo",
    type: "break",
    subtasks: [
      { id: "8-1", text: "Tener listos los breaks", completed: false },
      { id: "8-2", text: "Ayudar a movilizar a los participantes", completed: false }
    ]
  },
  {
    id: "9",
    date: "2026-04-16",
    time: "17:00 - 18:30",
    activity: "Formación (EDA 1)",
    description: "Sesiones de formación",
    responsible: "Lore, Andy, Ore, Dani",
    type: "main",
    subtasks: [
      { id: "9-1", text: "Facilitan: SFS: Lore y Andy / SFA: Ore y Dani", completed: false },
      { id: "9-2", text: "Tener las listas por aula (compartirlas en el grupo del ENFOCO)", completed: false },
      { id: "9-3", text: "Crear grupo de WhatsApp de sesiones", completed: false },
      { id: "9-4", text: "Todo el equipo hace seguimiento a sus dires para que ingresen y acompañan", completed: false }
    ]
  },
  {
    id: "10",
    date: "2026-04-16",
    time: "18:45 - 19:00",
    activity: "Reunión de núcleos 1",
    description: "Firma de Cartas de compromiso. Leerlo juntos y que lo puedan firmar",
    responsible: "Cada Coli a cargo",
    type: "main",
    subtasks: [
      { id: "10-1", text: "Tener las cartas de compromiso impresas (1 por director)", completed: false },
      { id: "10-2", text: "Asignar espacios para la reunión", completed: false }
    ]
  },
  {
    id: "11",
    date: "2026-04-16",
    time: "19:00",
    activity: "Cena",
    description: "",
    responsible: "",
    type: "meal",
    subtasks: [
      { id: "11-1", text: "Verificar asistencia a la cena", completed: false }
    ]
  },
  {
    id: "12",
    date: "2026-04-16",
    time: "20:00",
    activity: "Espacio de Distensión",
    description: "Este espacio es libre, los directores pueden ir a descansar o distraerse.",
    responsible: "Jos, Gus",
    type: "break",
    subtasks: [
      { id: "12-1", text: "Asignar un aula para el espacio", completed: false },
      { id: "12-2", text: "Organizar los juegos de mesa (Jenga, cartas, etc.)", completed: false },
      { id: "12-3", text: "Imprimir algunas fotos del día para mostrar", completed: false }
    ]
  },
  {
    id: "13",
    date: "2026-04-16",
    time: "22:15 - 22:45",
    activity: "Decante del Equipo",
    description: "Revisión final del equipo logística, COLIS, Formación.",
    responsible: "Isa, Ceci, Ore",
    type: "logistic",
    subtasks: [
      { id: "13-1", text: "Revisar la ruta del día siguiente", completed: false },
      { id: "13-2", text: "Abrazar logros del día", completed: false },
      { id: "13-3", text: "Proponer acciones para mejorar el despliegue al siguiente día", completed: false },
      { id: "13-4", text: "Solicitar apoyo del equipo si es necesario", completed: false }
    ]
  },

  // --- DÍA 2 ---
  {
    id: "d2-14",
    date: "2026-04-17",
    time: "07:00",
    activity: "Antes del Desayuno",
    description: "",
    responsible: "Logística",
    type: "logistic",
    subtasks: [
      { id: "d2-14-1", text: "Tener los mensajes del día para poner en el desayuno", completed: false }
    ]
  },
  {
    id: "d2-15",
    date: "2026-04-17",
    time: "08:00",
    activity: "Desayuno",
    description: "Mensajito del dia",
    responsible: "Equipo",
    type: "meal",
    subtasks: [
      { id: "d2-15-1", text: "Velar por que sus participantes esten tomando desayuno", completed: false }
    ]
  },
  {
    id: "d2-16",
    date: "2026-04-17",
    time: "09:00 - 10:30",
    activity: "Formación (EDA 2)",
    description: "Sesiones de formación",
    responsible: "Gus, Nohe, Shir",
    type: "main",
    subtasks: [
      { id: "d2-16-1", text: "Apoyar al soporte de formación para tener aulas listas", completed: false },
      { id: "d2-16-2", text: "Facilita: SFS: Gus / SFA: Nohe y Shir", completed: false },
      { id: "d2-16-3", text: "Todo el equipo de hacer seguimiento a sus dires para que ingresen y acompañan en las sesiones", completed: false }
    ]
  },
  {
    id: "d2-17",
    date: "2026-04-17",
    time: "10:30 - 11:00",
    activity: "Traslado y BreaK",
    description: "",
    responsible: "Equipo",
    type: "break",
    subtasks: [
      { id: "d2-17-1", text: "Velar por que el break este listo", completed: false },
      { id: "d2-17-2", text: "Apoyar para cumplir con los tiempos", completed: false }
    ]
  },
  {
    id: "d2-18",
    date: "2026-04-17",
    time: "11:00 - 12:30",
    activity: "Formación (EDA 1)",
    description: "Sesiones de formación",
    responsible: "Lore, Andy, Ore, Dani",
    type: "main",
    subtasks: [
      { id: "d2-18-1", text: "Apoyar al soporte de formación para tener aulas listas", completed: false },
      { id: "d2-18-2", text: "Facilita: SFS: Lore y Andy / SFA: Ore y Dani", completed: false },
      { id: "d2-18-3", text: "Todo el equipo de hacer seguimiento a sus dires para que ingresen y acompañan en las sesiones", completed: false }
    ]
  },
  {
    id: "d2-19",
    date: "2026-04-17",
    time: "12:30 - 13:30",
    activity: "Reunión de Núcleos",
    description: "Decante de lo trabajado en el momento. Cada núcleo en un espacio.",
    responsible: "Cada Coli a cargo de su núcleo",
    type: "main",
    subtasks: [
      { id: "d2-19-1", text: "Tener los espacios libres", completed: false },
      { id: "d2-19-2", text: "Cada Coli a cargo de su núcleo", completed: false },
      { id: "d2-19-3", text: "OBS: Este espacio puede ser backup por si los tiempos se alteran durante la mañana. Jefas de casa toman la decisión", completed: false }
    ]
  },
  {
    id: "d2-20",
    date: "2026-04-17",
    time: "13:30 - 14:30",
    activity: "Previo al almuerzo / Almuerzo",
    description: "",
    responsible: "Equipo",
    type: "meal",
    subtasks: [
      { id: "d2-20-1", text: "Poner la invitación a la presentación de regiones", completed: false },
      { id: "d2-20-2", text: "Separar mesas para vegetarianos y dietas", completed: false },
      { id: "d2-20-3", text: "Velar porque todos los participantes almuercen", completed: false }
    ]
  },
  {
    id: "d2-21",
    date: "2026-04-17",
    time: "14:30 - 15:00",
    activity: "Espacio para fotos",
    description: "",
    responsible: "Equipo",
    type: "main",
    subtasks: [
      { id: "d2-21-1", text: "Coordinar grupo y tomar fotos", completed: false }
    ]
  },
  {
    id: "d2-22",
    date: "2026-04-17",
    time: "15:00 - 16:30",
    activity: "Formación (EDA 2)",
    description: "Sesiones de formación",
    responsible: "Gus, Nohe, Shir",
    type: "main",
    subtasks: [
      { id: "d2-22-1", text: "Apoyar al soporte de formación para tener aulas listas", completed: false },
      { id: "d2-22-2", text: "Facilita: SFS: Gus / SFA: Nohe y Shir", completed: false },
      { id: "d2-22-3", text: "Todo el equipo de hacer seguimiento a sus dires para que ingresen y acompañan en las sesiones", completed: false }
    ]
  },
  {
    id: "d2-23",
    date: "2026-04-17",
    time: "16:30 - 17:00",
    activity: "Traslados + Break",
    description: "",
    responsible: "Equipo",
    type: "break",
    subtasks: [
      { id: "d2-23-1", text: "Ayudar a movilizar a los participantes", completed: false }
    ]
  },
  {
    id: "d2-24",
    date: "2026-04-17",
    time: "17:00 - 18:30",
    activity: "Formación (EDA 1 Aplicar boleta de salida)",
    description: "Sesiones de formación",
    responsible: "Lore, Andy, Ore, Dani",
    type: "main",
    subtasks: [
      { id: "d2-24-1", text: "Apoyar al soporte de formación para tener aulas listas", completed: false },
      { id: "d2-24-2", text: "Facilita: SFS: Lore y Andy / SFA: Ore y Dani", completed: false },
      { id: "d2-24-3", text: "Todo el equipo de hacer seguimiento a sus dires para que ingresen y acompañan en las sesiones", completed: false }
    ]
  },
  {
    id: "d2-25",
    date: "2026-04-17",
    time: "18:30 - 19:00",
    activity: "Reunión de Núcleos",
    description: "Preparan sus materiales para la presentación de regiones",
    responsible: "Cada Coli responsable de su núcleo",
    type: "main",
    subtasks: [
      { id: "d2-25-1", text: "Preparan sus materiales para la presentación de regiones", completed: false },
      { id: "d2-25-2", text: "SFA: Coordinar el recojo con la movilidad", completed: false }
    ]
  },
  {
    id: "d2-26",
    date: "2026-04-17",
    time: "19:00 - 19:45",
    activity: "Cena",
    description: "SFA: La cena hasta las 7:45 min",
    responsible: "Equipo",
    type: "meal",
    subtasks: [
      { id: "d2-26-1", text: "SFA: La cena hasta las 7:45 min", completed: false }
    ]
  },
  {
    id: "d2-27",
    date: "2026-04-17",
    time: "20:00",
    activity: "SFA: Traslado a SFS / SFS: Preparar Presentación de Regiones",
    description: "",
    responsible: "Julia + Daniel",
    type: "logistic",
    subtasks: [
      { id: "d2-27-1", text: "Dos buses 45 y una VAN 25", completed: false },
      { id: "d2-27-2", text: "Espacio, Equipo de sonido, luces, sillas, música", completed: false },
      { id: "d2-27-3", text: "Cada Coli es responsable de asegurar que todos los participantes suban a los buses", completed: false },
      { id: "d2-27-4", text: "Tener los audios el dia martes o miércoles para armar el playlist", completed: false }
    ]
  },
  {
    id: "d2-28",
    date: "2026-04-17",
    time: "20:30",
    activity: "Presentación de Regiones",
    description: "Las regiones presentarán en 4 min un baile/poema/etc que los represente.",
    responsible: "Isa/Nohe?",
    type: "main",
    subtasks: [
      { id: "d2-28-1", text: "Incluir a los especialistas de regiones en cada grupo", completed: false },
      { id: "d2-28-2", text: "Shelvy: responsable de la música / Andy: Facilita", completed: false },
      { id: "d2-28-3", text: "El equipo colabora motivando a sus regiones y ayudando con el orden para su presentación.", completed: false }
    ]
  },
  {
    id: "d2-29",
    date: "2026-04-17",
    time: "22:00 - 22:15",
    activity: "SFA: Retorno a la casa de retiro",
    description: "",
    responsible: "Equipo",
    type: "logistic",
    subtasks: [
      { id: "d2-29-1", text: "Coordinar con los buses", completed: false },
      { id: "d2-29-2", text: "Equipo, ayuda para facilitar el traslado", completed: false }
    ]
  },
  {
    id: "d2-30",
    date: "2026-04-17",
    time: "22:15 - 22:45",
    activity: "Decante del Equipo",
    description: "Revisar la ruta del día siguiente. Abrazar logros del dia. Proponer acciones para mejorar...",
    responsible: "SFS: Isa SFA: Ceci+ Ore",
    type: "logistic",
    subtasks: [
      { id: "d2-30-1", text: "Participan todos los equipos, logística. COLIS, Formación", completed: false },
      { id: "d2-30-2", text: "Solicitar apoyo del equipo si es necesario", completed: false }
    ]
  },
  {
    id: "d2-31",
    date: "2026-04-17",
    time: "23:00",
    activity: "Descanso del equipo + Cierre día 2",
    description: "Fin del Día 2.",
    responsible: "",
    type: "break",
    subtasks: [
      { id: "d2-31-1", text: "Descanso general", completed: false }
    ]
  },

  // --- DÍA 3 ---
  {
    id: "d3-1",
    date: "2026-04-18",
    time: "07:00",
    activity: "Antes del desayuno",
    description: "Incluir invitación para la Tribu",
    responsible: "Logística",
    type: "logistic",
    subtasks: [
      { id: "d3-1-1", text: "Incluir invitación para la Tribu", completed: false }
    ]
  },
  {
    id: "d3-2",
    date: "2026-04-18",
    time: "08:00",
    activity: "Desayuno",
    description: "",
    responsible: "Equipo",
    type: "meal",
    subtasks: [
      { id: "d3-2-1", text: "Velar para que los participantes tomen desayuno", completed: false }
    ]
  },
  {
    id: "d3-3",
    date: "2026-04-18",
    time: "09:00 - 10:30",
    activity: "Formación (EDA 2)",
    description: "Sesiones de formación",
    responsible: "Gus, Nohe, Shir",
    type: "main",
    subtasks: [
      { id: "d3-3-1", text: "Apoyar al soporte de formación para tener aulas listas", completed: false },
      { id: "d3-3-2", text: "Facilita: SFS: Gus / SFA: Nohe y Shir", completed: false },
      { id: "d3-3-3", text: "Todo el equipo de hacer seguimiento a sus dires para que ingresen y acompañan en las sesiones", completed: false }
    ]
  },
  {
    id: "d3-4",
    date: "2026-04-18",
    time: "10:30 - 11:00",
    activity: "Traslado y BreaK",
    description: "",
    responsible: "Equipo",
    type: "break",
    subtasks: [
      { id: "d3-4-1", text: "Velar por que el break este listo", completed: false },
      { id: "d3-4-2", text: "Apoyar para cumplir con los tiempos", completed: false }
    ]
  },
  {
    id: "d3-5",
    date: "2026-04-18",
    time: "11:00 - 12:30",
    activity: "Formación (EDA 4 Boleta de Salida)",
    description: "Sesiones de formación",
    responsible: "Isa, Ceci",
    type: "main",
    subtasks: [
      { id: "d3-5-1", text: "Apoyar al soporte de formación para tener aulas listas", completed: false },
      { id: "d3-5-2", text: "Facilita: SFS: Isa / SFA: Ceci", completed: false },
      { id: "d3-5-3", text: "Todo el equipo de hacer seguimiento a sus dires para que ingresen y acompañan en las sesiones", completed: false }
    ]
  },
  {
    id: "d3-6",
    date: "2026-04-18",
    time: "12:30 - 13:30",
    activity: "Reunión de Núcleos",
    description: "Podemos utilizar el espacio para varios propósitos: Fotos de núcleo, Decante, Dinámica de POV.",
    responsible: "Cada Coli",
    type: "main",
    subtasks: [
      { id: "d3-6-1", text: "Ver espacios para los núcleos", completed: false },
      { id: "d3-6-2", text: "Cada Coli responsable de sus núcleos", completed: false },
      { id: "d3-6-3", text: "OBS: Este espacio puede ser backup por si los tiempos se alteran durante la mañana", completed: false }
    ]
  },
  {
    id: "d3-7",
    date: "2026-04-18",
    time: "13:00",
    activity: "Preparación para el almuerzo",
    description: "",
    responsible: "Logística",
    type: "logistic",
    subtasks: [
      { id: "d3-7-1", text: "Incluir los mensajitos con las paletitas", completed: false }
    ]
  },
  {
    id: "d3-8",
    date: "2026-04-18",
    time: "13:30 - 14:30",
    activity: "Almuerzo",
    description: "",
    responsible: "Equipo",
    type: "meal",
    subtasks: [
      { id: "d3-8-1", text: "Ver mesas de vegetarianos y dietas", completed: false },
      { id: "d3-8-2", text: "Velar para que los participantes almuercen", completed: false }
    ]
  },
  {
    id: "d3-9",
    date: "2026-04-18",
    time: "14:30 - 15:00",
    activity: "Descanso o Fotos para grupos pendientes",
    description: "",
    responsible: "Cada Coli",
    type: "main",
    subtasks: [
      { id: "d3-9-1", text: "Foto por casa", completed: false },
      { id: "d3-9-2", text: "Cada Coli vela por que sus núcleos tengan sus fotitos", completed: false }
    ]
  },
  {
    id: "d3-10",
    date: "2026-04-18",
    time: "15:00 - 16:30",
    activity: "Formación (EDA 2 Boleta de salida)",
    description: "Sesiones de formación",
    responsible: "Gus, Nohe, Shir",
    type: "main",
    subtasks: [
      { id: "d3-10-1", text: "Apoyar al soporte de formación para tener aulas listas", completed: false },
      { id: "d3-10-2", text: "Facilita: SFS: Gus / SFA: Nohe y Shir", completed: false },
      { id: "d3-10-3", text: "Todo el equipo de hacer seguimiento a sus dires para que ingresen y acompañan en las sesiones", completed: false }
    ]
  },
  {
    id: "d3-11",
    date: "2026-04-18",
    time: "16:00",
    activity: "Breaks para llevar (bolsas de papel)",
    description: "",
    responsible: "Cada Coli",
    type: "logistic",
    subtasks: [
      { id: "d3-11-1", text: "Preparar breaks para llevar (bolsas de papel)", completed: false },
      { id: "d3-11-2", text: "Cada Coli reparte sus breaks", completed: false }
    ]
  },
  {
    id: "d3-12",
    date: "2026-04-18",
    time: "16:30 - 18:30",
    activity: "Salida a Lima Centro",
    description: "Paseo al centro de Lima en 3 momentos. (Catedral, Tiempo libre, Alameda Chabuca Granda).",
    responsible: "Equipo",
    type: "main",
    subtasks: [
      { id: "d3-12-1", text: "SFS: Sale en Bus (coordinar choferes) / SFA: Sale caminando", completed: false },
      { id: "d3-12-2", text: "SFA: Las cositas para compartir Walter las lleva a la casa SFS", completed: false },
      { id: "d3-12-3", text: "Primer momento: Primer punto de encuentro - La Catedral", completed: false },
      { id: "d3-12-4", text: "Segundo momento: Espacio libre (Tener mapas del centro de Lima)", completed: false },
      { id: "d3-12-5", text: "Cada Coli hace seguimiento a su grupo", completed: false },
      { id: "d3-12-6", text: "Tercer momento: Segundo punto de encuentro - Alameda Chabuca Granda", completed: false },
      { id: "d3-12-7", text: "Cada Coli es responsable que su grupo suba a los buses indistintamente", completed: false }
    ]
  },
  {
    id: "d3-13",
    date: "2026-04-18",
    time: "19:00",
    activity: "Cena San Francisco solano",
    description: "",
    responsible: "Cada Coli",
    type: "meal",
    subtasks: [
      { id: "d3-13-1", text: "Tener las mesas separadas por vegetarianos y dietas", completed: false },
      { id: "d3-13-2", text: "Cada Coli responsable de que sus Directores cenen", completed: false }
    ]
  },
  {
    id: "d3-14",
    date: "2026-04-18",
    time: "20:00",
    activity: "Tribu y Cierre",
    description: "Presentación de D1, dinámica de la Tribu y Cierre inspirador del evento.",
    responsible: "Andy, Equipo",
    type: "main",
    subtasks: [
      { id: "d3-14-1", text: "Antes de la Tribu: Ver toldo, equipo, luces y música", completed: false },
      { id: "d3-14-2", text: "Tribu: Presentación Chicos de D1 (Facilita Andy)", completed: false },
      { id: "d3-14-3", text: "Tribu: Comprar pulseritas", completed: false },
      { id: "d3-14-4", text: "Todo el equipo participa en la Tribu", completed: false },
      { id: "d3-14-5", text: "Cierre Inspirador del evento", completed: false }
    ]
  },
  {
    id: "d3-15",
    date: "2026-04-18",
    time: "22:00 - 22:15",
    activity: "SFA: Retorno a la casa de retiro",
    description: "",
    responsible: "Equipo",
    type: "logistic",
    subtasks: [
      { id: "d3-15-1", text: "Coordinar con los buses", completed: false },
      { id: "d3-15-2", text: "Equipo, ayuda para facilitar el traslado", completed: false }
    ]
  },
  {
    id: "d3-16",
    date: "2026-04-18",
    time: "22:15 - 22:45",
    activity: "Decante del Equipo",
    description: "Revisar ruta, abrazar logros, proponer acciones de mejora.",
    responsible: "SFS: Isa, SFA: Ceci+Ore",
    type: "logistic",
    subtasks: [
      { id: "d3-16-1", text: "Participan todos los equipos, logística. COLIS, Formación", completed: false },
      { id: "d3-16-2", text: "Solicitar apoyo del equipo si es necesario", completed: false }
    ]
  },
  {
    id: "d3-17",
    date: "2026-04-18",
    time: "23:00",
    activity: "Descanso del equipo + Cierre día 3",
    description: "Fin del Día 3.",
    responsible: "",
    type: "break",
    subtasks: [
      { id: "d3-17-1", text: "Descanso general", completed: false }
    ]
  },

  // --- DÍA 4 ---
  {
    id: "d4-1",
    date: "2026-04-19",
    time: "06:00",
    activity: "Antes del desayuno (Salida de grupos)",
    description: "Incluir mensaje con lapiz. Salida de: Amazonas, Arequipa, Piura",
    responsible: "Logística",
    type: "logistic",
    subtasks: [
      { id: "d4-1-1", text: "Preparar loncheras para los directores que salen al aeropuerto (Biscochitos/frutas)", completed: false },
      { id: "d4-1-2", text: "Coordinar las movilidades", completed: false }
    ]
  },
  {
    id: "d4-2",
    date: "2026-04-19",
    time: "08:00",
    activity: "Desayuno",
    description: "",
    responsible: "Equipo",
    type: "meal",
    subtasks: [
      { id: "d4-2-1", text: "Velar para que los participantes tomen desayuno", completed: false }
    ]
  },
  {
    id: "d4-3",
    date: "2026-04-19",
    time: "09:00 - 10:30",
    activity: "Formación (EDA 3 Boleta de Salida)",
    description: "Facilita: Directores invitados, Formación.",
    responsible: "Formación, Equipo",
    type: "main",
    subtasks: [
      { id: "d4-3-1", text: "Apoyar al soporte de formación para tener aulas listas", completed: false },
      { id: "d4-3-2", text: "Todo el equipo de hacer seguimiento a sus dires para que ingresen a sus sesiones y acompañan", completed: false }
    ]
  },
  {
    id: "d4-4",
    date: "2026-04-19",
    time: "10:40 - 13:00",
    activity: "Espacio libre / Salidas Grupo 2",
    description: "Salida de: Cajamarca, Puno, Valle Fortaleza, Huari",
    responsible: "Logística",
    type: "main",
    subtasks: [
      { id: "d4-4-1", text: "Preparar loncheras y coordinar movilidades", completed: false }
    ]
  },
  {
    id: "d4-5",
    date: "2026-04-19",
    time: "12:00",
    activity: "Almuerzo",
    description: "",
    responsible: "Equipo",
    type: "meal",
    subtasks: [
      { id: "d4-5-1", text: "Asegurar el almuerzo de los grupos restantes", completed: false }
    ]
  },
  {
    id: "d4-6",
    date: "2026-04-19",
    time: "14:00 - 15:00",
    activity: "Salida del siguiente grupo",
    description: "Salida de: La Libertad, Lima, Ica, Huarmey, Valle Fortaleza (5)",
    responsible: "Logística",
    type: "logistic",
    subtasks: [
      { id: "d4-6-1", text: "Coordinar movilidades", completed: false }
    ]
  }
];

const days = [
  { id: "2026-04-16", label: "Día 1", dateStr: "16 de Abr" },
  { id: "2026-04-17", label: "Día 2", dateStr: "17 de Abr" },
  { id: "2026-04-18", label: "Día 3", dateStr: "18 de Abr" },
  { id: "2026-04-19", label: "Día 4", dateStr: "19 de Abr" }
];