import { FaGithubSquare, FaGraduationCap, FaSchool } from "react-icons/fa";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import logoSvg from "@/assets/logo_svg";
import one from "@/assets/thumbnails/1.png";
import two from "@/assets/thumbnails/2.png";
import three from "@/assets/thumbnails/3.png";
import four from "@/assets/thumbnails/4.png";
import five from "@/assets/thumbnails/5.png";
import six from "@/assets/thumbnails/6.png";
import seven from "@/assets/thumbnails/7.png";
import eight from "@/assets/thumbnails/8.png";
import nine from "@/assets/thumbnails/9.png";
import ten from "@/assets/thumbnails/10.png";
import eleven from "@/assets/thumbnails/111.png";
import twelve from "@/assets/thumbnails/122.png";
import thirteen from "@/assets/thumbnails/13.png";

export const portfolioData = {
  personalInfo: {
    name: "Usama Puward",
    title: "AI/SE Engineer & Software Developer",
    email: "usamafuward2001@gmail.com",
    phone: "+94 (76) 6260507",
    location: "Colombo, Sri Lanka",
    bio: "Computer Science Graduate and current AI/SE Engineer and Software Developer, with a strong passion for Software Developing, Machine Learning, and Artificial Intelligence. Skilled in developing efficient and innovative solutions for real-world projects and building high-quality applications. Eager to tackle complex challenges in software development and drive innovation within the fields of AI and ML.",
  },

  socialLinks: [
    {
      platform: "GitHub",
      link: "https://github.com/Usamafuward",
      icon: FaGithubSquare,
    },
    {
      platform: "LinkedIn",
      link: "https://linkedin.com/in/usama-puward",
      icon: AiFillLinkedin,
    },
    {
      platform: "X (Twitter)",
      link: "https://www.x.com/usamafuward",
      icon: FaSquareXTwitter,
    },
    {
      platform: "Instagram",
      link: "https://www.instagram.com/usama._fuward",
      icon: AiFillInstagram,
    },
    {
      platform: "Email",
      link: "mailto:usamafuward2001@gmail.com",
      icon: IoMail,
    },
  ],

  technologies: [
    { imgUrl: logoSvg.bootstrap, altText: "Bootstrap Logo" },
    { imgUrl: logoSvg.docker, altText: "Docker Logo" },
    { imgUrl: logoSvg.github, altText: "GitHub Logo" },
    { imgUrl: logoSvg.javascript, altText: "JavaScript Logo" },
    { imgUrl: logoSvg.mongodb, altText: "MongoDB Logo" },
    { imgUrl: logoSvg.nodedotjs, altText: "Node.js Logo" },
    { imgUrl: logoSvg.python, altText: "Python Logo" },
    { imgUrl: logoSvg.react, altText: "React Logo" },
    { imgUrl: logoSvg.tensorflow, altText: "TensorFlow Logo" },
    { imgUrl: logoSvg.postgresql, altText: "PostgreSQL Logo" },
    { imgUrl: logoSvg.tailwindcss, altText: "Tailwind CSS Logo" },
    { imgUrl: logoSvg.bootstrap, altText: "Bootstrap Logo" },
    { imgUrl: logoSvg.sass, altText: "SCSS Logo" },
    { imgUrl: logoSvg.fastapi, altText: "FastAPI Logo" },
    { imgUrl: logoSvg.express, altText: "Express Logo" },
    { imgUrl: logoSvg.mysql, altText: "MySQL Logo" },
    { imgUrl: logoSvg.pandas, altText: "Pandas Logo" },
    { imgUrl: logoSvg.numpy, altText: "NumPy Logo" },
    { imgUrl: logoSvg.scikitlearn, altText: "scikit-learn Logo" },
    { imgUrl: logoSvg.cplusplus, altText: "C++ Logo" },
    { imgUrl: logoSvg.git, altText: "Git Logo" },
    { imgUrl: logoSvg.django, altText: "Django Logo" },
    { imgUrl: logoSvg.reactnative, altText: "React Native Logo" },
  ],

  skills: [
    {
      category: "Front-End Development",
      progress: 85,
      techs: [
        "React",
        "Next",
        "React Native",
        "FastHTML",
        "SCSS",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      category: "Back-End Development",
      progress: 90,
      techs: ["FastAPI", "Node.js", "Django", "Express.js"],
    },
    {
      category: "Machine Learning",
      progress: 75,
      techs: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    },
    {
      category: "Database Ops",
      progress: 90,
      techs: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      category: "Artificial Intelligence",
      progress: 85,
      techs: ["NLP", "Computer Vision", "Deep Learning"],
    },
    {
      category: "DevOps & Containerization",
      progress: 70,
      techs: ["Docker"],
    },
    {
      category: "Cloud Platforms",
      progress: 60,
      techs: ["Microsoft Azure"],
    },
    {
      category: "Version Control",
      progress: 85,
      techs: ["Git", "GitHub"],
    },
  ],

  educations: [
    {
      icon: FaGraduationCap,
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Colombo School of Computing",
      year: "2022 - 2025",
      description:
        "Successfully completed a degree in Computer Science with a strong focus on software development, machine learning, and AI. Gained hands-on experience through projects and internships, while cultivating a passion for building innovative solutions and exploring new technologies.",
    },
    {
      icon: FaSchool,
      degree: "Secondary School Education",
      institution: "Zahira College Mawanella",
      year: "2012 - 2020",
      description:
        "Completed GCE Ordinary Level and GCE Advanced Level in Physical Science Stream. Alongside academics, actively participated in extracurricular activities, served as a student prefect, and achieved numerous accolades in both education and sports",
    },
  ],
  certifications: [
    {
      title: "Meta React Specialization",
      description:
        "A comprehensive specialization authorized by Meta and offered through Coursera. This program covers both fundamental and advanced React concepts, including building reusable components, managing data flow, and implementing advanced React patterns. Through instructional videos, assessments, and practical exercises, learners gain the skills to build sophisticated user interfaces for modern web applications.",
      to: "https://coursera.org/verify/specialization/IAW5HXC3NIPI",
      organization: "Meta",
    },
    {
      title: "React Basics",
      description:
        "An online course authorized by Meta and offered through Coursera, covering the fundamental concepts of React for building user interfaces.",
      to: "https://coursera.org/verify/MXULJQSHCAJP",
      organization: "Meta",
    },
    {
      title: "Advanced React",
      description:
        "An advanced course authorized by Meta and offered through Coursera, focusing on deeper React concepts and features, advanced hooks, JSX, component composition, and modern React patterns like Higher Order Components and Render Props. Includes building forms, consuming API data, testing React components, and developing a React portfolio.",
      to: "https://coursera.org/verify/QRV2OJDBGU5C",
      organization: "Meta",
    },
    {
      title: "Introduction to Front-End Development",
      description:
        "An online course authorized by Meta and offered through Coursera, focusing on the essential skills and technologies for front-end development, including HTML, CSS, and JavaScript.",
      to: "https://coursera.org/verify/D5H8DFCUNN57",
      organization: "Meta",
    },
    {
      title: "Machine Learning Specialization",
      description:
        "Completed an online specialization covering supervised and unsupervised learning, recommender systems, and reinforcement learning, gaining practical skills for real-world applications in machine learning.",
      to: "https://coursera.org/verify/specialization/1XJIPHSURREJ",
      organization: "DeepLearning.AI and Stanford University",
    },
    {
      title: "Introduction to Generative AI",
      description:
        "An online course authorized by Google Cloud and offered through Coursera, providing foundational knowledge of generative AI concepts, tools, and applications.",
      to: "https://coursera.org/verify/97FEMUSJ16AN",
      organization: "Google Cloud",
    },
    {
      title: "Introduction to Mobile Development",
      description:
        "An online course authorized by Meta and offered through Coursera, providing foundational knowledge and skills in mobile application development using various technologies and frameworks.",
      to: "https://coursera.org/verify/4QU3RKF5QSCH",
      organization: "Meta",
    },
    {
      title: "30 Days MasterClass in Artificial Intelligence",
      description:
        "This certifies successfully completed the 30 Days MasterClass in Artificial Intelligence conducted by NoviTech R&D Private Limited, provided comprehensive training in various aspects of artificial intelligence, equipping participants with the skills to apply AI techniques in real-world applications.",
      to: "https://drive.google.com/file/d/13UoHvS4MVml488xk3oTUJcm_Z4pzh8Ii/view?usp=sharing",
      organization: "NoviTech R&D Private Limited",
    },
    {
      title: "Introduction to TenserFlow",
      description:
        "An online course authorized by DeepLearning.AI and offered through Coursera, focusing on using TensorFlow to develop models for artificial intelligence, machine learning, and deep learning applications.",
      to: "https://coursera.org/verify/4RPLXS251YLH",
      organization: "DeepLearning.AI",
    },
    {
      title: "Azure Fundamentals Training",
      description:
        "Successfully completed the Azure Fundamentals Training organized by Styava on 22nd March 2025, gaining foundational knowledge of Microsoft Azure services and cloud computing",
      to: "https://drive.google.com/file/d/137dq4RbCMkcUrUhR7N9AfB97gxjbXxqk/view?usp=sharing",
      organization: "Styava",
    },
    {
      title: "Django Web Framework",
      description:
        "An online course authorized by Meta and offered through Coursera, covering the essentials of the Django web framework for building robust and scalable web applications.",
      to: "https://coursera.org/verify/DEUTHXHU3D8O",
      organization: "Meta",
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      description:
        "An online course authorized by DeepLearning.AI and Stanford University, offered through Coursera, focusing on supervised learning techniques, specifically regression and classification, to build predictive models in machine learning.",
      to: "https://coursera.org/verify/PU99D2NGLKMN",
      organization: "DeepLearning.AI and Stanford University",
    },
    {
      title: "Unsupervised Learning, Recommenders, and Reinforcement Learning",
      description:
        "An online course authorized by DeepLearning.AI and Stanford University, offered through Coursera, covering key concepts in unsupervised learning, recommendation systems, and reinforcement learning to build advanced machine learning models",
      to: "https://coursera.org/verify/YWTMGTOVMA3U",
      organization: "DeepLearning.AI and Stanford University",
    },
    {
      title: "Programming with JavaScript",
      description:
        "An online course authorized by Meta and offered through Coursera, focusing on core JavaScript programming skills essential for web development, including functions, objects, and asynchronous programming.",
      to: "https://coursera.org/verify/6BXW9AAYUX9S",
      organization: "Meta",
    },
    {
      title: "Introduction to Large Language Models",
      description:
        "An online course authorized by Google Cloud and offered through Coursera. This course provides foundational knowledge of large language models (LLMs), their applications, and techniques to enhance their performance.",
      to: "https://coursera.org/verify/WVOQZH3G9WIK",
      organization: "Google Cloud",
    },
    {
      title: "Convolutional Neural Networks in TensorFlow",
      description:
        "An online course authorized by DeepLearning.AI and offered through Coursera, focusing on building and deploying convolutional neural networks (CNNs) using TensorFlow for image recognition and computer vision applications.",
      to: "https://coursera.org/verify/QCBOIZMZO4QY",
      organization: "DeepLearning.AI",
    },
    {
      title: "Advanced Learning Algorithms",
      description:
        "An online course authorized by DeepLearning.AI and Stanford University, offered through Coursera, covering advanced machine learning algorithms and techniques to enhance model performance and tackle complex data challenges.",
      to: "https://coursera.org/verify/VZ4XLESMVTGF",
      organization: "DeepLearning.AI and Stanford University",
    },
    {
      title: "Introduction to Responsible AI",
      description:
        "An online course authorized by Google Cloud and offered through Coursera. This course provides foundational knowledge of responsible AI practices, emphasizing the importance of ethical considerations and Google's AI principles.",
      to: "https://coursera.org/verify/O43QCWPY75RY",
      organization: "Google Cloud",
    },
    {
      title: "Artificial Intelligence on Microsoft Azure",
      description:
        "An online course authorized by Microsoft, offered through Coursera, covering AI implementation on Microsoft Azure, including cloud-based machine learning, cognitive services, and AI model deployment.",
      to: "https://coursera.org/verify/JOQ04JJROD5F",
      organization: "Microsoft",
    },
    {
      title: "Mastering Multi-Agent Development with AutoGen",
      description:
        "An online course authorized by Packt, offered through Coursera, covering multi-agent systems and AutoGen, including autonomous agent interactions, conversation patterns, and AI-driven automation.",
      to: "https://coursera.org/verify/CCC0CUDGVOOR",
      organization: "Packt",
    },
    {
      title: "Developing Back-End Apps with Node.js and Express",
      description:
        "An online course authorized by IBM and offered through Coursera, focusing on building back-end applications with Node.js and Express. The course covers asynchronous programming with callbacks and promises, creating REST APIs with CRUD operations, and implementing authentication and session management. Includes hands-on labs and a final project to strengthen practical skills for back-end and full-stack development.",
      to: "https://coursera.org/verify/UK84HBWR3YRT",
      organization: "IBM",
    },
    {
      title: "Version Control",
      description:
        "An online course authorized by Meta and offered through Coursera. This course introduces version control systems, Git, and effective workflows for modern software development. Learners gain hands-on experience with Linux commands, repository creation, and collaboration techniques to manage code revisions and team projects efficiently.",
      to: "https://coursera.org/verify/32XI9E6WKUMU",
      organization: "Meta",
    },
    {
      title: "DevOps Essentials and Version Control with Git",
      description:
        "An online course authorized by Edureka and offered through Coursera. This course introduces DevOps principles, Linux fundamentals, and Git for efficient version control in software development. Learners gain skills in DevOps lifecycle stages, Linux commands, repository and branch management, resolving merge conflicts, and implementing Git workflows for team collaboration and code management.",
      to: "https://coursera.org/verify/CGZ88EILCMOB",
      organization: "Edureka",
    },
    {
      title: "Google 15 Free AI Tools Masterclass",
      description:
        "Successfully completed the Google 15 Free AI Tools Masterclass by AI Dude. This comprehensive program provided hands-on experience with a diverse suite of Google's free AI applications, focusing on leveraging these tools for enhanced productivity, creative problem-solving, and efficient workflow automation. Gained practical skills in applying artificial intelligence to real-world scenarios, demonstrating proficiency in navigating and utilizing Google's AI ecosystem effectively.",
      to: "https://drive.google.com/file/d/16ngTXWEk0_bCQ0JWhoBk4B4zlucWoKlp/view?usp=sharing",
      organization: "AI Dude",
    },
  ],
  projects: [
    {
      title: "Tartuca - Restaurant & Delivery Platform",
      description:
        "A full-stack restaurant and food ordering monorepo platform featuring a customer portal for interactive menu exploration and Google Maps delivery address tracking, an admin back-office dashboard for live order tracking and menu CRUD operations, and a high-performance asynchronous FastAPI backend integrated with PostgreSQL and Auth0.",
      to: "https://github.com/Usamafuward/tartuca_user.git",
      technologies: [
        "React",
        "FastAPI",
        "PostgreSQL",
        "Tailwind CSS",
        "SQLAlchemy",
        "Auth0",
        "Vite",
        "Google Maps",
      ],
      thumbnail: thirteen,
      category: "Full-Stack",
    },
    {
      title: "AI-Powered Multi-Agent Coding Assistant",
      description:
        "An advanced AI-powered coding assistant that leverages multiple AI agents to assist developers in writing, debugging, optimizing, and documenting code. It integrates OpenAI's LLMs with FastAPI to provide real-time assistance, along with GitHub API integration for seamless code management and collaboration.",
      to: "https://github.com/Usamafuward/AI_Powered_Multi_Agent_Coding_Assistant.git",
      technologies: [
        "AutoGen",
        "OpenAI GPT",
        "FastHTML",
        "FastAPI",
        "LangChain",
        "FAISS",
        "GitHub API",
      ],
      thumbnail: one,
      category: "AI/ML",
    },
    {
      title: "NLP Podcast Chatbot",
      description:
        "An NLP-driven chatbot that interacts with podcast transcripts to answer questions, attribute responses to speakers, and provide YouTube links, enhancing user engagement and content access.",
      to: "https://github.com/Usamafuward/nlp-podcast-chatbot.git",
      technologies: ["Flask", "TF-IDF", "VADER", "NLTK"],
      thumbnail: three,
      category: "AI/ML",
    },
    {
      title: "RAG Pipeline for PDF Analysis (Chatbot)",
      description:
        "This project is a RAG (Retrieval-Augmented Generation) pipeline that extracts and processes text, tables, and images from PDFs, enabling users to query the extracted information through a conversational interface. It combines multi-modal embeddings with a Google Generative AI-powered question-answering system.",
      to: "https://github.com/Usamafuward/Rag-Pipeline-For-PDF-Analysis.git",
      technologies: [
        "LangChain",
        "Google GEN AI",
        "FIASS",
        "Streamlit",
        "Python",
      ],
      thumbnail: seven,
      category: "AI/ML",
    },
    {
      title: "Travel Point",
      description:
        "A social media platform for travellers to share experiences, itineraries, and book accommodations. It also allows users to create and book all-inclusive travel packages for a seamless travel experience.",
      to: "https://github.com/aamirfazeer/TravelPointMobile.git",
      technologies: [
        "React",
        "ReactNative",
        "FastAPI",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      thumbnail: two,
      category: "Full-Stack",
    },
    {
      title: "Eats Robers",
      description:
        "Eats Robers is a web app using React, Node.js, Express, MongoDB, and Mongoose that helps users find the perfect meal, featuring seamless payment options and exceptional customer service.",
      to: "https://github.com/Usamafuward/eats-robers.git",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Mongoose"],
      thumbnail: six,
      category: "Full-Stack",
    },
    {
      title: "Mediman - Doctor Dashboard (sample) Frontend App",
      description:
        "Mediman is a doctor dashboard app that allows doctors to manage patient appointments (Online and Physical), view patient medical records, and prescribe medications, enhancing patient care and treatment outcomes.",
      to: "https://github.com/Usamafuward/sample-mediman-doctor.git",
      technologies: ["React", "Shadcn-UI", "Tailwind CSS"],
      thumbnail: four,
      category: "Frontend",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with React that showcases my projects and skills in artificial intelligence, software developing and machine learning, providing an engaging platform for potential employers and collaborators.",
      to: "https://github.com/Usamafuward/portfolio.git",
      technologies: ["React", "Tailwind CSS", "EmailJS"],
      thumbnail: five,
      category: "Frontend",
    },
    {
      title: "Clubhub-Central",
      description:
        "Club-Hub Central is a centralized platform developed with PHP, HTML, CSS, JavaScript, and MariaDB for the University of Colombo School of Computing clubs and societies, facilitating better communication and collaboration among members.",
      to: "https://github.com/terance-edmonds/clubhub-central.git",
      technologies: ["PHP", "HTML", "SCSS", "JavaScript", "MariaDB"],
      thumbnail: nine,
      category: "Full-Stack",
    },
    {
      title: "LangChain for LLM Application Development (coursera)",
      description:
        "The project uses the LangChain framework to build applications with advanced language models (LLMs), focusing on key features like prompts, memory management, creating operation chains, document-based question answering, and developing LLMs as reasoning agents.",
      to: "https://www.coursera.org/learn/langchain-for-llm-application-development-project",
      technologies: ["LangChain", "LLM", "OpenAI", "Python"],
      thumbnail: eight,
      category: "AI/ML",
    },
    {
      title: "Django Blog",
      description:
        "A blog application built with Django for publishing technology-related posts, providing a user-friendly interface for authors to share insights and engage with readers.",
      to: "https://github.com/Usamafuward/Django-blog.git",
      technologies: ["Python", "Django", "HTML", "CSS", "PostgreSQL"],
      thumbnail: ten,
      category: "Backend",
    },
    {
      title: "Online Book Review Application",
      description:
        "A comprehensive RESTful API for managing book reviews built with Node.js and Express.js. Features user authentication (JWT & Session), CRUD operations for reviews, async operations with Promises and async/await, and supports multiple concurrent users for seamless book review management.",
      to: "https://github.com/Usamafuward/book-review-api.git",
      technologies: ["Node.js", "Express.js", "JWT", "RESTful API"],
      thumbnail: eleven,
      category: "Backend",
    },
    {
      title: "Startup Company Website",
      description:
        "A professional website created for a startup software company to showcase its products, services, team, blogs, and clients. Built with React, Next.js, and Tailwind CSS, it delivers a modern, responsive, and engaging user experience tailored for startups.",
      to: "https://github.com/Usamafuward/startup_company_website.git",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      thumbnail: twelve,
      category: "Frontend",
    },
  ],

  experiences: [
    {
      title: "AI/SE Engineer",
      description:
        "Actively contributing to transformative projects in AI, machine learning, and software engineering at Kainovation Technologies. Focused on the integration of AI models, full-stack software development, AI solution deployment, and optimizing intelligent systems for real-world production environments.",
      duration: "June 2025 – Present",
      company: "Kainovation Technologies",
    },
    {
      title: "AI/ML Intern",
      description:
        "Worked on research and development of AI and machine learning projects, leveraging data-driven insights to enhance business operations. Focused on data preprocessing, pipeline building, exploratory data analysis, and assisting in the deployment of machine learning models.",
      duration: "November 2024 – May 2025",
      company: "Kainovation Technologies",
    },
    {
      title: "Software Developer",
      description:
        "Worked on the Mediman - Doctor Patient Clinic Online Appointment project, handling both front-end and back-end development. Implemented features for appointment booking, patient management, and real-time communication between doctors and patients, ensuring a seamless user experience.",
      duration: "November 2024 – January 2025",
      company: "Edus Lanka (PVT) LTD",
    },
    {
      title: "Full Stack Developer Intern",
      description:
        "Participated in a learning internship focused on full-stack development, gaining hands-on experience with front-end and back-end technologies. Worked on guided projects, improving proficiency in web development, database management, and API integration while collaborating with mentors to enhance coding best practices",
      duration: "October 2024 – December 2024",
      company: "Unified Mentor India",
    },
    {
      title: "Artificial Intelligence Intern",
      description:
        "Completed a one-month internship in Artificial Intelligence at NoviTech R&D Pvt Ltd. Worked on several AI projects, contributing to the development and implementation of machine learning models and AI solutions aimed at solving real-world challenges.",
      duration: "June 2023 – July 2024",
      company: "NoviTech R&D Pvt Ltd",
    },
    {
      title: "Freelance Full Stack Developer",
      description:
        "Designed and developed custom web applications tailored to client requirements, focusing on responsive and user-friendly interfaces. Built scalable backend architectures using Node.js and MongoDB, integrated third-party APIs, and optimized performance for seamless user experiences.",
      duration: "December 2023 – May 2024",
      company: "Self-Employed",
    },
    {
      title: "Research Projects: Data Collector, Annotator",
      description:
        "Collected and annotated data for projects on badminton shot analysis and emotion detection in Tamil texts. Responsibilities included data validation, video editing for ML training, and collaboration with research teams to achieve project goals.",
      duration: "April 2023 – December 2023",
      company: "UCSC",
    },
  ],
};
