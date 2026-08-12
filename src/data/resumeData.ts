import { ResumeData } from "../types";

export const RESUME_DATA: ResumeData = {
  personal: {
    name: "MITHUN SHRI K M",
    title: "Computer Science Engineer | Full Stack Developer | AI/ML Enthusiast",
    subtitle: "Final-year B.E. Computer Science Engineering Student | CGPA 7.9 / 10",
    email: "mithunshri2005@gmail.com",
    phone: "+91-93605 88085",
    location: "Coimbatore, Tamil Nadu",
    github: "https://github.com/MITHUNSHRI",
    linkedin: "https://linkedin.com/in/mithun-k-m",
    cgpa: 7.9,
    cgpaMax: 10,
    expectedGraduation: "May 2027",
    degree: "B.E. Computer Science and Engineering",
    institution: "Sri Ramakrishna Institute of Technology, Coimbatore",
    class12: "State Board (84.2%)",
    class12Year: "2023",
    summary:
      "Final-year B.E. Computer Science Engineering student with CGPA 7.9, hands-on experience in full-stack web development, SQL database design, AI-powered chatbot development using Python and LangChain, and secure SQL practices.",
    targetRoles: [
      "Software Developer",
      "Java Developer",
      "Full Stack Developer",
      "AI/ML Intern",
    ],
  },

  skills: [
    {
      id: "programming",
      category: "PROGRAMMING",
      skills: [
        {
          name: "Java",
          description: "GUVI Certified Professional. Object-Oriented design, parameterized SQL integration, and core application development.",
        },
        {
          name: "Python",
          description: "Primary AI/ML language used for LangChain pipelines, FAISS vector stores, Hugging Face models, and data scripting.",
        },
        {
          name: "SQL",
          description: "HackerRank Certified in Problem Solving & Query Optimization. Schema design, parameterized query security, and relational logic.",
        },
        {
          name: "JavaScript",
          description: "Full-stack frontend/backend scripting, workflow logic in n8n automation, and DOM manipulation.",
        },
      ],
    },
    {
      id: "aiml",
      category: "AI & ML",
      skills: [
        {
          name: "LangChain",
          description: "Framework for engineering LLM chains, custom prompts, and RAG document retrievers.",
        },
        {
          name: "FAISS",
          description: "Facebook AI Similarity Search vector database for fast high-dimensional dense vector retrieval.",
        },
        {
          name: "Hugging Face Transformers",
          description: "SentenceTransformers integration for generating high-quality text embeddings.",
        },
        {
          name: "Sentence-Transformers",
          description: "Generating semantic vector representations for document chunks.",
        },
        {
          name: "RAG Pipeline",
          description: "Retrieval-Augmented Generation architecture connecting custom knowledge bases to LLMs (Qwen).",
        },
        {
          name: "Google Colab",
          description: "GPU-accelerated environment for training, testing, and prototyping AI pipelines.",
        },
      ],
    },
    {
      id: "webdev",
      category: "WEB DEVELOPMENT",
      skills: [
        {
          name: "HTML & CSS",
          description: "Semantic layouts, responsive flex/grid design, glassmorphic UI, and mobile-first CSS styling.",
        },
        {
          name: "Full-Stack Development",
          description: "Connecting responsive user interfaces with SQL-backed servers and RESTful APIs.",
        },
        {
          name: "Front-end Development",
          description: "Interactive component design, user input handling, and dynamic UI updates.",
        },
        {
          name: "Back-end Development",
          description: "Server-side routing, business logic execution, input validation, and database connection pools.",
        },
      ],
    },
    {
      id: "tools",
      category: "TOOLS & CLOUD",
      skills: [
        {
          name: "Git & GitHub",
          description: "Version control, commit histories, code hosting, and feature branch management.",
        },
        {
          name: "n8n",
          description: "Workflow automation tool configured with webhook triggers, JS nodes, Gmail, and Google Sheets.",
        },
        {
          name: "Jupyter Notebook",
          description: "Interactive Python execution and algorithm prototyping.",
        },
        {
          name: "Cloud Computing",
          description: "NPTEL Certified in Cloud Computing fundamentals, virtualization, and cloud infrastructure.",
        },
      ],
    },
    {
      id: "core",
      category: "CORE CONCEPTS",
      skills: [
        {
          name: "OOP",
          description: "Encapsulation, Inheritance, Polymorphism, and Abstraction applied in Java and Python software design.",
        },
        {
          name: "Data Structures & Algorithms",
          description: "Arrays, LinkedLists, Stacks, Queues, Hash Tables, Trees, Sorting, and Search algorithms.",
        },
        {
          name: "SDLC",
          description: "Agile methodologies, sprint cycles, requirement translation, and testing phases.",
        },
        {
          name: "REST API Integration",
          description: "Designing and consuming HTTP REST endpoints with JSON data payloads.",
        },
      ],
    },
  ],

  experience: [
    {
      id: "exp-1",
      company: "YELLOW NETWORKS",
      role: "Software Intern",
      period: "January 2026 – May 2026",
      type: "Internship",
      location: "Coimbatore, Tamil Nadu",
      responsibilities: [
        "Developed AI-powered automation features for JetMindDev (Final Solution AI).",
        "Streamlined enterprise communication and workflow automation for 3+ client use cases.",
        "Collaborated in cross-functional sprint reviews across 4+ Agile cycles.",
        "Translated business requirements into production-ready software deliverables.",
        "Contributed to accelerating feature delivery times across engineering teams.",
      ],
      techStack: ["Python", "AI Automation", "Workflow Systems", "Agile/Scrum", "API Integration"],
      highlights: [
        "JetMindDev (Final Solution AI) Feature Delivery",
        "Automated 3+ Enterprise Client Use Cases",
        "4+ Agile Sprint Reviews Executed",
      ],
    },
    {
      id: "exp-2",
      company: "IO SOLUTIONS",
      role: "Full Stack Development Intern",
      period: "15-Day Intensive Internship",
      type: "Intensive Internship",
      location: "Coimbatore, Tamil Nadu",
      responsibilities: [
        "Engineered an end-to-end full-stack web application from scratch.",
        "Created responsive HTML/CSS/JavaScript user interfaces paired with SQL-based backend logic.",
        "Architected scalable database schemas for robust data management.",
        "Implemented parameterized SQL queries (PreparedStatements) and server-side input validation.",
        "Completely eliminated SQL injection vulnerabilities across all application endpoints.",
      ],
      techStack: ["Full Stack", "JavaScript", "HTML/CSS", "SQL", "Parameterized Queries", "Web Security"],
      highlights: [
        "End-to-End Web App Delivery",
        "100% SQL Injection Protection via Parameterization",
        "Server-side Validation Logic",
      ],
    },
  ],

  projects: [
    {
      id: "proj-1",
      title: "RAG CHATBOT USING LANGCHAIN & FAISS",
      eventOrContext: "AI/ML Engineering Project",
      techStack: ["Python", "LangChain", "FAISS", "Hugging Face", "Google Colab", "Qwen LLM"],
      category: "AI/ML",
      description:
        "Designed and deployed a Retrieval-Augmented Generation (RAG) chatbot using LangChain, FAISS vector store, Hugging Face SentenceTransformers, and the Qwen LLM for context-aware Q&A over custom knowledge base documents.",
      pipelineOrWorkflow: [
        { step: "Document Loading", desc: "Parsed raw text & PDF knowledge base files into structured text objects." },
        { step: "Text Chunking", desc: "Applied recursive character text splitters to create optimal context chunks." },
        { step: "Vector Embeddings", desc: "Generated high-dimensional dense embeddings using Hugging Face SentenceTransformers." },
        { step: "Semantic Retrieval", desc: "Queried FAISS vector index using cosine similarity search to retrieve relevant chunks." },
        { step: "Answer Synthesis", desc: "Passed retrieved contexts + prompt to Qwen LLM to synthesize hallucination-free answers." },
      ],
      features: [
        "Dense vector search with FAISS vector index",
        "Context-aware accurate document Q&A",
        "SentenceTransformers embedding generation",
        "Integration with Qwen LLM via LangChain",
      ],
    },
    {
      id: "proj-2",
      title: "AUTOMATED PAYMENT REMINDER SYSTEM",
      eventOrContext: "Workflow Automation Project",
      techStack: ["n8n", "Google Sheets", "Gmail", "JavaScript"],
      category: "Automation",
      description:
        "Automated an end-to-end payment reminder workflow using n8n, Google Sheets, and Gmail, eliminating 100% of manual tracking effort across 50+ payment records per cycle.",
      pipelineOrWorkflow: [
        { step: "Scheduled Trigger", desc: "Cron timer triggers the n8n execution workflow automatically." },
        { step: "Google Sheets Sync", desc: "Fetches live payment status, client emails, and due dates from Sheets API." },
        { step: "JS Condition Logic", desc: "Executes custom JavaScript code to evaluate overdue & upcoming payment thresholds." },
        { step: "Gmail Notification", desc: "Dispatches dynamic personalized email reminders via Gmail node." },
      ],
      features: [
        "Conditional due-date evaluation logic",
        "Scheduled automatic email triggers",
        "Custom JavaScript data transformations",
        "Multi-scenario error handling & audit logging",
        "Eliminated 100% of manual tracking effort across 50+ payment records per cycle",
      ],
    },
    {
      id: "proj-3",
      title: "A.I.G.E.S (Advanced Encrypted Green Integrated Shield)",
      eventOrContext: "ISREL Hackathon (April 2025)",
      techStack: ["Java", "SQL", "Parameterized Queries", "Database Security", "Encryption"],
      category: "Cybersecurity & Full Stack",
      description:
        "Architected a secure healthcare database schema and prototyped a Java application using parameterized SQL queries to safeguard patient records against injection-based cyber attacks.",
      pipelineOrWorkflow: [
        { step: "Security Analysis", desc: "Identified high-risk SQL attack vectors in standard healthcare login/query forms." },
        { step: "Schema Architecture", desc: "Designed normalized relational tables with encrypted patient identifiers." },
        { step: "Parameterized SQL", desc: "Enforced PreparedStatement objects in Java to separate SQL commands from user input." },
        { step: "Validation Shield", desc: "Implemented strict server-side regex validation preventing malformed injections." },
      ],
      features: [
        "Architected secure healthcare database schema",
        "Java backend prototype built for ISREL Hackathon (April 2025)",
        "Parameterized SQL query implementation neutralizing injection risks",
        "Protection of sensitive patient records against cyber threats",
      ],
    },
  ],

  education: {
    institution: "SRI RAMAKRISHNA INSTITUTE OF TECHNOLOGY",
    location: "Coimbatore, Tamil Nadu",
    degree: "Bachelor of Engineering (B.E.) in Computer Science and Engineering",
    cgpa: "7.9 / 10",
    expected: "May 2027",
    school: "State Board Schooling",
    board: "Tamil Nadu State Board",
    percentage: "84.2%",
    year: "2023",
  },

  certifications: [
    {
      id: "cert-1",
      title: "Cloud Computing",
      issuer: "NPTEL Certified",
      badgeText: "NPTEL CLOUD",
      description: "Certified by NPTEL in Cloud Computing fundamentals, cloud infrastructure, virtualization, and distributed systems architecture.",
      skillsLearned: ["Virtualization", "Cloud Infrastructure", "Distributed Storage", "Service Models"],
    },
    {
      id: "cert-2",
      title: "Java Programming",
      issuer: "GUVI Certified Professional",
      badgeText: "GUVI JAVA",
      description: "GUVI Certified Professional credential verifying mastery in Object-Oriented Programming, Java collections, syntax, and software building blocks.",
      skillsLearned: ["Core Java", "OOP Principles", "Collections Framework", "Exception Handling"],
    },
    {
      id: "cert-3",
      title: "SQL Certification",
      issuer: "HackerRank Certified",
      badgeText: "HACKERRANK SQL",
      description: "Certified by HackerRank in Advanced SQL, complex relational queries, joins, aggregations, and query optimization.",
      skillsLearned: ["Relational Querying", "Joins & Subqueries", "Aggregations", "Query Optimization"],
    },
    {
      id: "cert-4",
      title: "GATE 2026 Preparation",
      issuer: "Graduate Aptitude Test in Engineering",
      badgeText: "GATE 2026",
      description: "Rigorous academic preparation and participation in GATE 2026, building deep theoretical and practical foundations in core computer science.",
      skillsLearned: ["Database Management Systems", "Operating Systems", "Data Structures & Algorithms"],
    },
  ],

  achievements: [
    {
      id: "ach-1",
      title: "Captain & Zone Runner-Up",
      organization: "College Kho-Kho Team",
      role: "Team Captain",
      type: "Sports & Leadership",
      description: "Led the college Kho-Kho team as Captain to secure the Zone Runner-Up trophy, demonstrating athletic endurance, team strategy, and sportsmanship.",
    },
  ],
};

export const RECRUITER_PRESET_QUESTIONS = [
  {
    category: "Quick Profile",
    en: "Tell me about Mithun's profile & background.",
    ta: "மிதுனின் விவரக்குறிப்பைப் பற்றி சொல்லுங்கள்.",
    hi: "मिथुन के प्रोफाइल के बारे में बताइए।",
  },
  {
    category: "Technical Stack",
    en: "What are Mithun's core programming languages and AI skills?",
    ta: "மிதுனின் முக்கிய புரோகிராமிங் மற்றும் AI திறன்கள் யாவை?",
    hi: "मिथुन की मुख्य प्रोग्रामिंग भाषाएं और AI कौशल क्या हैं?",
  },
  {
    category: "Internships",
    en: "Explain Mithun's internship experience at Yellow Networks & IO Solutions.",
    ta: "Yellow Networks & IO Solutions இன்டர்ன்ஷிப் அனுபவத்தை விளக்குங்கள்.",
    hi: "Yellow Networks और IO Solutions में मिथुन के इंटर्नशिप अनुभव को समझाएं।",
  },
  {
    category: "RAG Chatbot",
    en: "How did Mithun build his RAG Chatbot using LangChain & FAISS?",
    ta: "LangChain & FAISS பயன்படுத்தி மிதுன் RAG Chatbot எவ்வாறு உருவாக்கினார்?",
    hi: "मिथुन ने LangChain और FAISS का उपयोग करके RAG चैटबॉट कैसे बनाया?",
  },
  {
    category: "SQL Security",
    en: "How do parameterized queries prevent SQL injection in Mithun's work?",
    ta: "மிதுனின் திட்டங்களில் Parameterized queries SQL injection-ஐ எவ்வாறு தடுக்கிறது?",
    hi: "पैरामीटरयुक्त प्रश्न मिथुन के काम में SQL इंजेक्शन को कैसे रोकते हैं?",
  },
  {
    category: "Automation",
    en: "Explain the n8n Automated Payment Reminder System.",
    ta: "n8n தானியங்கி கட்டண நினைவூட்டல் அமைப்பை விளக்குங்கள்.",
    hi: "n8n स्वचालित भुगतान अनुस्मारक प्रणाली को समझाएं।",
  },
  {
    category: "Why Hire",
    en: "Why should an engineering manager or HR recruiter hire Mithun?",
    ta: "ஒரு நிறுவன நிர்வாகி ஏன் மிதுனை தேர்வு செய்ய வேண்டும்?",
    hi: "एक भर्तीकर्ता या मैनेजर को मिथुन को क्यों चुनना चाहिए?",
  },
];
