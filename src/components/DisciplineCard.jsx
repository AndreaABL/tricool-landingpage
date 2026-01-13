import { motion } from "framer-motion";

export function DisciplineCard({
  title,
  description,
  items,
  icon,
  gradient,
  border,
  glow,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -12, scale: 1.02 }}
      className={`
        relative rounded-2xl p-5 overflow-hidden
        bg-[#111b3f]/70 backdrop-blur-xl
        border ${border}
        shadow-xl
        max-w-sm w-full mx-auto
      `}
    >
      {/* Animated glow */}
      <motion.div
        className={`absolute inset-0 ${glow} opacity-30`}
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: 8, scale: 1.1 }}
          className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-6 bg-gradient-to-br ${gradient}`}
        >
          {icon}
        </motion.div>

        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>

        <ul className="space-y-3">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-sm text-gray-200"
            >
              <span>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
