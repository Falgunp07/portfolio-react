import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ThemeToggle from "./ThemeToggle";

function Navbar({ isDark, toggleTheme }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavClick = (href) => {
    setDrawerOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <AppBar
        component="nav"
        position="fixed"
        sx={{
          background: scrolled
            ? theme.palette.mode === "dark"
              ? "rgba(15, 23, 42, 0.8)"
              : "rgba(255, 255, 255, 0.8)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
          transition: "all 0.3s ease-in-out",
          width: scrolled ? "85%" : "100%",
          left: "50%",
          transform: "translateX(-50%)",
          top: scrolled ? "15px" : "0",
          borderRadius: scrolled ? "50px" : "0",
          border: scrolled ? `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}` : "none",
          padding: 0,
        }}
      >
        <Container maxWidth="xl" sx={{ padding: "0 !important" }}>
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
              minHeight: scrolled ? "45px !important" : "80px",
              height: scrolled ? "45px" : "auto",
              transition: "all 0.3s",
              paddingY: 0
            }}
          >
            {/* Logo */}
            <Box
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              sx={{
                fontSize: "1.8rem",
                fontWeight: 800,
                fontFamily: '"Outfit", sans-serif',
                cursor: "pointer",
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              &lt;FP /&gt;
            </Box>

            {/* Desktop Nav */}
            {!isMobile && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    sx={{
                      color: theme.palette.text.primary,
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      px: 2,
                      "&:hover": {
                        color: theme.palette.primary.main,
                        background: "rgba(139, 92, 246, 0.1)",
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                ))}

                <Box sx={{ ml: 2, pl: 2, borderLeft: `1px solid ${theme.palette.divider}` }}>
                  <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
                </Box>
              </Box>
            )}

            {/* Mobile Menu Toggle */}
            {isMobile && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ ml: 1, color: theme.palette.primary.main }}
                >
                  {drawerOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "100%",
            height: "100%",
            background: theme.palette.background.default,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ position: "absolute", top: 20, right: 20, color: theme.palette.text.primary }}
        >
          <CloseIcon fontSize="large" />
        </IconButton>

        <List sx={{ width: "100%", textAlign: "center" }}>
          {navLinks.map((item) => (
            <ListItem key={item.label} disablePadding sx={{ justifyContent: "center", my: 2 }}>
              <ListItemButton
                onClick={() => handleNavClick(item.href)}
                sx={{
                  textAlign: "center",
                  justifyContent: "center",
                  "&:hover": { background: "transparent" },
                }}
              >
                <Box
                  sx={{
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                    "&:hover": { color: theme.palette.primary.main },
                    transition: "color 0.3s",
                  }}
                >
                  {item.label}
                </Box>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
