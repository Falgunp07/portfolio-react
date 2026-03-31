import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import { portfolioData } from "../data/portfolioData";

function Hero() {
  const { profile } = portfolioData;
  const MotionDiv = motion.div;
  const MotionSpan = motion.span;
  const dynamicWords = profile.headlineDynamicWords ?? ["sharp", "scalable", "production ready"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 2100);

    return () => clearInterval(interval);
  }, [dynamicWords.length]);

  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        position: "relative",
        pt: { xs: 2.5, md: 3 },
        pb: { xs: 6, md: 6 },
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        <MotionDiv
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "1.12fr 0.88fr" },
              gap: { xs: 3.2, lg: 6 },
              alignItems: "center",
            }}
          >
            <Box>
              <Chip
                icon={<Sparkles size={16} />}
                label={profile.availability}
                className="soft-chip"
                sx={{
                  mb: 2.5,
                  maxWidth: { xs: "100%", sm: "fit-content" },
                  height: "auto",
                  alignItems: "flex-start",
                  "& .MuiChip-icon": {
                    fontSize: { xs: "0.95rem", sm: "1rem" },
                  },
                  "& .MuiChip-label": {
                    display: "block",
                    whiteSpace: { xs: "normal", sm: "nowrap" },
                    py: { xs: 0.65, sm: 1 },
                    px: { xs: 1.15, sm: 1.5 },
                    fontSize: { xs: "0.75rem", sm: "0.88rem" },
                    lineHeight: 1.45,
                  },
                }}
              />

              <Typography
                sx={{
                  color: "primary.main",
                  textTransform: "uppercase",
                  letterSpacing: { xs: "0.16em", sm: "0.28em" },
                  fontSize: { xs: "0.72rem", sm: "0.85rem" },
                  fontWeight: 700,
                  mb: 1.5,
                }}
              >
                Web Developer Portfolio
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  maxWidth: 820,
                  mb: 1.5,
                  fontSize: { xs: "2.2rem", sm: "3.25rem", md: undefined },
                  lineHeight: { xs: 1.08, sm: 1.02 },
                }}
              >
                {profile.name}
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  maxWidth: 680,
                  color: "text.primary",
                  fontWeight: 500,
                  lineHeight: { xs: 1.2, sm: 1.35 },
                  fontSize: { xs: "1rem", sm: "1.5rem", md: undefined },
                  mb: 2,
                }}
              >
                {profile.headlineBase ?? "Building polished web experiences that feel"}
                <Box component="span" sx={{ display: "block", mt: 0.45, minHeight: { xs: "1.45em", sm: "1.3em" } }}>
                  <AnimatePresence mode="wait">
                    <Box
                      key={dynamicWords[wordIndex]}
                      component={MotionSpan}
                      initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      sx={{
                        display: "inline-block",
                        whiteSpace: { xs: "normal", sm: "nowrap" },
                        fontSize: { xs: "1.12rem", sm: "1.75rem", md: "2.05rem" },
                        fontWeight: 700,
                        lineHeight: 1.05,
                        background: "linear-gradient(120deg, #b973ff 0%, #7d5fff 45%, #3ae7ff 100%)",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {dynamicWords[wordIndex]}
                    </Box>
                  </AnimatePresence>
                  .
                </Box>
              </Typography>

              <Typography
                sx={{
                  maxWidth: 690,
                  color: "text.secondary",
                  fontSize: { xs: "0.92rem", sm: "1.05rem" },
                  lineHeight: { xs: 1.65, sm: 1.9 },
                  mb: 3,
                }}
              >
                {profile.intro}
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 3 }}>
                <Button
                  variant="contained"
                  size="large"
                  href="#projects"
                  endIcon={<ArrowRight size={18} />}
                  sx={{ width: { xs: "100%", sm: "auto" } }}
                >
                  Explore Projects
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  startIcon={<Download size={18} />}
                  sx={{ width: { xs: "100%", sm: "auto" } }}
                >
                  Open Resume
                </Button>
              </Stack>

              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                useFlexGap
                alignItems="flex-start"
                sx={{ mb: 3 }}
              >
                <Chip icon={<MapPin size={16} />} label={profile.location} className="soft-chip" />
                <Chip label={profile.role} className="soft-chip" />
              </Stack>

              <Stack
                direction="row"
                spacing={0.55}
                flexWrap="wrap"
                useFlexGap
                alignItems="center"
              >
                {profile.socialLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <Button
                      key={link.label}
                      component="a"
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      variant="text"
                      startIcon={<Icon size={16} />}
                      size="small"
                      sx={{
                        color: "text.secondary",
                        px: 0.15,
                        py: 0.1,
                        fontSize: { xs: "0.77rem", sm: "0.92rem" },
                        fontWeight: 500,
                        minWidth: 0,
                        justifyContent: "flex-start",
                        "& .MuiButton-startIcon": {
                          marginRight: 0.6,
                        },
                        "&:hover": {
                          color: "primary.main",
                          background: "transparent",
                        },
                      }}
                    >
                      {link.label}
                    </Button>
                  );
                })}
              </Stack>
            </Box>

            <MotionDiv
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              <Box
                className="hero-visual-shell"
                sx={{
                  mt: { xs: 0.5, md: 0 },
                  width: { xs: "100%", md: "100%", lg: "100%" },
                  ml: "auto",
                  mr: "auto",
                }}
              >
                <Box className="hero-image-frame">
                  <Box
                    component="img"
                    src={profile.profileImage}
                    alt={profile.name}
                    sx={{
                      width: "100%",
                      display: "block",
                      borderRadius: "28px",
                      maxHeight: { xs: 390, md: 676 },
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>
            </MotionDiv>
          </Box>
        </MotionDiv>
      </Container>
    </Box>
  );
}

export default Hero;
