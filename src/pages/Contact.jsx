import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  Download,
  CheckCircle2,
  Copy,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import confetti from "canvas-confetti";
import { portfolioData } from "@/constants/portfolioData";

export default function Contact() {
  const { personalInfo } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // Anti-spam shield
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot check for bot scrapers
    if (formData.honeypot) {
      setSubmitted(true);
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebratory violet confetti
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.65 },
          colors: ["#8B5CF6", "#C4B5FD", "#7C3AED", "#FFFFFF"],
        });
      } catch (err) {
        // Fallback gracefully
      }
    }, 1000);
  };

  const contactChannels = [
    {
      icon: Mail,
      title: "Direct Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      actionLabel: "Send Email",
    },
    {
      icon: Phone,
      title: "Telephone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/[^0-9+]/g, "")}`,
      actionLabel: "Call",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Direct",
      value: "+94 76 6260507",
      href: "https://wa.me/94766260507",
      actionLabel: "WhatsApp",
    },
    {
      icon: Send,
      title: "Telegram",
      value: "@Usamafuward",
      href: "https://t.me/+94766260507",
      actionLabel: "Telegram",
    },
    {
      icon: MapPin,
      title: "Primary Location",
      value: personalInfo.location,
      href: null,
      actionLabel: "Western Province",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-14">
      {/* Page Header with Weight Contrast */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
          <span className="font-ui text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
            Inquiries &amp; Collaborations
          </span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
          Let&apos;s start a{" "}
          <strong className="font-semibold text-white">conversation</strong>
        </h1>

        <p className="font-ui text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-normal">
          Whether you want to discuss enterprise AI engineering, autonomous multi-agent pipelines, full-stack systems architecture,
          or engineering opportunities, reach out directly across channels or dispatch a message below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Communication Channels & Resumes */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <h2 className="font-ui text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
              Direct Contact Details
            </h2>
            <div className="space-y-3">
              {contactChannels.map((channel, i) => (
                <div
                  key={i}
                  className="k-card p-4 rounded-xl flex items-center justify-between gap-3 group hover:border-[#8B5CF6] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0A0A12] border border-[var(--border-line)] flex items-center justify-center text-[#C4B5FD] shrink-0">
                      <channel.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-[var(--text-muted)] font-ui">{channel.title}</div>
                      <div className="text-sm font-semibold text-white font-heading">{channel.value}</div>
                    </div>
                  </div>

                  {channel.href ? (
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-full text-xs font-ui font-medium text-white bg-[#8B5CF6] hover:bg-[#7C3AED] transition-all shrink-0 shadow-sm"
                    >
                      {channel.actionLabel}
                    </a>
                  ) : (
                    <span className="text-[11px] font-ui text-[var(--text-muted)] shrink-0">
                      {channel.actionLabel}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Copy Email Box */}
          <div className="k-card p-5 rounded-2xl bg-[#151328] border border-[var(--border-line)] flex items-center justify-between gap-4">
            <div>
              <div className="text-xs text-[var(--text-muted)] font-ui">Quick Copy Email</div>
              <div className="text-sm font-semibold text-white font-mono mt-0.5">{personalInfo.email}</div>
            </div>
            <button
              type="button"
              onClick={copyEmailToClipboard}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-ui font-medium bg-[#8B5CF6] hover:bg-[#7C3AED] text-white transition-all shadow-md shrink-0"
            >
              {copiedEmail ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Download Resumes Section */}
          <div className="k-card p-6 rounded-2xl bg-[#151328] border border-[var(--border-line)] space-y-4">
            <h3 className="font-ui text-xs font-semibold uppercase tracking-[0.14em] text-[#C4B5FD]">
              Download Official Resumes
            </h3>
            <div className="space-y-2.5">
              <a
                href="/SE_CV.pdf"
                download="Usama_Puward_Resume_SE.pdf"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#0A0A12] border border-[var(--border-line)] hover:border-[#8B5CF6] text-white transition-all group"
              >
                <div>
                  <div className="text-xs font-medium text-white group-hover:text-[#C4B5FD] transition-colors font-ui">
                    Software Engineering Resume
                  </div>
                  <div className="text-[11px] text-[var(--text-muted)] font-ui">PDF Format · Updated 2026</div>
                </div>
                <Download className="w-4 h-4 text-[#8B5CF6] group-hover:text-[#C4B5FD] transition-colors" />
              </a>

              <a
                href="/AI_ML_CV.pdf"
                download="Usama_Puward_Resume_ML.pdf"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#0A0A12] border border-[var(--border-line)] hover:border-[#8B5CF6] text-white transition-all group"
              >
                <div>
                  <div className="text-xs font-medium text-white group-hover:text-[#C4B5FD] transition-colors font-ui">
                    AI / ML Engineering Resume
                  </div>
                  <div className="text-[11px] text-[var(--text-muted)] font-ui">PDF Format · Updated 2026</div>
                </div>
                <Download className="w-4 h-4 text-[#8B5CF6] group-hover:text-[#C4B5FD] transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Message Form */}
        <div className="lg:col-span-7">
          <div className="k-card p-8 sm:p-10 rounded-2xl bg-[#151328] border border-[var(--border-line)] shadow-xl relative">
            <div className="space-y-2 mb-6">
              <span className="font-ui text-xs font-semibold uppercase tracking-[0.14em] text-[#C4B5FD]">
                Direct Dispatch Form
              </span>
              <h2 className="font-heading text-2xl font-semibold text-white tracking-tight">
                Send a Message
              </h2>
              <p className="font-ui text-xs text-[var(--text-muted)]">
                Messages route directly to Usama&apos;s personal inbox. You will receive a prompt reply.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-[#1E143B] border border-[#8B5CF6]/50 text-center space-y-4 font-ui"
              >
                <div className="w-14 h-14 rounded-full bg-[#8B5CF6]/30 border border-[#C4B5FD] text-[#C4B5FD] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-[#C4B5FD]" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">Message Dispatched!</h3>
                <p className="text-sm text-[#E2E0F0]/90 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. Your message has been safely received, and I will get back to
                  you promptly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
                  }}
                  className="px-6 py-2.5 rounded-full text-xs font-medium text-white bg-[#8B5CF6] hover:bg-[#7C3AED] transition-all shadow-md"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-ui">
                {/* Honeypot Anti-Spam Field (Hidden) */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-ui text-[var(--text-muted)] block">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0A12] border border-[var(--border-line)] text-white text-sm focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-ui text-[var(--text-muted)] block">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0A12] border border-[var(--border-line)] text-white text-sm focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-ui text-[var(--text-muted)] block">
                    Subject / Area of Interest
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="AI Multi-Agent Collaboration / Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0A12] border border-[var(--border-line)] text-white text-sm focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-ui text-[var(--text-muted)] block">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share details about your project or inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0A12] border border-[var(--border-line)] text-white text-sm focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-medium text-sm shadow-lg shadow-[#8B5CF6]/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Dispatch Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
