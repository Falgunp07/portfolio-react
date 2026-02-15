import Reveal from "./Reveal";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Button,
  Chip,
  Grid,
  Stack,
  useTheme,
  IconButton,
  Tooltip
} from "@mui/material";
import { OpenInNew, GitHub, Code } from "@mui/icons-material";

function Projects() {
  const theme = useTheme();

  const projects = [
    {
      title: "Verse AI",
      description: "A comprehensive AI utility platform featuring a centralized API gateway that orchestrates multiple third-party AI services. Includes robust user authentication, subscription management, and usage analytics.",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "Clerk Auth"],
      liveUrl: "https://verseaiuser.vercel.app/",
      githubUrl: "#", // Add actual link if available
      period: "Aug 2025 – Oct 2025",
    },
    {
      title: "Edemy LMS",
      description: "A full-stack Learning Management System tailored for seamless e-learning. Features include course management, student progress tracking, interactive quizzes, and secure payment integration.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
      liveUrl: "https://mern-frontend-blue-one.vercel.app/",
      githubUrl: "#", // Add actual link if available
      period: "Jun 2025 – Aug 2025",
    }
  ];

  return (
    <Reveal>
      <Box id="projects" className="section-padding">
        <Typography
          variant="h2"
          sx={{
            mb: 6,
            textAlign: "center",
            "& span": { display: "block", fontSize: "1rem", color: theme.palette.secondary.main, mb: 1, textTransform: "uppercase", letterSpacing: "3px" }
          }}
        >
          <span>Portfolio</span>
          Featured <span className="text-gradient" style={{ display: "inline", fontSize: "inherit", letterSpacing: "normal", textTransform: "none" }}>Projects</span>
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Box
                  className="glass-card"
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    p: 4,
                    borderRadius: "24px",
                    position: "relative",
                    overflow: "hidden",
                    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                    "&:hover": {
                      borderColor: theme.palette.primary.main,
                      "& .project-actions": { opacity: 1, transform: "translateY(0)" }
                    }
                  }}
                >
                  <Box sx={{ mb: 3, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <Box>
                      <Typography variant="overline" color="secondary" sx={{ fontWeight: 700, letterSpacing: 1 }}>
                        {project.period}
                      </Typography>
                      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                        {project.title}
                      </Typography>
                    </Box>
                    <Code fontSize="large" sx={{ color: theme.palette.text.secondary, opacity: 0.5 }} />
                  </Box>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 4, flexGrow: 1, lineHeight: 1.7 }}
                  >
                    {project.description}
                  </Typography>

                  <Box sx={{ mb: 4 }}>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>
                      {project.technologies.map((tech, idx) => (
                        <Chip
                          key={idx}
                          label={tech}
                          size="small"
                          sx={{
                            background: theme.palette.mode === "dark"
                              ? "rgba(139, 92, 246, 0.15)"
                              : "rgba(139, 92, 246, 0.1)",
                            color: theme.palette.primary.main,
                            fontWeight: 600,
                            border: "1px solid",
                            borderColor: "rgba(139, 92, 246, 0.2)",
                            backdropFilter: "blur(4px)",
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>

                  <Stack direction="row" spacing={2} sx={{ mt: "auto" }}>
                    <Button
                      variant="contained"
                      endIcon={<OpenInNew />}
                      href={project.liveUrl}
                      target="_blank"
                      fullWidth
                      sx={{ py: 1.5, borderRadius: "12px" }}
                    >
                      Live Demo
                    </Button>
                    <Tooltip title="View Code">
                      <IconButton
                        sx={{
                          border: `1px solid ${theme.palette.divider}`,
                          borderRadius: "12px",
                          width: "48px",
                          height: "48px",
                          "&:hover": { color: theme.palette.primary.main, borderColor: theme.palette.primary.main }
                        }}
                        href={project.githubUrl}
                        target="_blank"
                      >
                        <GitHub />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Reveal>
  );
}

export default Projects;
