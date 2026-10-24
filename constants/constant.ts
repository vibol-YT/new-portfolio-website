import { SiGithub, SiYoutube, SiLinkedin, SiTiktok, SiTelegram } from "react-icons/si";
import { FaIdBadge } from "react-icons/fa"; 


import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaFigma,
  FaPhp,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
  SiPostgresql,
  SiVite,
  SiShadcnui,
  SiLaravel,
} from "react-icons/si";

export const social = [
  { icon: SiGithub, path: "" },
  { icon: SiYoutube, path: "" },
  { icon: SiLinkedin, path: "" },
  { icon: SiTiktok, path: "" },
  { icon: SiTelegram, path: "" },
];


export const NavLinks =[
    {
        id:1,
        label:"Home",
        url:"/"
    },
    {
        id:2,
        label:"Services",
        url:"/Services"
    },
    {
        id:3,
        label:"Resume",
        url:"/Resume"
    },
    {
        id:4,
        label:"Works",
        url:"/Works"
    },
   
    {
        id:5,
        label:"Contact",
        url:"/Contact"
    },
]

export const statsItems = [
    {
        num: 12,
        text: "Experience"
    },
    {
        num: 13,
        text: "Projects completd"
    },
    {
        num: 8,
        text: "Technologies mastered"
    },
    {
        num: 200,
        text: "Code commits"
    },
]

export const services = [
  {
    num: "01",
    title: "front End",
    description: "Front-End Development focuses on building responsive, user-friendly, and visually appealing interfaces using modern technologies. I create fast, accessible, and scalable web experiences with clean code and optimized performance across all devices.",
    path: "/services/web-development",
  },
  {
  num: "02",
  title: "Back End",
  description: "Back-End Development focuses on building secure, scalable, and efficient server-side applications. I develop robust APIs, manage databases, and implement business logic to ensure reliable performance and smooth data flow.",
  path: "/services/back-end-development",
},
 {
  num: "03",
  title: "UX/UI Design",
  description: "Designing clean, intuitive, and user-centered digital experiences that focus on usability, accessibility, and visual clarity.",
  path: "/services/ui-ux",
}
  
];

export const experains = [
  {
    icon: FaIdBadge,
    tital: "My experience",
    descrip: "I have no exprience",
  },
];

export const education = [
  {
    tital: "My Education",
    descrip:
      "My Education",
    primarySch: [
      {
        instituation: "Norton university",
        degree: "Software Development",
        duration: "2023 - Present",
      },
      {
        instituation: "Samaki Meanchey High School",
        degree: "High School Graduate",
        duration: "2020 - 2022",
      },
    ],
    items: [
      {
        instituation: "Online course",
        degree: "Full Stack",
        duration: "2024",
      },
      {
        instituation: "Online course",
        degree: "Front-end",
        duration: "2023",
      },
      {
        instituation: "Online Course",
        degree: "Back-end with Laravel",
        duration: "Currently Learning (2024)",
      },
      {
        instituation: "ETEC center",
        degree: "Basic proggraming C/C++",
        duration: "2022",
      },
    ],
  },
];


export const skills = [
  {
    title: "My Skills",
    description:
      "Technologies and tools I use to build modern, responsive, and scalable web applications.",
    skillList: [
      { icon: FaHtml5, name: "HTML5" },
      { icon: FaCss3Alt, name: "CSS3" },
      { icon: FaJs, name: "JavaScript" },
      { icon: FaReact, name: "React" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: FaBootstrap, name: "Bootstrap" },
      { icon: SiShadcnui, name: "shadcn/ui" },
      { icon: SiVite, name: "Vite" },
      { icon: FaNodeJs, name: "Node.js" },
      { icon: FaPhp, name: "PHP" },
      { icon: SiLaravel, name: "Laravel" },
      { icon: SiMysql, name: "MySQL" },
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: FaFigma, name: "Figma" },
    ],
  },
];

// constants/constant.js
export const aboutItem = {
  title: "About Me",
  description:
    "I am a passionate web developer focused on building modern, responsive, and user-friendly web applications.",

  info: [
    {
      fieldName: "Name:",
      fieldValue: "Sim Vibol",
    },
    {
      fieldName: "Email:",
      fieldValue: "admin@gmail.com",
    },
    {
      fieldName: "Number Phone:",
      fieldValue: "+885 777 *** 20",
    },
    {
      fieldName: "Location:",
      fieldValue: "Cambodia",
    },
    {
      fieldName: "Experience:",
      fieldValue: "Junior Developer",
    },
    {
      fieldName: "Freelance:",
      fieldValue: "Available",
    },
    {
      fieldName: "languages:",
      fieldValue: "Khmer, English",
    },
  ],
};




// data/projects.js
export const projects = [
  {
    id: 1,
    image: "/html/log1.png",
    title: "Login and Register",
    description: "A responsive login page with modern design and interactive features using HTML CSS and JavaScript.",
    liveUrl: "https://simple-login1.vercel.app/",
    githubUrl: "https://github.com/vibol-YT",
  },
  {
    id: 2,
    image: "/html/log2.png",
    title: "Login and Register",
    description: "Responsive home page with modern design and interactive features with HTML CSS and JavaScript.",
    liveUrl: "https://simple-login2-rho.vercel.app/",
    githubUrl: "https://github.com/vibol-YT",
  },
  {
    id: 3,
    image: "/html/log3.png",
    title: "Login and Register",
    description: "a responsive login page with modern design and interactive features using HTML CSS and JavaScript.",
    liveUrl: "https://simple-login3-phi.vercel.app/",
    githubUrl: "https://github.com/vibol-YT",
  },
  {
    id: 4,
    image: "/html/log4.png",
    title: "Login and Register",
    description: "a responsive login page with modern design and interactive features using HTML CSS and JavaScript.",
    liveUrl: "https://simple-login-pos.vercel.app/",
    githubUrl: "https://github.com/vibol-YT",
  },

]

export const profiles = [
  {
    id: 1,
    image: "/html/hero1.png",
    title: "Hero Section",
    description: "A responsive hero section with modern design and interactive features using HTML and CSS.",
    liveUrl: "https://simple-hero1.vercel.app/",
    githubUrl: "https://github.com/vibol-YT",
  },
  {
    id: 2,
    image: "/html/hero2.png",
    title: "Hero Section",
    description: "A responsive hero section with modern design and interactive features using HTML and CSS.",
    liveUrl: "https://simple-her.vercel.app/",
    githubUrl: "https://github.com/vibol-YT",
  },
  {
    id: 3,
    image: "/html/hero3.png",
    title: "Hero Section",
    description: "A responsive hero section with modern design and interactive features using HTML and CSS.",
    liveUrl: "https://simple-hero3.vercel.app/",
    githubUrl: "https://github.com/vibol-YT",
  },
  {
    id: 4,
    image: "/html/hero4.png",
    title: "Hero Section",
    description: "A responsive hero section with modern design and interactive features using HTML and CSS.",
    liveUrl: "https://simple-hero.vercel.app/",
    githubUrl: "https://github.com/vibol-YT",
  },
  {
    id: 5,
    image: "/html/hero5.png",
    title: "Hero Section",
    description: "A responsive hero section with modern design and interactive features using HTML and CSS.",
    liveUrl: "https://simple-hero2.vercel.app/",
    githubUrl: "https://github.com/vibol-YT",
  },
  
]

export const FrontendProjects = [
  {
    id: 1,
    image: "/html/fron1.png",
    title: "Pastry World",
    description: "A responsive pastry world website with modern design and interactive features using HTML and CSS.",
    liveUrl: "https://project-8-pasty-world.vercel.app/",
    githubUrl: "https://github.com/vibol-YT",
  },
  {
    id: 2,
    image: "/html/fron2.png",
    title: "Website Menu Fruit and Vegetable",
    description: "A responsive website menu for fruits and vegetables with modern design and interactive features using HTML and CSS.",
    liveUrl: "https://vibol-yt.github.io/Menu-Website-Fruits-and-Vegetable/",
    githubUrl: "https://github.com/vibol-YT",
  },
  {
    id: 3,
    image: "/html/fron3.png",
    title: "Responsive Shoes Store",
    description: "A responsive website for a shoes store with modern design and interactive features using HTML and CSS.",
    liveUrl: "https://vibol-yt.github.io/projact_5_Responsive_website/",
    githubUrl: "https://github.com/vibol-YT",
  },
  {
    id: 4,
    image: "/html/fron4.png",
    title: "Modern Landing website",
    description: "A responsive modern landing website with modern design and interactive features using HTML and CSS.",
    liveUrl: "https://modern-landing-website.vercel.app/",
    githubUrl: "https://github.com/vibol-YT",
  },
  
]

export const ItemReactProject = [
  {
    id: 1,
    image: "/react/react1.png",
    title: "Car Sell Website",
    description: "A responsive car sell website with modern design and interactive features using react and tailwind css .",
    liveUrl: "https://website-car-sell.vercel.app/",
    githubUrl: "https://github.com/vibol-YT",
  },
  {
    id: 2,
    image: "/react/react2.png",
    title: "Pastry World Website",
    description: "A responsive pastry world website with modern design and interactive features using react and tailwind css .",
    liveUrl: "https://project-8-pasty-world.vercel.app/",
    githubUrl: "https://github.com/vibol-YT",
  },
  {
    id: 3,
    image: "/react/react3.png",
    title: "BORN FROM FIRE BUILT FOR FLAVOR",
    description: "A responsive BORN FROM FIRE BUILT FOR FLAVOR website with modern design and interactive features using react and tailwind css .",
    liveUrl: "https://brasa-flame-grilled-craft-burgers.vercel.app/",
    githubUrl: "https://github.com/vibol-YT",
  },
  {
    id: 4,
    image: "/react/react4.png",
    title: "Khmer Commerce Website",
    description: "A responsive Khmer Commerce website with modern design and interactive features using react and tailwind css .",
    liveUrl: "https://khmer-commerce.vercel.app/",
    githubUrl: "https://github.com/vibol-YT",
  },
  {
    id: 5,
    image: "/react/react5.png",
    title: "Food Eat Website",
    description: "A responsive food eat website with modern design and interactive features using react and tailwind css .",
    liveUrl: "https://food-eat-website.vercel.app/",
    githubUrl: "https://github.com/vibol-YT",
  },
  {
    id: 6,
    image: "/react/react6.png",
    title: "Modern of world Website",
    description: "A responsive modern of world website with modern design and interactive features using react and tailwind css .",
    liveUrl: "https://modern-landing-website.vercel.app/",
    githubUrl: "https://github.com/vibol-YT",
  },
  {
    id: 7,
    image: "/react/react7.png",
    title: "Outdoor Travel Website",
    description: "A responsive outdoor travel website with modern design and interactive features using react and tailwind css .",
    liveUrl: "https://outdoor-travel.vercel.app/",
    githubUrl: "https://github.com/vibol-YT",
  },
]

export const ItemNextProject = [
  {
    id: 1,
    image: "/next/next1.png",
    title: "Portfolio Website",
    description: " A responsive portfolio website with modern design and interactive features using next js and tailwind css .",
    liveUrl: "https://sim-vibol-portfolio-website.vercel.app/",
    githubUrl: "https://github.com/vibol-YT",
  },
  {
    id: 2,
    image: "/next/next2.png",
    title: "Coffee Shop Website",
    description: " A responsive coffee shop website with modern design and interactive features using next js and tailwind css .",
    liveUrl: "https://coffee-shop-pos-chi.vercel.app/",
    githubUrl: "https://github.com/vibol-YT",
  },
  {
    id: 3,
    image: "/next/next3.png",
    title: "Scholaria - The Modern School Management",
    description: " A responsive school management website with modern design and interactive features using next js and tailwind css .",
    liveUrl: "https://scholaria-the-modern-school-managem.vercel.app/",
    githubUrl: "https://github.com/vibol-YT",
  },
]


export const SystemProjects = [
  {
    id: 1,
    image: "/system/sys1.png",
    title: "Inventory Management System",
    description: "A full-stack Inventory Management System built with React.js, Node.js, Express.js and MySQL for managing products, categories, suppliers, stock levels, and inventory operations with CRUD functionality and dashboard analytics.",
    liveUrl: "#",
    githubUrl: "https://github.com/vibol-YT",
  },
  
]
export const FullStackProjects = [
  {
    id: 1,
    image: "/fullstack/full1.png",
    title: "Inventory Management System",
    description: "A full-stack Inventory Management System built with React.js, Node.js, Express.js and MySQL for managing products, categories, suppliers, stock levels, and inventory operations with CRUD functionality and dashboard analytics.",
    liveUrl: "#",
    githubUrl: "https://github.com/vibol-YT",
  },
  
]

export const UiProjects = [
  {
    id: 1,
    image: "/login/ui1.png",
    title: "Simple UI Figma Design",
    description: "A simple UI design created using Figma, showcasing a clean and modern interface with intuitive user experience.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    image: "/login/ui2.png",
    title: "Simple UI Figma Design",
    description: "A simple UI design created using Figma, showcasing a clean and modern interface with intuitive user experience.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    image: "/login/ui3.png",
    title: "Simple UI Figma Design",
    description: "A simple UI design created using Figma, showcasing a clean and modern interface with intuitive user experience.",
    liveUrl: "#",
    githubUrl: "#",
  },
]
