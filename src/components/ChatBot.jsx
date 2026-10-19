import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Minimize2,
  Sparkles,
} from "lucide-react";
import { portfolioData } from "../constants/portfolioData";
import ReactMarkdown from "react-markdown";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Usama's AI assistant. Ask me anything about his engineering projects, multi-agent frameworks, machine learning models, or tech stack!",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const exampleQuestions = [
    "What are Usama's main skills?",
    "Tell me about Tartuca and his AI projects.",
    "What is his role at Kainovation Technologies?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text = input) => {
    if (!text.trim()) return;

    const userMessage = { text: text, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
      if (!API_KEY) {
        throw new Error(
          "API Key is missing. Please configure VITE_GEMINI_API_KEY in your .env file."
        );
      }

      // Sanitize data to remove images and icons, keeping only text
      const cleanData = {
        personalInfo: portfolioData.personalInfo,
        skills: portfolioData.skills,
        education: portfolioData.educations?.map((item) => {
          // eslint-disable-next-line no-unused-vars
          const { icon, ...rest } = item;
          return rest;
        }),
        certifications: portfolioData.certifications,
        projects: portfolioData.projects?.map((item) => {
          // eslint-disable-next-line no-unused-vars
          const { thumbnail, ...rest } = item;
          return rest;
        }),
        experiences: portfolioData.experiences,
        technologies: portfolioData.technologies?.map((t) => t.altText),
      };

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `
                You are a helpful AI assistant for Usama Puward's portfolio. You can only answer questions about his portfolio, skills, projects, and experience.
                
                Context:
                ${JSON.stringify(cleanData, null, 2)}
                
                If asked about other topics, politely decline and steer the conversation back to the portfolio.
                Keep answers concise, confident, and professional.
                Use Markdown formatting for your responses.
                
                User: ${text}
              `,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message || "API Error");
      }

      if (
        !data.candidates ||
        !data.candidates[0] ||
        !data.candidates[0].content
      ) {
        throw new Error("No response from AI");
      }

      const botResponse = data.candidates[0].content.parts[0].text;

      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { text: `Error: ${error.message}`, sender: "bot" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 h-[500px] bg-[#120b24]/95 backdrop-blur-xl rounded-[20px] shadow-2xl border border-purple-500/30 flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="relative p-4 flex justify-between items-center text-white overflow-hidden border-b border-purple-500/20 bg-gradient-to-r from-purple-950/80 to-[#1b1038]/80">
              <div className="relative flex items-center gap-3 z-10">
                <motion.div
                  className="relative"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Sparkles size={18} className="text-purple-300" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-sm text-white">Portfolio AI Assistant</h3>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-purple-300">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <span>Gemini Ready</span>
                  </div>
                </div>
              </div>
              <motion.button
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative z-10 hover:bg-purple-800/40 p-1.5 rounded-full text-purple-300 hover:text-white transition-colors"
              >
                <Minimize2 size={16} />
              </motion.button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0a0616]/70 scrollbar-thin">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-purple-600 text-white rounded-br-none shadow-md shadow-purple-950/50"
                        : "bg-[#181033] border border-purple-500/20 text-purple-100 rounded-bl-none shadow-sm"
                    }`}
                  >
                    <div className="prose prose-invert prose-xs max-w-none">
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}

              {/* Example Questions */}
              {messages.length === 1 && (
                <div className="grid gap-2 mt-4 px-1">
                  <p className="text-xs text-purple-400 font-mono flex items-center gap-1">
                    <Sparkles size={12} />
                    <span>Suggested Prompts:</span>
                  </p>
                  {exampleQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(q)}
                      className="text-left text-xs p-2.5 bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/20 rounded-xl transition-colors text-purple-200"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#181033] border border-purple-500/20 p-3 rounded-2xl rounded-bl-none shadow-sm">
                    <div className="flex gap-1.5 items-center">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-[#120b24] border-t border-purple-500/20">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about projects, skills, ML models..."
                  className="flex-1 px-4 py-2 text-xs rounded-full bg-[#090516] border border-purple-500/25 text-white placeholder-purple-400/50 focus:outline-none focus:border-purple-400 transition-colors"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={isLoading || !input.trim()}
                  className="w-8 h-8 flex items-center justify-center bg-purple-600 text-white rounded-full hover:bg-purple-500 disabled:opacity-40 transition-colors shadow-md"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Toggle AI assistant"
        className="fixed bottom-6 right-6 w-12 h-12 bg-purple-600 hover:bg-purple-500 text-white rounded-full shadow-lg shadow-purple-900/60 border border-purple-400/40 flex items-center justify-center z-50 transition-colors"
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
      </motion.button>
    </>
  );
};

export default ChatBot;
