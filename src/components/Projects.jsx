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
        description="These projects reflect the type of frontend work I enjoy most: product interfaces with real flows, real data, and clear visual identity."
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
                p: { xs: 2, md: 2.5 },
                backgroundImage: project.accent,
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
                  gap: 3,
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
                        borderRadius: "24px",
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
                      <Box className="icon-surface" sx={{ mx: "auto", mb: 1.5 }}>
                        <Server size={20} />
                      </Box>
                      <Typography variant="h5" sx={{ mb: 0.6 }}>
                        Backend Security Project
                      </Typography>
                      <Typography sx={{ color: "text.secondary" }}>
                        Authentication and session architecture
                      </Typography>
                    </Box>
                  </Box>
                )}

                <Box sx={{ p: { xs: 1, md: 1.5 } }}>
                  <Typography sx={{ color: "primary.main", fontWeight: 700, mb: 1 }}>
                    {project.period}
                  </Typography>
                  <Typography variant="h3" sx={{ mb: 0.75 }}>
                    {project.title}
                  </Typography>
                  <Typography sx={{ color: "secondary.light", mb: 2, fontWeight: 600 }}>
                    {project.subtitle}
                  </Typography>
                  <Typography
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.85,
                      mb: 2.5,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      minHeight: "5.6rem",
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Stack spacing={1.15} sx={{ mb: 2.5 }}>
                    {project.highlights.slice(0, 3).map((highlight) => (
                      <Box key={highlight} sx={{ display: "flex", gap: 1.2 }}>
                        <Box className="bullet-dot" />
                        <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
                          {highlight}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2.8, minHeight: 64 }}>
                    {project.stack.slice(0, 5).map((tech) => (
                      <Chip key={tech} label={tech} className="soft-chip" />
                    ))}
                    {project.stack.length > 5 ? (
                      <Chip
                        label={`+${project.stack.length - 5}`}
                        className="soft-chip"
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
                        endIcon={<ArrowUpRight size={18} />}
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
                        endIcon={<Github size={18} />}
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
