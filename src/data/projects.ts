export const projectIndustries = [
  "Mining",
  "Education",
  "Agribusiness",
  "Manufacturing",
  "Hospitality",
  "Government/Tax",
  "HR",
  "Logistics",
] as const;

export const projectTechnologyFilters = [
  "React",
  "Node.js",
  ".NET",
  "SQL Server",
  "GeneXus",
  "Power BI",
  "PLC Integration",
  "PDF",
  "SMS",
  "Email",
] as const;

export const projectCompanies = [
  "Agrosuper",
  "JEJ Ingeniería",
  "Fundación Educacional Estratégica",
  "Apinformática",
  "Packing La Viña",
  "Viña Pérez Cruz",
  "Canada Projects",
] as const;

export type ProjectIndustry = (typeof projectIndustries)[number];
export type ProjectCompany = (typeof projectCompanies)[number];
export type ProjectStatus = "production" | "in-development" | "concept";

export interface Project {
  id: string;
  title: string;
  company: ProjectCompany;
  industry: ProjectIndustry[];
  country: "Chile" | "Canada";
  status: ProjectStatus;
  role: string;
  technologies: string[];
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  impact: string;
  tags: string[];
}

export const statusLabels: Record<ProjectStatus, string> = {
  production: "Productivo / implementado",
  "in-development": "En desarrollo",
  concept: "Concepto no implementado",
};

export const projects: Project[] = [
  {
    id: "edi-teacher-performance-evaluation-system",
    title: "EDI Teacher Performance Evaluation System",
    company: "Fundación Educacional Estratégica",
    industry: ["Education", "HR"],
    country: "Chile",
    status: "production",
    role: "Full Stack Developer",
    technologies: ["React", "Node.js", "SQL Server"],
    summary:
      "Sistema para evaluación de desempeño docente en aula mediante plantillas con objetivos generales, objetivos específicos y acciones ponderadas.",
    problem:
      "La fundación necesitaba estandarizar la evaluación docente y registrar evidencias comparables entre cursos, evaluadores y periodos.",
    solution:
      "Se desarrolló una plataforma basada en plantillas configurables, ponderaciones de 0 a 100% y captura estructurada de resultados por docente.",
    features: [
      "Plantillas con objetivos generales, objetivos específicos y acciones evaluables.",
      "Ponderaciones configurables de 0 a 100%.",
      "Registro de evaluación por docente, curso y observación.",
      "Consolidación de resultados para seguimiento interno.",
    ],
    impact:
      "Ayudó a ordenar el proceso de evaluación docente y a convertir observaciones de aula en información trazable para gestión académica.",
    tags: ["Evaluación docente", "Gestión académica", "Plantillas"],
  },
  {
    id: "simce-pme-digital-assessment-platform",
    title: "SIMCE / PME Digital Assessment Platform",
    company: "Fundación Educacional Estratégica",
    industry: ["Education"],
    country: "Chile",
    status: "production",
    role: "Full Stack Developer",
    technologies: ["React", "Node.js", "SQL Server", "Power BI"],
    summary:
      "Plataforma para ensayos SIMCE digitales, sesiones por curso, respuestas online, resultados automáticos, notas de 1 a 7 y reportería histórica.",
    problem:
      "Los equipos académicos requerían medir avances por eje, habilidad e indicador de aprendizaje sin depender de procesos manuales lentos.",
    solution:
      "Se implementó una plataforma de evaluaciones digitales con corrección automática, cálculo de notas y clasificación analítica para reportes históricos.",
    features: [
      "Sesiones de evaluación por curso.",
      "Respuestas online y corrección automática.",
      "Cálculo de notas en escala de 1 a 7.",
      "Clasificación por eje, habilidad e indicador de aprendizaje.",
      "Reportes históricos y visualización ejecutiva en Power BI.",
    ],
    impact:
      "Permitió transformar ensayos digitales en resultados accionables para seguimiento PME y toma de decisiones pedagógicas.",
    tags: ["SIMCE", "PME", "Evaluación digital", "Business Intelligence"],
  },
  {
    id: "learning-surveys-platform",
    title: "Learning Surveys Platform",
    company: "Fundación Educacional Estratégica",
    industry: ["Education"],
    country: "Chile",
    status: "production",
    role: "Full Stack Developer",
    technologies: ["React", "Node.js", "SQL Server", "SMS"],
    summary:
      "Sistema para envío de encuestas y rúbricas mediante link por SMS, con respuesta desde teléfono móvil.",
    problem:
      "La institución necesitaba aumentar el alcance de encuestas y rúbricas sin exigir acceso desde computador o plataformas complejas.",
    solution:
      "Se creó un flujo de envío por SMS con enlaces únicos y formularios responsivos para captura directa desde teléfonos.",
    features: [
      "Generación de enlaces por encuesta o rúbrica.",
      "Envío de links mediante SMS.",
      "Formularios responsivos para teléfonos móviles.",
      "Consolidación de respuestas para revisión posterior.",
    ],
    impact:
      "Facilitó la participación desde dispositivos móviles y redujo fricción en procesos de levantamiento de información.",
    tags: ["Encuestas", "Rúbricas", "Mobile first"],
  },
  {
    id: "parent-report-generator",
    title: "Parent Report Generator",
    company: "Fundación Educacional Estratégica",
    industry: ["Education"],
    country: "Chile",
    status: "production",
    role: "Full Stack Developer",
    technologies: ["Node.js", "SQL Server", "PDF", "Email"],
    summary:
      "Aplicación para generación de informes PDF por alumno y envío automático por correo electrónico a apoderados.",
    problem:
      "La generación y distribución de informes individuales exigía un proceso repetitivo, sensible a errores y difícil de escalar.",
    solution:
      "Se automatizó la creación de PDFs por alumno y el envío por email desde información estructurada del sistema.",
    features: [
      "Generación de informes PDF individuales.",
      "Datos por alumno y periodo.",
      "Envío automático por correo electrónico.",
      "Control de ejecución para distribución masiva.",
    ],
    impact:
      "Redujo trabajo operativo en la preparación de informes y entregó una comunicación más consistente hacia apoderados.",
    tags: ["PDF", "Email", "Automatización"],
  },
  {
    id: "sms-mass-messaging-platform",
    title: "SMS Mass Messaging Platform",
    company: "Fundación Educacional Estratégica",
    industry: ["Education"],
    country: "Chile",
    status: "production",
    role: "Full Stack Developer",
    technologies: ["Node.js", "SQL Server", "SMS"],
    summary: "Aplicativo para envío masivo de SMS a comunidades educativas.",
    problem:
      "La comunicación masiva requería un canal directo para llegar rápidamente a grupos de estudiantes, apoderados o equipos internos.",
    solution:
      "Se desarrolló una herramienta para segmentar destinatarios, preparar mensajes y ejecutar envíos masivos por SMS.",
    features: [
      "Carga y segmentación de destinatarios.",
      "Composición de mensajes.",
      "Envío masivo por SMS.",
      "Registro de campañas ejecutadas.",
    ],
    impact:
      "Entregó un canal operativo para comunicaciones urgentes o informativas dentro del entorno educativo.",
    tags: ["SMS", "Comunicación", "Educación"],
  },
  {
    id: "workplace-accident-incident-management-system",
    title: "Workplace Accident & Incident Management System (SPA)",
    company: "Agrosuper",
    industry: ["HR", "Manufacturing"],
    country: "Chile",
    status: "production",
    role: "Full Stack Developer",
    technologies: [".NET", "SQL Server", "Email"],
    summary:
      "Sistema para registrar accidentes e incidentes laborales, tratamiento del trabajador, seguimiento médico, días perdidos y acciones correctivas.",
    problem:
      "La operación necesitaba centralizar información de seguridad laboral y dar seguimiento al tratamiento y medidas correctivas.",
    solution:
      "Se construyó una aplicación empresarial para capturar eventos, registrar evolución médica y administrar acciones de prevención.",
    features: [
      "Registro de accidentes e incidentes laborales.",
      "Seguimiento de tratamiento y controles médicos.",
      "Control de días perdidos.",
      "Gestión de acciones correctivas.",
      "Notificaciones y trazabilidad operacional.",
    ],
    impact:
      "Apoyó la gestión de seguridad y salud ocupacional con información centralizada y seguimiento operativo.",
    tags: ["Seguridad laboral", "SPA", "Acciones correctivas"],
  },
  {
    id: "corporate-benefits-delivery-system",
    title: "Corporate Benefits Delivery System",
    company: "Agrosuper",
    industry: ["HR"],
    country: "Chile",
    status: "production",
    role: "Full Stack Developer",
    technologies: [".NET", "SQL Server"],
    summary:
      "Sistema web de control de entrega de beneficios por trabajador, con historial y disponibilidad.",
    problem:
      "El control de beneficios requería visibilidad por trabajador para evitar duplicidades y mantener historial de entregas.",
    solution:
      "Se implementó una plataforma para consultar disponibilidad, registrar entregas y mantener trazabilidad por colaborador.",
    features: [
      "Consulta de beneficios disponibles por trabajador.",
      "Registro de entrega y responsable.",
      "Historial de beneficios asignados.",
      "Validación de disponibilidad antes de entrega.",
    ],
    impact:
      "Mejoró el control administrativo de beneficios y la trazabilidad de entregas a trabajadores.",
    tags: ["Beneficios", "RR.HH.", "Trazabilidad"],
  },
  {
    id: "employee-benefits-platform",
    title: "Employee Benefits Platform",
    company: "Agrosuper",
    industry: ["HR"],
    country: "Chile",
    status: "production",
    role: "Full Stack Developer",
    technologies: [".NET", "SQL Server"],
    summary:
      "Plataforma con beneficios disponibles por trabajador, beneficios médicos y valores asociados.",
    problem:
      "Los equipos internos necesitaban consultar beneficios y valores asociados de forma ordenada y consistente.",
    solution:
      "Se desarrolló una plataforma de consulta y administración de beneficios por trabajador, incluyendo beneficios médicos.",
    features: [
      "Listado de beneficios por trabajador.",
      "Beneficios médicos y valores asociados.",
      "Consulta administrativa centralizada.",
      "Datos organizados para soporte a atención interna.",
    ],
    impact:
      "Facilitó la consulta de beneficios y entregó una base única para gestión administrativa de RR.HH.",
    tags: ["Beneficios médicos", "RR.HH.", "Consulta interna"],
  },
  {
    id: "workwear-management-system",
    title: "Workwear Management System",
    company: "Agrosuper",
    industry: ["Manufacturing", "Logistics", "HR"],
    country: "Chile",
    status: "production",
    role: "Full Stack Developer",
    technologies: [".NET", "SQL Server"],
    summary:
      "Sistema para controlar entrega, devolución, lavandería y trazabilidad de ropa y accesorios para más de 1.500 trabajadores de producción.",
    problem:
      "La operación requería controlar ropa de trabajo y accesorios en ciclos de entrega, devolución y lavandería.",
    solution:
      "Se implementó un sistema de trazabilidad por trabajador, prenda, estado y movimiento operacional.",
    features: [
      "Entrega y devolución de ropa de trabajo.",
      "Control de lavandería.",
      "Trazabilidad por trabajador y accesorio.",
      "Historial de movimientos.",
      "Soporte a operación de producción.",
    ],
    impact:
      "Ordenó la trazabilidad de indumentaria para más de 1.500 trabajadores de producción.",
    tags: ["Ropa de trabajo", "Logística interna", "Producción"],
  },
  {
    id: "truck-dock-access-control-system",
    title: "Truck Dock & Access Control System",
    company: "Agrosuper",
    industry: ["Logistics", "Agribusiness"],
    country: "Chile",
    status: "production",
    role: "Full Stack Developer",
    technologies: [".NET", "SQL Server"],
    summary:
      "Sistema para administración de andenes, accesos de camiones, choferes, tiempos de espera, disponibilidad de andenes y control de frío para carga sensible.",
    problem:
      "La operación logística necesitaba visibilidad sobre andenes, camiones, choferes y tiempos de espera para carga sensible.",
    solution:
      "Se creó una plataforma para registrar accesos, administrar disponibilidad de andenes y controlar información operacional de despacho.",
    features: [
      "Administración de andenes.",
      "Registro de camiones y choferes.",
      "Control de tiempos de espera.",
      "Disponibilidad operacional de andenes.",
      "Control de frío para carga sensible.",
    ],
    impact:
      "Apoyó la coordinación logística y el control operacional en procesos de carga y despacho.",
    tags: ["Andenes", "Despacho", "Control de frío"],
  },
  {
    id: "competency-management-system",
    title: "Competency Management System",
    company: "Agrosuper",
    industry: ["HR"],
    country: "Chile",
    status: "production",
    role: "Full Stack Developer",
    technologies: [".NET", "SQL Server"],
    summary: "Sistema de RR.HH. para capturar habilidades y competencias de trabajadores.",
    problem:
      "El área de personas necesitaba registrar competencias laborales de forma estructurada para consulta y gestión interna.",
    solution:
      "Se desarrolló un módulo de captura y administración de habilidades por trabajador.",
    features: [
      "Registro de habilidades y competencias.",
      "Consulta por trabajador.",
      "Información estructurada para RR.HH.",
      "Soporte a gestión interna de perfiles.",
    ],
    impact:
      "Aportó una base ordenada para visualizar capacidades internas y apoyar decisiones de gestión de personas.",
    tags: ["Competencias", "RR.HH.", "Perfiles"],
  },
  {
    id: "event-access-control-system",
    title: "Event Access Control System",
    company: "Agrosuper",
    industry: ["HR", "Logistics"],
    country: "Chile",
    status: "production",
    role: "Full Stack Developer",
    technologies: [".NET", "SQL Server"],
    summary:
      "Aplicativo para administrar asistencia y entrada a eventos mediante cédula de identidad.",
    problem:
      "Los eventos internos requerían validar asistencia de forma rápida y mantener control de acceso.",
    solution:
      "Se implementó una aplicación de registro de entrada por cédula de identidad y control de asistentes.",
    features: [
      "Validación por cédula de identidad.",
      "Registro de asistencia a eventos.",
      "Control de acceso operativo.",
      "Consulta de asistentes registrados.",
    ],
    impact:
      "Simplificó el control de ingreso y asistencia para eventos corporativos.",
    tags: ["Eventos", "Control de acceso", "Asistencia"],
  },
  {
    id: "production-line-control-system",
    title: "Production Line Control System",
    company: "Packing La Viña",
    industry: ["Agribusiness", "Manufacturing"],
    country: "Chile",
    status: "production",
    role: "Full Stack Developer",
    technologies: ["SQL Server", "PLC Integration", ".NET"],
    summary:
      "Sistema para controlar líneas de producción de packing, configuración de calibre, calidad y especie de fruta, impresión de etiquetas e integración con PLC externo mediante SQL Server.",
    problem:
      "La línea de packing requería conectar configuración operacional, pesaje, etiquetado e información del PLC en un flujo confiable.",
    solution:
      "Se desarrolló un sistema integrado con SQL Server para parametrizar producción, recibir datos externos y soportar impresión de etiquetas.",
    features: [
      "Configuración de calibre, calidad y especie de fruta.",
      "Configuración de pesos.",
      "Integración con PLC externo mediante SQL Server.",
      "Impresión de etiquetas.",
      "Control operacional de líneas de producción.",
    ],
    impact:
      "Apoyó el control de producción en packing con integración directa entre sistema, etiquetas y equipamiento industrial.",
    tags: ["Packing", "PLC", "Etiquetas", "Producción"],
  },
  {
    id: "bottle-production-control-system",
    title: "Bottle Production Control System",
    company: "Viña Pérez Cruz",
    industry: ["Agribusiness", "Manufacturing"],
    country: "Chile",
    status: "production",
    role: "Full Stack Developer",
    technologies: ["SQL Server", "PLC Integration", ".NET"],
    summary:
      "Sistema para captura y conteo de botellas en línea de producción mediante integración con PLC.",
    problem:
      "La producción necesitaba capturar conteos de botellas desde equipamiento industrial para control operacional.",
    solution:
      "Se integró el proceso con PLC y base de datos para registrar conteos de producción en línea.",
    features: [
      "Captura de conteo de botellas.",
      "Integración con PLC.",
      "Registro de producción en SQL Server.",
      "Consulta operacional de resultados.",
    ],
    impact:
      "Entregó visibilidad sobre conteo de botellas en línea de producción mediante integración industrial.",
    tags: ["PLC", "Producción", "Vitivinicultura"],
  },
  {
    id: "corrective-actions-management-system",
    title: "Corrective Actions Management System",
    company: "JEJ Ingeniería",
    industry: ["Mining"],
    country: "Chile",
    status: "production",
    role: "Software Engineer",
    technologies: ["React", "Node.js", "SQL Server", "Email", "Power BI"],
    summary:
      "Sistema para capturar accidentes e incidentes, enviar aprendizajes por correo a divisiones, generar reportes semanales automáticos y apoyar prevención de recurrencias.",
    problem:
      "La operación minera necesitaba registrar eventos, compartir aprendizajes y mantener reportes periódicos para prevención.",
    solution:
      "Se desarrolló una plataforma de gestión de acciones correctivas con automatización de correos y reportes semanales.",
    features: [
      "Registro de accidentes e incidentes.",
      "Envío de aprendizajes por correo a divisiones.",
      "Reportes semanales automáticos.",
      "Seguimiento de acciones correctivas.",
      "Soporte a prevención de recurrencias.",
    ],
    impact:
      "Fortaleció la trazabilidad preventiva y la distribución de aprendizajes operacionales en contexto minero.",
    tags: ["Codelco", "Prevención", "Acciones correctivas"],
  },
  {
    id: "electrical-infrastructure-management-system",
    title: "Electrical Infrastructure Management System",
    company: "JEJ Ingeniería",
    industry: ["Mining", "Manufacturing"],
    country: "Chile",
    status: "production",
    role: "Software Engineer",
    technologies: ["React", "Node.js", "SQL Server"],
    summary:
      "Sistema para registrar paneles eléctricos en mina, estado, mantenciones, próximas mantenciones, fotos de sellos y manipulaciones.",
    problem:
      "La infraestructura eléctrica en faena requería control documental y visual sobre paneles, estados y mantenciones.",
    solution:
      "Se implementó una plataforma para registrar activos eléctricos, evidencias fotográficas y planificación de mantenciones.",
    features: [
      "Registro de paneles eléctricos.",
      "Estado operacional y mantenciones.",
      "Próximas mantenciones programadas.",
      "Fotos de sellos y manipulaciones.",
      "Trazabilidad de activos en mina.",
    ],
    impact:
      "Ayudó a mantener información técnica y visual de infraestructura eléctrica crítica en faena minera.",
    tags: ["Codelco", "Infraestructura eléctrica", "Mantención"],
  },
  {
    id: "drill-rod-management-system",
    title: "Drill Rod Management System",
    company: "JEJ Ingeniería",
    industry: ["Mining", "Logistics"],
    country: "Chile",
    status: "production",
    role: "Software Engineer",
    technologies: ["React", "Node.js", "SQL Server", "Power BI"],
    summary:
      "Sistema de trazabilidad y control de barras de perforación en producción minera, reconocido con Segundo Lugar Innovación Codelco Chile 2024.",
    problem:
      "La operación requería trazabilidad de barras de perforación para controlar uso, ubicación y gestión de producción.",
    solution:
      "Se desarrolló una solución de control operacional con registro de movimientos, estados y consultas de gestión.",
    features: [
      "Trazabilidad de barras de perforación.",
      "Control de estados y movimientos.",
      "Información para producción minera.",
      "Reportes de gestión.",
      "Base preparada para análisis operacional.",
    ],
    impact:
      "Reconocido con Segundo Lugar Innovación Codelco Chile 2024 por su aporte al control de producción minera.",
    tags: ["Codelco", "Innovación", "Trazabilidad minera"],
  },
  {
    id: "effective-time-management-platform",
    title: "Effective Time Management Platform",
    company: "JEJ Ingeniería",
    industry: ["Mining", "HR"],
    country: "Chile",
    status: "production",
    role: "Software Engineer",
    technologies: ["React", "Node.js", "SQL Server", "Power BI"],
    summary:
      "Plataforma para registrar tiempos efectivos en faena: inicio administrativo, inicio real, término administrativo, término real, responsables de turno y reportes de gestión.",
    problem:
      "La faena necesitaba distinguir tiempos administrativos y reales para tener mejor lectura de la operación por turno.",
    solution:
      "Se implementó una plataforma de registro de tiempos efectivos, responsables y reportes de gestión.",
    features: [
      "Inicio administrativo e inicio real.",
      "Término administrativo y término real.",
      "Responsables de turno.",
      "Reportes de gestión.",
      "Seguimiento por faena y operación.",
    ],
    impact:
      "Entregó una lectura más clara de tiempos efectivos en faena para gestión operacional.",
    tags: ["Codelco", "Tiempo efectivo", "Faena"],
  },
  {
    id: "chilean-electronic-invoicing-platform-sii",
    title: "Chilean Electronic Invoicing Platform (SII)",
    company: "Apinformática",
    industry: ["Government/Tax"],
    country: "Chile",
    status: "in-development",
    role: "Developer Manager / Full Stack Developer",
    technologies: ["GeneXus", "SQL Server", "Email"],
    summary:
      "Aplicativo y plataforma para generación y administración de documentos electrónicos SII, CAF, XML, DTE y procesos tributarios.",
    problem:
      "El proceso tributario electrónico exige administrar documentos, folios, XML y comunicación con flujos del SII de forma confiable.",
    solution:
      "Se está desarrollando una plataforma para generación y administración de documentos electrónicos, CAF, XML y DTE.",
    features: [
      "Administración de documentos electrónicos SII.",
      "Gestión de CAF.",
      "Generación y control de XML.",
      "Procesos asociados a DTE.",
      "Base para operación tributaria de empresas.",
    ],
    impact:
      "Proyecto en desarrollo orientado a simplificar procesos tributarios electrónicos para clientes empresariales.",
    tags: ["SII", "DTE", "CAF", "XML", "GeneXus"],
  },
  {
    id: "travelodge-hotel-maintenance-control",
    title: "Travelodge Hotel Maintenance Control",
    company: "Canada Projects",
    industry: ["Hospitality"],
    country: "Canada",
    status: "concept",
    role: "Full Stack Developer",
    technologies: ["React", "Node.js", "SQL Server"],
    summary:
      "Sistema diseñado para gestión de actividades de mantenimiento en hoteles, incidencias, costos, avances y tipos de problemas.",
    problem:
      "La operación hotelera necesita visibilidad sobre tareas de mantenimiento, costos asociados y avance de incidencias.",
    solution:
      "Se diseñó un concepto de plataforma para registrar actividades, clasificar problemas y controlar costos y avances.",
    features: [
      "Registro de actividades de mantenimiento.",
      "Clasificación de incidencias y tipos de problemas.",
      "Control de costos.",
      "Seguimiento de avances.",
      "Panel de consulta para operación hotelera.",
    ],
    impact:
      "Concepto diseñado durante experiencia internacional en Canadá; no se presenta como sistema implementado.",
    tags: ["Canadá", "Hospitality", "Mantenimiento", "Concepto"],
  },
  {
    id: "odra-challenger-activity-control",
    title: "ODRA Challenger Activity Control",
    company: "Canada Projects",
    industry: ["Manufacturing"],
    country: "Canada",
    status: "concept",
    role: "Full Stack Developer",
    technologies: ["React", "Node.js", "SQL Server", "Power BI"],
    summary:
      "Sistema diseñado para gestionar actividades por estación de ensamblaje, consumo de materiales, tiempos, personas participantes y comparación entre tiempo usado y tiempo asignado.",
    problem:
      "La operación de ensamblaje requiere comparar tiempos reales con tiempos asignados y relacionar actividades con materiales y personas participantes.",
    solution:
      "Se diseñó una plataforma de control por estación, actividad, consumo de materiales y medición de tiempos.",
    features: [
      "Actividades por estación de ensamblaje.",
      "Consumo de materiales.",
      "Personas participantes por actividad.",
      "Comparación entre tiempo usado y tiempo asignado.",
      "Base para reportería operacional.",
    ],
    impact:
      "Concepto diseñado durante experiencia internacional en Canadá; no se presenta como sistema implementado.",
    tags: ["Canadá", "Manufactura", "Ensamblaje", "Concepto"],
  },
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}

export function getRelatedProjects(project: Project, limit = 3) {
  return projects
    .filter((candidate) => candidate.id !== project.id)
    .map((candidate) => {
      const companyScore = candidate.company === project.company ? 3 : 0;
      const industryScore = candidate.industry.filter((industry) =>
        project.industry.includes(industry),
      ).length;
      const technologyScore = candidate.technologies.filter((technology) =>
        project.technologies.includes(technology),
      ).length;

      return {
        project: candidate,
        score: companyScore + industryScore + technologyScore,
      };
    })
    .filter((candidate) => candidate.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((candidate) => candidate.project);
}
