import React, { useState, useEffect, useRef } from "react";
import { Language, InterviewMode, ChatMessage } from "../../types";
import { RECRUITER_PRESET_QUESTIONS, RESUME_DATA } from "../../data/resumeData";
import { Bot, Mic, MicOff, Volume2, VolumeX, Send, X, RefreshCw, Sparkles, UserCheck, Code2, FolderGit2, MessageSquare, Check, ShieldCheck } from "lucide-react";

interface AiAgentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialLang?: Language;
}

export const AiAgentModal: React.FC<AiAgentModalProps> = ({
  isOpen,
  onClose,
  initialLang = "en",
}) => {
  const [language, setLanguage] = useState<Language>(initialLang);
  const [mode, setMode] = useState<InterviewMode>("general");
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  // Voice Speech Recognition & Synthesis State
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Initialize Welcome Message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "welcome-1",
          sender: "ai",
          text: getWelcomeMessage(language, mode),
          language,
          mode,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Handle Speech Recognition setup
  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      const rec = new SpeechRecognition();
      rec.continuous = false;
      rec.interimResults = false;

      rec.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          setInputText(transcript);
          handleSendMessage(transcript, true);
        }
        setIsListening(false);
      };

      rec.onerror = (err: any) => {
        console.warn("Speech recognition error:", err);
        setIsListening(false);
      };

      rec.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = rec;
    } else {
      setVoiceSupported(false);
    }
  }, [language]);

  function getWelcomeMessage(lang: Language, m: InterviewMode): string {
    if (lang === "ta") {
      return "வணக்கம்! நான் மிதுனின் AI ஆட்சேர்ப்பு உதவியாளர். மிதுனின் கல்வி (CGPA 7.9), Yellow Networks & IO Solutions இன்டர்ன்ஷிப்கள், LangChain/FAISS RAG Chatbot, மற்றும் n8n Automation திட்டங்கள் பற்றி என்னிடம் எதையும் கேட்கலாம்.";
    }
    if (lang === "hi") {
      return "नमस्ते! मैं मिथुन का AI रिक्रूटर असिस्टेंट हूँ। आप मुझसे मिथुन की शिक्षा (CGPA 7.9), Yellow Networks और IO Solutions में इंटर्नशिप, RAG Chatbot, और उनकी तकनीकी क्षमताओं के बारे में पूछ सकते हैं।";
    }
    return "Hello! I am Mithun AI, your intelligent recruiter & interview assistant. Base all questions on Mithun's verified resume (B.E. CSE, CGPA 7.9, 2 Internships, 3 Projects). Select an interview mode or pick a question below!";
  }

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      if (recognitionRef.current) {
        let langCode = "en-US";
        if (language === "ta") langCode = "ta-IN";
        if (language === "hi") langCode = "hi-IN";

        recognitionRef.current.lang = langCode;
        recognitionRef.current.start();
        setIsListening(true);
      } else {
        alert("Voice speech recognition is not supported in this browser. Please use text input.");
      }
    }
  };

  const speakText = (text: string) => {
    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel(); // Stop ongoing speech

    // Strip special markdown symbols for natural audio speech
    const cleanText = text.replace(/[*#_•`]/g, "");

    const utterance = new SpeechSynthesisUtterance(cleanText);

    let langCode = "en-US";
    if (language === "ta") langCode = "ta-IN";
    if (language === "hi") langCode = "hi-IN";
    utterance.lang = langCode;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const handleSendMessage = async (textToSend?: string, isVoice: boolean = false) => {
    const query = (textToSend || inputText).trim();
    if (!query || isLoading) return;

    setInputText("");

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      language,
      mode,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isVoice,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: query,
          language,
          mode,
          history: messages.slice(-6).map((m) => ({ role: m.sender, content: m.text })),
        }),
      });

      const data = await res.json();
      const replyText = data.reply || "I don't have that information in Mithun's resume.";

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: replyText,
        language,
        mode,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, aiMsg]);

      if (isVoice) {
        speakText(replyText);
      }
    } catch (err) {
      console.error("Chat API error:", err);
      const fallbackMsg: ChatMessage = {
        id: `ai-err-${Date.now()}`,
        sender: "ai",
        text: "Mithun Shri K M is a final-year B.E. CSE student (CGPA 7.9) with internships at Yellow Networks & IO Solutions. Feel free to ask about his RAG Chatbot, SQL Injection protection, or n8n automation!",
        language,
        mode,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl h-[92vh] sm:h-[85vh] glass-panel border border-sky-500/40 shadow-2xl flex flex-col overflow-hidden text-slate-100 font-sans">
        
        {/* Modal Top Header Bar */}
        <div className="p-4 sm:p-5 bg-white/5 border-b border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-sky-500 to-violet-500 text-white shadow-md">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-extrabold text-white tracking-wide">
                  MITHUN AI ASSISTANT
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 font-mono text-[10px] font-bold uppercase border border-sky-500/40">
                  RECRUITER AGENT
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Multilingual Voice & Interactive Resume Interviewer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isSpeaking && (
              <button
                onClick={stopSpeaking}
                className="p-2 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-300 hover:bg-purple-500/30 text-xs font-mono flex items-center gap-1.5"
                title="Stop Speaking"
              >
                <VolumeX className="w-4 h-4 animate-bounce" />
                <span className="hidden sm:inline">STOP VOICE</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mode Selector Tabs & Language Toggle Bar */}
        <div className="p-3 bg-slate-900/60 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          
          {/* Interview Mode Selector */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-slate-500 mr-1 hidden sm:inline">MODE:</span>
            {[
              { id: "general", label: "GENERAL", icon: <MessageSquare className="w-3.5 h-3.5" /> },
              { id: "hr", label: "HR INTERVIEW", icon: <UserCheck className="w-3.5 h-3.5" /> },
              { id: "technical", label: "TECHNICAL", icon: <Code2 className="w-3.5 h-3.5" /> },
              { id: "project", label: "PROJECTS", icon: <FolderGit2 className="w-3.5 h-3.5" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setMode(tab.id as InterviewMode)}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all uppercase tracking-wider ${
                  mode === tab.id
                    ? "bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/50 shadow-md shadow-cyan-500/10"
                    : "bg-slate-950/80 text-slate-400 hover:text-slate-200 border border-slate-800"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
            {(["en", "ta", "hi"] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2.5 py-1 rounded font-bold uppercase transition-all ${
                  language === lang
                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/50"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {lang === "en" ? "ENGLISH" : lang === "ta" ? "தமிழ்" : "हिंदी"}
              </button>
            ))}
          </div>

        </div>

        {/* Preset Question Chips */}
        <div className="p-2.5 bg-slate-950/90 border-b border-slate-900 overflow-x-auto flex items-center gap-2 text-xs font-mono scrollbar-none">
          <span className="text-slate-500 text-[10px] uppercase shrink-0">PRESETS:</span>
          {RECRUITER_PRESET_QUESTIONS.map((q, idx) => {
            const label = q[language] || q.en;
            return (
              <button
                key={idx}
                onClick={() => handleSendMessage(label)}
                className="px-3 py-1 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-200 whitespace-nowrap shrink-0 transition-all"
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Chat Message Stream Box */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${
                msg.sender === "user" ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`max-w-[88%] sm:max-w-[80%] p-4 rounded-2xl ${
                  msg.sender === "user"
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-slate-950 font-medium font-sans rounded-tr-none shadow-lg shadow-cyan-500/10"
                    : "bg-slate-900 border border-slate-800 text-slate-200 font-sans leading-relaxed rounded-tl-none shadow-xl"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5 text-[10px] font-mono opacity-80">
                  <span className="font-bold uppercase tracking-wider">
                    {msg.sender === "user" ? "RECRUITER / VISITOR" : "MITHUN AI"}
                  </span>
                  <span>{msg.timestamp}</span>
                </div>

                <div className="whitespace-pre-wrap text-sm sm:text-base font-sans leading-relaxed">
                  {msg.text}
                </div>

                {msg.sender === "ai" && (
                  <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified Resume Fact
                    </span>
                    <button
                      onClick={() => speakText(msg.text)}
                      className="hover:text-cyan-300 flex items-center gap-1 transition-colors"
                      title="Read aloud"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>LISTEN</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Loading Typing Indicator */}
          {isLoading && (
            <div className="flex items-start gap-2">
              <div className="p-4 rounded-2xl rounded-tl-none bg-slate-900 border border-slate-800 text-cyan-400 font-mono text-xs flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>THINKING & REASONING FROM RESUME...</span>
              </div>
            </div>
          )}

          {/* Animated Status Indicator Bar */}
          {isListening && (
            <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 font-mono text-xs flex items-center justify-between animate-pulse">
              <div className="flex items-center gap-2">
                <Mic className="w-4 h-4 text-cyan-400 animate-bounce" />
                <span>LISTENING TO YOUR VOICE... SPEAK NOW</span>
              </div>
              <span className="text-[10px] text-cyan-400">
                {language === "en" ? "EN-US" : language === "ta" ? "TA-IN" : "HI-IN"}
              </span>
            </div>
          )}

          {isSpeaking && (
            <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/40 text-purple-300 font-mono text-xs flex items-center justify-between animate-pulse">
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-purple-400 animate-spin" />
                <span>MITHUN AI IS SPEAKING AUDIBLY...</span>
              </div>
              <button onClick={stopSpeaking} className="underline text-xs">
                MUTE
              </button>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Bottom Message & Voice Input Control Bar */}
        <div className="p-3 sm:p-4 bg-slate-900 border-t border-slate-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            {/* Voice Mic Button */}
            <button
              type="button"
              onClick={toggleListening}
              className={`p-3 rounded-xl border transition-all ${
                isListening
                  ? "bg-red-500/20 text-red-400 border-red-500 animate-pulse"
                  : "bg-slate-950 text-slate-300 border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300"
              }`}
              title={isListening ? "Stop Listening" : "Speak to AI Agent"}
            >
              {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>

            {/* Text Input */}
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={
                language === "ta"
                  ? "மிதுனைப் பற்றி எதையும் கேளுங்கள்..."
                  : language === "hi"
                  ? "मिथुन के बारे में कोई भी प्रश्न पूछें..."
                  : "Ask about Mithun's skills, projects, internships, or interview questions..."
              }
              className="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 text-slate-100 placeholder-slate-500 outline-none font-sans text-sm transition-colors"
            />

            {/* Send Button */}
            <button
              type="submit"
              disabled={isLoading || !inputText.trim()}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 disabled:opacity-40 text-slate-950 font-bold font-mono text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all"
            >
              <span>SEND</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
