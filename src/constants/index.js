import {
    mobile,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
  chakra,
    mongodb,
    git,
    figma,
    tnft,
    jobit,
    tripguide,
    threejs,
    atameken,
    gericht,
    hastam,
    nike,
    justcode
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: 'Chakra UI',
      icon: chakra
    }
  ];
  
  const experiences = [
    {
      title: "Frontend Developer (Education)",
      company_name: "JustCode",
      icon: justcode,
      iconBg: "#383E56",
      date: "October 2021 - July 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "TNFT",
      icon: tnft,
      iconBg: "#E6DEDD",
      date: "Apr 2022 - Sep 2022",
      points: [
        "Optimized web pages to improve speed and performance to ensure a seamless user experience.",
        "Followed new trends and developments in the field of web development and applied them in his work where appropriate.",
        "Wrote clean code that is easy to maintain and expand over time.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Atameken Electro Service",
      icon: atameken,
      iconBg: "#383E56",
      date: "Sep 2022 - Sep 2023",
      points: [
        "Development and support of web applications: Creation and maintenance of web applications designed to manage installation and electronics systems.",
        "Layout and Design: Creating a user interface, including page layout, styling and working with graphic elements to provide an attractive and user-friendly design.",
        "Interactive Elements development: Adding interactive elements such as forms, buttons, switches and other controls to ensure user convenience.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Gericht restaurant",
      description:
        "A website for the restaurant business that allows you to view the entire range of dishes and drinks",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: gericht,
      source_code_link: "https://github.com/Asmmmir/gericht-restaurant",
      website: 'https://asmmmir.github.io/gericht-restaurant/'
    },
    {
      name: "Nike",
      description:
        "Simple landing page of Nike company. Adaptive and responsible website",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: nike,
      source_code_link: "https://github.com/Asmmmir/nike_landing",
      website: 'https://asmmmir.github.io/nike_landing/'
    },
    {
      name: "Hastam",
      description:
        "A one-page website with the ability to fill in the gallery, a description of the business, as well as for the opportunity to contact the company",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: hastam,
      source_code_link: "https://github.com/Asmmmir/hastam",
      website: 'https://asmmmir.github.io/hastam/'
    },

  ];
  
  export { services, technologies, experiences, testimonials, projects };