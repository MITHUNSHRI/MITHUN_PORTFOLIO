import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "5mb" }));

// Initialize Gemini Client safely
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// System instructions for Mithun AI
const MITHUN_SYSTEM_INSTRUCTION = `
You are Mithun AI, the professional AI recruiter & technical interview assistant for Mithun Shri K M.
Your sole purpose is to help recruiters, HR managers, engineering directors, and visitors understand Mithun's technical and professional background.

CRITICAL DIRECTIVES & ANTI-HALLUCINATION RULES:
1. Primary Source of Truth: Base ALL answers ONLY on Mithun's provided resume below.
2. DO NOT INVENT or hallucinate past employers, job titles, salary expectations, client names, project results, GitHub URLs, or certificates not explicitly stated.
3. If asked about something not mentioned in his resume, respond gracefully: "I don't have that specific information in Mithun's resume."
4. Multilingual Capabilities:
   - You MUST respond fluently in the requested language: English, Tamil (தமிழ்), or Hindi (हिन्दी).
   - Keep technical terms (e.g., Java, Python, SQL, LangChain, FAISS, RAG, n8n, Hugging Face, REST API, OOP) in English or Latin script so they remain clear and professional.
5. Tone: Professional, confident, friendly, recruiter-focused, precise, and technically accurate.

MITHUN SHRI K M'S COMPLETE RESUME DATA:
=========================================
Name: MITHUN SHRI K M
Email: mithunshri2005@gmail.com
Phone: +91-93605 88085
Location: Coimbatore, Tamil Nadu
GitHub: github.com/MITHUNSHRI
LinkedIn: linkedin.com/in/mithun-k-m
Degree: Bachelor of Engineering (B.E.) in Computer Science and Engineering
Institution: Sri Ramakrishna Institute of Technology, Coimbatore
CGPA: 7.9 / 10
Expected Graduation: May 2027
Class XII Education: State Board, 84.2% (2023)

Target Roles:
- Software Developer
- Java Developer
- Full Stack Developer
- AI/ML Intern

Key Technical Skills:
- Programming: Java, Python, SQL, JavaScript
- AI & ML: LangChain, FAISS, Hugging Face Transformers, Sentence-Transformers, RAG Pipeline, Google Colab
- Web Development: HTML, CSS, Full-Stack Development, Front-end, Back-end
- Tools & Cloud: Git, GitHub, n8n, Jupyter Notebook, Cloud Computing
- Core Concepts: Object-Oriented Programming (OOP), Data Structures & Algorithms (DSA), Software Development Life Cycle (SDLC), REST API Integration

Work Experience & Internships:
1. Yellow Networks — Software Intern (January 2026 – May 2026)
   - Developed AI-powered automation features for JetMindDev (Final Solution AI).
   - Streamlined enterprise communication and workflow automation for 3+ client use cases.
   - Collaborated in cross-functional sprint reviews across 4+ Agile cycles.
   - Translated business requirements into software deliverables.
   - Contributed to accelerating feature delivery.

2. IO Solutions — Full Stack Development Intern (15-Day Intensive Internship)
   - Engineered an end-to-end full-stack web application.
   - Developed responsive HTML/CSS/JavaScript interfaces with SQL-based backend logic for scalable data management.
   - Implemented parameterized SQL queries and server-side input validation to eliminate SQL injection vulnerabilities.

Projects:
1. RAG Chatbot using LangChain & FAISS
   - Tech Stack: Python, LangChain, FAISS, Hugging Face, Google Colab
   - Description: Designed and deployed a Retrieval-Augmented Generation chatbot using LangChain, FAISS vector store, Hugging Face SentenceTransformers, and the Qwen LLM for context-aware Q&A over custom knowledge base documents.
   - Pipeline: Document Loading -> Text Chunking -> Vector Embeddings -> Semantic Retrieval -> Answer Synthesis.

2. Automated Payment Reminder System
   - Tech Stack: n8n, Google Sheets, Gmail, JavaScript
   - Description: Automated an end-to-end payment reminder workflow using n8n, Google Sheets, and Gmail, eliminating 100% of manual tracking effort across 50+ payment records per cycle.
   - Key Features: Conditional due-date logic, scheduled email triggers, custom JavaScript automation, and multi-scenario error handling.

3. A.I.G.E.S (Advanced Encrypted Green Integrated Shield)
   - Event: ISREL Hackathon (April 2025)
   - Description: Architected a secure healthcare database schema and prototyped a Java application using parameterized SQL queries to safeguard patient records against injection-based cyber attacks.

Certifications:
- Cloud Computing (NPTEL Certified)
- Java Programming (GUVI Certified Professional)
- SQL (HackerRank Certified — Problem Solving and Query Optimization)
- GATE 2026 Participation & Preparation (Strengthened core fundamentals in Databases, Operating Systems, Algorithms)

Achievements:
- Captain & Zone Runner-Up — College Kho-Kho Team (Sports leadership & teamwork)

Mode Guidance:
- If HR INTERVIEW mode: Highlight Mithun's communication, problem-solving mindset, internship teamwork at Yellow Networks & IO Solutions, Kho-Kho team captain leadership, and adaptability.
- If TECHNICAL INTERVIEW mode: Provide detailed technical explanations (e.g. OOP principles, SQL injection prevention via parameterized queries, vector embeddings & FAISS semantic search, REST APIs, SDLC).
- If PROJECT INTERVIEW mode: Deep dive into the architecture, workflow, tech stack choices, and outcomes of RAG Chatbot, n8n Automation, or A.I.G.E.S.
- If GENERAL QUESTIONS: Answer concisely and offer relevant follow-up topics.
`;

// API Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message, language = "en", mode = "general", history = [] } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message string is required." });
    }

    const ai = getGeminiClient();

    let langInstruction = "Respond in English.";
    if (language === "ta") {
      langInstruction = "Respond in fluent Tamil (தமிழ்). Keep technical terminology in clear English words.";
    } else if (language === "hi") {
      langInstruction = "Respond in fluent Hindi (हिन्दी). Keep technical terminology in clear English words.";
    }

    let modeInstruction = "";
    if (mode === "hr") {
      modeInstruction = "Framing: Act as Mithun answering an HR interviewer or recruiter.";
    } else if (mode === "technical") {
      modeInstruction = "Framing: Act as Mithun in a technical interview with deep code and architectural concepts.";
    } else if (mode === "project") {
      modeInstruction = "Framing: Act as Mithun explaining technical projects to an engineering manager.";
    }

    if (!ai) {
      // Fallback intelligent responder if GEMINI_API_KEY is not configured
      const fallbackReply = getIntelligentFallbackResponse(message, language, mode);
      return res.json({ reply: fallbackReply, fallback: true });
    }

    const fullPrompt = `${langInstruction}\n${modeInstruction}\nUser Question: ${message}`;

    const chat = ai.chats.create({
      model: "gemini-3.6-flash",
      config: {
        systemInstruction: MITHUN_SYSTEM_INSTRUCTION,
        temperature: 0.4,
      },
    });

    const response = await chat.sendMessage({ message: fullPrompt });
    const replyText = response.text || "I am currently unable to process that response.";

    res.json({ reply: replyText, fallback: false });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    const fallbackReply = getIntelligentFallbackResponse(req.body.message || "", req.body.language || "en", req.body.mode || "general");
    res.json({ reply: fallbackReply, fallback: true, error: error?.message });
  }
});

// Rule-based fallback if API key is not present or API call experiences network issues
function getIntelligentFallbackResponse(message: string, language: string, mode: string): string {
  const lower = message.toLowerCase();

  // Tamil responses
  if (language === "ta") {
    if (lower.includes("யார்") || lower.includes("mithun") || lower.includes("சொல்லுங்கள்")) {
      return "மிதுன் ஸ்ரீ K M கோவை ஸ்ரீ ராமகிருஷ்ணா இன்ஸ்டிடியூட் ஆப் டெக்னாலஜியில் B.E. Computer Science and Engineering இறுதியாண்டு மாணவர் (CGPA 7.9/10). இவர் Full Stack Web Development, SQL, LangChain/FAISS மூலம் AI RAG Chatbot, மற்றும் Yellow Networks & IO Solutions நிறுவனங்களில் இன்டர்ன்ஷிப் அனுபவம் பெற்றவர்.";
    }
    if (lower.includes("skills") || lower.includes("திறமை")) {
      return "மிதுனின் முதன்மை தொழில்முறை திறன்கள்: Java, Python, SQL, JavaScript, LangChain, FAISS, Hugging Face, RAG Pipelines, HTML/CSS, Full Stack Development, Git, n8n, OOP, DSA, மற்றும் Secure SQL Validation.";
    }
    if (lower.includes("project") || lower.includes("பிராஜெக்ட்")) {
      return "மிதுனின் முக்கியமான 3 திட்டங்கள்:\n1. LangChain & FAISS RAG Chatbot (Python, Qwen LLM, Vector Embeddings)\n2. n8n Automated Payment Reminder System (Google Sheets & Gmail integration)\n3. A.I.G.E.S Healthcare Secure Database (Java & Parameterized SQL to prevent SQL Injection).";
    }
    return "மிதுன் ஸ்ரீ K M B.E. CSE இறுதியாண்டு மாணவர் (CGPA 7.9). Yellow Networks நிறுவனத்தில் AI Automation Software Intern ஆகவும், IO Solutions நிறுவனத்தில் Full Stack Intern ஆகவும் பணியாற்றினார். மேலதிக விபரங்களுக்கு என்னை எந்த கேள்வியும் கேட்கலாம்!";
  }

  // Hindi responses
  if (language === "hi") {
    if (lower.includes("कौन") || lower.includes("mithun") || lower.includes("बताइए")) {
      return "मिथुन श्री K M श्री रामकृष्ण इंस्टीट्यूट ऑफ टेक्नोलॉजी, कोयंबटूर से B.E. कंप्यूटर साइंस एंड इंजीनियरिंग के अंतिम वर्ष के छात्र हैं (CGPA 7.9/10)। उनके पास Full Stack Development, SQL, LangChain & FAISS RAG AI Chatbots और Yellow Networks तथा IO Solutions में इंटर्नशिप का अनुभव है।";
    }
    if (lower.includes("skills") || lower.includes("कौशल")) {
      return "मिथुन की प्रमुख तकनीकी क्षमताएं: Java, Python, SQL, JavaScript, LangChain, FAISS, Hugging Face, RAG Pipeline, HTML/CSS, Full Stack Web Dev, n8n automation, Git, OOP, और DSA.";
    }
    if (lower.includes("project") || lower.includes("प्रोजेक्ट")) {
      return "मिथुन के मुख्य 3 प्रोजेक्ट्स:\n1. RAG Chatbot using LangChain & FAISS (Python, Qwen LLM)\n2. Automated Payment Reminder System (n8n, Google Sheets & Gmail)\n3. A.I.G.E.S Secure Healthcare Database (Java, Parameterized SQL for Injection Protection).";
    }
    return "मिथुन श्री K M B.E. CSE अंतिम वर्ष के छात्र हैं (CGPA 7.9/10)। वे Software Developer, Java Developer, Full Stack Developer और AI/ML Intern भूमिकाओं के लिए उपलब्ध हैं।";
  }

  // English default responses
  if (lower.includes("tell me about") || lower.includes("who is") || lower.includes("summary") || lower.includes("profile") || mode === "hr") {
    return "Mithun Shri K M is a final-year B.E. Computer Science and Engineering student at Sri Ramakrishna Institute of Technology, Coimbatore, with a CGPA of 7.9/10. He has practical software engineering experience through internships at Yellow Networks (Software Intern) and IO Solutions (Full Stack Intern). His technical expertise spans Java, Python, SQL, JavaScript, LangChain, FAISS RAG chatbots, workflow automation (n8n), and secure database design.";
  }

  if (lower.includes("skill") || lower.includes("stack") || lower.includes("language") || lower.includes("technolog")) {
    return "Mithun's technical toolkit includes:\n• Programming: Java, Python, SQL, JavaScript\n• AI & ML: LangChain, FAISS, Hugging Face Transformers, Sentence-Transformers, RAG Pipelines, Google Colab\n• Web Development: Full-Stack HTML/CSS/JS, SQL Backends, REST APIs\n• Tools: Git, GitHub, n8n, Jupyter Notebook\n• Core Concepts: OOP, Data Structures & Algorithms, SDLC, SQL Injection Prevention.";
  }

  if (lower.includes("project") || lower.includes("rag") || lower.includes("payment") || lower.includes("aiges")) {
    return "Mithun has built 3 key technical projects:\n1. RAG Chatbot: Uses LangChain, FAISS vector embeddings, Hugging Face, and Qwen LLM for semantic context-aware Q&A.\n2. Automated Payment Reminder: Built with n8n, Google Sheets, Gmail API, and JS logic eliminating manual tracking across 50+ payment records.\n3. A.I.G.E.S (ISREL Hackathon): Secure healthcare database schema & Java prototype utilizing parameterized SQL queries to eliminate SQL injection attacks.";
  }

  if (lower.includes("experience") || lower.includes("internship") || lower.includes("work") || lower.includes("yellow") || lower.includes("io solutions")) {
    return "Mithun completed 2 software engineering internships:\n1. Yellow Networks (Jan–May 2026): Software Intern developing AI workflow automation for JetMindDev (Final Solution AI) across 4 Agile cycles for 3+ client use cases.\n2. IO Solutions: Full Stack Intern engineering an end-to-end web app with parameterized SQL queries and server-side validation to defeat cyber vulnerabilities.";
  }

  if (lower.includes("sql injection") || lower.includes("security") || lower.includes("parameterized")) {
    return "During his internship at IO Solutions and his A.I.G.E.S hackathon project, Mithun addressed SQL injection vulnerabilities by enforcing server-side input validation and using parameterized SQL queries (PreparedStatements). This decouples SQL commands from untrusted user input, rendering injection attacks impossible.";
  }

  return "Mithun Shri K M is a final-year B.E. Computer Science student (CGPA 7.9) targetting Software Developer, Java Developer, Full Stack Developer, and AI/ML Intern roles. Feel free to ask about his internships, projects, technical skills, or request an HR/Technical mock interview!";
}

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
