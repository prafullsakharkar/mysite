export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  // {
  //   id: "projects",
  //   title: "Projects",
  // },
  // {
  //   id: "feedbacks",
  //   title: "Feedbacks",
  // },
  {
    id: "contact",
    title: "Contact",
  },
];


const services = [
  {
    title: "Software Development Lifecycle",
    icon: "/assets/images/strength/sdlc.png",
  },
  {
    title: "Technical Process Improvement",
    icon: "/assets/images/strength/tech_process.png",
  },
  {
    title: "Creative Thinking",
    icon: "/assets/images/strength/creative_think.png",
  },
  {
    title: "Proficient Troubleshooting",
    icon: "/assets/images/strength/troubleshoot.png",
  },
  {
    title: "Quick Problem Solver",
    icon: "/assets/images/strength/problem_solve.png",
  },
  {
    title: "Scrum & Agile Methodologies",
    icon: "/assets/images/strength/agile.png",
  },
  {
    title: "Task Prioritization",
    icon: "/assets/images/strength/task.png",
  },
  {
    title: "Third Party Software Integrations",
    icon: "/assets/images/strength/api.png",
  },
];

const technologies = [
  {
    name: "Python",
    icon: "/assets/images/tech/python.png",
  },
  {
    name: "Django",
    icon: "/assets/images/tech/django.png",
  },
  {
    name: "Flask",
    icon: "/assets/images/tech/flask.png",
  },
  {
    name: "PostgreSQL",
    icon: "/assets/images/tech/postgresql.png",
  },
  {
    name: "React JS",
    icon: "/assets/images/tech/reactjs.png",
  },
  {
    name: "MySQL",
    icon: "/assets/images/tech/mysql.png",
  },
  {
    name: "MongoDB",
    icon: "/assets/images/tech/mongodb.png",
  },
  {
    name: "HTML5",
    icon: "/assets/images/tech/html.png",
  },
  {
    name: "CSS",
    icon: "/assets/images/tech/css.png",
  },
  {
    name: "git",
    icon: "/assets/images/tech/git.png",
  },
  {
    name: "Linux",
    icon: "/assets/images/tech/linux.png",
  },
  {
    name: "docker",
    icon: "/assets/images/tech/docker.png",
  },
  {
    name: "Nginx",
    icon: "/assets/images/tech/nginx.png",
  },
  {
    name: "Gunicorn",
    icon: "/assets/images/tech/gunicorn.png",
  },
];

const experiences = [
  {
    title: "Technical Lead",
    company_name: "DNEG India Media Services Limited",
    icon: "/assets/images/company/DNEG.jpg",
    iconBg: "#383E56",
    date: "July 2022 - Present",
    points: [
      "Designed and developed end-to-end web application using Flask and authentication with LDAP.",
      "Utilized HTML, JavaScript, Bootstrap, jQuery, AJAX, and CSS for interactive user interface design.",
      "Managed version control on Git and handled deployment on staging and production servers.",
      "Creating unit test/regression test framework for working/new code.",
      "Maintain and enhance the performance of existing software.",
      "Determined areas for improvements by periodically monitoring the current company systems to consistently boost business efficiency.",
    ],
  },
  {
    title: "Senior Software Engineer / Technical Lead",
    company_name: "Assemblage Entertainment Private Limited",
    icon: "/assets/images/company/assemblage.jpg",
    iconBg: "#E6DEDD",
    date: "November 2016 - July 2022",
    points: [
      "Involved in software development life cycle (SDLC) of tracking the requirements, gathering, analysis, detailed design, development, system testing and user acceptance testing.",
      "Designed and managed database schemas aligned with business processes, ensuring seamless application functionality through troubleshooting and debugging.",
      "Implemented CRUD operations in Active Record and developed frontend and backend modules using MVC architecture with Django for efficient web application development.",
      "Designed and integrated RESTful Web Service and utilized Django Rest API for database access.",
      "Integrated third-party platforms like Shotgun and FTrack using RESTful web services.",
      "Successfully deployed the web application on Linux servers with the help of docker and performed data migration from MongoDB to PostgreSQL.",
    ],
  },
  {
    title: "Senior Application Developer",
    company_name: "Prime Focus World Private Limited",
    icon: "/assets/images/company/prime.png",
    iconBg: "#383E56",
    date: "July 2015 - October 2016",
    points: [
      "Design, develop, and debug applications using Python, PySide, and MySQL. Developing the code by using Python modules.",
      "Create user-friendly interfaces with PySide for seamless interaction.",
      "Design and optimize MySQL databases for efficient data handling.",
      "Testing and Quality Assurance: Conduct thorough testing and ensure software reliability.",
      "Collaboration and Maintenance: Work with cross-functional teams, deploy applications, and provide ongoing support and maintenance.",
    ],
  },
  {
    title: "Senior Application Developer",
    company_name: "Team Global Logistics Private Limited",
    icon: "/assets/images/company/teamglobal.png",
    iconBg: "#E6DEDD",
    date: "June 2012 - July 2015",
    points: [
      "Developed Python scripts to meet client requirements, focusing on parsing XML and database integration.",
      "Proactively addressed day-to-day application issues, optimizing performance for enhanced user experience.",
      "Maintained and improved existing software, evaluating applications for updates, reprogramming, and feature additions.",
    ],
  },
  {
    title: "Technical Support Engineer / Application Developer",
    company_name: "NetCore Solutions Private Limited",
    icon: "/assets/images/company/netcore.jpg",
    iconBg: "#E6DEDD",
    date: "November 2007 - May 2012",
    points: [
      "Provided prompt solutions and proactive troubleshooting support to swiftly resolve subtle and complex mail server issues.",
      "Handling escalated issues from junior team members and explain solution to them.",
      "Wrote shell script whenever needed.",
      "Wrote high quality source code for mail server product.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/carrent.png",
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/jobit.png",
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/tripguide.png",
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
