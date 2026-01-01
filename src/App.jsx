import { useEffect, useState } from "react";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";

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
    </>
  );
}

export default App;
