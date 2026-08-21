/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export const SkillCard = ({ title, percentage, icon }) => (
  <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      {icon}
    </div>
    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-cyan-600 to-teal-500"
      />
    </div>
    <span className="block mt-2 text-sm opacity-80">{percentage}%</span>
  </div>
);
