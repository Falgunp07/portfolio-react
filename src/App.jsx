import { Suspense, lazy } from "react";
import { ThemeProvider, createTheme, CssBaseline, Box, Container, Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

const Certificates = lazy(() => import("./components/Certificates"));

function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#2563eb",
        light: "#60a5fa",
        dark: "#1d4ed8",
      },
      secondary: {
        main: "#ec4899",
        light: "#f472b6",
        dark: "#db2777",
      },
      background: {
        default: "#f6f8fc",
        paper: "rgba(255, 255, 255, 0.9)",
      },
      text: {
        primary: "#0f172a",
        secondary: "#475569",
      },
      divider: "rgba(15, 23, 42, 0.12)",
    },
    typography: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      h1: {
        fontFamily: '"Space Grotesk", sans-serif',
        fontSize: "clamp(2.5rem, 14vw, 6.3rem)",
        fontWeight: 700,
        letterSpacing: "-0.06em",
        lineHeight: 1.02,
      },
      h2: {
        fontFamily: '"Space Grotesk", sans-serif',
        fontSize: "clamp(1.8rem, 7vw, 3.4rem)",
        fontWeight: 700,
        letterSpacing: "-0.05em",
        lineHeight: 1.05,
      },
      h3: {
        fontFamily: '"Space Grotesk", sans-serif',
        fontWeight: 700,
        letterSpacing: "-0.04em",
      },
      h4: {
        fontFamily: '"Space Grotesk", sans-serif',
        fontWeight: 600,
      },
      h5: {
        fontFamily: '"Space Grotesk", sans-serif',
        fontWeight: 600,
      },
      button: {
        fontFamily: '"Space Grotesk", sans-serif',
        fontWeight: 600,
        letterSpacing: "0.01em",
      },
    },
    shape: {
      borderRadius: 24,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: "#f6f8fc",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: 999,
            padding: "12px 22px",
            boxShadow: "none",
            transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
            "@media (max-width:600px)": {
              padding: "10px 16px",
              fontSize: "0.92rem",
            },
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 18px 35px rgba(0, 0, 0, 0.22)",
            },
          },
          contained: {
            background: "linear-gradient(135deg, #2563eb 0%, #ec4899 100%)",
            color: "#ffffff",
            "&:hover": {
              background: "linear-gradient(135deg, #3b82f6 0%, #f472b6 100%)",
            },
          },
          outlined: {
            borderWidth: "1px",
            borderColor: "rgba(37,99,235,0.2)",
            background: "rgba(37,99,235,0.04)",
            "&:hover": {
              borderWidth: "1px",
            },
          },
          text: {
            "&:hover": {
              boxShadow: "none",
            },
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingLeft: "16px",
            paddingRight: "16px",
            "@media (min-width:600px)": {
              paddingLeft: "24px",
              paddingRight: "24px",
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          icon: {
            color: "inherit",
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            backgroundImage: "none",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="app-shell">
        <Box className="ambient ambient-cyan" />
        <Box className="ambient ambient-orange" />
        <Box className="grid-overlay" />
        <Navbar />
        <Box sx={{ position: "relative", flexGrow: 1, zIndex: 1 }}>
          <Hero />
          <Container maxWidth="xl" sx={{ pb: { xs: 8, md: 10 } }}>
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Suspense
              fallback={
                <Box
                  className="premium-card"
                  sx={{ p: 4, py: 6, textAlign: "center", my: { xs: 8, md: 12 } }}
                >
                  <Typography variant="h5" sx={{ mb: 1 }}>
                    Loading certificates...
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    Preparing PDF previews and full certificate viewer.
                  </Typography>
                </Box>
              }
            >
              <Certificates />
            </Suspense>
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
