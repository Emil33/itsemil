import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 scroll-smooth min-h-screen transition-colors duration-500">
      {/* Animated background gradient blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <Navbar />

      <main className="relative z-10 max-w-5xl mx-auto px-4">
        <section id="hero" className="min-h-screen flex items-center">
          <Hero />
        </section>

        <section id="about" className="py-24">
          <About />
        </section>

        <section id="projects" className="py-24">
          <Projects />
        </section>

        <section id="skills" className="py-24">
          <Skills />
        </section>

        <section id="contact" className="py-24">
          <Contact />
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;