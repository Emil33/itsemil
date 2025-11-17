import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      className="max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
    <div className="flex flex-col items-center justify-center text-center min-h-screen">
      <h2 className="text-4xl sm:text-5xl font-bold mb-4">Hi, I’m Emil 👋</h2>
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
        Front-end focused software engineer with 5+ years of experience building responsive, high-performing web apps.
        Skilled in SAPUI5 and React, currently transitioning into full-stack development.
      </p>
      <a
        href="#projects"
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
      >
        View My Projects
      </a>
    </div>
    </motion.div>
  );
}
