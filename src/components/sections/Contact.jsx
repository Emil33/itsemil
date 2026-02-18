import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className="max-w-3xl mx-auto text-center px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h3 className="text-2xl sm:text-3xl font-semibold mb-6">Get In Touch</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Let's connect! I'm always open to discussing new projects, collaborations, or opportunities
        in front-end and full-stack development.
      </p>
      <a
        href="mailto:ejulenyi@gmail.com"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
      >
        Email Me
      </a>
      <div className="flex justify-center gap-6 mt-6">
        <a href="https://linkedin.com/in/emil-julenyi-a22b3489" target="_blank" rel="noreferrer" className="hover:text-blue-500">
          LinkedIn
        </a>
        <a href="https://github.com/Emil33" target="_blank" rel="noreferrer" className="hover:text-blue-500">
          GitHub
        </a>
      </div>
    </motion.div>
  );
}
