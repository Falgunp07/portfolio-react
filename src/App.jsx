import { useEffect, useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, Box, Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // Create MUI theme
  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
      primary: {
        main: "#8b5cf6", // Violet 500
        light: "#a78bfa",
        dark: "#7c3aed",
      },
      secondary: {
        main: "#ec4899", // Pink 500
        light: "#f472b6",
        dark: "#db2777",
      },
      background: {
        default: isDark ? "#020617" : "#f8fafc", // Darker Slate (almost black) / Slate 50
        paper: isDark ? "#0f172a" : "#ffffff", // Slate 900 / White
      },
      text: {
        primary: isDark ? "#f8fafc" : "#1e293b",
        secondary: isDark ? "#cbd5e1" : "#64748b",
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontFamily: '"Outfit", sans-serif',
        fontSize: "3.5rem",
        fontWeight: 800,
        letterSpacing: "-1px",
        lineHeight: 1.1,
      },
      h2: {
        fontFamily: '"Outfit", sans-serif',
        fontSize: "2.5rem",
        fontWeight: 700,
        letterSpacing: "-0.5px",
        lineHeight: 1.2,
      },
      h3: {
        fontFamily: '"Outfit", sans-serif',
        fontSize: "1.75rem",
        fontWeight: 600,
      },
      h4: {
        fontFamily: '"Outfit", sans-serif',
        fontSize: "1.5rem",
        fontWeight: 600,
      },
      button: {
        fontFamily: '"Outfit", sans-serif',
        fontWeight: 600,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: "50px", // Pill shape
            padding: "10px 24px",
            fontSize: "1rem",
            boxShadow: "none",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 10px 20px -10px rgba(139, 92, 246, 0.5)",
            },
          },
          contained: {
            background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
            "&:hover": {
              background: "linear-gradient(135deg, #7c3aed 0%, #db2777 100%)",
            },
          },
          outlined: {
            borderWidth: "2px",
            "&:hover": {
              borderWidth: "2px",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: "16px",
            backgroundImage: "none",
            background: isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(255, 255, 255, 0.6)",
            backdropFilter: "blur(16px)",
            border: "1px solid",
            borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.05)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: isDark
                ? "0 20px 40px -20px rgba(0, 0, 0, 0.5)"
                : "0 20px 40px -20px rgba(0, 0, 0, 0.1)",
              borderColor: "#8b5cf6",
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingTop: "24px",
            paddingBottom: "24px",
          },
        },
      },
    },
  });

  // Save theme preference
  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <Box sx={{ position: "relative", flexGrow: 1 }}>
          <Hero />
          <Container maxWidth="lg" sx={{ pb: 8 }}>
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </Container>
        </Box>
        <Footer />
        <BackToTop />
      </Box>
    </ThemeProvider>
  );
}

export default App;
