const projectsHeader = {
  title: "Projects",
  description:
    "My projects made use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects and PHP Website. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

const projects = {
  data: [
    {
      id: "0",
      name: "YouApp Backend",
      url: "https://youapp.ai/",
      description:
        "YouApp is a social networking platform that combines social media and finance elements to enable communal and collaborative monetization.",
      languages: [
        {
          name: "NodeJs",
          iconifyClass: "skill-icons:nodejs-dark",
        },
        {
          name: "TypeScript",
          iconifyClass: "skill-icons:typescript",
        },
        {
          name: "NestJs",
          iconifyClass: "skill-icons:nestjs-dark",
        },
        {
          name: "MongoDB",
          iconifyClass: "skill-icons:mongodb",
        },
        {
          name: "RabbitMQ",
          iconifyClass: "skill-icons:rabbitmq-dark",
        },
      ],
      links: [
        {
          name: "Android",
          url:
            "https://play.google.com/store/apps/details?id=com.youapp.you_app&hl=en_US",
          iconifyClass: "mdi:android",
        },
        {
          name: "Website",
          url: "https://youapp.ai/",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "1",
      name: "Kamus Crypto",
      url: "#",
      description:
        "Crypto Dictionary is an E-Learning platform dedicated to cryptocurrency education in Indonesia, focusing on fundamentals and technology.",
      languages: [
        {
          name: "NodeJs",
          iconifyClass: "skill-icons:nodejs-dark",
        },
        {
          name: "Javascript",
          iconifyClass: "skill-icons:javascript",
        },
        {
          name: "React",
          iconifyClass: "skill-icons:react-dark",
        },
        {
          name: "ExpressJs",
          iconifyClass: "skill-icons:expressjs-dark",
        },
        {
          name: "MongoDB",
          iconifyClass: "skill-icons:mongodb",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/iwansuryaningrat/KamusCrypto-BE",
          iconifyClass: "ri:github-fill",
        },
        // {
        //   name: "Devpost",
        //   url: "https://devpost.com/software/adoptisity",
        //   iconifyClass: "fluent:window-dev-edit-20-filled",
        // },
      ],
    },
    {
      id: "2",
      name: "Simpelmen OK",
      url: "https://simpelmenok-dev.netlify.app/",
      description:
        "Our mission is to spread awareness about the benefits of adoption and to support LGBT families so that everyone has the chance to have a loving home environment.",
      languages: [
        {
          name: "NodeJs",
          iconifyClass: "skill-icons:nodejs-dark",
        },
        {
          name: "Javascript",
          iconifyClass: "skill-icons:javascript",
        },
        {
          name: "React",
          iconifyClass: "skill-icons:react-dark",
        },
        {
          name: "ExpressJs",
          iconifyClass: "skill-icons:expressjs-dark",
        },
        {
          name: "MySQL",
          iconifyClass: "skill-icons:mysql-dark",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/iwansuryaningrat/simpelmen-be",
          iconifyClass: "ri:github-fill",
        },
        // {
        //   name: "Devpost",
        //   url: "https://devpost.com/software/adoptisity",
        //   iconifyClass: "fluent:window-dev-edit-20-filled",
        // },
        {
          name: "Live Demo",
          url: "https://simpelmenok-dev.netlify.app/",
          iconifyClass: "mdi:web",
        },
      ],
    },
    // {
    //   id: "3",
    //   name: "FinSplit",
    //   url: "https://github.com/rajmahadev8/Fin-Split",
    //   description:
    //     "Split your bills with your friends without any hassle. Manage Group Expenses, Track your expenses, and much more.",
    //   languages: [
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "NodeJs",
    //       iconifyClass: "logos-nodejs",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/rajmahadev8/Fin-Split",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devpost",
    //       url: "https://devpost.com/software/finsplit",
    //       iconifyClass: "fluent:window-dev-edit-20-filled",
    //     },
    //   ],
    // },
    // {
    //   id: "4",
    //   name: "Emosic",
    //   url: "https://github.com/kevalvavaliya/Emosic",
    //   description:
    //     "An app that plays music according to your mood. Created a playlist management UI and used SpotifyAPI to control player client based on mood detection using ml model.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/kevalvavaliya/Emosic",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devpost",
    //       url: "https://devpost.com/software/emosic",
    //       iconifyClass: "fluent:window-dev-edit-20-filled",
    //     },
    //   ],
    // },
    // {
    //   id: "5",
    //   name: "Fileblok",
    //   url: "https://github.com/harikanani/Fileblok",
    //   description:
    //     "Keep your projects moving with seamless transfer experice. FileBlok is a file transfer app that allows you to transfer files from one device to another without any hassle. We built this app using Flutter, Node.js and StoryBlok.",
    //   languages: [
    //     {
    //       name: "Flutter",
    //       iconifyClass: "logos-flutter",
    //     },
    //     {
    //       name: "NodeJs",
    //       iconifyClass: "logos-nodejs",
    //     },
    //     {
    //       name: "Storyblok",
    //       iconifyClass: "logos-storyblok-icon",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/Fileblok",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devpost",
    //       url: "https://devpost.com/software/fileblok",
    //       iconifyClass: "fluent:window-dev-edit-20-filled",
    //     },
    //   ],
    // },
    // {
    //   id: "6",
    //   name: "BAUDDIK-GEEKS PORTFOLIO",
    //   url: "https://github.com/Bauddhik-Geeks/Bauddhik-Geeks.github.io",
    //   description:
    //     "Awesome Community Portfolio website for Bauddhik-Geeks community",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/Bauddhik-Geeks/Bauddhik-Geeks.github.io",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Live Demo",
    //       url: "https://bauddhikgeeks.co/",
    //       iconifyClass: "mdi:web",
    //     },
    //   ],
    // },
    // {
    //   id: "7",
    //   name: "Votechain",
    //   url: "https://github.com/abhigoyani/votechain",
    //   description:
    //     "Awesome Community Portfolio website for Bauddhik-Geeks community",
    //   languages: [
    //     {
    //       name: "Flask",
    //       iconifyClass: "logos-flask",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "MongoDB",
    //       iconifyClass: "logos-mongodb-icon",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/abhigoyani/votechain",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "8",
    //   name: "Swag Store",
    //   url: "https://github.com/harikanani/e-commerce-frontend",
    //   description:
    //     "An E-commerce website built using MERN[Mongo, Express, React, Node] stack and we have also added stripe payment gateway integration [in test mode].",
    //   languages: [
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "NodeJS",
    //       iconifyClass: "logos-nodejs",
    //     },
    //     {
    //       name: "MedusaJS",
    //       iconifyClass: "logos-medusa-icon",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/e-commerce-frontend",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "9",
    //   name: "node-blockchain",
    //   url: "https://github.com/harikanani/node-blockchain",
    //   description:
    //     "A simple blockchain and cryptocurrency wallet implemented in Node.js and TypeScript (for learning purposes).",
    //   languages: [
    //     {
    //       name: "NodeJS",
    //       iconifyClass: "logos-nodejs",
    //     },
    //     {
    //       name: "TypeScript",
    //       iconifyClass: "skill-icons:typescript",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/node-blockchain",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "10",
    //   name: "Know Me Well",
    //   url: "https://github.com/harikanani/personal-portfolio",
    //   description:
    //     "A simple command line interface based quiz app to know more about me :).",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "NodeJS",
    //       iconifyClass: "logos-nodejs",
    //     },
    //     {
    //       name: "Repl.it",
    //       iconifyClass: "logos-replit-icon",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/personal-portfolio",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "11",
    //   name: "Bloggify",
    //   url: "https://github.com/harikanani/Bloggify",
    //   description: "A Simple REST API for Blog Application.",
    //   languages: [
    //     {
    //       name: "NodeJS",
    //       iconifyClass: "logos-nodejs",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/Bloggify",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "12",
    //   name: "Stargazzers",
    //   url: "https://github.com/harikanani/stargazers",
    //   description: "An Unofficial API for GitHub Repo Stars Count",
    //   languages: [
    //     {
    //       name: "NodeJs",
    //       iconifyClass: "logos-nodejs",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/stargazers",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "13",
    //   name: "GitHub Theme Portfolio",
    //   url: "https://github.com/harikanani/harikanani.github.io",
    //   description:
    //     "A Personal Portfolio Website that showcases my work and experience. which is hosted on Github Pages.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "SCSS",
    //       iconifyClass: "vscode-icons:file-type-scss2",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/harikanani.github.io",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Live Demo",
    //       url: "https://harikanani.github.io/",
    //       iconifyClass: "mdi:web",
    //     },
    //   ],
    // },
    // {
    //   id: "6",
    //   name: "Automate Attendace",
    //   url: "https://github.com/harikanani/Node_Python",
    //   description: "Automation of Online Attendance using node js and python",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "7",
    //   name: "Automate Discord Bot",
    //   url: "https://github.com/harikanani/AutomateDiscordBot",
    //   description:
    //     "A Discord Bot to send Automatic messages to serer channel in regular time difference.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Python Selenium",
    //       iconifyClass: "logos-selenium",
    //     },
    //     {
    //       name: "Chromium Browser",
    //       iconifyClass: "openmoji-chromium",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "8",
    //   name: "Flask Blog",
    //   url: "https://github.com/harikanani/flask_blog",
    //   description: "A Simple Blog Web Application made using Flask Framework",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Flask",
    //       iconifyClass: "cib-flask",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "9",
    //   name: "Netflix top series",
    //   url: "https://github.com/harikanani/netflix-top-series",
    //   description: "List of Top Netflix Series which is deployed to vercel.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "10",
    //   name: "COVID-19 Tracker",
    //   url: "https://github.com/harikanani/Covid19TrackerReact",
    //   description:
    //     "Simple Covid-19 Tracker made using React and deployed to Vercel.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/Covid19TrackerReact",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "11",
    //   name: "Food Order Static Website",
    //   url: "https://github.com/harikanani/food-order-website",
    //   description:
    //     "A simple static website related to food restaurants service. this is reasponsive as well.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "PHP",
    //       iconifyClass: "logos-php",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "12",
    //   name: "NFT Launchpad",
    //   url: "https://deliquescent-cents.000webhostapp.com/",
    //   description: "NFT Launchpad crypto site portfolio",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/nft-launchpad",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
  ],
};

export { projectsHeader, projects };
