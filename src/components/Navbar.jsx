import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import {
  Box,
  Button,
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
  const navRef = useRef(null);
  const manualActiveLockUntil = useRef(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { scrollYProgress } = useScroll();
  const navLinks = useMemo(() => portfolioData.navigation, []);
  const MotionDiv = motion.div;
  const titleGapBefore = 20;

  const getNavOffset = () => {
    const navHeight = navRef.current?.getBoundingClientRect().height ?? (isMobile ? 72 : 84);
    return navHeight + titleGapBefore;
  };

  const getSectionTop = (href) => {
    const section = document.querySelector(href);
    if (!section) {
      return null;
    }

    const headingBlock = section.firstElementChild;
    const targetElement = headingBlock || section;
    return targetElement.getBoundingClientRect().top + window.scrollY;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
      if (Date.now() < manualActiveLockUntil.current) {
        return;
      }

      const navOffset = getNavOffset();
      const sections = navLinks
        .map((link) => {
          const top = getSectionTop(link.href);
          if (top === null) {
            return null;
          }

          return {
            href: link.href,
            top,
          };
        })
        .filter(Boolean);

      if (!sections.length) {
        return;
      }

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - (navOffset + 24);

      if (nearBottom) {
        setActiveHref(sections[sections.length - 1].href);
        return;
      }

      const currentAnchor = window.scrollY + navOffset;
      let matchedHref = sections[0].href;

      for (let index = 0; index < sections.length; index += 1) {
        const current = sections[index];
        const next = sections[index + 1];
        const inRange = currentAnchor >= current.top && (!next || currentAnchor < next.top);

        if (inRange) {
          matchedHref = current.href;
          break;
        }
      }

      setActiveHref(matchedHref);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks, isMobile]);

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleNavClick = (href) => {
    setDrawerOpen(false);
    setActiveHref(href);
    manualActiveLockUntil.current = Date.now() + 1200;
    const sectionTop = getSectionTop(href);

    if (sectionTop !== null) {
      const offsetTop = sectionTop - getNavOffset();
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Box
        ref={navRef}
        component="nav"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100vw",
          zIndex: 20,
          m: 0,
          p: 0,
          borderRadius: 0,
          borderBottom: "1px solid rgba(129, 173, 255, 0.2)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.62) 100%)",
          backdropFilter: scrolled ? "blur(24px) saturate(155%)" : "blur(16px) saturate(135%)",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(155%)" : "blur(16px) saturate(135%)",
          boxShadow: scrolled ? "0 12px 30px rgba(15, 23, 42, 0.12)" : "none",
          transition: "box-shadow 0.25s ease",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            width: "100%",
            px: { xs: 1.1, md: 2.2 },
            py: { xs: 0.9, md: 1.05 },
            borderRadius: 0,
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
                  color: "#0d1322",
                  background: "linear-gradient(135deg, #5cc8ff, #ff6fae)",
                  boxShadow: "0 10px 24px rgba(92, 200, 255, 0.25)",
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
                  Web Developer
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
                      color: activeHref === link.href ? "#0d1322" : "text.primary",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      px: 2.1,
                      background:
                        activeHref === link.href
                          ? "linear-gradient(135deg, #5cc8ff, #9fe2ff)"
                          : "transparent",
                      "&:hover": {
                        background:
                          activeHref === link.href
                            ? "linear-gradient(135deg, #5cc8ff, #9fe2ff)"
                            : "rgba(37,99,235,0.06)",
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
                  border: "1px solid rgba(37,99,235,0.16)",
                  bgcolor: "rgba(37,99,235,0.06)",
                }}
              >
                <Menu size={20} />
              </IconButton>
            )}
        </Box>

        <MotionDiv
          style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
          className="scroll-progress"
        />
      </Box>
      <Box sx={{ height: { xs: "72px", md: "84px" } }} />

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
              "radial-gradient(circle at top left, rgba(37, 99, 235, 0.12), transparent 30%), radial-gradient(circle at bottom right, rgba(236, 72, 153, 0.1), transparent 32%)",
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
