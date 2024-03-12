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
    instagram,
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
        "Landing pages - implemented single-page sites using React and Redux libraries. They have also been adapted for desktops and mobile devices", "Fast Food application - designed and wrote an application, commissioned by fast food using React, Redux, RTK, Webpack."
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "TNFT",
      icon: tnft,
      iconBg: "#E6DEDD",
      date: "Apr 2022 - Sep 2022",
      points: [
        "Performed tasks responsibly, including creating pages using the REST API in accordance with the set requirements.",
        " Website layout using HTML, CSS, Bootstrap",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Atameken Electro Service",
      icon: atameken,
      iconBg: "#383E56",
      date: "Sep 2022 - Sep 2023",
      points: [
        "Creating a user interface, including page layout, styling and working with graphic elements to provide an attractive and user-friendly design.",
        "Adding interactive elements such as shapes, buttons, switches and other controls to ensure user convenience."
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Freelance",
      icon: '',
      iconBg: "#383E56",
      date: "Sep 2023 - Present",
      points: [
        "Website development using various libraries (Chakra UI, Material UI, Daisy UI), providing high quality and user-friendliness of the interface for users.",
        "Development of client applications using the React library and its ecosystem, such as the Redux Toolkit (RTK), to effectively manage the state of applications and increase their scalability.",
        "Integration with MongoDB database for data storage and processing, ensuring reliability and performance of web applications.", "Full-fledged application development, including a front-end on React, a backend on Node.js using Express.js for processing HTTP requests and interacting with the MongoDB database. Implementation of user authentication and authorization using GWT (JSON Web Token) for secure information exchange between the client and the server. Bcrypt was used to hash user passwords, ensuring their confidentiality in the database."
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
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
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
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: nike,
      source_code_link: "https://github.com/Asmmmir/nike_landing",
      website: 'https://asmmmir.github.io/nike_landing/'
    },
    {
      name: "Instagram Clone",
      description:
        "Welcome to Instagram-inspired platform, where sharing life's moments has never been easier. Discover a world of creativity with our intuitive interface and powerful editing tools. Join our vibrant community today and start sharing your story with the world!",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Chakra UI",
          color: "pink-text-gradient",
        },
        {
          name: "React Router",
          color: "orange-text-gradient",
        },
      ],
      image: instagram,
      source_code_link: "https://github.com/Asmmmir/instagram-clone",
      website: 'https://asmmmir.github.io/instagram-clone'
    }

  ];
  
  export { services, technologies, experiences, testimonials, projects };