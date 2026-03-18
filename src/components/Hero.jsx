import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import { portfolioData } from "../data/portfolioData";

function Hero() {
  const { profile } = portfolioData;
  const MotionDiv = motion.div;

  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        pt: { xs: 8, md: 6 },
        pb: { xs: 8, md: 6 },
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
              gap: { xs: 5, lg: 6 },
              alignItems: "center",
            }}
          >
            <Box>
              <Chip
                icon={<Sparkles size={16} />}
                label={profile.availability}
                className="soft-chip"
                sx={{ mb: 3 }}
              />

              <Typography
                sx={{
                  color: "primary.main",
                  textTransform: "uppercase",
                  letterSpacing: "0.28em",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Frontend Developer Portfolio
              </Typography>

              <Typography variant="h1" sx={{ maxWidth: 820, mb: 2 }}>
                {profile.name}
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  maxWidth: 680,
                  color: "text.primary",
                  fontWeight: 500,
                  lineHeight: 1.35,
                  mb: 2.5,
                }}
              >
                {profile.headline}
              </Typography>

              <Typography
                sx={{
                  maxWidth: 690,
                  color: "text.secondary",
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                  mb: 4,
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
                >
                  Open Resume
                </Button>
              </Stack>

              <Stack direction="row" spacing={1.25} flexWrap="wrap" useFlexGap sx={{ mb: 4 }}>
                <Chip icon={<MapPin size={16} />} label={profile.location} className="soft-chip" />
                <Chip label={profile.role} className="soft-chip" />
              </Stack>

              <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
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
                      startIcon={<Icon size={18} />}
                      sx={{
                        color: "text.secondary",
                        px: 0,
                        minWidth: 0,
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
              <Box className="hero-visual-shell">
                <Box className="hero-image-frame">
                  <Box
                    component="img"
                    src={profile.profileImage}
                    alt={profile.name}
                    sx={{
                      width: "100%",
                      display: "block",
                      borderRadius: "28px",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                <Box className="floating-panel floating-panel--top">
                  <Typography sx={{ fontSize: "0.8rem", color: "text.secondary", mb: 0.75 }}>
                    Current Focus
                  </Typography>
                  <Typography variant="h6">React dashboards + polished UI systems</Typography>
                </Box>

                <Box className="floating-panel floating-panel--bottom">
                  <Typography sx={{ fontSize: "0.8rem", color: "text.secondary", mb: 1 }}>
                    Quick Snapshot
                  </Typography>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                      gap: 1.5,
                    }}
                  >
                    {profile.stats.map((item) => (
                      <Box key={item.label}>
                        <Typography variant="h5" sx={{ color: "primary.light", mb: 0.35 }}>
                          {item.value}
                        </Typography>
                        <Typography sx={{ color: "text.secondary", fontSize: "0.84rem" }}>
                          {item.label}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
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
