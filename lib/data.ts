export const siteConfig = {
  name: "Techlist Solutions",
  email: "info@techlistsolutions.com",
  phone: "+91 981 802 6348",
  address: "Essel Towers Gurugram Haryana",
  contactFormAction: "https://getform.io/f/ff055a28-bab2-4123-b23d-b61dc2b6c591",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact Us" },
];

export const homeStats = [
  {
    image: "/assets/images/stats2.png",
    value: "~95%",
    text: "Freshers do not have right job hunt strategy due to lack of mentorship",
  },
  {
    image: "/assets/images/stats1.png",
    value: "80%",
    text: "Graduates are not employable and need career help",
  },
  {
    image: "/assets/images/stats4.png",
    value: "5 Mn +",
    text: "Freshers are looking for job at any point of time",
  },
];

export const homeQuestions = [
  {
    image: "/assets/images/think2.jpeg",
    text: "Are you pursuing your undergraduate course by compromise and not by choice?",
  },
  {
    image: "/assets/images/think3.jpeg",
    text: "Do you feel that the average placement figures of your institute are too low as per current industry norms?",
  },
  {
    image: "/assets/images/think4.jpeg",
    text: "Are you not sure if your CV and profile will be able to make the desired impact on recruiters",
  },
];

export const whatWeDo = [
  {
    title: "Counselling",
    image: "/assets/images/stats1.png",
    paragraphs: [
      "Helping students in selecting correct streams and choosing right career path",
    ],
  },
  {
    title: "Conversion",
    image: "/assets/images/stats2.png",
    paragraphs: [
      "Our Industry specific focus is to ensure that all relevant opportunities can be tapped and converted We consider every candidate as an individual and work around only the weaker areas.",
    ],
  },
  {
    title: "Job Scouting",
    image: "/assets/images/stats3.png",
    paragraphs: [
      "We have a team of experts on Profile Management",
      "We review each candidate and connect them to right industry",
      "We focus on preparing students so that they can apply with proper confidence",
    ],
  },
  {
    title: "Skill Benchmarking and Improvement",
    image: "/assets/images/stats4.png",
    paragraphs: [
      "We are working with Institutes/TPCs to revamp/Upgrade their placement support system.",
      "We have developed customized courses for specific areas of improvement",
      "We focus on Lectures and Workshops and conduct Mock Placement drives",
    ],
  },
];

export const differentiators = [
  {
    image: "/assets/images/c5.png",
    title: "Focus",
    description:
      "We are keeping our focus limited to particular domains, functions and career lifecycle",
  },
  {
    image: "/assets/images/c1.png",
    title: "Affordability",
    description:
      "Our Study modules are precisely designed in accordance with Corporate Requirements and are kept affordable to target the freshers students.",
  },
  {
    image: "/assets/images/c6.png",
    title: "Team",
    description:
      "We have a team of experts from reputed institutions and those who strongly understand the domain we focus on.",
  },
  {
    image: "/assets/images/stats4.png",
    title: "Industry Connect",
    description:
      "We have huge database and have strong connects with the domains and sector of our focus.",
  },
];

export const educators = [
  {
    name: "Naresh Kumar",
    role: "DGM- Absolute",
    education: "IIM-Ahmedabad",
    image: "/assets/images/team-naresh.jpg",
    linkedin: "https://www.linkedin.com/in/nareshkumar16a/",
  },
  {
    name: "Himanshu Saxena",
    role: "NSM- FOSS India",
    education: "IIM-Calcutta",
    image: "/assets/images/team-himanshu.jpg",
    linkedin: "https://www.linkedin.com/in/himanshu-saxena-6163a221/",
  },
];

export const experts = [
  {
    name: "Om Prakash Pathak",
    role: "Team Lead, Gartner",
    education: "IIM-Ahmedabad",
    image: "/assets/images/team-om.jpg",
    linkedin: "https://www.linkedin.com/in/om-prakash-pathak-58bb8966/",
  },
  {
    name: "Mohammad Bashir",
    role: "Ex-HSBC, Ex- Amazon",
    education: "IIM-Ahmedabad",
    image: "/assets/images/team-basheer.jpg",
    linkedin: "https://www.linkedin.com/in/mo-bash/",
  },
  {
    name: "Atul Kumar",
    role: "Product Manager- Kotak Bank",
    education: "IIM-Ahmedabad",
    image: "/assets/images/team-atul.jpg",
    linkedin: "https://www.linkedin.com/in/atul-kumar-672690139/",
  },
];

export type CourseSession = {
  title: string;
  items?: string[];
  ordered?: string[];
};

export type CourseModule = {
  number: string;
  title: string;
  description: string[];
  sessions: CourseSession[];
  pricing: string | string[];
};

export const courseModules: CourseModule[] = [
  {
    number: "Module 1",
    title: "Profile and Visibility Build up",
    description: [
      "Boost your career prospects and land your dream job with our comprehensive 4 session course. Designed to give you the visibility and skills you need to stand out in the job market.",
      "This course covers everything from crafting a standout CV and cover letter to building a strong LinkedIn profile and networking effectively.",
    ],
    sessions: [
      {
        title: "Session 1",
        items: ["CV and Cover Letter Drafting", "60 mins"],
      },
      {
        title: "Session 2",
        items: ["Social Media Profile Write-up and Maintenance", "60 mins"],
      },
      {
        title: "Session 3",
        items: ["Counselling on Higher Education Options", "60 mins"],
      },
      {
        title: "Session 4",
        items: ["Counselling on prominent job opportunities", "60 mins"],
      },
    ],
    pricing: "INR 5000 + GST ONLY",
  },
  {
    number: "Module 2",
    title: "Skill Development",
    description: [
      "The module focuses on performance during interviews and on the job.",
      "It covers exposure to short courses in popular tools like Excel, PowerPoint, Power BI, & Alteryx to help you get ahead in your career. With a tailored design, you can build a solid foundation of knowledge in just 5+ hours.",
    ],
    sessions: [
      {
        title: "Session 1 : Soft Skills and Communication",
        ordered: ["Lecture : 60 Mins", "Workshop : 90 Mins"],
      },
      {
        title: "Session 2 : Data Analysis and Presentation Tools",
        ordered: [
          "MS Excel Fundamentals : 60 Mins",
          "MS Power Point Fundamentals : 60 Mins",
          "Power BI Fundamentals : 60 Mins",
          "Alteryx Fundamentals : 60 Mins",
        ],
      },
    ],
    pricing: [
      "Session 1 : INR 3000 + GST ONLY",
      "Session 2 : INR 3000 + GST ONLY",
    ],
  },
  {
    number: "Module 3",
    title: "Interview Preparation",
    description: [
      "Our course goes beyond technical skills to prepare you for every aspect of the job search process. From HR interview questions to psychometric tests and case study-based questions, you'll be ready to tackle any challenge that comes your way. Plus, as a registered student, you'll have access to unpublished job opportunities through our information channel",
    ],
    sessions: [
      {
        title: "Session 1 : GD , Personal Interview and HR Interview",
        ordered: ["Lecture : 90 Mins", "Workshop : 180 Mins"],
      },
      { title: "Session 2 : Psychometric Test and Logical Reasoning - 90 mins" },
      { title: "Session 3 : Solving Case Studies - 60 mins" },
      { title: "Session 4: Internship Placement Support - Delivery Based" },
    ],
    pricing: [
      "Session 1 - 3 : INR 6000 + GST ONLY",
      "Session 4 : INR 3000 + GST ONLY",
    ],
  },
  {
    number: "Module 4",
    title: "Tech Fundamentals",
    description: [
      "For those seeking careers in the agriculture and food processing sectors, our course offers a deep dive into the fundamentals of these industries. Developed in close collaboration with industry experts, you'll brush up on key areas such as agri-business and value chains, food processing, manufacturing operations, and quality control and certification.",
    ],
    sessions: [
      {
        title: "Session 1 : Tech Fundamentals",
        ordered: [
          "Agribusiness and Value Chain : 60 Mins",
          "Basics for Start-up Ecosystem : 60 Mins",
          "Manufacturing Sector Fundamentals : 60 Mins",
          "Auditing/Certification and QC : 60 Mins",
        ],
      },
    ],
    pricing: "Session 1 : INR 4000 + GST ONLY",
  },
  {
    number: "Module 5",
    title: "One to One Discussion",
    description: [
      "For those with specific career goals or challenges, we offer personalized solutions to help you achieve your objectives. With 3+ hours dedicated to CV review and update, LinkedIn profile review and update, career counselling, and guidance, you'll have the support you need to succeed.",
    ],
    sessions: [
      { title: "Session 1 : CV Review and Update - 60 Mins" },
      { title: "Session 2: LinkedIn Profile Review and Update - 60 Mins" },
      { title: "Session 3: Spare slot for specific discussion - 60 Mins" },
    ],
    pricing: "Session 1 -3 : INR 4000 + GST ONLY",
  },
];

export const mediaStories = [
  {
    images: [
      { src: "/assets/images/Picture1.jpg", className: "w-full rounded-xl shadow-md" },
      { src: "/assets/images/Picture2.jpg", className: "w-full rounded-xl shadow-md mt-4" },
    ],
    content: [
      "Techlist Solutions visited Guru Jambheshwar University of Science and Technology, Hisar and interacted with students from Graduate and Post Graduate Courses in Food Science and Technology and other allied fields.",
      "The students were pumped up from learning about the opportunities through new emerging roles across agriculture and food technology",
    ],
    inlineImage: {
      src: "/assets/images/Picture3.png",
      className: "w-full max-w-md rounded-xl shadow-md mt-6",
    },
  },
  {
    reverse: true,
    images: [
      { src: "/assets/images/Picture4.png", className: "w-full rounded-xl shadow-md" },
      { src: "/assets/images/Picture5.png", className: "w-full rounded-xl shadow-md mt-4" },
    ],
    content: [
      "Techlist Solutions was invited by Raja Balwant Singh College (RBS) Agra to deliver a talk on \"Changing Skillsets Requirements in Food and Bio-Technology.",
      "Our Educators Mr Naresh Kumar and Mr. Himanshu Saxena gave tips for building a strong LinkedIn Profile and a stellar CV. They attended to the queries related to placement and career selection from the students at the end of the talk.",
    ],
    inlineImage: {
      src: "/assets/images/Picture6.png",
      className: "w-full max-w-lg rounded-xl shadow-md mt-6",
    },
  },
];
