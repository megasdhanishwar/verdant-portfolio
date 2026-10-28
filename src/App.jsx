import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Splash from "./components/Splash.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <AnimatePresence>{loading && <Splash />}</AnimatePresence>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
