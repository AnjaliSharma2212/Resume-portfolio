import About from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GitHubStats from "./components/GithubStats";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

import StarsBackground from "./components/StarsBackground";
import TechStack from "./components/TechStacks";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <StarsBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <GitHubStats />
        <Contact />

        <Footer />
      </div>
    </div>
  );
}
