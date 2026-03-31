import { motion } from "framer-motion";
import { Box, Chip, Typography } from "@mui/material";
import SectionHeading from "./SectionHeading";
import { portfolioData } from "../data/portfolioData";

function Skills() {
  const skillCategories = portfolioData.skills;
  const MotionDiv = motion.div;

  return (
    <Box id="skills" component="section" sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: "96px" }}>
      <SectionHeading
        eyebrow="Skills"
        title="A web development stack built for interface quality and practical delivery."
        description="I enjoy balancing visual craft with maintainable implementation, which is why my stack covers UI work, application flow, deployment, and API-ready web engineering."
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
          gap: 3,
        }}
      >
        {skillCategories.map((category, index) => {
          const Icon = category.icon;

          return (
            <MotionDiv
              key={category.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
            >
              <Box className="premium-card" sx={{ p: { xs: 3, md: 3.5 }, height: "100%" }}>
                <Box className="icon-surface" sx={{ mb: 2.5 }}>
                  <Icon size={20} />
                </Box>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  {category.title}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {category.items.map((skill) => (
                    <Chip key={skill} label={skill} className="soft-chip" />
                  ))}
                </Box>
              </Box>
            </MotionDiv>
          );
        })}
      </Box>
    </Box>
  );
}

export default Skills;
