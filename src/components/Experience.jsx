import { motion } from "framer-motion";
import { Box, Chip, Typography } from "@mui/material";
import SectionHeading from "./SectionHeading";
import { portfolioData } from "../data/portfolioData";

function Experience() {
  const experiences = portfolioData.experiences;
  const MotionDiv = motion.div;

  return (
    <Box
      id="experience"
      component="section"
      sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: "96px" }}
    >
      <SectionHeading
        eyebrow="Experience"
        title="Hands-on experience across product dashboards and client delivery."
        description="My recent work combines reusable web architecture, responsive interface design, API integration, and the practical details needed to launch and maintain real websites."
      />

      <Box sx={{ display: "grid", gap: 3 }}>
        {experiences.map((exp, index) => (
          <MotionDiv
            key={`${exp.company}-${exp.period}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
          >
            <Box className="premium-card timeline-card" sx={{ p: { xs: 3, md: 3.5 } }}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", lg: "0.75fr 1.25fr" },
                  gap: 3,
                  alignItems: "start",
                }}
              >
                <Box>
                  <Typography variant="h4" sx={{ mb: 1 }}>
                    {exp.title}
                  </Typography>
                  <Typography sx={{ color: "primary.main", fontWeight: 700, mb: 0.65 }}>
                    {exp.company}
                  </Typography>
                  <Typography sx={{ color: "text.secondary", mb: 0.35 }}>{exp.period}</Typography>
                  <Typography sx={{ color: "text.secondary", mb: 2 }}>{exp.location}</Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {exp.tags.map((tag) => (
                      <Chip key={tag} label={tag} className="soft-chip" />
                    ))}
                  </Box>
                </Box>

                <Box sx={{ display: "grid", gap: 1.3 }}>
                  {exp.bullets.map((item) => (
                    <Box key={item} sx={{ display: "flex", gap: 1.2 }}>
                      <Box className="bullet-dot" />
                      <Typography sx={{ color: "text.secondary", lineHeight: 1.85 }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </MotionDiv>
        ))}
      </Box>
    </Box>
  );
}

export default Experience;
