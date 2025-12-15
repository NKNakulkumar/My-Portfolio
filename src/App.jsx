import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { Navbar } from "./components/header";
import Home from "./components/Home";
import Projects from "./components/projects";
import Skills from "./components/skills";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
