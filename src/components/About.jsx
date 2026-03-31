import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import SectionHeading from "./SectionHeading";
import { portfolioData } from "../data/portfolioData";

function About() {
  const { about } = portfolioData;
  const MotionDiv = motion.div;

  return (
    <Box id="about" component="section" sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: "96px" }}>
      <SectionHeading
        eyebrow="About"
        title={about.title}
        description="A concise snapshot of how I approach web development, product-quality interfaces, and real implementation work."
      />

      <Box
        sx={{
          display: "grid",
          gap: { xs: 2.5, md: 3 },
          alignItems: "start",
        }}
      >
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Box className="premium-card" sx={{ p: { xs: 3, md: 4 } }}>
            {about.paragraphs.map((paragraph) => (
              <Typography
                key={paragraph}
                sx={{
                  color: "text.secondary",
                  fontSize: "1.03rem",
                  lineHeight: 1.9,
                  mb: 2.2,
                  "&:last-of-type": {
                    mb: 0,
                  },
                }}
              >
                {paragraph}
              </Typography>
            ))}
          </Box>
        </MotionDiv>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              lg: "repeat(3, minmax(0, 1fr))",
            },
            gap: 2.2,
          }}
        >
          {about.highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <MotionDiv
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
              >
                <Box className="premium-card" sx={{ p: 3 }}>
                  <Box className="icon-surface" sx={{ mb: 2 }}>
                    <Icon size={20} />
                  </Box>
                  <Typography variant="h5" sx={{ mb: 1.2 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
                    {item.description}
                  </Typography>
                </Box>
              </MotionDiv>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default About;
