const categoriesItems = [
    "Cloud Computing",
    "DevOps",
    "BI and Visualization",
    "Cyber Security",
    "Data Science",
    "Programming & Frameworks",
    "Project Management & Methodology",
    "software Testing",
    "big data",
    "artificial intelligence",
    "Frontend development",
    "databases",
    "robotics process Automation",
    "data warehousing and ETL",
    "digital marketing",
    "Operating systems",
    "mobile development",
    "architecture and design patterns",
    "blockchain",
];

const catItemDetailslist = [
    CloudComputing = [
        "cloud architect master program",
        "Microsoft Azure Cloud Engineer Masters Program",
        "designing microsoft azure architect certification course",
        "salesforce CRM master certification program",
        "AWS master program",
        "microservices certification training course",
        "AWS developer certification training",
        "google cloud platform (GCP) certification training course"
    ],
    DevOps = [
        "DevOps certification training Course",
        "kubernetes certifiction training course : administrator(CKA)",
        "AWS DevOps Engeneer certification training course",
        "docker certuficaation training course",
        "Git certification training course",
        "ansible certification training course",
        "jenkins certification training course",
        "DevOps engeneer master program",
    ],
    BIandVisualization = [
        "business intelligence master program",
        "microsoft power BI certification training course",
        "advance MS excel 2016 certification training",
        "pentaho BI certification training",
        "QlikView certification training",
        "business analys master course",
        "tableau certification training course"
    ],
    CyberSecurity = [
        "cyber security master program",
        "cyber security course",
        "CompTIA Security+ Certification Training - SY0-601 Exam ",
        "certified ethical hacking course CEHv12",
        "Cyber Security and Ethical Hacking Internship Program"
    ],
    datascience = [
        "data analytics master program",
        "python certification training course",
        "statics essentials for analytics",
        "data analytics with R programing crtificaation training",
        "data science with R programing crtificaation training",
        "advance predivtive modelling in R certification training",
        "analytics for retail banks",
        "SAS training and certification",
    ],
    ProgrammingandFrameworks = [
        "full stack web developer master program course",
        "computer science bootcamp program",
        "java certification training course",
        "node.js certification training course",
        "spring framework certification course",
        "comprehensive java course certification training",
        "python django certification training course",
        "python scripting certification training",
    ],
    ProjectManagementMethodology = [
        "PMP® Certification Training Course",
        "PRINCE2® 6th Edition Foundation & Practitioner Certification Training Course",
        "Professional Scrum Master Training",
        "PMI-RMP® Certification Course",
    ],
    softwareTesting = [
        "Selenium Certification Training Course",
        "Mobile App Testing Using Appium",
        "Manual Testing Certification Training Course Online",
        "Software Testing Fundamentals Course",
        "automation testing engeneer master program",
    ],
    bigData = [
        "Big Data Hadoop Certification Training Course",
        "Apache Spark and Scala Certification Training Course",
        "PySpark Certification Training Course",
        "Apache Kafka Certification Training Course",
        "Splunk Certification Training: Power User and Admin",
        "Big Data Hadoop Administration Certification Training",
    ],
    artificialIntelligence = [
        "Artificial Intelligence Certification Course",
        "ChatGPT-4 Complete Course: Beginners to Advanced",
        "Machine Learning with Mahout Certification Training",
        "rienforcement learning",
        "graphicaal model certification training",
    ],
    frontendDevelopment = [
        "React JS Certification Training Course",
        "Angular Certification Training Course",
        "Web Developer Certification Training Course",
        "HTML Certification Training Course",
        "CSS Certification Training Course",
        "JavaScript Certification Training Course",
        "UI UX Design Certification Course",
        "jQuery Certification Training Course"
    ],
    databases = [
        "Microsoft SQL Server Certification Course",
        "MySQL DBA Certification Training",
        "MongoDB Certification Training Course",
        "SQL Essentials Training",
        "Apache Cassandra Certification Training",
        "Mastering Neo4j Graph Database Certification Training",
    ],
    roboticsProcessAutomation = [
        "RPA using UiPath Certification Training",
        "Automation Anywhere Certification Training Course",
        "RPA developer master program"
    ],
    dataWarehousingAndETL = [
        "Informatica Certification Training Course",
        "Snowflake Certification Training Course",
        "Talend Certification Training For Big Data Integration",
        "Data Warehousing and BI Certification Training",
        "Data Warehousing Certification Training",
    ],
    digitalMarketing = [
        "Digital Marketing Course",
        "Measuring Social Media ROI",
        "Mastering Google Analytics",
    ],
    operetingSystems = [
        "Linux Administration Certification Training Course",
        "Linux Fundamentals Certification Training",
        "unix shell scripting certification training"
    ],
    mobileDevelopment = [
        "Android Certification Training Course",
        "iOS App Development Certification Training",

    ],
    architectureDesignPatterns = [
        "design patterns certification training",

    ],
    blockchain = [
        "blockchain developer certification training",
        "ethereum developer certification training",
    ]
]

const catItemDetailsCard = [
    CloudComputing = [
        "master program", "./homepage-img/master-program-2.png", "cloud architect master program", "12", "250", "31k"
    ],
    DevOps = [
        "live course", "./homepage-img/master-program.png", "DevOps certification training Course", "10", "200", "11k"
    ],
    BIandVisualization = [
        "master program", "./homepage-img/master-program.png", "business intelligence master program", "14", "250", "41k"
    ],
    CyberSecurity = [
        "master program", "./homepage-img/master-program-2.png", "cyber security master program", "5", "100", "6k"
    ],
    datascience = [
        "master program", "./homepage-img/master-program.png", "data analytics master program", "8", "270", "61k"
    ],
    ProgrammingandFrameworks = [
        "master program", "./homepage-img/master-program.png", "full stack web developer master program course", "7", "80", "11k"
    ],
    ProjectManagementMethodology = [
        "master program", "./homepage-img/master-program-2.png", "PMP® Certification Training Course", "7", "140", "13k"
    ],
    softwareTesting = [
        "master program", "./homepage-img/master-program.png", "Selenium Certification Training Course", "5", "80", "1k"
    ],
    bigData = [
        "master program", "./homepage-img/master-program.png", "Big Data Hadoop Certification Training Course", "2", "20", "1k"
    ],
    artificialIntelligence = [
        "master program", "./homepage-img/master-program-2.png", "Artificial Intelligence Certification Course", "12", "250", "31k"
    ],
    frontendDevelopment = [
        "master program", "./homepage-img/master-program.png", "React JS Certification Training Course", "12", "250", "31k"
    ],
    databases = [
        "master program", "./homepage-img/master-program.png", "Microsoft SQL Server Certification Course", "12", "250", "31k"
    ],
    roboticsProcessAutomation = [
        "master program", "./homepage-img/master-program-2.png", "RPA using UiPath Certification Training", "12", "250", "31k"
    ],
    dataWarehousingAndETL = [
        "master program", "./homepage-img/master-program.png", "Informatica Certification Training Course", "12", "250", "31k"
    ],
    digitalMarketing = [
        "master program", "./homepage-img/master-program.png", "Digital Marketing Course", "12", "250", "31k"
    ],
    operetingSystems = [
        "master program", "./homepage-img/master-program.png", "Linux Administration Certification Training Course", "12", "250", "31k"
    ],
    mobileDevelopment = [
        "master program", "./homepage-img/master-program.png", "Android Certification Training Course", "12", "250", "31k"

    ],
    architectureDesignPatterns = [
        "master program", "./homepage-img/master-program.png", "design patterns certification training", "12", "250", "31k"
    ],
    blockchain = [
        "master program", "./homepage-img/master-program-2.png", "blockchain developer certification training", "12", "250", "31k"
    ]
]

const trendingCoursesDetails = [
    aws = [
        "linear-gradient(242deg, #f49cae, #b05ce2)",
        "fa-brands fa-aws",
        "AWS solutions master certification training course",
        "AWS solutions architect certification training training",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star-half-stroke",
        "4.5",
        "(1200)",
        "in 5 days",
        "introduction to AWS",
        "identity and access managment",
        "amazon EC2 etc.",
        "red"
    ],
    PMP = [
        "linear-gradient(240deg,#e59f39,#d475c5)",
        "fa-solid fa-award",
        "PMI-RMP® master Certification training course program",
        "Professional Scrum Master certification Training program",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star-half-stroke",
        "fa-regular fa-star",
        "3.6",
        "(850)",
        "in 30 days",
        "introduction to PMP",
        "creat a high performing team",
        "starting a project etc.",
        "blue"
    ],
    devops = [
        "linear-gradient(240deg,#4fcdce,#975ae0)",
        "fa-solid fa-layer-group",
        "DevOps Engeneer Master Program Certification Course",
        "DevOps engeneer master certification program",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star-half-stroke",
        "fa-regular fa-star",
        "3.5",
        "(980)",
        "in 25 days",
        "complete DevOps program",
        "3 projects",
        "reat time projects etc.",
        "green"
    ],
    microsoftBI = [
        "linear-gradient(242deg, #f49cae, #b05ce2)",
        "fa-solid fa-infinity",
        "microsoft power BI and Visualization certification training course",
        "business intelligence and Visualization certification course",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star-half-stroke",
        "4.4",
        "(2400)",
        "in 5 days",
        "introduction to business intelligence",
        "microsoft power BI and Visualization",
        "reat time projects etc.",
        "#b05ce2"
    ],
    aws = [
        "linear-gradient(242deg, #f49cae, #b05ce2)",
        "fa-brands fa-aws",
        "AWS solutions master certification training course",
        "AWS solutions architect certification training",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star-half-stroke",
        "4.5",
        "(1200)",
        "in 5 days",
        "introduction to AWS",
        "identity and access managment",
        "amazon EC2 etc.",
        "sky-blue"
    ],
    PMP = [
        "linear-gradient(240deg,#e59f39,#d475c5)",
        "fa-solid fa-award",
        "PMI-RMP® master Certification training course program",
        "Professional Scrum Master certification Training program",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star-half-stroke",
        "fa-regular fa-star",
        "3.6",
        "(850)",
        "in 30 days",
        "introduction to PMP",
        "creat a high performing team",
        "starting a project etc.",
        "orange"
    ],
    devops = [
        "linear-gradient(240deg,#4fcdce,#975ae0)",
        "fa-solid fa-layer-group",
        "DevOps Engeneer Master Program Certification Course",
        "DevOps engeneer master certification program",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star-half-stroke",
        "fa-regular fa-star",
        "3.5",
        "(980)",
        "in 25 days",
        "complete DevOps program",
        "3 projects",
        "reat time projects etc.",
        "pink"
    ],
    microsoftBI = [
        "linear-gradient(242deg, #f49cae, #b05ce2)",
        "fa-solid fa-infinity",
        "microsoft power BI and Visualization certification training course",
        "business intelligence and Visualization certification  course",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star-half-stroke",
        "4.4",
        "(2400)",
        "in 5 days",
        "introduction to business intelligence",
        "microsoft power BI and Visualization",
        "reat time projects etc."
    ],
    aws = [
        "linear-gradient(242deg, #f49cae, #b05ce2)",
        "fa-brands fa-aws",
        "AWS solutions master certification training course",
        "AWS solutions architect certification training",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star-half-stroke",
        "4.5",
        "(1200)",
        "in 5 days",
        "introduction to AWS",
        "identity and access managment",
        "amazon EC2 etc."
    ],
    PMP = [
        "linear-gradient(240deg,#e59f39,#d475c5)",
        "fa-solid fa-award",
        "PMI-RMP® master Certification training course program",
        "Professional Scrum Master Training certification program",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star-half-stroke",
        "fa-regular fa-star",
        "3.6",
        "(850)",
        "in 30 days",
        "introduction to PMP",
        "creat a high performing team",
        "starting a project etc."
    ],
    devops = [
        "linear-gradient(240deg,#4fcdce,#975ae0)",
        "fa-solid fa-layer-group",
        "DevOps Engeneer Master Program Certification Course",
        "DevOps engeneer master certification program",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star-half-stroke",
        "fa-regular fa-star",
        "3.5",
        "(980)",
        "in 25 days",
        "complete DevOps program",
        "3 projects",
        "reat time projects etc."
    ],
    microsoftBI = [
        "linear-gradient(242deg, #f49cae, #b05ce2)",
        "fa-solid fa-infinity",
        "microsoft power BI and Visualization certification training course",
        "business intelligence and Visualization certification course",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star-half-stroke",
        "4.4",
        "(2400)",
        "in 5 days",
        "introduction to business intelligence",
        "microsoft power BI and Visualization",
        "reat time projects etc."
    ],
    aws = [
        "linear-gradient(242deg, #f49cae, #b05ce2)",
        "fa-brands fa-aws",
        "AWS solutions master certification training course",
        "AWS solutions architect certification training",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star-half-stroke",
        "4.5",
        "(1200)",
        "in 5 days",
        "introduction to AWS",
        "identity and access managment",
        "amazon EC2 etc."
    ],
    PMP = [
        "linear-gradient(240deg,#e59f39,#d475c5)",
        "fa-solid fa-award",
        "PMI-RMP® master Certification training course program",
        "Professional Scrum Master Training program",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star-half-stroke",
        "fa-regular fa-star",
        "3.6",
        "(850)",
        "in 30 days",
        "introduction to PMP",
        "creat a high performing team",
        "starting a project etc."
    ],
    devops = [
        "linear-gradient(240deg,#4fcdce,#975ae0)",
        "fa-solid fa-layer-group",
        "DevOps Engeneer Master Program Certification Course",
        "DevOps engeneer master certification program",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star-half-stroke",
        "fa-regular fa-star",
        "3.5",
        "(980)",
        "in 25 days",
        "complete DevOps program",
        "3 projects",
        "reat time projects etc."
    ],
    microsoftBI = [
        "linear-gradient(242deg, #f49cae, #b05ce2)",
        "fa-solid fa-infinity",
        "microsoft power BI and Visualization certification training course",
        "business intelligence and Visualization certification course",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star-half-stroke",
        "4.4",
        "(2400)",
        "in 5 days",
        "introduction to business intelligence",
        "microsoft power BI and Visualization",
        "reat time projects etc."
    ],
    aws = [
        "linear-gradient(242deg, #f49cae, #b05ce2)",
        "fa-brands fa-aws",
        "AWS solutions master certification training course",
        "AWS solutions architect certification training",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star-half-stroke",
        "4.5",
        "(1200)",
        "in 5 days",
        "introduction to AWS",
        "identity and access managment",
        "amazon EC2 etc."
    ],
    PMP = [
        "linear-gradient(240deg,#e59f39,#d475c5)",
        "fa-solid fa-award",
        "PMI-RMP® master Certification training course program",
        "Professional Scrum Master Training certification program",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star-half-stroke",
        "fa-regular fa-star",
        "3.6",
        "(850)",
        "in 30 days",
        "introduction to PMP",
        "creat a high performing team",
        "starting a project etc."
    ],
    devops = [
        "linear-gradient(240deg,#4fcdce,#975ae0)",
        "fa-solid fa-layer-group",
        "DevOps Engeneer Master Program Certification Course",
        "DevOps engeneer master certification program",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star-half-stroke",
        "fa-regular fa-star",
        "3.5",
        "(980)",
        "in 25 days",
        "complete DevOps program",
        "3 projects",
        "reat time projects etc."
    ],
    microsoftBI = [
        "linear-gradient(242deg, #f49cae, #b05ce2)",
        "fa-solid fa-infinity",
        "microsoft power BI and Visualization certification training course",
        "business intelligence and Visualization certification course",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star-half-stroke",
        "4.4",
        "(2400)",
        "in 5 days",
        "introduction to business intelligence",
        "microsoft power BI and Visualization",
        "reat time projects etc."
    ],
    aws = [
        "linear-gradient(242deg, #f49cae, #b05ce2)",
        "fa-brands fa-aws",
        "AWS solutions master certification training course",
        "AWS solutions architect certification training",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star-half-stroke",
        "4.5",
        "(1200)",
        "in 5 days",
        "introduction to AWS",
        "identity and access managment",
        "amazon EC2 etc."
    ],
    PMP = [
        "linear-gradient(240deg,#e59f39,#d475c5)",
        "fa-solid fa-award",
        "PMI-RMP® master Certification training course program",
        "Professional Scrum Master Training certification program",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star-half-stroke",
        "fa-regular fa-star",
        "3.6",
        "(850)",
        "in 30 days",
        "introduction to PMP",
        "creat a high performing team",
        "starting a project etc."
    ],
    devops = [
        "linear-gradient(240deg,#4fcdce,#975ae0)",
        "fa-solid fa-layer-group",
        "DevOps Engeneer Master Program Certification Course",
        "DevOps engeneer master certification program",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star-half-stroke",
        "fa-regular fa-star",
        "3.5",
        "(980)",
        "in 25 days",
        "complete DevOps program",
        "3 projects",
        "reat time projects etc."
    ],
    microsoftBI = [
        "linear-gradient(242deg, #f49cae, #b05ce2)",
        "fa-solid fa-infinity",
        "microsoft power BI and Visualization certification training course",
        "business intelligence and Visualization certification course",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star-half-stroke",
        "4.4",
        "(2400)",
        "in 5 days",
        "introduction to business intelligence",
        "microsoft power BI and Visualization",
        "reat time projects etc."
    ],
]


const reviewDetails = [
    anurag = [
        "a",
        "rgb(247, 239, 8)",
        "anurag sen ",
        "fa-brands fa-linkedin",
        "#0A66C2",
        "student",
        "full stack web developer internship program",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star-half-stroke",
        "I highly recommend Edureka for anyone seeking a top-notch learning experience. The platform offers a seamless online environment with knowledgeable  instructors who make complex concepts easy to understand. The up-to-date course content,",
        " hands-on assignments, and real-world projects allowed me to apply my learning effectively. The flexibility and support provided by Edureka were outstanding, and the interactive community added value to my journey. Overall, Edureka surpassed my expectations and provided an exceptional learning experience."
    ],
    ayushi = [
        "a",
        "lightblue",
        "ayushi sahu ",
        "fa-brands fa-square-github",
        "black",
        "data analyst",
        "informatica certification training course",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-haf-stroke",
        "Edureka is amazing, in my course Informatica I could download the software and was confused  at several parts but I got proper assistance from Ravi, he was very patient and helped me through out the installation process which basically took 2 hour. ",

        "You can imagine the amount of patience needed to stay connected the whole time, being attentive of the client's and working from scratch to fix everything. He also answered various questions regarding my course expectation and explained each step of installation process. So far my experience with Ravi and Edureka has been amazing."
    ],
    joe = [
        "J",
        "grey",
        "Joe frixon ",
        "fa-brands fa-linkedin",
        "#0A66C2",
        "multi cloud engeneer",
        "post graduate program in DevOps",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "Edureka is a well-known e-learning platform that offers a range of courses, including advance level. Throughout the program, I gained extensive knowledge and honed my skills",

        "  significantly. The mentor provided excellent guidance, addressing every small doubt and delivering classes in an effective manner. Overall, it was a great learning platform for anyone seeking to enhance their expertise. However, I would suggest improving response time for raised tickets."
    ],
    rasha = [
        "r",
        "pink",
        "rasha jamsheer ",
        "fa-brands fa-linkedin",
        "#0A66C2",
        "student",
        "chatGPT4 complete course: begining to advance",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-regular fa-star",
        "I recently completed Edureka's certified course on Chat GPT, ranging from Beginner to Advance DevOps training. The DevOps course covers  and Configuration Management, among others. The course is well-structured in collaboration with Purdue University, with each concept explained clearly and concisely One of the standout",
        "  features of Edureka DevOps training is the availability of hands-on exercises and projects. These provide learners with an opportunity to apply the concepts they have learned practically, which is crucial in mastering the subject. Despite its strengths, there are a few areas where Edureka DevOps training could be improved. Some beginners may find the course overwhelming, and some learners may struggle to keep up with its pace. Additionally, the instructors could have used real-world examples to help illustrate the concepts. To make the most of the course, learners should make wise use of the feedback mechanism after each class. This will enable Edureka to evaluate the classses progress, allowing the instructors to adjust their pace accordingly. It is also recommended that the course provide access to a community of learners, where students can share experiences, ask questions, and receive support from fellow learners and instructors"
    ],
    anurag = [
        "a",
        "rgb(247, 239, 8)",
        "anurag sen ",
        "fa-brands fa-linkedin",
        "#0A66C2",
        "student",
        "full stack web developer internship program",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star-half-stroke",
        "I highly recommend Edureka for anyone seeking a top-notch learning experience. The platform offers a seamless online  environment with knowledgeable instructors who make complex concepts easy to understand.",
        " The up-to-date course content, hands-on assignments, and real-world projects allowed me to apply my learning effectively. The flexibility and support provided by Edureka were outstanding, and the interactive community added value to my journey. Overall, Edureka surpassed my expectations and provided an exceptional learning experience."
    ],
    ayushi = [
        "a",
        "lightblue",
        "ayushi sahu ",
        "fa-brands fa-square-github",
        "black",
        "data analyst",
        "informatica certification training course",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-color",
        "fa-solid fa-star star-haf-stroke",
        "Edureka is amazing, in my course Informatica I could download the software and was confused  at several parts but I got proper assistance from Ravi, he was very patient and helped  me through out the installation process which basically took 2 hour. You can imagine the amount",

        " of patience needed to stay connected the whole time, being attentive of the client's and working from scratch to fix everything. He also answered various questions regarding my course expectation and explained each step of installation process. So far my experience with Ravi and Edureka has been amazing."
    ],
]

const blogDetails = [
    {
        blogImg: "./homepage-img/blog-img1.jpg",
        releaseDate: "may 1st",
        blogHeading: "Top 120+ DevOps Interview Questions And Answers for 2023"
    },
    {
        blogImg: "./homepage-img/blog-img2.png",
        releaseDate: "march 14th",
        blogHeading: "Top Core Java Interview Questions for Freshers and Experienced in 2023"
    },
    {
        blogImg: "./homepage-img/blog-img3.png",
        releaseDate: "january 9th",
        blogHeading: "Setting Up A Multi Node Cluster In Hadoop 2.X"
    },
    {
        blogImg: "./homepage-img/blog-img4.jpg",
        releaseDate: "december 10th",
        blogHeading: "Top 100+ AWS Interview Questions and Answers for 2023"
    },
    {
        blogImg: "./homepage-img/blog-img5.png",
        releaseDate: "april 23rd",
        blogHeading: "Top 100+ Python Interview Questions You Must Prepare In 2023"
    },
    {
        blogImg: "./homepage-img/blog-img6.png",
        releaseDate: "september 19th",
        blogHeading: "10 Reasons Why Big Data Analytics is the Best Career Move"
    },
    {
        blogImg: "./homepage-img/blog-img7.png",
        releaseDate: "july 2nd",
        blogHeading: "What is AWS Certification: Top Benefits, Various Certifications List, and More"
    },
    {
        blogImg: "./homepage-img/blog-img8.png",
        releaseDate: "february 17th",
        blogHeading: "Top Angular Interview Questions You Must Prepare In 2023"
    },
    {
        blogImg: "./homepage-img/blog-img9.jpg",
        releaseDate: "august 9th",
        blogHeading: "Top Tableau Interview Questions And Answers for 2023"
    },
    {
        blogImg: "./homepage-img/blog-img10.png",
        releaseDate: "october 30th",
        blogHeading: "Top 100+ React Interview Questions You Must Prepare In 2023"
    },
    {
        blogImg: "./homepage-img/blog-img11.png",
        releaseDate: "may 14th",
        blogHeading: "Top Hive Commands with Examples in HQL"
    },
    {
        blogImg: "./homepage-img/blog-img12.png",
        releaseDate: "january 19th",
        blogHeading: "Top 50 Hadoop Interview Questions You Must Prepare In 2023"
    },
] 

const footersectionData = [
    "DevOps Certification Training Course",
    "AWS Solutions Architect Certification Training Course",
    "Big Data Hadoop Certification Training Course",
    "Tableau Certification Training Course",
    "Data Science with Python Certification Course",
    "Selenium Certification Training Course",
    "PMP® Certification Training Course",
    "RPA using UiPath Certification Training",
    "Apache Spark and Scala Certification Training Course",
    "Microsoft Power BI Certification Training Course",
    "Java Certification Training Course",
    "Python Certification Training Course",
    "Data Science Training Masters Program",
    "DevOps Engineer Masters Program",
    "Cloud Architect Masters Program",
    "Big Data Architect Masters Program",
    "AI and Machine Learning Masters Course",
    "Full Stack Web Developer Masters Program Course",
    "Business Intelligence Masters Program",
    "Data Analytics Masters Program",
    "Automation Testing Engineer Masters Program",
    "Post Graduate Diploma in Artificial Intelligence Course",
    "Post Graduate Program in DevOps",
    "about us",
    "news & media",
    "reviews",
    "contact us",
    "webinar",
    "blog",
    "community",
    "locations",
    "sitemap",
    "blog sitemap",
    "community sitemap",
    "city sitemap",
    "corporate training",
    "carrers",
    "become an intructor",
    "become an affiliate",
    "become a partner",
    "hire from edureka"
]