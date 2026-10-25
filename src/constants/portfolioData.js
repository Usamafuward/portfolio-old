import { FaGithubSquare, FaGraduationCap, FaSchool } from "react-icons/fa";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

import one from "@/assets/thumbnails/1.webp";
import two from "@/assets/thumbnails/2.webp";
import three from "@/assets/thumbnails/3.webp";
import four from "@/assets/thumbnails/4.webp";
import five from "@/assets/thumbnails/5.webp";
import six from "@/assets/thumbnails/6.webp";
import seven from "@/assets/thumbnails/7.webp";
import nine from "@/assets/thumbnails/9.webp";
import ten from "@/assets/thumbnails/10.webp";
import eleven from "@/assets/thumbnails/11.webp";
import twelve from "@/assets/thumbnails/12.webp";
import thirteen from "@/assets/thumbnails/13.webp";
import fourteen from "@/assets/thumbnails/14.webp";

export function getProjectLinks(project) {
  if (project.links && project.links.length > 0) {
    return project.links;
  }

  const result = [];

  // Website buttons
  if (project.userSiteUrl || project.userLiveUrl) {
    result.push({
      label: "User Site",
      url: project.userSiteUrl || project.userLiveUrl,
      type: "user-site",
    });
  }
  if (project.adminSiteUrl || project.adminLiveUrl) {
    result.push({
      label: "Admin Site",
      url: project.adminSiteUrl || project.adminLiveUrl,
      type: "admin-site",
    });
  }
  if (project.liveSiteUrl || project.liveUrl) {
    result.push({
      label: "Live Site",
      url: project.liveSiteUrl || project.liveUrl,
      type: "live-site",
    });
  }
  if (project.adminUrl) {
    result.push({
      label: "Admin Site",
      url: project.adminUrl,
      type: "admin-site",
    });
  }

  // Repo buttons
  if (project.frontendRepoUrl || project.frontendGithubUrl) {
    result.push({
      label: "Frontend Repo",
      url: project.frontendRepoUrl || project.frontendGithubUrl,
      type: "frontend-repo",
    });
  }
  if (project.backendRepoUrl || project.backendGithubUrl) {
    result.push({
      label: "Backend Repo",
      url: project.backendRepoUrl || project.backendGithubUrl,
      type: "backend-repo",
    });
  }
  if (project.userRepoUrl) {
    result.push({
      label: "User Repo",
      url: project.userRepoUrl,
      type: "user-repo",
    });
  }
  if (project.adminRepoUrl || project.adminGithubUrl) {
    result.push({
      label: "Admin Repo",
      url: project.adminRepoUrl || project.adminGithubUrl,
      type: "admin-repo",
    });
  }
  if (project.githubUrl) {
    result.push({
      label: "GitHub",
      url: project.githubUrl,
      type: "github",
    });
  }

  if (result.length > 0) {
    return result;
  }

  if (project.to) {
    const isGithub = project.to.toLowerCase().includes("github.com");
    return [
      {
        label: isGithub ? "VIEW_PROJECT" : "LIVE_SITE",
        url: project.to,
        type: isGithub ? "github" : "live-site",
      },
    ];
  }

  return [];
}

export function categorizeProjectLinks(links) {
  const hosted = [];
  const code = [];

  (links || []).forEach((link) => {
    const type = (link.type || "").toLowerCase();
    const label = (link.label || "").toLowerCase();
    const url = (link.url || "").toLowerCase();

    const isCode =
      type === "github" ||
      type === "frontend" ||
      type === "backend" ||
      type === "admin-repo" ||
      type === "user-repo" ||
      type === "frontend-repo" ||
      type === "backend-repo" ||
      type === "mobile-repo" ||
      type === "mobile" ||
      url.includes("github.com") ||
      url.includes("gitlab.com") ||
      url.includes(".git") ||
      label.includes("repo") ||
      label.includes("code") ||
      (label.includes("github") && !label.includes("site") && !label.includes("live"));

    if (isCode) {
      code.push(link);
    } else {
      hosted.push(link);
    }
  });

  return { hosted, code };
}

export const portfolioData = {
  personalInfo: {
    name: "Usama Puward",
    title: "AI/ML Engineer & Full-Stack Developer",
    email: "usamafuward2001@gmail.com",
    phone: "+94 (76) 6260507",
    location: "Colombo, Sri Lanka",
    bio: "Computer Science Graduate and current AI/ML Engineer and Full-Stack Developer, with a strong passion for Software Developing, Machine Learning, and Artificial Intelligence. Skilled in developing efficient and innovative solutions for real-world projects and building high-quality applications. Eager to tackle complex challenges in software development and drive innovation within the fields of AI and ML.",
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
    { imgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/bootstrap.svg", altText: "Bootstrap Logo" },
    { imgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg", altText: "Docker Logo" },
    { imgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg", altText: "GitHub Logo" },
    { imgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg", altText: "JavaScript Logo" },
    { imgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mongodb.svg", altText: "MongoDB Logo" },
    { imgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg", altText: "Node.js Logo" },
    { imgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg", altText: "Python Logo" },
    { imgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg", altText: "React Logo" },
    { imgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tensorflow.svg", altText: "TensorFlow Logo" },
    { imgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg", altText: "PostgreSQL Logo" },
    { imgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tailwindcss.svg", altText: "Tailwind CSS Logo" },
    { imgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/sass.svg", altText: "SCSS Logo" },
    { imgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fastapi.svg", altText: "FastAPI Logo" },
    { imgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/express.svg", altText: "Express Logo" },
    { imgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg", altText: "MySQL Logo" },
    { imgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/pandas.svg", altText: "Pandas Logo" },
    { imgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/numpy.svg", altText: "NumPy Logo" },
    { imgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/scikitlearn.svg", altText: "scikit-learn Logo" },
    { imgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cplusplus.svg", altText: "C++ Logo" },
    { imgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/git.svg", altText: "Git Logo" },
    { imgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/django.svg", altText: "Django Logo" },
    { imgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg", altText: "React Native Logo" },
    { imgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nextdotjs.svg", altText: "Next.js Logo" },
    { imgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/typescript.svg", altText: "TypeScript Logo" },
    { imgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/framer.svg", altText: "Framer Motion Logo" },
    { imgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postman.svg", altText: "Postman Logo" },
    { imgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/pytorch.svg", altText: "PyTorch Logo" },
    { imgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg", altText: "AWS Logo" },
    { imgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg", altText: "Azure Logo" },
  ],

  skills: [
    {
      category: "Front-End Development",
      progress: 95,
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
      category: "DevOps & Containers",
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
      degree: "B.Sc. Computer Science",
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
      logo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    },
    {
      title: "Google 15 Free AI Tools Masterclass",
      description:
        "Successfully completed the Google 15 Free AI Tools Masterclass by AI Dude. This comprehensive program provided hands-on experience with a diverse suite of Google's free AI applications, focusing on leveraging these tools for enhanced productivity, creative problem-solving, and efficient workflow automation. Gained practical skills in applying artificial intelligence to real-world scenarios, demonstrating proficiency in navigating and utilizing Google's AI ecosystem effectively.",
      to: "https://drive.google.com/file/d/16ngTXWEk0_bCQ0JWhoBk4B4zlucWoKlp/view?usp=sharing",
      organization: "AI Dude",
      logo: "https://ui-avatars.com/api/?name=AI+Dude&background=0D8ABC&color=fff",
    },
    {
      title: "Developing Back-End Apps with Node.js and Express",
      description:
        "An online course authorized by IBM and offered through Coursera, focusing on building back-end applications with Node.js and Express. The course covers asynchronous programming with callbacks and promises, creating REST APIs with CRUD operations, and implementing authentication and session management. Includes hands-on labs and a final project to strengthen practical skills for back-end and full-stack development.",
      to: "https://coursera.org/verify/UK84HBWR3YRT",
      organization: "IBM",
      logo: "https://www.google.com/s2/favicons?domain=ibm.com&sz=128",
    },
    {
      title: "Machine Learning Specialization",
      description:
        "Completed an online specialization covering supervised and unsupervised learning, recommender systems, and reinforcement learning, gaining practical skills for real-world applications in machine learning.",
      to: "https://coursera.org/verify/specialization/1XJIPHSURREJ",
      organization: "DeepLearning.AI and Stanford University",
      logo: "https://www.google.com/s2/favicons?domain=deeplearning.ai&sz=128",
    },
    {
      title: "30 Days MasterClass in Artificial Intelligence",
      description:
        "This certifies successfully completed the 30 Days MasterClass in Artificial Intelligence conducted by NoviTech R&D Private Limited, provided comprehensive training in various aspects of artificial intelligence, equipping participants with the skills to apply AI techniques in real-world applications.",
      to: "https://drive.google.com/file/d/13UoHvS4MVml488xk3oTUJcm_Z4pzh8Ii/view?usp=sharing",
      organization: "NoviTech R&D Private Limited",
      logo: "https://www.google.com/s2/favicons?domain=novitech.in&sz=128",
    },
    {
      title: "Unsupervised Learning, Recommenders, and Reinforcement Learning",
      description:
        "An online course authorized by DeepLearning.AI and Stanford University, offered through Coursera, covering key concepts in unsupervised learning, recommendation systems, and reinforcement learning to build advanced machine learning models",
      to: "https://coursera.org/verify/YWTMGTOVMA3U",
      organization: "DeepLearning.AI and Stanford University",
      logo: "https://www.google.com/s2/favicons?domain=deeplearning.ai&sz=128",
    },
    {
      title: "Advanced React",
      description:
        "An advanced course authorized by Meta and offered through Coursera, focusing on deeper React concepts and features, advanced hooks, JSX, component composition, and modern React patterns like Higher Order Components and Render Props. Includes building forms, consuming API data, testing React components, and developing a React portfolio.",
      to: "https://coursera.org/verify/QRV2OJDBGU5C",
      organization: "Meta",
      logo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      description:
        "An online course authorized by DeepLearning.AI and Stanford University, offered through Coursera, focusing on supervised learning techniques, specifically regression and classification, to build predictive models in machine learning.",
      to: "https://coursera.org/verify/PU99D2NGLKMN",
      organization: "DeepLearning.AI and Stanford University",
      logo: "https://www.google.com/s2/favicons?domain=deeplearning.ai&sz=128",
    },
    {
      title: "Mastering Multi-Agent Development with AutoGen",
      description:
        "An online course authorized by Packt, offered through Coursera, covering multi-agent systems and AutoGen, including autonomous agent interactions, conversation patterns, and AI-driven automation.",
      to: "https://coursera.org/verify/CCC0CUDGVOOR",
      organization: "Packt",
      logo: "https://www.google.com/s2/favicons?domain=packtpub.com&sz=128",
    },
    {
      title: "DevOps Essentials and Version Control with Git",
      description:
        "An online course authorized by Edureka on Coursera covering DevOps principles, Linux fundamentals, and Git for version control. Learners gain skills in DevOps lifecycle, Linux commands, repository management, and Git workflows for team collaboration.",
      to: "https://coursera.org/verify/CGZ88EILCMOB",
      organization: "Edureka",
      logo: "https://www.google.com/s2/favicons?domain=edureka.co&sz=128",
    },
    {
      title: "Artificial Intelligence on Microsoft Azure",
      description:
        "An online course authorized by Microsoft, offered through Coursera, covering AI implementation on Microsoft Azure, including cloud-based machine learning, cognitive services, and AI model deployment.",
      to: "https://coursera.org/verify/JOQ04JJROD5F",
      organization: "Microsoft",
      logo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    },
    {
      title: "Introduction to TensorFlow",
      description:
        "An online course authorized by DeepLearning.AI and offered through Coursera, focusing on using TensorFlow to develop models for artificial intelligence, machine learning, and deep learning applications.",
      to: "https://coursera.org/verify/4RPLXS251YLH",
      organization: "DeepLearning.AI",
      logo: "https://www.google.com/s2/favicons?domain=deeplearning.ai&sz=128",
    },
    {
      title: "Introduction to Mobile Development",
      description:
        "An online course authorized by Meta and offered through Coursera, providing foundational knowledge and skills in mobile application development using various technologies and frameworks.",
      to: "https://coursera.org/verify/4QU3RKF5QSCH",
      organization: "Meta",
      logo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    },
    {
      title: "Azure Fundamentals Training",
      description:
        "Successfully completed the Azure Fundamentals Training organized by Styava on 22nd March 2025, gaining foundational knowledge of Microsoft Azure services and cloud computing",
      to: "https://drive.google.com/file/d/137dq4RbCMkcUrUhR7N9AfB97gxjbXxqk/view?usp=sharing",
      organization: "Styava",
      logo: "https://www.google.com/s2/favicons?domain=styava.dev&sz=128",
    },
    {
      title: "Django Web Framework",
      description:
        "An online course authorized by Meta and offered through Coursera, covering the essentials of the Django web framework for building robust and scalable web applications.",
      to: "https://coursera.org/verify/DEUTHXHU3D8O",
      organization: "Meta",
      logo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    },
    {
      title: "Convolutional Neural Networks in TensorFlow",
      description:
        "An online course authorized by DeepLearning.AI and offered through Coursera, focusing on building and deploying convolutional neural networks (CNNs) using TensorFlow for image recognition and computer vision applications.",
      to: "https://coursera.org/verify/QCBOIZMZO4QY",
      organization: "DeepLearning.AI",
      logo: "https://www.google.com/s2/favicons?domain=deeplearning.ai&sz=128",
    },
    {
      title: "Introduction to Large Language Models",
      description:
        "An online course authorized by Google Cloud and offered through Coursera. This course provides foundational knowledge of large language models (LLMs), their applications, and techniques to enhance their performance.",
      to: "https://coursera.org/verify/WVOQZH3G9WIK",
      organization: "Google Cloud",
      logo: "https://www.google.com/s2/favicons?domain=cloud.google.com&sz=128",
    },
    {
      title: "Advanced Learning Algorithms",
      description:
        "An online course authorized by DeepLearning.AI and Stanford University, offered through Coursera, covering advanced machine learning algorithms and techniques to enhance model performance and tackle complex data challenges.",
      to: "https://coursera.org/verify/VZ4XLESMVTGF",
      organization: "DeepLearning.AI and Stanford University",
      logo: "https://www.google.com/s2/favicons?domain=deeplearning.ai&sz=128",
    },
    {
      title: "Programming with JavaScript",
      description:
        "An online course authorized by Meta and offered through Coursera, focusing on core JavaScript programming skills essential for web development, including functions, objects, and asynchronous programming.",
      to: "https://coursera.org/verify/6BXW9AAYUX9S",
      organization: "Meta",
      logo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    },
    {
      title: "Introduction to Responsible AI",
      description:
        "An online course authorized by Google Cloud and offered through Coursera. This course provides foundational knowledge of responsible AI practices, emphasizing the importance of ethical considerations and Google's AI principles.",
      to: "https://coursera.org/verify/O43QCWPY75RY",
      organization: "Google Cloud",
      logo: "https://www.google.com/s2/favicons?domain=cloud.google.com&sz=128",
    },
    {
      title: "Version Control",
      description:
        "An online course authorized by Meta on Coursera that introduces version control systems, Git, and modern development workflows. Learners gain hands-on experience with Linux commands, repository creation, and collaboration techniques to manage code revisions and team projects.",
      to: "https://coursera.org/verify/32XI9E6WKUMU",
      organization: "Meta",
      logo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    },
    {
      title: "Introduction to Front-End Development",
      description:
        "An online course authorized by Meta and offered through Coursera, focusing on the essential skills and technologies for front-end development, including HTML, CSS, and JavaScript.",
      to: "https://coursera.org/verify/D5H8DFCUNN57",
      organization: "Meta",
      logo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    },
    {
      title: "Introduction to Generative AI",
      description:
        "An online course authorized by Google Cloud and offered through Coursera, providing foundational knowledge of generative AI concepts, tools, and applications.",
      to: "https://coursera.org/verify/97FEMUSJ16AN",
      organization: "Google Cloud",
      logo: "https://www.google.com/s2/favicons?domain=cloud.google.com&sz=128",
    },
    {
      title: "React Basics",
      description:
        "An online course authorized by Meta and offered through Coursera, covering the fundamental concepts of React for building user interfaces.",
      to: "https://coursera.org/verify/MXULJQSHCAJP",
      organization: "Meta",
      logo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    },
  ],

  projects: [
    {
      title: "Tartuca - Restaurant & Delivery Platform",
      description:
        "A full-stack restaurant and food ordering platform featuring an interactive customer ordering portal, Google Maps delivery location tracking, and a live admin operations dashboard. Built with a high-performance FastAPI asynchronous backend, PostgreSQL database, and Auth0 secure identity management.",
      to: "https://tartuca.vercel.app/",
      links: [
        { label: "User Site", url: "https://tartuca.vercel.app/", type: "user-site" },
        { label: "Admin Site", url: "https://tartuca-admin.vercel.app/", type: "admin-site" },
        { label: "User Repo", url: "https://github.com/Usamafuward/tartuca_user.git", type: "user-repo" },
        { label: "Admin Repo", url: "https://github.com/Usamafuward/tartuca_admin.git", type: "admin-repo" },
        { label: "Backend Repo", url: "https://github.com/Usamafuward/tartuca_back.git", type: "backend-repo" },
      ],
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
      title: "RAG Pipeline for PDF Analysis (Chatbot)",
      description:
        "An advanced multi-modal RAG conversational pipeline that extracts and processes text, structured tables, and diagram images from complex PDF documents. Combines multi-vector embeddings with Google Generative AI and FAISS indexing to deliver high-precision document synthesis and semantic querying.",
      to: "https://github.com/Usamafuward/Rag-Pipeline-For-PDF-Analysis.git",
      technologies: [
        "LangChain",
        "Google GEN AI",
        "FAISS",
        "Streamlit",
        "Python",
      ],
      thumbnail: seven,
      category: "AI/ML",
    },
    {
      title: "FS Cake Gallery Website",
      description:
        "A modern responsive bakery website built for FS Cake Gallery to showcase custom cakes, birthday and wedding cakes, bento cakes, cupcakes, and special event creations. It includes categorized galleries, customer testimonials, custom order functionality, WhatsApp integration, and local delivery information.",
      to: "https://fscakegallery.vercel.app/",
      links: [
        {
          label: "Live Site",
          url: "https://fscakegallery.vercel.app/",
          type: "live-site",
        },
        {
          label: "GitHub",
          url: "https://github.com/Usamafuward/fscakegallery.git",
          type: "github",
        },
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
        "WhatsApp Integration",
      ],
      thumbnail: fourteen,
      category: "Frontend",
    },
    {
      title: "NLP Podcast Chatbot",
      description:
        "An intelligent NLP-powered conversational chatbot that analyzes podcast transcripts to answer listener queries with speaker attribution and precise timestamp navigation. Features natural language querying with TF-IDF semantic vector retrieval, VADER sentiment analysis, and direct YouTube chapter synchronization.",
      to: "https://github.com/Usamafuward/nlp-podcast-chatbot.git",
      technologies: ["Flask", "TF-IDF", "VADER", "NLTK"],
      thumbnail: three,
      category: "AI/ML",
    },
    {
      title: "Travel Point",
      description:
        "A full-stack social travel and itinerary platform designed for explorers to share journeys, discover curated travel experiences, and reserve accommodations seamlessly. Combines a cross-platform React Native mobile client, an interactive React web portal, and a scalable FastAPI backend with PostgreSQL.",
      to: "https://github.com/aamirfazeer/TravelPointMobile",
      links: [
        {
          label: "Mobile Repo",
          url: "https://github.com/aamirfazeer/TravelPointMobile",
          type: "mobile-repo",
        },
        {
          label: "Backend Repo",
          url: "https://github.com/Usamafuward/travelpoint-mobile-server",
          type: "backend-repo",
        },
        {
          label: "Web Repo",
          url: "https://github.com/aamirfazeer/TravelPoint",
          type: "frontend-repo",
        },
      ],
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
        "A modern food discovery and meal ordering platform engineered to connect hungry diners with premier local restaurants. Features interactive menu browsing, customized dish configurators, automated checkout and billing workflows, and a robust Node.js and Express backend powered by MongoDB and Mongoose.",
      to: "https://github.com/Usamafuward/eats-robers.git",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Mongoose"],
      thumbnail: six,
      category: "Full-Stack",
    },
    {
      title: "Nexcura Pro - Clinical Dashboard UI",
      description:
        "A next-generation physician intelligence and clinical command dashboard featuring real-time shift capacity HUDs, emergency triage queues, and ICU bed management. Integrates an urgent diagnostic sentry with multi-zone reference range bars, ambient pharmacovigilance risk matrices, and teleconsultation rooms.",
      to: "https://nexcura-doctor.vercel.app/",
      links: [
        {
          label: "Live Site",
          url: "https://nexcura-doctor.vercel.app/",
          type: "live-site",
        },
        {
          label: "GitHub",
          url: "https://github.com/Usamafuward/nexcura-doctor",
          type: "github",
        },
      ],
      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Radix UI",
        "Lucide Icons",
        "Vite",
        "Vercel",
      ],
      thumbnail: four,
      category: "Frontend",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern cyberpunk-themed personal portfolio built with Next.js, React, and Tailwind CSS to showcase software engineering, AI/ML systems, and full-stack solutions. Features fluid Framer Motion animations, comprehensive project case studies, automated SEO schemas, and an interactive intelligent AI assistant.",
      to: "https://github.com/Usamafuward/portfolio.git",
      technologies: ["React", "Tailwind CSS", "EmailJS"],
      thumbnail: five,
      category: "Frontend",
    },
    {
      title: "Clubhub-Central",
      description:
        "A centralized campus organization and management platform developed for University of Colombo School of Computing student clubs and societies. Facilitates seamless member registrations, event scheduling, role-based announcements, and administrative record management powered by PHP, JavaScript, and MariaDB.",
      to: "https://github.com/terance-edmonds/clubhub-central.git",
      technologies: ["PHP", "HTML", "SCSS", "JavaScript", "MariaDB"],
      thumbnail: nine,
      category: "Full-Stack",
    },
    {
      title: "Online Book Review Application",
      description:
        "A high-throughput RESTful API architecture engineered with Node.js and Express for managing large-scale literary reviews and book ratings. Features dual JWT and session authentication mechanisms, complete CRUD lifecycle endpoints, asynchronous promise chains, and robust multi-user concurrency support.",
      to: "https://github.com/Usamafuward/book-review-api.git",
      technologies: ["Node.js", "Express.js", "JWT", "RESTful API"],
      thumbnail: eleven,
      category: "Backend",
    },
    {
      title: "Axis Solutions - Startup Website",
      description:
        "A high-velocity software platform and digital product landing portal engineered for modern tech startups. Features interactive architecture telemetry, cloud microservice metrics, dark-mode ambient crimson aesthetics, and responsive corporate showcases with seamless edge deployments.",
      to: "https://axis-solutions-startup.vercel.app/",
      links: [
        {
          label: "Live Site",
          url: "https://axis-solutions-startup.vercel.app/",
          type: "live-site",
        },
        {
          label: "GitHub",
          url: "https://github.com/Usamafuward/axis_solutions",
          type: "github",
        },
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      thumbnail: twelve,
      category: "Frontend",
    },
    {
      title: "Django Blog",
      description:
        "A dynamic publication platform and content management system developed with Django and PostgreSQL for authoring and sharing technology articles. Incorporates structured category taxonomy, markdown content formatting, user comment threads, search capabilities, and a responsive administrative publishing dashboard.",
      to: "https://github.com/Usamafuward/Django-blog.git",
      technologies: ["Python", "Django", "HTML", "CSS", "PostgreSQL"],
      thumbnail: ten,
      category: "Backend",
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
