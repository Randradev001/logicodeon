const person = {
  firstName: "Remigio Andrés",
  lastName: "Andrade Vargas",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Ingeniero Informático / Full Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "andres.andrade@gmail.com",
  location: "Winnipeg, Canada",
  timeZone: "America/Winnipeg",
  languages: ["Español", "English"],
};

const newsletter = {
  display: true,
  title: <>Hablemos de software empresarial.</>,
  description: (
    <>
      Disponible para conversar sobre desarrollo full stack, integración de sistemas,
      automatización de procesos y plataformas operacionales.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} | Full Stack Developer y Software Engineer`,
  description:
    "Career Hub profesional de Remigio Andrés Andrade Vargas, Full Stack Developer con más de 10 años de experiencia en software empresarial, minería, educación, industria, SQL Server, GeneXus, React, Node.js, .NET y Power BI.",
  headline: <>Full Stack Developer para software empresarial, integración y datos.</>,
  featured: {
    display: true,
    title: (
      <>
        Proyecto destacado: <strong className="ml-4">Drill Rod Management System</strong>
      </>
    ),
    href: "/projects/drill-rod-management-system",
  },
  subline: (
    <>
      Ingeniero Informático y Full Stack Developer con más de 10 años de experiencia
      desarrollando soluciones empresariales para minería, educación, agroindustria,
      manufactura e industria. Experiencia en React, Node.js, .NET, SQL Server, GeneXus,
      Power BI, APIs REST, integración de sistemas y automatización de procesos.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About | ${person.name}`,
  description:
    "Resumen profesional de Remigio Andrés Andrade Vargas, Ingeniero Informático y Full Stack Developer con experiencia en Chile y Canadá.",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Resumen profesional",
    description: (
      <>
        Ingeniero Informático y Full Stack Developer con experiencia en desarrollo de
        plataformas empresariales, integración de sistemas, reportería ejecutiva,
        automatización de procesos, inteligencia de negocios y soluciones operacionales.
        Experiencia en proyectos para Agrosuper, JEJ Ingeniería/Codelco, Fundación
        Educacional Estratégica, Apinformática, Packing La Viña, Viña Pérez Cruz y
        experiencia internacional en Canadá.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experiencia y foco profesional",
    experiences: [
      {
        company: "JEJ Ingeniería / Codelco",
        timeframe: "",
        role: "Software Engineer",
        achievements: [
          <>Desarrollo de plataformas operacionales para minería, seguridad y trazabilidad.</>,
          <>Automatización de reportes, correos y flujos de seguimiento preventivo.</>,
          <>Participación en proyecto reconocido con Segundo Lugar Innovación Codelco Chile 2024.</>,
        ],
        tags: ["Mining", "React", "Node.js", "SQL Server", "Power BI"],
        images: [
          {
            src: "/images/projects/project-01/codelco.jpg",
            alt: "Codelco mining project reference",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Agrosuper",
        timeframe: "",
        role: "Full Stack Developer",
        achievements: [
          <>Construcción de sistemas para RR.HH., seguridad laboral, logística y operación industrial.</>,
          <>Diseño de bases de datos y aplicaciones para procesos usados en operación.</>,
          <>Trazabilidad de beneficios, ropa de trabajo, andenes, accesos y competencias laborales.</>,
        ],
        tags: ["HR", "Logistics", ".NET", "SQL Server"],
        images: [
          {
            src: "/images/projects/project-01/as.jpg",
            alt: "Agrosuper project reference",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Fundación Educacional Estratégica",
        timeframe: "",
        role: "Senior Developer",
        achievements: [
          <>Desarrollo de plataformas para evaluación docente, ensayos SIMCE/PME y encuestas digitales.</>,
          <>Automatización de informes PDF, envíos por email, SMS y reportes históricos.</>,
          <>Modelado de datos para seguimiento académico y análisis en Power BI.</>,
        ],
        tags: ["Education", "Power BI", "PDF", "SMS", "Email"],
        images: [
          {
            src: "/images/gallery/ejehab.png",
            alt: "Education assessment project reference",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Apinformática",
        timeframe: "",
        role: "Developer Manager / Full Stack Developer",
        achievements: [
          <>Evaluación, planificación y desarrollo de soluciones empresariales con GeneXus.</>,
          <>Trabajo en plataforma de documentos electrónicos SII, CAF, XML y DTE.</>,
          <>Coordinación de pruebas, ambientes y soporte a usuarios finales.</>,
        ],
        tags: ["GeneXus", "SQL Server", "SII", "DTE"],
        images: [
          {
            src: "/images/projects/project-01/apinformatica.jpg",
            alt: "Apinformática project reference",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Packing La Viña / Viña Pérez Cruz",
        timeframe: "",
        role: "Full Stack Developer",
        achievements: [
          <>Integración de sistemas productivos con PLC y SQL Server.</>,
          <>Control de líneas de packing, etiquetas, pesos y conteo de botellas.</>,
          <>Desarrollo de soluciones para agroindustria y manufactura.</>,
        ],
        tags: ["Agribusiness", "Manufacturing", "PLC Integration", "SQL Server"],
        images: [
          {
            src: "/images/gallery/informe.jpg",
            alt: "Industrial production project reference",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Experiencia internacional en Canadá",
        timeframe: "",
        role: "Software, operaciones y mejora de procesos",
        achievements: [
          <>Experiencia laboral internacional en Canadá y adaptación a entornos multiculturales.</>,
          <>Diseño conceptual de soluciones para mantenimiento hotelero y control de actividades de ensamblaje.</>,
          <>Aplicación de mirada técnica y operacional sobre procesos industriales reales.</>,
        ],
        tags: ["Canada", "Hospitality", "Manufacturing", "Operations"],
        images: [
          {
            src: "/images/projects/project-01/odra.jpg",
            alt: "Canada professional experience reference",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Formación",
    institutions: [
      {
        name: "Ingeniería Informática",
        description: <>Formación profesional orientada a desarrollo de software y sistemas de información.</>,
      },
      {
        name: "Aprendizaje continuo",
        description: (
          <>
            Actualización permanente en tecnologías web, integración, inteligencia de negocios,
            automatización y prácticas modernas de desarrollo.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Competencias técnicas",
    skills: [
      {
        title: "Frontend y aplicaciones web",
        description: <>React, Next.js, JavaScript, HTML, CSS, interfaces responsivas y consumo de APIs REST.</>,
        images: [],
      },
      {
        title: "Backend e integración",
        description: <>Node.js, .NET, C#, GeneXus, APIs REST, automatización de procesos e integración de sistemas.</>,
        images: [],
      },
      {
        title: "Datos y business intelligence",
        description: <>SQL Server, modelado de datos, reportería ejecutiva, Power BI y consultas para operación.</>,
        images: [],
      },
      {
        title: "Operación industrial",
        description: <>Integración PLC, trazabilidad, control de producción, logística, minería, agroindustria y manufactura.</>,
        images: [],
      },
      {
        title: "Idiomas",
        description: <>Español fluido e inglés en desarrollo para contexto laboral en Canadá.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  display: false,
  title: `Notas | ${person.name}`,
  description: `Notas y aprendizajes profesionales de ${person.name}.`,
};

const work = {
  path: "/projects",
  label: "Projects",
  title: `Career Hub y proyectos | ${person.name}`,
  description:
    "Portafolio profesional de proyectos empresariales implementados, en desarrollo y conceptos de Remigio Andrés Andrade Vargas.",
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Galería | ${person.name}`,
  description: `Galería de referencias profesionales de ${person.name}.`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "Project reference",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpeg",
      alt: "Project reference",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "Project reference",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "Project reference",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
