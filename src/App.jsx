import { useEffect, useState } from "react";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";


function App() {
  const [isDark, setIsDark] = useState(false);

  // load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
    }
  }, []);

  // apply theme to body and save
  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <>
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      <Header />
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Education/>
      <Contact/>
      <BackToTop/>
    </>
  );
}

export default App;
