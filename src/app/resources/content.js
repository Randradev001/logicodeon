import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Andrés",
  lastName: "Andrade",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "andres.andrade@gmail.com",
  location: "America/Winnipeg", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Spanish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Feel free to send me a message.</>,
  description: (
    <>
What I Can Do for Your Business
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system/nextjs-starter",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "X",
    icon: "x",
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
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>I’m Andrés Andrade, Full Stack Developer .</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Accident report</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I don’t just code — I listen, understand, and design solutions that actually make sense. I move confidently across both frontend and backend, and my background in industrial electromechanics helps me better grasp real-world company processes and needs.

<br/>Currently based in Canada and open to new opportunities where I can bring value, insight, and energy to the table.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
       Andrés is a Canada-based Full Stack Developer with a passion for turning complex challenges into simple, effective digital solutions. His work spans web applications, mobile experiences, and the intersection of development and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Challenger Sweepers Winnipeg",
        timeframe: "2024 - Present",
        role: "Mechanical Technician",
        achievements: [


                    <>
                   Assembly and quality inspection of mechanical components using blueprints
                              </>,
                              <>
                             Operation of manual, electric, and hydraulic tools
                              </>,
                              <>Troubleshooting and maintenance of mechanical systems</>,
                              <>Inventory control and warehouse management</>,
                     
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/odra.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "J.E.J Engineering - Codelco Chile",
        timeframe: "Nov 2022 – Sept 2024",
        role: "Software Engineer",
        achievements: [
          <>
            Designed and developed custom software solutions to optimize workflow
          </>,
          <>
            Modeled databases and designed transactional systems to ensure data integrity
          </>,
          <>
            Modeled databases and designed transactional systems to ensure data integrity
          </>,
                 
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/codelco.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Apinformatica",
        timeframe: "Nov 2022 – Sept 2024",
        role: "Developer Manager",
        achievements: [
          <>
            Led project evaluations, managed development timelines, and supervised software development
          </>,
          <>
            Developed software using Genexus 17 and managed testing environments
          </>,
          <>
            Trained end-users on newly developed systems and tools
          </>,
                 
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/apinformatica.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 12,
          },
        ],
      },
      {
        company: "Strategic Educational Foundation",
        timeframe: "Nov 2022 – Sept 2024",
        role: "Senior Developer",
        achievements: [
          <>
            Designed and developed custom software solutions to optimize workflow
          </>,
          <>
            Modeled databases and designed transactional systems to ensure data integrity
          </>,
          <>
            Modeled databases and designed transactional systems to ensure data integrity
          </>,
                 
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/as.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Software Developer",
        timeframe: "Nov 2022 – Sept 2024",
        role: "Apinformatica",
        achievements: [
          <>
            Developed web-based applications and designed databases to support client needs
          </>,
          
                 
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/apinformatica.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 12,
          },
        ],
      },
    ],
  },


 

  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Universidad Teconologica",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Languages & Frameworks",
        description: <>React.js, Node.js, HTML, CSS, JavaScript, React Native, Genexus, C#, VB, .NET., next.js, vercel, tamagui</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          
        ],
      },
      {
        title: "Database Systems",
        description: <>MySQL, SQL Server, Oracle, Transactional Design, Database Modeling.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/bd.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Tools & Platforms",
        description: <>GitHub, Jira, Power BI, Windows Server, Excel</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Other Technologies",
        description: <>WordPress (learning), WooCommerce, API Integrations, SEO, Google Analytics</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/wp.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Languages ",
        description: <>Spanish (Fluent), English (Intermediate, A2 – Currently enrolled in advanced course)</>,
        
      },
    
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Projects",
  title: "last projects",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
