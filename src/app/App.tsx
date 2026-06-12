import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Certificates } from "./components/Certificates";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0a0f1e" }}>
      <Navbar />
      <main className="pt-14">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <footer className="bg-[#0a0f1e] border-t border-slate-800/60 py-6 text-center text-slate-600" style={{ fontSize: "0.8rem" }}>
        © 2026 Jed Angelo O. Manubag — Built with React & Tailwind CSS
      </footer>
    </div>
  );
}
