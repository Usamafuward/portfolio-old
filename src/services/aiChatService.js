/**
 * AI Chat Service for Usama Puward's Portfolio
 * Features:
 * 1. Google Gemini 2.5 Flash SSE streaming API integration.
 * 2. Grounded portfolio knowledge base with strict guardrails.
 * 3. Zero-downtime offline fallback engine (keyword heuristics + streaming token simulator).
 */

export const PORTFOLIO_KNOWLEDGE = {
  name: "Usama Puward",
  title: "AI/SE Engineer & Full-Stack Architect",
  location: "Colombo, Sri Lanka (Available for Worldwide Engagements)",
  email: "usamafuward2001@gmail.com",
  github: "https://github.com/Usamafuward",
  linkedin: "https://www.linkedin.com/in/usamafuward/",
  education: {
    degree: "B.Sc. in Computer Science",
    institution: "University of Colombo School of Computing (UCSC)",
    period: "2022 – 2025",
    focus: "Machine Learning, Distributed Systems, Algorithms, and Software Engineering",
  },
  skills: {
    ai_ml: [
      "AutoGen (Multi-Agent)",
      "LangChain",
      "Retrieval-Augmented Generation (RAG)",
      "Google Gemini API",
      "TensorFlow",
      "PyTorch",
      "Scikit-Learn",
      "FAISS Vector DB",
      "Hugging Face",
      "Pandas",
      "NumPy",
    ],
    backend: [
      "Python",
      "FastAPI (Async Microservices)",
      "Node.js",
      "Express.js",
      "Django",
      "PostgreSQL (+ pgvector)",
      "MongoDB",
      "MySQL",
      "RESTful APIs",
      "Auth0",
    ],
    frontend: [
      "React 19 / React",
      "Next.js (App Router & SSR)",
      "TypeScript",
      "JavaScript (ESNext)",
      "Tailwind CSS",
      "Framer Motion",
      "React Native (Mobile)",
      "Responsive UI Architecture",
    ],
    cloud_devops: [
      "Docker",
      "Microsoft Azure",
      "AWS (Amazon Web Services)",
      "Git / GitHub",
      "GitHub Actions (CI/CD)",
      "Linux",
    ],
  },
  experience: [
    {
      role: "AI/SE Engineer",
      company: "Kainovation Technologies",
      period: "June 2025 – Present",
      type: "Active Role",
      highlights: [
        "Engineering autonomous multi-agent AI systems using AutoGen and LangChain.",
        "Developing low-latency RAG pipelines and vector database integrations.",
        "Optimizing microservice APIs in FastAPI and Node.js for high-concurrency production scale.",
      ],
    },
    {
      role: "AI/ML Intern",
      company: "Kainovation Technologies",
      period: "November 2024 – May 2025",
      type: "Internship",
      highlights: [
        "Conducted applied research on model fine-tuning, embeddings, and prompt optimization.",
        "Built automated data preprocessing pipelines and feature engineering workflows.",
        "Implemented real-world deep learning classification models.",
      ],
    },
    {
      role: "Software Developer",
      company: "Edus Lanka (PVT) LTD",
      period: "November 2024 – January 2025",
      type: "Contract",
      highlights: [
        "Architected core features for Mediman doctor-patient appointment booking platform.",
        "Integrated multi-currency wallet management and PayHere payment gateways.",
        "Engineered robust RESTful backend microservices with real-time state synchronization.",
      ],
    },
    {
      role: "Full Stack Developer Intern",
      company: "Unified Mentor India",
      period: "October 2024 – December 2024",
      type: "Internship",
      highlights: [
        "Developed full-stack web applications using React, Node.js, and MongoDB.",
        "Authored modular REST APIs and implemented responsive frontend interfaces.",
      ],
    },
  ],
  flagshipProjects: [
    {
      title: "Automated PDF RAG Pipeline",
      category: "Flagship AI / NLP",
      stack: "Google Gemini API, Vector DB, FAISS, PyPDF, Python",
      repo: "https://github.com/Usamafuward/Rag-Pipeline-For-PDF-Analysis.git",
      description:
        "High-performance Retrieval-Augmented Generation engine for automated document ingestion, token-aware chunking, vector embeddings, and context-grounded multimodal synthesis.",
    },
    {
      title: "MediMan Telemedicine & Wallet Platform",
      category: "FinTech & Healthcare",
      stack: "React, Node.js, Express, PayHere API, MongoDB",
      repo: "https://github.com/Usamafuward/sample-mediman-doctor.git",
      description:
        "Comprehensive healthcare portal featuring real-time doctor appointment scheduling, multi-currency ledger wallet management, and automated payment gateway processing.",
    },
    {
      title: "Tartuca Food & Delivery Platform",
      category: "Full-Stack Monorepo",
      stack: "FastAPI, PostgreSQL, Google Maps API, Auth0, React Native",
      repo: "https://github.com/Usamafuward/tartuca_user.git",
      description:
        "High-concurrency food delivery platform with asynchronous FastAPI microservices, geospatial distance calculations, and role-based administrative portals.",
    },
  ],
  certifications: [
    "Stanford & DeepLearning.AI – Machine Learning & Neural Networks",
    "Meta – React Specialization & Front-End Engineering",
    "Google Cloud – Cloud Computing & AI Fundamentals",
    "Microsoft Azure – Cloud Architecture & Solutions",
    "Packt – Multi-Agent AI Systems & Autonomy (AutoGen)",
    "IBM – Node.js & Scalable REST APIs",
  ],
};

/**
 * System prompt strictly guardrailing the AI to Usama Puward's portfolio.
 */
export const SYSTEM_PROMPT = `
You are the official AI Engineering Assistant for Usama Puward's portfolio website.
Your mission is to represent Usama Puward accurately, professionally, and enthusiastically to recruiters, engineering managers, and technical clients.

### ABOUT USAMA PUWARD:
- Full Name: Usama Puward
- Role: AI/SE Engineer & Full-Stack Architect
- Education: B.Sc. in Computer Science from University of Colombo School of Computing (2022 - 2025).
- Location: Colombo, Sri Lanka (Available for remote and international roles).
- Email: usamafuward2001@gmail.com
- GitHub: https://github.com/Usamafuward
- LinkedIn: https://www.linkedin.com/in/usamafuward/

### CORE TECHNICAL EXPERTISE:
1. AI & Autonomous Systems: Multi-agent orchestration (AutoGen, LangChain), RAG Pipelines (FAISS, pgvector, Gemini API), Deep Learning (TensorFlow, PyTorch), Feature Engineering (Pandas, NumPy).
2. Backend & Distributed Systems: High-concurrency APIs (FastAPI, Node.js, Express, Django), Databases (PostgreSQL with pgvector, MongoDB, MySQL), Microservices & Docker.
3. Frontend & Client Architecture: React 19, Next.js (App Router, Server Actions, SSR), TypeScript, Tailwind CSS, Framer Motion, React Native.
4. Cloud & DevOps: Docker containerization, Microsoft Azure, AWS, Git, CI/CD with GitHub Actions.

### FLAGSHIP PROJECTS:
1. Automated PDF RAG Pipeline: Vector search, semantic document chunking, Google Gemini API embeddings, Python.
2. MediMan Consultation & Wallet: Telemedicine booking, multi-currency ledger balance, PayHere SDK integration, React + Node.js.
3. Tartuca Food & Delivery Platform: FastAPI asynchronous microservices, PostgreSQL, Google Maps routing, Auth0 security.

### INDUSTRY EXPERIENCE:
- AI/SE Engineer at Kainovation Technologies (June 2025 - Present): Autonomous multi-agent systems, RAG, and FastAPI.
- AI/ML Intern at Kainovation Technologies (Nov 2024 - May 2025): Machine learning research, data pipelines, model evaluation.
- Software Developer at Edus Lanka (Nov 2024 - Jan 2025): MediMan telemedicine platform and payment workflows.
- Full Stack Developer Intern at Unified Mentor India (Oct 2024 - Dec 2024): React and Node.js web development.

### STRICT GUARDRAILS & BEHAVIOR:
- Answer ONLY questions related to Usama Puward, his skills, projects, experience, education, technologies, and how to hire or contact him.
- If a user asks about unrelated topics (e.g., cooking recipes, politics, general coding quizzes unrelated to Usama's work), politely redirect them back to Usama's portfolio and technical qualifications.
- Be concise, articulate, and confident. Use clean Markdown formatting with bold highlights and bullet points where helpful.
- Never invent experience or projects not mentioned in this knowledge base.
`;

/**
 * Intelligent rule-based keyword heuristic for zero-downtime offline responses.
 */
export function generateLocalFallback(query) {
  const q = (query || "").toLowerCase();

  // 1. Greetings & Identity
  if (
    q.includes("hi") ||
    q.includes("hello") ||
    q.includes("hey") ||
    q.includes("who is") ||
    q.includes("who are you") ||
    q.includes("about usama")
  ) {
    return (
      "Hello! I am **Usama Puward's AI Portfolio Assistant**.\n\n" +
      "Usama is an **AI/SE Engineer & Full-Stack Architect** with a B.Sc. in Computer Science from the **University of Colombo School of Computing**.\n\n" +
      "He specializes in:\n" +
      "- **Autonomous Multi-Agent AI** (AutoGen, LangChain, RAG Pipelines)\n" +
      "- **High-Concurrency Backends** (FastAPI, Node.js, PostgreSQL + pgvector)\n" +
      "- **Modern Client Systems** (React 19, Next.js App Router, TypeScript)\n\n" +
      "What would you like to explore? Feel free to ask about his **projects**, **skills**, **industry experience**, or how to **hire him**!"
    );
  }

  // 2. Skills & Tech Stack
  if (
    q.includes("skill") ||
    q.includes("tech stack") ||
    q.includes("technologies") ||
    q.includes("stack") ||
    q.includes("languages") ||
    q.includes("framework")
  ) {
    return (
      "Here is a summary of **Usama Puward's core production toolchain**:\n\n" +
      "• **AI / Machine Learning**: AutoGen (Multi-Agent), LangChain, RAG Pipelines, Google Gemini API, TensorFlow, PyTorch, Scikit-Learn, FAISS Vector Indexing.\n" +
      "• **Backend & APIs**: FastAPI (Async microservices), Node.js, Express.js, Django, PostgreSQL (+ pgvector), MongoDB, MySQL, Auth0.\n" +
      "• **Frontend & Mobile**: React 19, Next.js (App Router, SSR), TypeScript, Tailwind CSS, Framer Motion, React Native.\n" +
      "• **Cloud & DevOps**: Docker, Microsoft Azure, AWS, Git, GitHub Actions CI/CD, Linux.\n\n" +
      "Every technology is backed by verified production projects and enterprise experience."
    );
  }

  // 3. RAG & Document AI Project
  if (
    q.includes("rag") ||
    q.includes("pdf") ||
    q.includes("retrieval") ||
    q.includes("vector") ||
    q.includes("gemini")
  ) {
    return (
      "Usama engineered an **Automated PDF RAG Pipeline** designed for high-accuracy document intelligence:\n\n" +
      "- **Ingestion**: Automated PDF parsing and token-aware semantic text chunking.\n" +
      "- **Embeddings & Vector Store**: High-dimensional vector indexing using Google Gemini API and FAISS for sub-millisecond retrieval.\n" +
      "- **Synthesis**: Top-K context-grounded retrieval matching with multimodal generative synthesis.\n" +
      "- **Tech Stack**: Python, Google Gemini API, FAISS Vector DB, PyPDF, Streamlit.\n\n" +
      "🔗 [Inspect the GitHub Repository](https://github.com/Usamafuward/Rag-Pipeline-For-PDF-Analysis.git)"
    );
  }

  // 4. MediMan Healthcare Project
  if (
    q.includes("mediman") ||
    q.includes("doctor") ||
    q.includes("health") ||
    q.includes("wallet") ||
    q.includes("telemedicine")
  ) {
    return (
      "**MediMan Consultation & Wallet** is a production telemedicine booking platform developed by Usama:\n\n" +
      "- **Multi-Currency Ledger**: Atomic wallet state management allowing patients to manage balances across currencies.\n" +
      "- **Payment Gateway**: Secure, webhook-verified checkout integration via the **PayHere API**.\n" +
      "- **Doctor Scheduling**: Real-time appointment reservation engine with synchronized doctor availability calendars.\n" +
      "- **Tech Stack**: React, Node.js, Express, MongoDB, PayHere SDK.\n\n" +
      "🔗 [Inspect the GitHub Repository](https://github.com/Usamafuward/sample-mediman-doctor.git)"
    );
  }

  // 5. Tartuca Food Platform
  if (
    q.includes("tartuca") ||
    q.includes("food") ||
    q.includes("delivery") ||
    q.includes("maps")
  ) {
    return (
      "**Tartuca Food & Delivery System** is a full-stack monorepo engineered for high-concurrency ordering:\n\n" +
      "- **Asynchronous Backend**: High-throughput microservice architecture built with **FastAPI** and **PostgreSQL**.\n" +
      "- **Geospatial Dispatching**: Dynamic route calculation, distance matrix evaluations, and live pin placement using **Google Maps API**.\n" +
      "- **Security**: Enterprise Auth0 OAuth2 token lifecycle with role-based access control (Admin, Restaurant, Customer).\n" +
      "- **Tech Stack**: FastAPI, PostgreSQL, Google Maps API, Auth0, React Native.\n\n" +
      "🔗 [Inspect the GitHub Repository](https://github.com/Usamafuward/tartuca_user.git)"
    );
  }

  // 6. Experience & Career History
  if (
    q.includes("experience") ||
    q.includes("work") ||
    q.includes("kainovation") ||
    q.includes("company") ||
    q.includes("history") ||
    q.includes("job") ||
    q.includes("role")
  ) {
    return (
      "**Usama Puward's Professional Career Trajectory**:\n\n" +
      "1. **AI/SE Engineer @ Kainovation Technologies** (June 2025 – Present):\n" +
      "   Developing autonomous multi-agent AI systems with AutoGen, production RAG pipelines, and scalable microservices.\n\n" +
      "2. **AI/ML Intern @ Kainovation Technologies** (Nov 2024 – May 2025):\n" +
      "   Conducted applied machine learning research, data feature engineering, and neural network tuning.\n\n" +
      "3. **Software Developer @ Edus Lanka** (Nov 2024 – Jan 2025):\n" +
      "   Architected telemedicine appointment booking workflows and multi-currency wallet services for MediMan.\n\n" +
      "4. **Full Stack Developer Intern @ Unified Mentor India** (Oct 2024 – Dec 2024):\n" +
      "   Engineered full-stack responsive web applications with React, Node.js, and MongoDB."
    );
  }

  // 7. Education & Academic Background
  if (
    q.includes("education") ||
    q.includes("degree") ||
    q.includes("university") ||
    q.includes("ucsc") ||
    q.includes("colombo") ||
    q.includes("school") ||
    q.includes("academic")
  ) {
    return (
      "**Academic Credentials**:\n\n" +
      "• **B.Sc. in Computer Science** (2022 – 2025)\n" +
      "  **University of Colombo School of Computing (UCSC)**\n" +
      "  Comprehensive degree covering Machine Learning, Software Architecture, Vector Space Retrieval, Algorithm Optimization, and Distributed Systems.\n\n" +
      "• **Secondary Education**: Zahira College Mawanella (Physical Science Stream).\n" +
      "• **Verified Certifications (23 Total)**: Including credentials from Stanford, DeepLearning.AI, Meta, Google Cloud, Microsoft Azure, and Packt (AutoGen)."
    );
  }

  // 8. Contact, Hiring, & Resume
  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("hire") ||
    q.includes("reach") ||
    q.includes("resume") ||
    q.includes("cv") ||
    q.includes("linkedin") ||
    q.includes("github")
  ) {
    return (
      "You can get in touch with **Usama Puward** directly:\n\n" +
      "• **Direct Email**: [usamafuward2001@gmail.com](mailto:usamafuward2001@gmail.com)\n" +
      "• **LinkedIn**: [linkedin.com/in/usamafuward](https://www.linkedin.com/in/usamafuward/)\n" +
      "• **GitHub**: [github.com/Usamafuward](https://github.com/Usamafuward)\n" +
      "• **Official Resumes**: Downloadable via the top navigation `Download CV` button (Software Engineering & AI/ML tracks).\n\n" +
      "He is currently available for **full-time software engineering roles**, **AI/ML consulting**, and **technical collaborations**."
    );
  }

  // 9. All Projects Overview
  if (q.includes("project") || q.includes("portfolio")) {
    return (
      "Usama has engineered **13+ software and AI production systems**.\n\n" +
      "**Top 3 Featured Architectural Systems**:\n" +
      "1. **Automated PDF RAG Pipeline** (Google Gemini API, Vector FAISS, Python)\n" +
      "2. **MediMan Consultation & Wallet** (Full-Stack React, Node.js, PayHere API)\n" +
      "3. **Tartuca Food Delivery Monorepo** (FastAPI, PostgreSQL, Google Maps, Auth0)\n\n" +
      "You can inspect all 13 platforms in depth by visiting the **Projects Catalog** (`/projects`) from the navbar!"
    );
  }

  // Default Guidance
  return (
    "I'm here to answer any questions about **Usama Puward's software engineering background**!\n\n" +
    "You can ask me about:\n" +
    "- **His Core Skills & Tech Stack** (Python, React 19, FastAPI, AutoGen, Docker)\n" +
    "- **His Flagship Projects** (PDF RAG Pipeline, MediMan, Tartuca)\n" +
    "- **His Experience** at Kainovation Technologies & Edus Lanka\n" +
    "- **How to Contact or Hire Him** ([usamafuward2001@gmail.com](mailto:usamafuward2001@gmail.com))\n\n" +
    "What would you like to know?"
  );
}

/**
 * Simulates human-speed token streaming for fallback responses.
 */
export async function streamFallbackText(text, onChunk, onDone) {
  // Split by words while preserving newlines
  const tokens = text.match(/(\S+|\n+)/g) || [text];
  let accumulated = "";

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    const isNewline = token.startsWith("\n");
    accumulated += (i > 0 && !isNewline && !accumulated.endsWith("\n") ? " " : "") + token;

    onChunk(accumulated);

    // Dynamic delay between words for natural human reading cadence
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
    // Format conversation history for Gemini API
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
          maxOutputTokens: 1000,
        },
      }),
    });

    if (!response.ok) {
      // If API returns 400 (e.g. invalid key) or 429 / 500, gracefully fallback
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
