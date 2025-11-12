import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 scroll-smooth min-h-screen transition-colors duration-300">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4">
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
    </div>
  );
}

export default App;