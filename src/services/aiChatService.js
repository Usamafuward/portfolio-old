/**
 * AI Chat Service for Usama Puward's Portfolio
 * Features:
 * 1. Google Gemini 2.5 Flash SSE streaming API integration.
 * 2. Grounded portfolio knowledge base directly wired to portfolioData.js (100% complete).
 * 3. Zero-downtime offline fallback engine (keyword heuristics + streaming token simulator).
 */

import { portfolioData, getProjectLinks } from "../constants/portfolioData";

/**
 * Enriched knowledge base containing ALL details from portfolioData.js
 */
export const PORTFOLIO_KNOWLEDGE = {
  personalInfo: portfolioData.personalInfo,
  socialLinks: portfolioData.socialLinks,
  technologies: portfolioData.technologies,
  skills: portfolioData.skills,
  educations: portfolioData.educations,
  certifications: portfolioData.certifications,
  experiences: portfolioData.experiences,
  projects: portfolioData.projects.map((project) => ({
    ...project,
    allLinks: getProjectLinks(project),
  })),
};

/**
 * System prompt strictly guardrailing the AI to Usama Puward's complete portfolio facts.
 */
export const SYSTEM_PROMPT = `
You are the official AI Engineering Assistant for Usama Puward's portfolio website.
Your mission is to represent Usama Puward accurately, professionally, and comprehensively to recruiters, engineering managers, CTOs, and technical collaborators.
You have access to every single detail from Usama's portfolio and must answer with 100% factual fidelity.

### 1. PERSONAL & CONTACT INFORMATION:
- Full Name: ${portfolioData.personalInfo.name}
- Professional Title: ${portfolioData.personalInfo.title} (current role: AI/SE Engineer at Kainovation Technologies)
- Official Bio: "${portfolioData.personalInfo.bio}"
- Location: ${portfolioData.personalInfo.location} (Open to worldwide remote positions and international relocation)
- Direct Email: ${portfolioData.personalInfo.email}
- Direct Phone / WhatsApp: ${portfolioData.personalInfo.phone}
- GitHub: https://github.com/Usamafuward
- LinkedIn: https://linkedin.com/in/usama-puward
- X (Twitter): https://www.x.com/usamafuward
- Instagram: https://www.instagram.com/usama._fuward
- Official Resume / CV: Downloadable directly as PDF (/resume.pdf) from the navigation bar "Download CV" button and footer.

### 2. ACADEMIC CREDENTIALS & EDUCATION:
${portfolioData.educations
  .map(
    (edu, idx) =>
      `${idx + 1}. **${edu.degree}** (${edu.year})\n   - **Institution**: ${edu.institution}\n   - **Summary**: ${edu.description}`
  )
  .join("\n")}

### 3. INDUSTRY & RESEARCH EXPERIENCE (${portfolioData.experiences.length} Roles Total):
${portfolioData.experiences
  .map(
    (exp, idx) =>
      `${idx + 1}. **${exp.title}** at **${exp.company}** (${exp.duration})\n   - **Responsibilities & Impact**: ${exp.description}`
  )
  .join("\n")}

### 4. PRODUCTION & ARCHITECTURAL PROJECTS (${portfolioData.projects.length} Platforms Total):
${portfolioData.projects
  .map((p, idx) => {
    const links = getProjectLinks(p);
    const linkStr = links.length
      ? links.map((l) => `${l.label}: ${l.url}`).join(" | ")
      : p.to;
    return `${idx + 1}. **${p.title}** [Category: ${p.category}]\n   - **Description**: ${p.description}\n   - **Tech Stack**: ${p.technologies.join(", ")}\n   - **Links**: ${linkStr}`;
  })
  .join("\n")}

### 5. SKILL MATRIX & DOMAINS:
${portfolioData.skills
  .map(
    (s) =>
      `- **${s.category}** (Proficiency: ${s.progress}%): ${s.techs.join(", ")}`
  )
  .join("\n")}

### 6. COMPLETE TOOLCHAIN (${portfolioData.technologies.length} Verified Technologies):
${portfolioData.technologies.map((t) => t.altText.replace(" Logo", "")).join(", ")}

### 7. VERIFIED ACCREDITATIONS & CERTIFICATIONS (${portfolioData.certifications.length} Credentials Total):
${portfolioData.certifications
  .map(
    (c, idx) =>
      `${idx + 1}. **${c.title}** by **${c.organization}**\n   - Verification: ${c.to}\n   - Details: ${c.description}`
  )
  .join("\n")}

### STRICT GUARDRAILS & RESPONSE STYLE:
- Answer ONLY inquiries related to Usama Puward, his ${portfolioData.projects.length} projects, ${portfolioData.experiences.length} experiences, ${portfolioData.certifications.length} certifications, skills, education, contact info, and availability.
- When asked about projects, always include the relevant tech stack and direct live site or GitHub links.
- When asked about hiring or contact, provide his email (${portfolioData.personalInfo.email}), phone (${portfolioData.personalInfo.phone}), social links, and CV download link.
- If asked about unrelated general topics (cooking recipes, political discussions, general knowledge unrelated to Usama), politely redirect back to Usama's technical background.
- Maintain a confident, quiet, articulate, and technical engineering tone with clean GitHub-style Markdown.
`;

/**
 * Intelligent rule-based keyword heuristic for zero-downtime offline responses.
 * Fully grounded in every item of portfolioData.js.
 */
export function generateLocalFallback(query) {
  const q = (query || "").toLowerCase().trim();

  // 1. Greetings, Identity & Bio
  if (
    q.includes("hi") ||
    q.includes("hello") ||
    q.includes("hey") ||
    q.includes("who is") ||
    q.includes("who are you") ||
    q.includes("about") ||
    q.includes("bio") ||
    q.includes("background")
  ) {
    return (
      `Hello! I am **Usama Puward's AI Portfolio Assistant**.\n\n` +
      `**${portfolioData.personalInfo.name}** is an **${portfolioData.personalInfo.title}** based in ${portfolioData.personalInfo.location}.\n\n` +
      `> "${portfolioData.personalInfo.bio}"\n\n` +
      `**Quick Highlights**:\n` +
      `• **Academic**: B.Sc. in Computer Science from the **University of Colombo School of Computing (UCSC)** (2022–2025).\n` +
      `• **Current Role**: AI/SE Engineer at **Kainovation Technologies** building multi-agent systems and production RAG pipelines.\n` +
      `• **Portfolio Track Record**: **${portfolioData.projects.length} production platforms** across AI/ML, Full-Stack, Frontend, and High-Throughput APIs.\n` +
      `• **Accreditations**: **${portfolioData.certifications.length} verified certifications** from Stanford, DeepLearning.AI, Meta, Google Cloud, Microsoft, and IBM.\n\n` +
      `What would you like to explore? Ask me about his **projects**, **skills**, **career experience**, **certifications**, or **how to contact/hire him**!`
    );
  }

  // 2. Contact, Hiring, Phone, Email, Socials, & Resume
  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("phone") ||
    q.includes("call") ||
    q.includes("whatsapp") ||
    q.includes("hire") ||
    q.includes("reach") ||
    q.includes("resume") ||
    q.includes("cv") ||
    q.includes("linkedin") ||
    q.includes("github") ||
    q.includes("twitter") ||
    q.includes("x.com") ||
    q.includes("instagram") ||
    q.includes("location") ||
    q.includes("where")
  ) {
    return (
      `You can get in touch with **${portfolioData.personalInfo.name}** directly through any of these official channels:\n\n` +
      `• **Email**: [${portfolioData.personalInfo.email}](mailto:${portfolioData.personalInfo.email})\n` +
      `• **Direct Phone / WhatsApp**: [${portfolioData.personalInfo.phone}](tel:${portfolioData.personalInfo.phone.replace(/[^0-9+]/g, "")})\n` +
      `• **Location**: ${portfolioData.personalInfo.location} *(Available for remote full-time positions and international relocation)*\n` +
      `• **LinkedIn**: [linkedin.com/in/usama-puward](https://linkedin.com/in/usama-puward)\n` +
      `• **GitHub**: [github.com/Usamafuward](https://github.com/Usamafuward)\n` +
      `• **X (Twitter)**: [x.com/usamafuward](https://www.x.com/usamafuward)\n` +
      `• **Instagram**: [instagram.com/usama._fuward](https://www.instagram.com/usama._fuward)\n` +
      `• **Official Resume / CV**: [Download CV (PDF)](/resume.pdf) *(Downloadable via navigation bar button and footer)*\n\n` +
      `He is actively open to **full-time software engineering roles**, **AI/ML systems engineering**, and **technical architecture consultations**.`
    );
  }

  // 3. Specific Project: Tartuca Food & Delivery Platform
  if (q.includes("tartuca")) {
    const p = portfolioData.projects.find((item) => item.title.toLowerCase().includes("tartuca"));
    const links = getProjectLinks(p);
    return (
      `**${p.title}** [${p.category}]\n\n` +
      `${p.description}\n\n` +
      `• **Tech Stack**: ${p.technologies.join(", ")}\n` +
      `• **Resources**:\n` +
      links.map((l) => `  - **${l.label}**: [${l.url}](${l.url})`).join("\n")
    );
  }

  // 4. Specific Project: AI-Powered Multi-Agent Coding Assistant
  if (
    q.includes("coding assistant") ||
    (q.includes("multi-agent") && (q.includes("assistant") || q.includes("coding"))) ||
    q.includes("autogen assistant")
  ) {
    const p = portfolioData.projects.find((item) => item.title.toLowerCase().includes("coding assistant"));
    return (
      `**${p.title}** [${p.category}]\n\n` +
      `${p.description}\n\n` +
      `• **Tech Stack**: ${p.technologies.join(", ")}\n` +
      `• **Repository**: [GitHub Link](${p.to})`
    );
  }

  // 5. Specific Project: RAG Pipeline for PDF Analysis
  if (
    q.includes("rag") ||
    q.includes("pdf") ||
    (q.includes("document") && q.includes("analysis"))
  ) {
    const p = portfolioData.projects.find((item) => item.title.toLowerCase().includes("rag pipeline"));
    return (
      `**${p.title}** [${p.category}]\n\n` +
      `${p.description}\n\n` +
      `• **Tech Stack**: ${p.technologies.join(", ")}\n` +
      `• **Repository**: [GitHub Link](${p.to})`
    );
  }

  // 6. Specific Project: FS Cake Gallery Website
  if (
    q.includes("cake") ||
    q.includes("bakery") ||
    q.includes("fscake")
  ) {
    const p = portfolioData.projects.find((item) => item.title.toLowerCase().includes("cake"));
    const links = getProjectLinks(p);
    return (
      `**${p.title}** [${p.category}]\n\n` +
      `${p.description}\n\n` +
      `• **Tech Stack**: ${p.technologies.join(", ")}\n` +
      `• **Resources**:\n` +
      links.map((l) => `  - **${l.label}**: [${l.url}](${l.url})`).join("\n")
    );
  }

  // 7. Specific Project: NLP Podcast Chatbot
  if (q.includes("podcast")) {
    const p = portfolioData.projects.find((item) => item.title.toLowerCase().includes("podcast"));
    return (
      `**${p.title}** [${p.category}]\n\n` +
      `${p.description}\n\n` +
      `• **Tech Stack**: ${p.technologies.join(", ")}\n` +
      `• **Repository**: [GitHub Link](${p.to})`
    );
  }

  // 8. Specific Project: Travel Point
  if (q.includes("travel") || q.includes("itinerary")) {
    const p = portfolioData.projects.find((item) => item.title.toLowerCase().includes("travel"));
    const links = getProjectLinks(p);
    return (
      `**${p.title}** [${p.category}]\n\n` +
      `${p.description}\n\n` +
      `• **Tech Stack**: ${p.technologies.join(", ")}\n` +
      `• **Repositories**:\n` +
      links.map((l) => `  - **${l.label}**: [${l.url}](${l.url})`).join("\n")
    );
  }

  // 9. Specific Project: Eats Robers
  if (q.includes("robers") || q.includes("eats")) {
    const p = portfolioData.projects.find((item) => item.title.toLowerCase().includes("robers"));
    return (
      `**${p.title}** [${p.category}]\n\n` +
      `${p.description}\n\n` +
      `• **Tech Stack**: ${p.technologies.join(", ")}\n` +
      `• **Repository**: [GitHub Link](${p.to})`
    );
  }

  // 10. Specific Project: Nexcura Pro - Clinical Dashboard UI
  if (
    q.includes("nexcura") ||
    q.includes("clinical") ||
    q.includes("physician") ||
    q.includes("triage") ||
    (q.includes("doctor") && !q.includes("mediman"))
  ) {
    const p = portfolioData.projects.find((item) => item.title.toLowerCase().includes("nexcura"));
    const links = getProjectLinks(p);
    return (
      `**${p.title}** [${p.category}]\n\n` +
      `${p.description}\n\n` +
      `• **Tech Stack**: ${p.technologies.join(", ")}\n` +
      `• **Resources**:\n` +
      links.map((l) => `  - **${l.label}**: [${l.url}](${l.url})`).join("\n")
    );
  }

  // 11. Specific Project: Clubhub-Central
  if (
    q.includes("clubhub") ||
    q.includes("campus") ||
    q.includes("societies")
  ) {
    const p = portfolioData.projects.find((item) => item.title.toLowerCase().includes("clubhub"));
    return (
      `**${p.title}** [${p.category}]\n\n` +
      `${p.description}\n\n` +
      `• **Tech Stack**: ${p.technologies.join(", ")}\n` +
      `• **Repository**: [GitHub Link](${p.to})`
    );
  }

  // 13. Specific Project: Online Book Review Application
  if (q.includes("book") || q.includes("review api")) {
    const p = portfolioData.projects.find((item) => item.title.toLowerCase().includes("book review"));
    return (
      `**${p.title}** [${p.category}]\n\n` +
      `${p.description}\n\n` +
      `• **Tech Stack**: ${p.technologies.join(", ")}\n` +
      `• **Repository**: [GitHub Link](${p.to})`
    );
  }

  // 14. Specific Project: Axis Solutions - Startup Website
  if (
    q.includes("axis") ||
    (q.includes("startup") && (q.includes("website") || q.includes("solution") || q.includes("platform")))
  ) {
    const p = portfolioData.projects.find((item) => item.title.toLowerCase().includes("axis"));
    const links = getProjectLinks(p);
    return (
      `**${p.title}** [${p.category}]\n\n` +
      `${p.description}\n\n` +
      `• **Tech Stack**: ${p.technologies.join(", ")}\n` +
      `• **Resources**:\n` +
      links.map((l) => `  - **${l.label}**: [${l.url}](${l.url})`).join("\n")
    );
  }

  // 15. Specific Project: Django Blog
  if (q.includes("django blog") || (q.includes("blog") && !q.includes("axis"))) {
    const p = portfolioData.projects.find((item) => item.title.toLowerCase().includes("django blog"));
    return (
      `**${p.title}** [${p.category}]\n\n` +
      `${p.description}\n\n` +
      `• **Tech Stack**: ${p.technologies.join(", ")}\n` +
      `• **Repository**: [GitHub Link](${p.to})`
    );
  }

  // 16. Specific Project / Experience: MediMan
  if (q.includes("mediman")) {
    const exp = portfolioData.experiences.find((e) => e.company.toLowerCase().includes("edus"));
    return (
      `**MediMan Telemedicine & Doctor Appointment Platform**\n\n` +
      `Usama served as **Software Developer at Edus Lanka (PVT) LTD** (Nov 2024 – Jan 2025) engineering MediMan:\n\n` +
      `- **Frontend & Backend**: Real-time doctor appointment booking and patient clinical management.\n` +
      `- **FinTech Integration**: Multi-currency ledger wallet management and automated PayHere payment gateway checkout.\n` +
      `- **Communication**: Real-time communication channels between doctors and patients for high-reliability healthcare delivery.\n\n` +
      `🔗 [Inspect the MediMan Doctor Repository](https://github.com/Usamafuward/sample-mediman-doctor.git)`
    );
  }

  // 17. All Projects Catalog / Portfolio Works
  if (
    q.includes("project") ||
    q.includes("portfolio") ||
    q.includes("built") ||
    q.includes("systems") ||
    q.includes("apps")
  ) {
    return (
      `Usama has engineered **${portfolioData.projects.length} verified production platforms** across 4 specialized categories:\n\n` +
      `### 🤖 AI / Machine Learning (3 Projects):\n` +
      `1. **RAG Pipeline for PDF Analysis**: Multimodal RAG with FAISS, Google GenAI & Streamlit. [GitHub](https://github.com/Usamafuward/Rag-Pipeline-For-PDF-Analysis.git)\n` +
      `2. **AI-Powered Multi-Agent Coding Assistant**: AutoGen, GPT, FastAPI, FastHTML & FAISS. [GitHub](https://github.com/Usamafuward/AI_Powered_Multi_Agent_Coding_Assistant.git)\n` +
      `3. **NLP Podcast Chatbot**: Semantic transcript navigation, TF-IDF & NLTK. [GitHub](https://github.com/Usamafuward/nlp-podcast-chatbot.git)\n\n` +
      `### ⚡ Full-Stack Architectures (4 Projects):\n` +
      `4. **Tartuca Restaurant & Delivery**: FastAPI, PostgreSQL, Auth0 & Google Maps. [Live Site](https://tartuca.vercel.app/) | [User Repo](https://github.com/Usamafuward/tartuca_user.git)\n` +
      `5. **Travel Point**: Cross-platform React Native + FastAPI + PostgreSQL travel hub. [Mobile Repo](https://github.com/aamirfazeer/TravelPointMobile)\n` +
      `6. **Eats Robers**: Food ordering portal with React, Node.js, Express & MongoDB. [GitHub](https://github.com/Usamafuward/eats-robers.git)\n` +
      `7. **Clubhub-Central**: Campus organization platform for UCSC student societies (PHP & MariaDB). [GitHub](https://github.com/terance-edmonds/clubhub-central.git)\n\n` +
      `### 🎨 Modern Frontend & Systems UI (4 Projects):\n` +
      `8. **Axis Solutions - Startup Website**: Crimson dark-mode tech startup landing with telemetry metrics. [Live Site](https://axis-solutions-startup.vercel.app/) | [GitHub](https://github.com/Usamafuward/axis_solutions)\n` +
      `9. **Nexcura Pro - Clinical Dashboard UI**: Physician intelligence HUD, ICU bed & triage sentry. [Live Site](https://nexcura-doctor.vercel.app/) | [GitHub](https://github.com/Usamafuward/nexcura-doctor)\n` +
      `10. **FS Cake Gallery Website**: Artisanal bakery portal with WhatsApp ordering. [Live Site](https://fscakegallery.vercel.app/) | [GitHub](https://github.com/Usamafuward/fscakegallery.git)\n` +
      `11. **Portfolio Website**: Personal portfolio featuring Framer Motion, 3D aesthetics & AI assistant. [GitHub](https://github.com/Usamafuward/portfolio.git)\n\n` +
      `### 🛡️ High-Throughput Backend & APIs (2 Projects):\n` +
      `12. **Online Book Review Application**: Node.js & Express RESTful API with dual JWT/session auth. [GitHub](https://github.com/Usamafuward/book-review-api.git)\n` +
      `13. **Django Blog**: Dynamic publishing platform with PostgreSQL taxonomy & search. [GitHub](https://github.com/Usamafuward/Django-blog.git)\n\n` +
      `You can inspect architecture specs, interactive drawers, and live previews directly in the **Projects Catalog** (\`/projects\`)!`
    );
  }

  // 18. Individual Experience by Company / Organization
  if (q.includes("kainovation")) {
    return (
      `**Experience at Kainovation Technologies**:\n\n` +
      `1. **AI/SE Engineer** (June 2025 – Present):\n` +
      `   Actively contributing to transformative projects in AI, machine learning, and software engineering. Focused on the integration of AI models, full-stack software development, AI solution deployment, and optimizing intelligent systems for real-world production environments.\n\n` +
      `2. **AI/ML Intern** (November 2024 – May 2025):\n` +
      `   Worked on research and development of AI and machine learning projects, leveraging data-driven insights to enhance business operations. Focused on data preprocessing, pipeline building, exploratory data analysis, and assisting in the deployment of machine learning models.`
    );
  }

  if (q.includes("edus lanka")) {
    return (
      `**Experience at Edus Lanka (PVT) LTD**:\n\n` +
      `• **Role**: Software Developer (November 2024 – January 2025)\n` +
      `• **Responsibilities**: Worked on the Mediman - Doctor Patient Clinic Online Appointment project, handling both front-end and back-end development. Implemented features for appointment booking, patient management, and real-time communication between doctors and patients, ensuring a seamless user experience.`
    );
  }

  if (q.includes("unified mentor")) {
    return (
      `**Experience at Unified Mentor India**:\n\n` +
      `• **Role**: Full Stack Developer Intern (October 2024 – December 2024)\n` +
      `• **Responsibilities**: Participated in a learning internship focused on full-stack development, gaining hands-on experience with front-end and back-end technologies. Worked on guided projects, improving proficiency in web development, database management, and API integration while collaborating with mentors to enhance coding best practices.`
    );
  }

  if (q.includes("novitech")) {
    return (
      `**Experience at NoviTech R&D Pvt Ltd**:\n\n` +
      `• **Role**: Artificial Intelligence Intern (June 2023 – July 2024)\n` +
      `• **Responsibilities**: Completed a one-month internship in Artificial Intelligence at NoviTech R&D Pvt Ltd. Worked on several AI projects, contributing to the development and implementation of machine learning models and AI solutions aimed at solving real-world challenges.`
    );
  }

  if (q.includes("freelance") || q.includes("self-employed")) {
    return (
      `**Freelance Full Stack Developer** (December 2023 – May 2024):\n\n` +
      `Designed and developed custom web applications tailored to client requirements, focusing on responsive and user-friendly interfaces. Built scalable backend architectures using Node.js and MongoDB, integrated third-party APIs, and optimized performance for seamless user experiences.`
    );
  }

  if (
    q.includes("research") ||
    q.includes("annotator") ||
    q.includes("badminton") ||
    q.includes("tamil")
  ) {
    return (
      `**Research Projects: Data Collector & Annotator @ UCSC** (April 2023 – December 2023):\n\n` +
      `Collected and annotated data for projects on badminton shot analysis and emotion detection in Tamil texts. Responsibilities included data validation, video editing for ML training, and collaboration with research teams to achieve project goals.`
    );
  }

  // 19. All Career & Industry Experience
  if (
    q.includes("experience") ||
    q.includes("work") ||
    q.includes("career") ||
    q.includes("job") ||
    q.includes("role") ||
    q.includes("history")
  ) {
    return (
      `**Usama Puward's Professional Career History (${portfolioData.experiences.length} Roles)**:\n\n` +
      portfolioData.experiences
        .map(
          (exp, i) =>
            `${i + 1}. **${exp.title}** @ **${exp.company}** (${exp.duration})\n` +
            `   ${exp.description}`
        )
        .join("\n\n")
    );
  }

  // 20. Education & Academic Background
  if (
    q.includes("education") ||
    q.includes("degree") ||
    q.includes("university") ||
    q.includes("ucsc") ||
    q.includes("colombo") ||
    q.includes("college") ||
    q.includes("zahira") ||
    q.includes("school") ||
    q.includes("academic")
  ) {
    return (
      `**Usama Puward's Academic Background**:\n\n` +
      portfolioData.educations
        .map(
          (edu, i) =>
            `${i + 1}. **${edu.degree}** (${edu.year})\n` +
            `   **${edu.institution}**\n` +
            `   ${edu.description}`
        )
        .join("\n\n")
    );
  }

  // 21. Specific Certification Issuer / Organization Queries
  if (q.includes("stanford") || q.includes("deeplearning.ai")) {
    const matches = portfolioData.certifications.filter((c) =>
      c.organization.toLowerCase().includes("stanford") ||
      c.organization.toLowerCase().includes("deeplearning")
    );
    return (
      `**Stanford University & DeepLearning.AI Credentials (6 Certifications)**:\n\n` +
      matches
        .map(
          (c, i) =>
            `${i + 1}. **${c.title}**\n` +
            `   - Description: ${c.description}\n` +
            `   - Verify: [${c.to}](${c.to})`
        )
        .join("\n\n")
    );
  }

  if (q.includes("meta") || q.includes("facebook")) {
    const matches = portfolioData.certifications.filter((c) =>
      c.organization.toLowerCase().includes("meta")
    );
    return (
      `**Meta (Facebook) Professional Credentials (8 Certifications)**:\n\n` +
      matches
        .map(
          (c, i) =>
            `${i + 1}. **${c.title}**\n` +
            `   - Description: ${c.description}\n` +
            `   - Verify: [${c.to}](${c.to})`
        )
        .join("\n\n")
    );
  }

  if (q.includes("google cloud") || (q.includes("google") && q.includes("cert"))) {
    const matches = portfolioData.certifications.filter((c) =>
      c.organization.toLowerCase().includes("google") ||
      c.title.toLowerCase().includes("google")
    );
    return (
      `**Google Cloud & AI Masterclass Credentials (4 Certifications)**:\n\n` +
      matches
        .map(
          (c, i) =>
            `${i + 1}. **${c.title}** (${c.organization})\n` +
            `   - Description: ${c.description}\n` +
            `   - Verify: [${c.to}](${c.to})`
        )
        .join("\n\n")
    );
  }

  if (q.includes("microsoft") || q.includes("azure")) {
    const matches = portfolioData.certifications.filter((c) =>
      c.organization.toLowerCase().includes("microsoft") ||
      c.title.toLowerCase().includes("azure")
    );
    return (
      `**Microsoft Azure Cloud & AI Credentials (2 Certifications)**:\n\n` +
      matches
        .map(
          (c, i) =>
            `${i + 1}. **${c.title}** (${c.organization})\n` +
            `   - Description: ${c.description}\n` +
            `   - Verify: [${c.to}](${c.to})`
        )
        .join("\n\n")
    );
  }

  if (q.includes("ibm")) {
    const matches = portfolioData.certifications.filter((c) =>
      c.organization.toLowerCase().includes("ibm")
    );
    return (
      `**IBM Professional Credential**:\n\n` +
      matches
        .map(
          (c) =>
            `• **${c.title}** (${c.organization})\n` +
            `  - Description: ${c.description}\n` +
            `  - Verify: [${c.to}](${c.to})`
        )
        .join("\n\n")
    );
  }

  if (q.includes("packt") || q.includes("autogen")) {
    const matches = portfolioData.certifications.filter((c) =>
      c.organization.toLowerCase().includes("packt")
    );
    return (
      `**Packt Multi-Agent AI Credential**:\n\n` +
      matches
        .map(
          (c) =>
            `• **${c.title}** (${c.organization})\n` +
            `  - Description: ${c.description}\n` +
            `  - Verify: [${c.to}](${c.to})`
        )
        .join("\n\n")
    );
  }

  // 22. All Certifications
  if (
    q.includes("certificat") ||
    q.includes("credential") ||
    q.includes("license") ||
    q.includes("courses")
  ) {
    return (
      `Usama holds **${portfolioData.certifications.length} verified accreditations** across top tech institutions and universities:\n\n` +
      `### 🧠 AI, Deep Learning & LLMs:\n` +
      `• **Machine Learning Specialization** – Stanford & DeepLearning.AI\n` +
      `• **Mastering Multi-Agent Development with AutoGen** – Packt\n` +
      `• **Introduction to Large Language Models (LLMs)** – Google Cloud\n` +
      `• **Introduction to Generative AI** – Google Cloud\n` +
      `• **Introduction to Responsible AI** – Google Cloud\n` +
      `• **Convolutional Neural Networks in TensorFlow** – DeepLearning.AI\n` +
      `• **Introduction to TensorFlow** – DeepLearning.AI\n` +
      `• **Supervised Machine Learning (Regression & Classification)** – Stanford & DeepLearning.AI\n` +
      `• **Advanced Learning Algorithms** – Stanford & DeepLearning.AI\n` +
      `• **Unsupervised Learning & Recommenders** – Stanford & DeepLearning.AI\n` +
      `• **Artificial Intelligence on Microsoft Azure** – Microsoft\n` +
      `• **30 Days MasterClass in Artificial Intelligence** – NoviTech R&D\n` +
      `• **Google 15 Free AI Tools Masterclass** – AI Dude\n\n` +
      `### ⚡ Full-Stack, Mobile & Backend Engineering:\n` +
      `• **Meta React Specialization** – Meta\n` +
      `• **Developing Back-End Apps with Node.js and Express** – IBM\n` +
      `• **Advanced React** – Meta\n` +
      `• **React Basics** – Meta\n` +
      `• **Django Web Framework** – Meta\n` +
      `• **Programming with JavaScript** – Meta\n` +
      `• **Introduction to Front-End Development** – Meta\n` +
      `• **Introduction to Mobile Development** – Meta\n\n` +
      `### ☁️ Cloud Architecture & DevOps:\n` +
      `• **Azure Fundamentals Training** – Styava\n` +
      `• **DevOps Essentials and Version Control with Git** – Edureka\n` +
      `• **Version Control** – Meta\n\n` +
      `Every credential can be verified directly on Coursera or Google Drive from the **Certifications Catalog** (\`/certifications\`)!`
    );
  }

  // 23. Specific Technology Inquiry
  const techNames = portfolioData.technologies.map((t) => t.altText.replace(" Logo", "").toLowerCase());
  const matchedTech = techNames.find((tech) => q.includes(tech));

  if (matchedTech) {
    const formattedTech = portfolioData.technologies.find(
      (t) => t.altText.replace(" Logo", "").toLowerCase() === matchedTech
    ).altText.replace(" Logo", "");

    const usingProjects = portfolioData.projects.filter((p) =>
      p.technologies.some((t) => t.toLowerCase() === matchedTech || t.toLowerCase().includes(matchedTech))
    );

    const relatedSkills = portfolioData.skills.filter((s) =>
      s.techs.some((t) => t.toLowerCase() === matchedTech || t.toLowerCase().includes(matchedTech))
    );

    return (
      `**${formattedTech} in Usama Puward's Production Toolchain**:\n\n` +
      (relatedSkills.length
        ? `• **Domain Proficiency**: ${relatedSkills.map((s) => `${s.category} (${s.progress}%)`).join(", ")}\n`
        : "") +
      (usingProjects.length
        ? `• **Implemented in ${usingProjects.length} Production Platforms**:\n` +
          usingProjects.map((p) => `  - **${p.title}** [${p.category}]`).join("\n")
        : `• Core technology verified across production workflows.`) +
      `\n\nUsama applies **${formattedTech}** adhering to clean architecture, performance optimization, and industry design patterns.`
    );
  }

  // 24. General Skills & Tech Stack Matrix
  if (
    q.includes("skill") ||
    q.includes("tech") ||
    q.includes("stack") ||
    q.includes("tool") ||
    q.includes("language") ||
    q.includes("framework")
  ) {
    return (
      `**Usama Puward's Complete Technical Matrix & Proficiency Levels**:\n\n` +
      portfolioData.skills
        .map(
          (s) =>
            `• **${s.category}** (${s.progress}%):\n` +
            `  ${s.techs.join(" • ")}`
        )
        .join("\n\n") +
      `\n\n**All 29 Production Toolchain Technologies**:\n` +
      portfolioData.technologies.map((t) => t.altText.replace(" Logo", "")).join(", ")
    );
  }

  // Default Guidance Fallback
  return (
    `I'm here to provide complete, factually verified information about **${portfolioData.personalInfo.name}**!\n\n` +
    `You can ask me about:\n` +
    `• **His ${portfolioData.projects.length} Production Platforms**: (Tartuca, RAG Pipeline, Axis Solutions, Nexcura Pro, FS Cake Gallery, etc.)\n` +
    `• **His ${portfolioData.experiences.length} Industry Roles**: (AI/SE Engineer @ Kainovation, Edus Lanka, NoviTech, Unified Mentor, etc.)\n` +
    `• **His ${portfolioData.certifications.length} Verified Accreditations**: (Stanford, DeepLearning.AI, Meta, Google Cloud, Microsoft, IBM, Packt)\n` +
    `• **Core Tech Stacks**: (Python, FastAPI, AutoGen, React 19, Next.js, Docker, PostgreSQL, Azure)\n` +
    `• **Contact & Hiring**: ([${portfolioData.personalInfo.email}](mailto:${portfolioData.personalInfo.email}) | ${portfolioData.personalInfo.phone} | [Download CV](/resume.pdf))\n\n` +
    `What would you like to know?`
  );
}

/**
 * Simulates human-speed token streaming for fallback responses.
 */
export async function streamFallbackText(text, onChunk, onDone) {
  const tokens = text.match(/(\S+|\n+)/g) || [text];
  let accumulated = "";

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    const isNewline = token.startsWith("\n");
    accumulated += (i > 0 && !isNewline && !accumulated.endsWith("\n") ? " " : "") + token;

    onChunk(accumulated);

    const delay = isNewline ? 60 : Math.floor(Math.random() * 20) + 12;
    await new Promise((resolve) => setTimeout(resolve, delay));
  }

  if (onDone) onDone(accumulated);
  return accumulated;
}

/**
 * Main chat dispatcher with automatic zero-downtime offline fallback.
 */
export async function streamGeminiChat({
  messages,
  apiKey,
  onChunk,
  onDone,
  onError,
}) {
  const cleanKey = (apiKey || "").replace(/['"]/g, "").trim();
  const lastUserMessage = [...messages].reverse().find((m) => m.role === "user")?.text || "";

  // If no API key provided, immediately invoke the intelligent fallback engine
  if (!cleanKey) {
    const fallbackText = generateLocalFallback(lastUserMessage);
    await streamFallbackText(fallbackText, onChunk, onDone);
    return;
  }

  try {
    const contents = [
      {
        role: "user",
        parts: [{ text: `${SYSTEM_PROMPT}\n\nUser: ${lastUserMessage}` }],
      },
    ];

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent?alt=sse&key=${cleanKey}`;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents,
        generationConfig: {
          temperature: 0.3,
          topP: 0.85,
          maxOutputTokens: 1200,
        },
      }),
    });

    if (!response.ok) {
      console.warn(`Gemini API returned status ${response.status}. Engaging local fallback engine.`);
      const fallbackText = generateLocalFallback(lastUserMessage);
      await streamFallbackText(fallbackText, onChunk, onDone);
      return;
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let accumulatedText = "";
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith("data: ")) {
          const jsonStr = trimmed.slice(6);
          if (jsonStr === "[DONE]") continue;

          try {
            const parsed = JSON.parse(jsonStr);
            const chunk =
              parsed.candidates?.[0]?.content?.parts?.[0]?.text || "";
            if (chunk) {
              accumulatedText += chunk;
              onChunk(accumulatedText);
            }
          } catch {
            // Ignore partial SSE chunks
          }
        }
      }
    }

    if (!accumulatedText) {
      const fallbackText = generateLocalFallback(lastUserMessage);
      await streamFallbackText(fallbackText, onChunk, onDone);
      return;
    }

    if (onDone) onDone(accumulatedText);
  } catch (error) {
    console.warn("Gemini network error. Engaging local fallback engine:", error);
    try {
      const fallbackText = generateLocalFallback(lastUserMessage);
      await streamFallbackText(fallbackText, onChunk, onDone);
    } catch (fallbackErr) {
      if (onError) onError(fallbackErr);
    }
  }
}
