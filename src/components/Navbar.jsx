import { useEffect, useMemo, useState } from "react";
import { motion, useScroll } from "framer-motion";
import {
  Box,
  Button,
  Container,
  Dialog,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Download, Menu, X } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#about");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { scrollYProgress } = useScroll();
  const navLinks = useMemo(() => portfolioData.navigation, []);
  const MotionDiv = motion.div;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);

      const visibleSection = navLinks
        .map((link) => {
          const element = document.querySelector(link.href);
          if (!element) {
            return null;
          }

          return {
            href: link.href,
            top: element.getBoundingClientRect().top,
          };
        })
        .filter(Boolean)
        .reverse()
        .find((section) => section.top <= 140);

      if (visibleSection) {
        setActiveHref(visibleSection.href);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleNavClick = (href) => {
    setDrawerOpen(false);
    const element = document.querySelector(href);

    if (element) {
      const offsetTop = element.offsetTop - 96;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Box
        component="nav"
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          pt: { xs: 1.25, md: 2 },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
              px: { xs: 1.25, md: 2.5 },
              py: { xs: 1.1, md: 1.5 },
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.1)",
              background: scrolled ? "rgba(8, 18, 32, 0.84)" : "rgba(8, 18, 32, 0.55)",
              backdropFilter: "blur(18px)",
              boxShadow: scrolled ? "0 18px 45px rgba(0, 0, 0, 0.24)" : "none",
              transition: "all 0.3s ease",
            }}
          >
            <Box
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              sx={{
                fontSize: { xs: "1rem", sm: "1.1rem" },
                fontWeight: 700,
                fontFamily: '"Space Grotesk", sans-serif',
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: { xs: 1, sm: 1.2 },
                minWidth: 0,
              }}
            >
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  "@media (max-width:600px)": {
                    width: 34,
                    height: 34,
                  },
                  borderRadius: "14px",
                  display: "grid",
                  placeItems: "center",
                  color: "#06101d",
                  background: "linear-gradient(135deg, #3ae7ff, #ff7a59)",
                  boxShadow: "0 10px 24px rgba(58, 231, 255, 0.25)",
                }}
              >
                FP
              </Box>
              <Box sx={{ minWidth: 0 }}>
                <Box sx={{ color: "text.primary", whiteSpace: "nowrap" }}>Falgun Patel</Box>
                <Box
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.76rem",
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  Frontend Developer
                </Box>
              </Box>
            </Box>

            {!isMobile ? (
              <Stack direction="row" spacing={0.75} alignItems="center">
                {navLinks.map((link) => (
                  <Button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    sx={{
                      color: activeHref === link.href ? "#06101d" : "text.primary",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      px: 2.1,
                      background:
                        activeHref === link.href
                          ? "linear-gradient(135deg, #3ae7ff, #8bf7ff)"
                          : "transparent",
                      "&:hover": {
                        background:
                          activeHref === link.href
                            ? "linear-gradient(135deg, #3ae7ff, #8bf7ff)"
                            : "rgba(255,255,255,0.05)",
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                ))}

                <Button
                  component="a"
                  href={portfolioData.profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="outlined"
                  startIcon={<Download size={16} />}
                  sx={{ ml: 1 }}
                >
                  Resume
                </Button>
              </Stack>
            ) : (
              <IconButton
                aria-label="Open navigation"
                onClick={handleDrawerToggle}
                sx={{
                  color: "primary.main",
                  border: "1px solid rgba(255,255,255,0.12)",
                  bgcolor: "rgba(255,255,255,0.02)",
                }}
              >
                <Menu size={20} />
              </IconButton>
            )}
          </Box>
        </Container>

        <MotionDiv
          style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
          className="scroll-progress"
        />
      </Box>

      <Dialog fullScreen open={drawerOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{
            minHeight: "100vh",
            bgcolor: "background.default",
            px: 3,
            py: 3,
            display: "flex",
            flexDirection: "column",
            backgroundImage:
              "radial-gradient(circle at top left, rgba(58, 231, 255, 0.16), transparent 28%), radial-gradient(circle at bottom right, rgba(255, 122, 89, 0.14), transparent 30%)",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={handleDrawerToggle} sx={{ color: "text.primary" }}>
              <X size={24} />
            </IconButton>
          </Box>

          <Stack spacing={2.2} sx={{ flexGrow: 1, justifyContent: "center" }}>
            {navLinks.map((item) => (
              <Button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                sx={{
                  justifyContent: "flex-start",
                  fontSize: { xs: "1.3rem", sm: "1.6rem" },
                  fontWeight: 700,
                  color: "text.primary",
                  px: 0,
                  py: 1,
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          <Button
            component="a"
            href={portfolioData.profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            variant="contained"
            startIcon={<Download size={16} />}
            sx={{ alignSelf: "flex-start" }}
          >
            View Resume
          </Button>
        </Box>
      </Dialog>
    </>
  );
}

export default Navbar;
