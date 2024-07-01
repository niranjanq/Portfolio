import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <section id="home">
          <Home />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
