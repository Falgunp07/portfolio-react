import { motion } from "framer-motion";
import { Box, Container, Typography, Button, Stack, useTheme, Grid, Avatar } from "@mui/material";
import { GitHub, LinkedIn, Email, ArrowForward } from "@mui/icons-material";
import profilePhoto from "../assets/IMG_4301.JPG";

function Hero() {
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <Box
      id="hero"
      component="section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 12, md: 0 },
      }}
    >
      {/* Background Elements */}
      <Box className="blob blob-1" />
      <Box className="blob blob-2" />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={6} alignItems="center">
            {/* Left side - Content */}
            <Grid item xs={12} md={7}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.text.secondary,
                    mb: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    "&::before": {
                      content: '""',
                      width: "40px",
                      height: "2px",
                      background: theme.palette.secondary.main,
                    }
                  }}
                >
                  Hello, I'm
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "3rem", md: "5rem" },
                    background: "linear-gradient(135deg, #f8fafc 0%, #94a3b8 100%)",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: theme.palette.mode === "dark" ? "transparent" : theme.palette.text.primary,
                    mb: 1,
                    letterSpacing: "-2px",
                  }}
                >
                  Falgun Patel
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "1.5rem", md: "2.5rem" },
                    fontWeight: 600,
                    mb: 3,
                    mt: 0.6, // Added top spacing
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: "text",
                    textFillColor: "transparent",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Frontend Developer
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.1rem",
                    color: theme.palette.text.secondary,
                    maxWidth: "600px",
                    mb: 5,
                    lineHeight: 1.8,
                  }}
                >
                  Frontend Developer based in Pune, India. I specialize in building responsive
                  and scalable web applications using React, JavaScript, and Tailwind CSS.
                  Passionate about creating seamless user experiences.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    href="#projects"
                    sx={{ px: 4, py: 1.5 }}
                  >
                    View My Work
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    href="#contact"
                    sx={{ px: 4, py: 1.5 }}
                  >
                    Contact Me
                  </Button>
                </Stack>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Stack direction="row" spacing={3} sx={{ mt: 6 }}>
                  <Box component="a" href="https://github.com/Falgunp07" target="_blank"
                    sx={{ color: theme.palette.text.secondary, transition: "0.3s", "&:hover": { color: theme.palette.primary.main, transform: "translateY(-3px)" } }}>
                    <GitHub fontSize="large" />
                  </Box>
                  <Box component="a" href="https://linkedin.com/in/falgun-patel-7386701b0" target="_blank"
                    sx={{ color: theme.palette.text.secondary, transition: "0.3s", "&:hover": { color: theme.palette.primary.main, transform: "translateY(-3px)" } }}>
                    <LinkedIn fontSize="large" />
                  </Box>
                  <Box component="a" href="mailto:falgunpatel071@gmail.com"
                    sx={{ color: theme.palette.text.secondary, transition: "0.3s", "&:hover": { color: theme.palette.primary.main, transform: "translateY(-3px)" } }}>
                    <Email fontSize="large" />
                  </Box>
                </Stack>
              </motion.div>
            </Grid>

            {/* Right side - Photo */}
            <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
              >
                <Box
                  className="glass-card"
                  sx={{
                    p: 2,
                    borderRadius: "30px",
                    // Removed rotation and tilt on hover per user request
                    "&:hover": {
                      transform: "scale(1.02)",
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={profilePhoto}
                    alt="Falgun Patel"
                    sx={{
                      width: "100%",
                      maxWidth: "350px",
                      borderRadius: "20px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Hero;
