// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function App(){
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App