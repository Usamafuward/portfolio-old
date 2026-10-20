import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  X,
  Send,
  Trash2,
  Sparkles,
  MessageSquare,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { streamGeminiChat } from "@/services/aiChatService";

/**
 * Lightweight, fast Markdown renderer matching the Midnight Violet app theme.
 */
function FormattedMessage({ text }) {
  if (!text) return null;

  const lines = text.split("\n");

  const renderInline = (line, lineIdx) => {
    // Regex matching [text](url), **bold**, and `code`
    const regex = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`)/g;
    const elements = [];
    let lastIndex = 0;
    let match;
    let keyIdx = 0;

    while ((match = regex.exec(line)) !== null) {
      if (match.index > lastIndex) {
        elements.push(
          <span key={`text-${lineIdx}-${keyIdx++}`}>
            {line.substring(lastIndex, match.index)}
          </span>
        );
      }

      if (match[2] && match[3]) {
        // [text](url)
        elements.push(
          <a
            key={`link-${lineIdx}-${keyIdx++}`}
            href={match[3]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C4B5FD] hover:text-white underline font-medium transition-colors inline-flex items-center gap-0.5"
          >
            <span>{match[2]}</span>
            <ExternalLink className="w-2.5 h-2.5 inline-block opacity-75" />
          </a>
        );
      } else if (match[4]) {
        // **bold**
        elements.push(
          <strong
            key={`bold-${lineIdx}-${keyIdx++}`}
            className="font-semibold text-white tracking-tight"
          >
            {match[4]}
          </strong>
        );
      } else if (match[5]) {
        // `code`
        elements.push(
          <code
            key={`code-${lineIdx}-${keyIdx++}`}
            className="px-1.5 py-0.5 rounded-md bg-[#1E143B] border border-[#8B5CF6]/30 text-[#C4B5FD] font-mono text-[11px]"
          >
            {match[5]}
          </code>
        );
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < line.length) {
      elements.push(
        <span key={`text-end-${lineIdx}-${keyIdx++}`}>
          {line.substring(lastIndex)}
        </span>
      );
    }

    return elements.length > 0 ? elements : line;
  };

  return (
    <div className="space-y-2 text-xs sm:text-[13px] leading-relaxed font-ui">
      {lines.map((line, idx) => {
        const trimmed = line.trim();

        if (!trimmed) {
          return <div key={idx} className="h-1.5" />;
        }

        // Bullet lists
        if (trimmed.startsWith("- ") || trimmed.startsWith("* ") || trimmed.startsWith("• ")) {
          const content = trimmed.replace(/^[-*•]\s+/, "");
          return (
            <div key={idx} className="flex items-start gap-2 pl-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] mt-1.5 shrink-0 shadow-[0_0_6px_rgba(139,92,246,0.6)]" />
              <div className="flex-1">{renderInline(content, idx)}</div>
            </div>
          );
        }

        // Numbered lists
        const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
        if (numMatch) {
          return (
            <div key={idx} className="flex items-start gap-2 pl-1">
              <span className="text-[#C4B5FD] font-mono text-[11px] font-semibold shrink-0">
                {numMatch[1]}.
              </span>
              <div className="flex-1">{renderInline(numMatch[2], idx)}</div>
            </div>
          );
        }

        // Standard paragraph
        return <p key={idx}>{renderInline(line, idx)}</p>;
      })}
    </div>
  );
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "welcome-1",
      role: "assistant",
      text: "Hello! I am **Usama Puward's AI Engineering Assistant**.\n\nAsk me anything about his **multi-agent architectures**, **production RAG pipelines**, **full-stack projects**, or **engineering trajectory**!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const suggestedPrompts = [
    "What are Usama's core technical skills?",
    "Explain the PDF RAG Pipeline architecture",
    "Tell me about Tartuca and MediMan",
    "What is his industry experience?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isGenerating]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
    }
  }, [isOpen]);

  const handleSend = async (messageText = input) => {
    const trimmed = messageText.trim();
    if (!trimmed || isGenerating) return;

    const userMessageId = `user-${Date.now()}`;
    const assistantMessageId = `assistant-${Date.now()}`;

    const newMessages = [
      ...messages,
      { id: userMessageId, role: "user", text: trimmed },
      { id: assistantMessageId, role: "assistant", text: "", isStreaming: true },
    ];

    setMessages(newMessages);
    setInput("");
    setIsGenerating(true);

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";

    try {
      await streamGeminiChat({
        messages: newMessages.slice(0, -1),
        apiKey,
        onChunk: (accumulatedText) => {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantMessageId
                ? { ...msg, text: accumulatedText, isStreaming: true }
                : msg
            )
          );
        },
        onDone: (finalText) => {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantMessageId
                ? { ...msg, text: finalText, isStreaming: false }
                : msg
            )
          );
          setIsGenerating(false);
        },
        onError: (err) => {
          console.error("Chat Error:", err);
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantMessageId
                ? {
                    ...msg,
                    text:
                      "I experienced a brief connection interruption. Please try asking again or feel free to email Usama directly at usamafuward2001@gmail.com.",
                    isStreaming: false,
                  }
                : msg
            )
          );
          setIsGenerating(false);
        },
      });
    } catch (err) {
      console.error("Fatal chat error:", err);
      setIsGenerating(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearHistory = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: "assistant",
        text: "Conversation reset.\n\nHow can I help you explore Usama Puward's portfolio today?",
      },
    ]);
  };

  return (
    <>
      {/* 1. Main Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 18 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="fixed bottom-[88px] right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[410px] h-[560px] max-h-[84vh] bg-[#0F0E1C]/95 backdrop-blur-2xl rounded-[22px] border border-[var(--border-line)] shadow-[0_20px_60px_rgba(0,0,0,0.85)] flex flex-col z-50 overflow-hidden"
          >
            {/* Window Header */}
            <div className="px-5 py-4 border-b border-[var(--border-line)] bg-[#151328]/90 flex items-center justify-between text-white select-none">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#1E143B] border border-[#8B5CF6]/50 flex items-center justify-center text-[#C4B5FD] shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                  <Bot className="w-5 h-5 text-[#C4B5FD]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading font-semibold text-sm tracking-tight text-white">
                      Portfolio Assistant
                    </h3>
                    <span className="font-ui text-[10px] uppercase font-semibold text-[#C4B5FD] bg-[#8B5CF6]/20 border border-[#8B5CF6]/35 px-2 py-0.5 rounded-full">
                      AI
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-ui text-[var(--text-muted)] mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
                    <span>Grounded Knowledge Base</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={clearHistory}
                  title="Clear conversation"
                  aria-label="Clear conversation"
                  className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-[var(--text-muted)] hover:text-white transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Close assistant"
                  aria-label="Close assistant"
                  className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-[var(--text-muted)] hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-gradient-to-b from-[#0A0A12] via-[#0F0E1C] to-[#0A0A12] scrollbar-thin">
              {messages.map((msg) => {
                const isAssistant = msg.role === "assistant";

                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2.5 ${
                      isAssistant ? "justify-start" : "justify-end"
                    }`}
                  >
                    {isAssistant && (
                      <div className="w-7 h-7 rounded-lg bg-[#1E143B] border border-[#8B5CF6]/35 flex items-center justify-center text-[#C4B5FD] shrink-0 mt-0.5">
                        <Bot className="w-3.5 h-3.5" />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] p-3.5 rounded-2xl transition-all ${
                        isAssistant
                          ? "bg-[#151328] border border-[var(--border-line)] text-[#E2E0F0] rounded-tl-sm shadow-sm"
                          : "bg-[#8B5CF6] text-white rounded-tr-sm shadow-[0_4px_18px_rgba(139,92,246,0.35)]"
                      }`}
                    >
                      <FormattedMessage text={msg.text} />

                      {msg.isStreaming && (
                        <span className="inline-block w-1.5 h-3.5 bg-[#C4B5FD] ml-1 rounded-sm animate-pulse align-middle" />
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Starter Suggested Chips (When only initial greeting is present) */}
              {messages.length === 1 && (
                <div className="pt-2 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-ui text-[#C4B5FD] px-1 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
                    <span>Suggested Inquiries:</span>
                  </div>
                  <div className="grid grid-cols-1 gap-1.5">
                    {suggestedPrompts.map((prompt, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSend(prompt)}
                        className="text-left font-ui text-xs px-3.5 py-2.5 rounded-xl bg-[#151328] hover:bg-[#1E143B] border border-[var(--border-line)] hover:border-[#8B5CF6] text-[#C4B5FD] hover:text-white transition-all duration-200 flex items-center justify-between group"
                      >
                        <span>{prompt}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#8B5CF6] group-hover:translate-x-1 group-hover:text-white transition-all shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Generating Status Indicator */}
              {isGenerating &&
                messages[messages.length - 1]?.role === "assistant" &&
                !messages[messages.length - 1]?.text && (
                  <div className="flex items-center gap-2 text-xs text-[#C4B5FD] pl-9 py-1 font-ui">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-bounce [animation-delay:0.4s]" />
                    <span className="text-[11px] text-[var(--text-muted)] ml-1">
                      Thinking...
                    </span>
                  </div>
                )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer Bar */}
            <div className="p-3.5 bg-[#151328]/95 border-t border-[var(--border-line)]">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about skills, projects, RAG, experience..."
                  disabled={isGenerating}
                  className="flex-1 px-4 py-2.5 text-xs sm:text-[13px] font-ui rounded-full bg-[#0A0A12] border border-[var(--border-line)] text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={() => handleSend()}
                  disabled={isGenerating || !input.trim()}
                  aria-label="Send message"
                  className="w-9 h-9 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] disabled:bg-[#1E143B] disabled:opacity-40 text-white flex items-center justify-center transition-all duration-200 shadow-md shadow-[#8B5CF6]/30 shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Floating Action Button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Open portfolio AI assistant"
        className="fixed bottom-6 right-6 w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white border border-white/20 flex items-center justify-center z-40 transition-all focus:outline-none"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close-icon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-5 h-5 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat-icon"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative flex items-center justify-center"
            >
              <MessageSquare className="w-5 h-5 text-white" />
              {/* Soft Lavender Pulse Indicator */}
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#C4B5FD] border-2 border-[#0A0A12] animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
