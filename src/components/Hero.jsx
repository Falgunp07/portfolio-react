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
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        position: "relative",
        pt: { xs: 5, md: 6 },
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
              gap: { xs: 5, lg: 6 },
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
                  "& .MuiChip-label": {
                    display: "block",
                    whiteSpace: "normal",
                    py: 1,
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
                Frontend Developer Portfolio
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  maxWidth: 820,
                  mb: 1.5,
                  fontSize: { xs: "2.75rem", sm: "3.7rem", md: undefined },
                  lineHeight: { xs: 1.04, sm: 1.02 },
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
                  fontSize: { xs: "1.15rem", sm: "1.6rem", md: undefined },
                  mb: 2,
                }}
              >
                {profile.headline}
              </Typography>

              <Typography
                sx={{
                  maxWidth: 690,
                  color: "text.secondary",
                  fontSize: { xs: "0.98rem", sm: "1.05rem" },
                  lineHeight: { xs: 1.75, sm: 1.9 },
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
                direction={{ xs: "column", sm: "row" }}
                spacing={1.2}
                flexWrap="wrap"
                useFlexGap
                alignItems={{ xs: "flex-start", sm: "center" }}
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
                      startIcon={<Icon size={18} />}
                      sx={{
                        color: "text.secondary",
                        px: 0,
                        minWidth: 0,
                        justifyContent: "flex-start",
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
              <Box className="hero-visual-shell" sx={{ mt: { xs: 0.5, md: 0 } }}>
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
                      gridTemplateColumns: { xs: "1fr", sm: "repeat(3, minmax(0, 1fr))" },
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
