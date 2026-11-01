export const features = {
  smoothScroll: true,
};

export const profile = {
  name: "Pelumi Paul",
  fullName: "Pelumi Paul Kolawole",
  title: "Software Engineer | Full-Stack Developer | Technology Solutions Builder",
  location: "Nigeria",
  portrait: "/images/pelumi-profile.webp",
  portraitHover: "/images/pelumi-profile-hover.webp",
  heroHeadline: "Ideas into technology. Problems into possibilities.",
  heroDescription:
    "I design and develop scalable applications, enterprise platforms and technology-driven solutions that help businesses improve operations, streamline processes and turn ideas into functional products.",
  biography: [
    "I am a software engineer and full-stack developer interested in building practical digital products, enterprise applications and intelligent technology solutions. My work combines frontend engineering, backend development, database design and problem-solving to create applications that address real operational and business needs.",
    "Alongside my technical experience, my academic and professional background in Food Science and product development has strengthened my analytical thinking, research ability and understanding of real-world business processes.",
  ],
  email: "paulpelumi@gmail.com",
  socialLinks: {
    github: "https://github.com/paulpelumi",
    linkedin: "https://linkedin.com/in/paul-pelumi-95445b206/",
  },
} as const;

export const experience = [
  {
    company: "Freddy Hirsch Nigeria Limited",
    role: "NPD Technologist, Research & Development",
    period: "May 2024 - Present",
  },
  {
    company: "Kellogg's Tolaram Nigeria",
    role: "R&D Officer",
    period: "February 2022 - April 2022",
  },
  {
    company: "DUFIL Prima Foods",
    role: "Product Development Officer",
    period: "October 2019 - April 2020",
  },
] as const;

export const education = [
  {
    school: "Federal University of Agriculture, Abeokuta (FUNAAB)",
    qualification: "BSc Food Science and Technology",
    period: "2021",
    result: "First Class Honours",
    distinction: "Best Graduating Student, Department of Food Science and Technology",
  },
  {
    school: "Lagos State Polytechnic",
    qualification: "National Diploma in Food Technology",
    period: "2015",
    result: "First Class / Distinction",
  },
] as const;

export const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "Drizzle ORM"],
  },
  {
    category: "Development tools",
    skills: ["Git", "GitHub", "Visual Studio Code", "Postman"],
  },
  {
    category: "Engineering capabilities",
    skills: [
      "Full-stack application development",
      "Database modelling",
      "API integration",
      "Authentication and authorisation",
      "Responsive interface development",
      "Debugging and deployment",
      "Enterprise workflow development",
      "AI-assisted development and workflow automation",
    ],
  },
] as const;

export const featuredProjects = [
  {
    id: "zentryx",
    name: "Zentryx",
    type: "Internal enterprise-customer platform",
    status: "Internal application",
    description:
      "An internal enterprise-customer management tool developed for a specific company. It brings operational dashboards and departmental workflows together; the live link and internal details are not shared.",
    image: "/images/Zentryx.png",
    privacySensitive: true,
    capabilities: [
      "Operational dashboards and analytics",
      "Role-based access and authentication",
      "Project, procurement and sales workflows",
      "R&D formulations and team collaboration",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Drizzle ORM",
      "Zod",
    ],
    links: [],
  },
  {
    id: "zentra",
    name: "Zentra",
    type: "Research and analysis",
    status: "Concept",
    description:
      "A concept for supporting structured research, risk evaluation and clearer decision-making. This is an early-stage idea, not a completed application.",
    image: "/images/zentra.png",
    capabilities: ["Research", "Structured analysis", "Risk evaluation"],
    technologies: [],
    links: [],
  },
  {
    id: "veriguard",
    name: "VeriGuard",
    type: "Product safety and compliance",
    status: "Prototype",
    description:
      "A product concept exploring safer inventory workflows and regulatory compliance. The public repository contains an in-progress web prototype; the listed capabilities are product goals, not verified completed features.",
    image: "/images/VeriGuard%20img.png",
    capabilities: ["Product safety concept", "Inventory management concept", "Compliance concept"],
    technologies: ["Next.js", "TypeScript"],
    links: [
      { label: "Prototype", href: "https://veriguard-one.vercel.app/" },
      { label: "Public repository", href: "https://github.com/paulpelumi/veriguard" },
    ],
  },
] as const;

export const independentProjects = [
  {
    id: "viewprd",
    name: "View PRD",
    type: "Performance management system",
    status: "Live application",
    description:
      "A performance-management application with employee and admin dashboards, goals, appraisals, performance views and account workflows.",
    image: "/images/VIEWPRD.png",
    technologies: ["React", "React Router", "Firebase", "Recharts"],
    links: [
      { label: "Live application", href: "https://viewprds.netlify.app/" },
      { label: "Public repository", href: "https://github.com/paulpelumi/viewprd" },
    ],
  },
  {
    id: "accessories-store",
    name: "Accessories Store",
    type: "E-commerce storefront",
    status: "Live application",
    description:
      "A React storefront for browsing product listings and product details, with a shopping cart and quantity updates.",
    image: "/images/ecommerce%20accessory.png",
    technologies: ["React", "React Router", "JavaScript"],
    links: [
      { label: "Live application", href: "https://e-commerceaccesory.netlify.app/" },
      { label: "Public repository", href: "https://github.com/paulpelumi/e-commerceapp" },
    ],
  },
  {
    id: "nft-marketplace",
    name: "NFT Marketplace",
    type: "Digital collectibles marketplace",
    status: "Independent project",
    description:
      "A React-based marketplace frontend exploring digital collectible discovery, creator profiles and collection browsing.",
    image: "/images/NFTMARKETPLACE.png",
    technologies: ["React", "JavaScript"],
    links: [
      { label: "Live application", href: "https://paulnftmarket.netlify.app/" },
      { label: "Public repository", href: "https://github.com/paulpelumi/Paul-NFT-marketplace" },
    ],
  },
] as const;
