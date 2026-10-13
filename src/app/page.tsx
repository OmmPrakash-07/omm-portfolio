import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import GitHubActivity from "../components/GitHubActivity";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "../components/TechnologySolarSystem.css";

export default function Home() {
  return (
    <main id="home" className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <GitHubActivity />
      <Contact />
      <Footer />
    </main>
  );
}