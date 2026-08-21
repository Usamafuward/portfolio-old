import { useState, useRef, useEffect } from "react";
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
      text: "Hi! I'm Usama's AI assistant. Ask me anything about his portfolio, skills, or experience!",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const exampleQuestions = [
    "What are Usama's main skills?",
    "Tell me about his projects.",
    "What is his educational background?",
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
          "API Key is missing. Please restart your development server to load the new .env variables."
        );
      }

      // Sanitize data to remove images and icons, keeping only text
      const cleanData = {
        personalInfo: portfolioData.personalInfo,
        socialLinks: portfolioData.socialLinks?.map((item) => {
          // eslint-disable-next-line no-unused-vars
          const { icon, ...rest } = item;
          return rest;
        }),
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
                You are a helpful AI assistant for Usama Fuward's portfolio. You can only answer questions about his portfolio, skills, projects, and experience.
                
                Context:
                ${JSON.stringify(cleanData, null, 2)}
                
                If asked about other topics, politely decline and steer the conversation back to the portfolio.
                Keep answers concise and professional.
                Use Markdown formatting for your responses (bold, lists, etc.) to make them easy to read.
                
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
            className="fixed bottom-24 right-6 w-80 md:w-96 h-[500px] bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl rounded-tl-none rounded-br-none shadow-2xl border-2 border-teal-500/40 dark:border-teal-400/40 flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="relative p-4 flex justify-between items-center text-white overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/80 to-teal-700/80 backdrop-blur-xl" />
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
                  <Sparkles size={20} className="text-teal-200" />
                </motion.div>
                <div>
                  <h3 className="font-bold text-lg">Portfolio Assistant</h3>
                  <div className="flex items-center gap-2 text-xs text-teal-100">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                    <span>Online</span>
                  </div>
                </div>
              </div>
              <motion.button
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative z-10 hover:bg-white/20 p-2 rounded-full transition-all duration-300"
              >
                <Minimize2 size={18} />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-4xl scrollbar-thin scroll-smooth">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.sender === "user"
                        ? "bg-teal-600 text-white rounded-br-none"
                        : "bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm text-gray-800 dark:text-gray-200 rounded-bl-none shadow-sm"
                    }`}
                  >
                    <div className="text-sm prose dark:prose-invert max-w-none">
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}

              {/* Example Questions */}
              {messages.length === 1 && (
                <div className="grid gap-2 mt-4 px-2">
                  <p className="text-xs text-teal-300 font-medium ml-1 flex items-center gap-1">
                    <Sparkles size={12} />
                    Try asking:
                  </p>
                  {exampleQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(q)}
                      className="text-left text-sm p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-teal-200 dark:border-teal-800 rounded-lg hover:bg-teal-50 dark:hover:bg-gray-700 transition-colors text-teal-700 dark:text-teal-300"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm p-3 rounded-2xl rounded-bl-none shadow-sm">
                    <div className="flex gap-1">
                      <motion.div
                        className="w-2 h-2 bg-teal-600 rounded-full"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-teal-600 rounded-full"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-teal-600 rounded-full"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-t border-white/20 dark:border-gray-700/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about my skills..."
                  className="flex-1 px-4 py-2 rounded-full bg-gray-100/80 dark:bg-gray-700/80 backdrop-blur-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 border-none"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={isLoading || !input.trim()}
                  className="p-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={24} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 p-3 sm:p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md text-teal-600 dark:text-teal-400 border-2 border-teal-500/40 dark:border-teal-400/40 rounded-2xl rounded-bl-none shadow-lg hover:shadow-xl z-50 transition-all hover:border-teal-500/50 dark:hover:border-teal-400/50"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </>
  );
};

export default ChatBot;
