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
      mode: "dark",
      primary: {
        main: "#3ae7ff",
        light: "#89f3ff",
        dark: "#00bdd7",
      },
      secondary: {
        main: "#ff7a59",
        light: "#ffb39f",
        dark: "#ef5f3b",
      },
      background: {
        default: "#07111f",
        paper: "rgba(12, 23, 42, 0.88)",
      },
      text: {
        primary: "#f6fbff",
        secondary: "#9fb4c8",
      },
      divider: "rgba(255, 255, 255, 0.08)",
    },
    typography: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      h1: {
        fontFamily: '"Space Grotesk", sans-serif',
        fontSize: "clamp(3.2rem, 8vw, 6.3rem)",
        fontWeight: 700,
        letterSpacing: "-0.06em",
        lineHeight: 1.02,
      },
      h2: {
        fontFamily: '"Space Grotesk", sans-serif',
        fontSize: "clamp(2rem, 4vw, 3.4rem)",
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
            backgroundColor: "#07111f",
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
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 18px 35px rgba(0, 0, 0, 0.22)",
            },
          },
          contained: {
            background: "linear-gradient(135deg, #3ae7ff 0%, #1f88ff 100%)",
            color: "#06101d",
            "&:hover": {
              background: "linear-gradient(135deg, #5af0ff 0%, #3b97ff 100%)",
            },
          },
          outlined: {
            borderWidth: "1px",
            borderColor: "rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.02)",
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
            paddingLeft: "24px",
            paddingRight: "24px",
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
