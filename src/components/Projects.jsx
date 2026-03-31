import { motion } from "framer-motion";
import { ArrowUpRight, Github, Server } from "lucide-react";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import SectionHeading from "./SectionHeading";
import { portfolioData } from "../data/portfolioData";

function Projects() {
  const projects = portfolioData.projects;
  const MotionDiv = motion.div;

  return (
    <Box id="projects" component="section" sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: "96px" }}>
      <SectionHeading
        eyebrow="Projects"
        title="Selected builds that show both interface quality and implementation depth."
        description="These projects reflect the type of web development work I enjoy most: product interfaces with real flows, real data, and clear visual identity."
      />

      <Box sx={{ display: "grid", gap: 3 }}>
        {projects.map((project, index) => (
          <MotionDiv
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
          >
            <Box
              className="premium-card project-card"
              sx={{
                p: { xs: 2, md: 2.3 },
                backgroundImage: project.accent,
                maxWidth: "100%",
                mx: "auto",
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
                  gap: { xs: 2, md: 2.2 },
                  alignItems: "center",
                }}
              >
                {project.image ? (
                  <Box className="project-media-shell">
                    <Box
                      component="img"
                      src={project.image}
                      alt={project.title}
                      sx={{
                        width: "100%",
                        height: "100%",
                        display: "block",
                        borderRadius: "20px",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                ) : (
                  <Box
                    className="project-media-shell"
                    sx={{
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <Box sx={{ textAlign: "center" }}>
                      <Box className="icon-surface" sx={{ mx: "auto", mb: 1.1 }}>
                        <Server size={18} />
                      </Box>
                      <Typography variant="h6" sx={{ mb: 0.4 }}>
                        Backend Security Project
                      </Typography>
                      <Typography sx={{ color: "text.secondary", fontSize: "0.92rem" }}>
                        Authentication and session architecture
                      </Typography>
                    </Box>
                  </Box>
                )}

                <Box sx={{ p: { xs: 0.75, md: 1.1 } }}>
                  <Typography sx={{ color: "primary.main", fontWeight: 700, fontSize: "0.95rem", mb: 0.8 }}>
                    {project.period}
                  </Typography>
                  <Typography
                    sx={{
                      mb: 0.55,
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontWeight: 700,
                      fontSize: { xs: "1.45rem", md: "1.65rem" },
                      lineHeight: 1.15,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography sx={{ color: "secondary.light", mb: 1.5, fontWeight: 600, fontSize: "0.96rem" }}>
                    {project.subtitle}
                  </Typography>
                  <Typography
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.7,
                      fontSize: "0.98rem",
                      mb: 1.8,
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Stack spacing={0.9} sx={{ mb: 1.8 }}>
                    {project.highlights.map((highlight) => (
                      <Box key={highlight} sx={{ display: "flex", gap: 1 }}>
                        <Box className="bullet-dot" />
                        <Typography sx={{ color: "text.secondary", lineHeight: 1.72, fontSize: "0.94rem" }}>
                          {highlight}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, mb: 2, minHeight: 52 }}>
                    {project.stack.slice(0, 5).map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        className="soft-chip"
                        sx={{ "& .MuiChip-label": { fontSize: "0.76rem", px: 1.1 } }}
                      />
                    ))}
                    {project.stack.length > 5 ? (
                      <Chip
                        label={`+${project.stack.length - 5}`}
                        className="soft-chip"
                        sx={{ "& .MuiChip-label": { fontSize: "0.76rem", px: 1.1 } }}
                      />
                    ) : null}
                  </Box>

                  <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25}>
                    {project.liveUrl ? (
                      <Button
                        component="a"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        variant="contained"
                        endIcon={<ArrowUpRight size={16} />}
                        size="medium"
                        sx={{ width: { xs: "100%", sm: "auto" } }}
                      >
                        Visit Live Project
                      </Button>
                    ) : null}

                    {project.repoUrl ? (
                      <Button
                        component="a"
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        variant={project.liveUrl ? "outlined" : "contained"}
                        endIcon={<Github size={16} />}
                        size="medium"
                        sx={{ width: { xs: "100%", sm: "auto" } }}
                      >
                        View GitHub Repo
                      </Button>
                    ) : null}
                  </Stack>
                </Box>
              </Box>
            </Box>
          </MotionDiv>
        ))}
      </Box>
    </Box>
  );
}

export default Projects;
