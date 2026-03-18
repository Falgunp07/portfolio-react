import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
                <Box className="project-media-shell">
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: "100%",
                      display: "block",
                      borderRadius: "24px",
                    }}
                  />
                </Box>

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
                  <Typography sx={{ color: "text.secondary", lineHeight: 1.85, mb: 2.5 }}>
                    {project.description}
                  </Typography>

                  <Stack spacing={1.15} sx={{ mb: 2.5 }}>
                    {project.highlights.map((highlight) => (
                      <Box key={highlight} sx={{ display: "flex", gap: 1.2 }}>
                        <Box className="bullet-dot" />
                        <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
                          {highlight}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2.8 }}>
                    {project.stack.map((tech) => (
                      <Chip key={tech} label={tech} className="soft-chip" />
                    ))}
                  </Box>

                  <Button
                    component="a"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    variant="contained"
                    endIcon={<ArrowUpRight size={18} />}
                  >
                    Visit Live Project
                  </Button>
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
