import { HistoryItem, HistoryType, Language, Framework, Skill } from "./types";

export const workExperience: HistoryItem[] = [
  {
    type: HistoryType.WORK,
    startDate: new Date(2024, 10),
    endDate: new Date(2025, 1),
    company: "Netizen eXperience",
    description: [
      "Enhanced a hiring dashboard web application in Next.js that processes job applications by implementing new features involving CRUD operations, such as application history, to improve application tracking.",
      "Implemented UI according to Figma designs provided by the UI/UX team, ensuring accurate translation of designs and responsiveness across different screen sizes.",
      "Adhered to Agile development practices by participating in daily stand-ups, sprint planning and reviews with the Project Manager and Product Owner.",
      "Participated in code reviews to justify design choices, identify potential issues in code, and suggest improvements to maintain code quality.",
    ],
    image: "/images/netizen_experience_logo.png",
    skills: [Skill.WEB, Language.TS, Framework.REACT, Framework.NEXT],
    role: "Web Development Intern",
  },
  {
    type: HistoryType.WORK,
    startDate: new Date(2023, 6),
    endDate: new Date(2023, 11),
    company: "TIME",
    description: [
      "Developed object-oriented PHP scripts to log the daily network performance of 487 Linux single-board computers, and to issue alerts on performance degradation; improved reliability of the initial design by reducing false alerts; led a presentation to explain the design and operation of the alert system to other internal teams.",
      "Developed a PHP script that processes up to 400GB of data and generates an HTML email summarising the daily network performance of customer routers; enabling the team to quickly identify service areas experiencing network issues.",
      "Developed Bash scripts to automate the installation of network drivers on single-board computers, increasing download speeds from 1.4Gbps to 2.0Gbps to support speed tests for network performance monitoring.",
      "Implemented an automated alert system using Telegram Bot API and Grafana to monitor the resource utilisation of 15 Linux virtual machines.",
    ],
    image: "/images/time_dotcom_berhad_logo.jpg",
    skills: [Skill.SCRIPTING, Language.PHP, Language.BASH],
    role: "Operations Support Systems Intern",
  },
];

export const education: HistoryItem[] = [
  {
    type: HistoryType.EDUCATION,
    startDate: new Date(2020, 9),
    endDate: new Date(2025, 10),
    company: "Monash University",
    role: "Bachelor of Software Engineering (First Class Honours)",
    description: [
      "GPA: 3.78/4.00; CGPA: 3.93/4.00",
      "Dean's Honour List (2022-2023): Achieved weighted average mark of 80% and above",
      "Monash High Achiever Award (2020-2025): Partial tuition fee waiver based on academic performance",
      "Industry-Based Learning (2023): Partial tuition fee waiver for 22-week industry placement",
    ],
  },
  {
    type: HistoryType.EDUCATION,
    startDate: new Date(2019, 0),
    endDate: new Date(2020, 5),
    company: "Taylor's College",
    role: "Cambridge A Levels",
    description: [
      "Grades: 4A*",
      "Taylor's Distinction Award (2019): Full tuition fee waiver",
    ],
  },
  {
    type: HistoryType.EDUCATION,
    startDate: new Date(2014, 0),
    endDate: new Date(2018, 11),
    company: "SMK Bandar Utama Damansara 3",
    role: "Malaysian Education Certificate (SPM)",
    description: ["Grades: 7A+, 1A, 1B+"],
  },
];

export const editorText =
  "Fresh graduate with past development experience in industry projects involving web, mobile and scripting.\n\nSeeking an entry-level role to strengthen existing skills and continue learning.\n\n:)";
