import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

// Mock icons for WhatsApp and Telegram since we don't have react-icons
// eslint-disable-next-line react/prop-types
const LiaWhatsapp = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
  </svg>
);

// eslint-disable-next-line react/prop-types
const LiaTelegramPlane = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "usamafuward2001@gmail.com",
      link: "mailto:usamafuward2001@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+94 (76) 6260507",
      link: "tel:+94766260507",
    },
    {
      icon: LiaWhatsapp,
      title: "WhatsApp",
      value: "+94 (76) 6260507",
      link: "https://wa.me/94766260507",
    },
    {
      icon: LiaTelegramPlane,
      title: "Telegram",
      value: "+94 (76) 6260507",
      link: "https://t.me/+94766260507",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Colombo, Sri Lanka",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        className="mx-auto p-7 max-w-7xl"
      >
        <div className="text-center mb-16">
          <h1 className="text-[42px] md:text-5xl font-bold text-teal-600 dark:text-teal-400 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have a question or want to work together?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            className="space-y-8"
            transition={{
              type: "spring",
              stiffness: 300,
            }}
          >
            <div className="prose dark:prose-invert">
              <h2 className="text-3xl font-semibold mb-6 text-teal-600 dark:text-teal-400">
                Let&apos;s Connect
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4 relative group"
                >
                  <div className="relative flex w-12 h-12 rounded-full bg-teal-200 dark:bg-teal-900/60 items-center justify-center text-teal-600 dark:text-teal-400 shadow-xl dark:shadow-[#0c121d] overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-400/20 to-transparent"
                      animate={{ y: [-30, 30] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                    <info.icon className="w-6 h-6 relative z-10" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative group"
          >
            <motion.div
              className="relative overflow-hidden transition-all duration-300 border-2 border-teal-500/40 dark:border-teal-400/40 hover:border-teal-500/50 dark:hover:border-teal-400/50 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md p-8 rounded-[30px] rounded-tl-none rounded-br-none shadow-xl dark:shadow-[#0c121d] transform"
              animate={
                isHovered
                  ? {
                      boxShadow: [
                        "0 0 20px rgba(13,148,136,0.3)",
                      ],
                    }
                  : {
                      boxShadow: "0 0 0px rgba(13,148,136,0)",
                    }
              }
              transition={{
                duration: 1.5,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut",
              }}
            >
              {/* Border light effect */}
              <div className="absolute inset-0 rounded-[30px] rounded-tl-none rounded-br-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-[30px] rounded-tl-none rounded-br-none bg-gradient-to-r from-transparent via-teal-400/30 to-transparent blur-sm" />
              </div>
              
              {/* Animated background grid */}
              <div className="absolute inset-0 opacity-5 dark:opacity-10 rounded-[30px] rounded-tl-none rounded-br-none overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(13,148,136,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(13,148,136,0.3)_1px,transparent_1px)] bg-[size:20px_20px]" />
              </div>

              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden rounded-[30px] rounded-tl-none rounded-br-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-teal-400 rounded-full"
                    style={{
                      left: `${Math.random() * 50}%`,
                      top: `${Math.random() * 50}%`,
                    }}
                    animate={{
                      x: [Math.random() * 300, Math.random() * 300],
                      y: [Math.random() * 200, Math.random() * 200],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              {/* Scan line effect */}
              <motion.div
                className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-0 group-hover:opacity-100"
                animate={isHovered ? { y: [0, 550, 0] } : {}}
                transition={{ duration: 2.5, repeat: Infinity }}
              />

              {/* Corner elements */}
              <div className="absolute bottom-0 right-0 p-4">
                <div className="relative w-8 h-8">
                  <motion.div
                    className="absolute bottom-0 right-0 w-full h-0.5 bg-teal-400/60 group-hover:bg-teal-400"
                    animate={{ scaleX: [0, 1, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5,
                    }}
                  />
                  <motion.div
                    className="absolute bottom-0 right-0 w-0.5 h-full bg-teal-400/60 group-hover:bg-teal-400"
                    animate={{ scaleY: [0, 1, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1,
                    }}
                  />
                </div>
              </div>


              <div className="absolute top-0 left-0 p-4">
                <div className="relative w-8 h-8">
                  <motion.div
                    className="absolute top-0 left-0 w-full h-0.5 bg-teal-400/60 group-hover:bg-teal-400"
                    animate={{ scaleX: [0, 1, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5,
                    }}
                  />
                  <motion.div
                    className="absolute top-0 left-0 w-0.5 h-full bg-teal-400/60 group-hover:bg-teal-400"
                    animate={{ scaleY: [0, 1, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1,
                    }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 transition-all duration-300 border-2 border-gray-300 dark:border-gray-500 hover:border-teal-400 hover:dark:border-teal-400 text-gray-600 dark:text-gray-300 focus:outline-none focus:border-teal-500 rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 transition-all duration-300 border-2 border-gray-300 dark:border-gray-500 hover:border-teal-400 hover:dark:border-teal-400 text-gray-600 dark:text-gray-300 focus:outline-none focus:border-teal-500 rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 transition-all duration-300 border-2 border-gray-300 dark:border-gray-500 hover:border-teal-400 hover:dark:border-teal-400 text-gray-600 dark:text-gray-300 focus:outline-none focus:border-teal-500 rounded-md resize-none"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-md shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
