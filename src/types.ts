export type Language = "en" | "ta" | "hi";

export type InterviewMode = "general" | "hr" | "technical" | "project";

export interface SkillCategory {
  category: string;
  id: string;
  skills: {
    name: string;
    level?: string;
    description: string;
    icon?: string;
  }[];
}

export interface Internship {
  id: string;
  company: string;
  role: string;
  period: string;
  type: string;
  location?: string;
  responsibilities: string[];
  techStack: string[];
  highlights?: string[];
}

export interface Project {
  id: string;
  title: string;
  eventOrContext?: string;
  techStack: string[];
  description: string;
  pipelineOrWorkflow?: {
    step: string;
    desc: string;
  }[];
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
  category: "AI/ML" | "Automation" | "Cybersecurity & Full Stack";
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  badgeText: string;
  description: string;
  skillsLearned: string[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  role: string;
  description: string;
  type: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  language?: Language;
  mode?: InterviewMode;
  timestamp: string;
  isVoice?: boolean;
}

export interface ResumeData {
  personal: {
    name: string;
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
    cgpa: number;
    cgpaMax: number;
    expectedGraduation: string;
    degree: string;
    institution: string;
    class12: string;
    class12Year: string;
    summary: string;
    targetRoles: string[];
  };
  skills: SkillCategory[];
  experience: Internship[];
  projects: Project[];
  education: {
    institution: string;
    location: string;
    degree: string;
    cgpa: string;
    expected: string;
    school: string;
    board: string;
    percentage: string;
    year: string;
  };
  certifications: Certification[];
  achievements: Achievement[];
}
