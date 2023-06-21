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
        "master program", "./homepage-img/master-program.png", "cyber security master program", "5", "100", "6k"
    ],
    datascience = [
        "master program", "./homepage-img/master-program.png", "data analytics master program", "8", "270", "61k"
    ],
    ProgrammingandFrameworks = [
        "master program", "./homepage-img/master-program.png", "full stack web developer master program course", "7", "80", "11k"
    ],
    ProjectManagementMethodology = [
        "master program", "./homepage-img/master-program.png", "PMP® Certification Training Course", "7", "140", "13k"
    ],
    softwareTesting = [
        "master program", "./homepage-img/master-program.png", "Selenium Certification Training Course", "5", "80", "1k"
    ],
    bigData = [
        "master program", "./homepage-img/master-program.png", "Big Data Hadoop Certification Training Course", "2", "20", "1k"
    ],
    artificialIntelligence = [
        "master program", "./homepage-img/master-program.png", "Artificial Intelligence Certification Course", "12", "250", "31k"
    ],
    frontendDevelopment = [
        "master program", "./homepage-img/master-program.png", "React JS Certification Training Course", "12", "250", "31k"
    ],
    databases = [
        "master program", "./homepage-img/master-program.png", "Microsoft SQL Server Certification Course", "12", "250", "31k"
    ],
    roboticsProcessAutomation = [
        "master program", "./homepage-img/master-program.png", "RPA using UiPath Certification Training", "12", "250", "31k"
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
        "master program", "./homepage-img/master-program.png", "blockchain developer certification training", "12", "250", "31k"
    ]
]

const trendingCoursesDetails = [
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
        "business intelligence and Visualization  course",
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
        "business intelligence and Visualization  course",
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
        "business intelligence and Visualization  course",
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
        "business intelligence and Visualization  course",
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
        "business intelligence and Visualization  course",
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
        "business intelligence and Visualization  course",
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