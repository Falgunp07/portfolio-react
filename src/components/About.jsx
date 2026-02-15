import Reveal from "./Reveal";
import { Box, Typography, useTheme, Grid, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

function About() {
  const theme = useTheme();

  return (
    <Reveal>
      <Box
        id="about"
        className="section-padding"
        sx={{ scrollMarginTop: "100px" }}
      >
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={8}>
            <Box
              className="glass-card"
              sx={{
                p: 4,
                borderRadius: "24px",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "4px",
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                }
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  mb: 3,
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  fontWeight: 700,
                }}
              >
                About <span className="text-gradient">Me</span>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  color: theme.palette.text.secondary,
                }}
              >
                I am a <strong style={{ color: theme.palette.secondary.main }}>Frontend Developer</strong> currently pursuing an M.Sc. in Computer Science at MIT World Peace University, Pune.
                I have hands-on experience developing responsive and scalable web applications using <strong style={{ color: theme.palette.primary.main }}>React, JavaScript, and Tailwind CSS</strong>.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  color: theme.palette.text.secondary,
                }}
              >
                My expertise includes REST API integration, authentication with Clerk, and deploying applications on Vercel.
                I am familiar with modern frontend architecture, performance optimization, and full-stack fundamentals, gained through professional internship and freelance work.
              </Typography>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>

                <Button
                  variant="text"
                  color="secondary"
                  href="#contact"
                  endIcon={<ArrowForward />}
                >
                  Let's Talk
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                position: "relative",
                height: "100%",
                minHeight: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "100%",
                  height: "100%",
                  background: theme.palette.mode === 'dark'
                    ? "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)"
                    : "radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)",
                  zIndex: -1,
                }
              }}
            >
              {/* Removed statistics as per user request */}
              <Box
                className="glass-card"
                sx={{
                  p: 4,
                  borderRadius: "24px",
                  maxWidth: "1000px",
                  mx: "auto",
                  textAlign: "center"
                }}
              >
                <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
                  Let's Build Something <span className="text-gradient">Amazing</span> Together
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Open for opportunities to collaborate on exciting projects.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Reveal>
  );
}

export default About;
