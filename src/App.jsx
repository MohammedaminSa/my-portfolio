import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Project from "./sections/Project";
import About from "./sections/About";
import Skills from "./sections/Skills";
import TechStack from "./sections/TechStack";
import Stats from "./sections/Stats";

function App() {
  return (
    <div className="bg-white dark:bg-black">
      <Navbar />
      <main>
        <Home />
        <Stats />
        <About />
        <TechStack />
        <Skills />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
