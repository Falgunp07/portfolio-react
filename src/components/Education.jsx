import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Box, Typography } from "@mui/material";
import SectionHeading from "./SectionHeading";
import { portfolioData } from "../data/portfolioData";

function Education() {
  const education = portfolioData.education;
  const MotionDiv = motion.div;

  return (
    <Box id="education" component="section" sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: "96px" }}>
      <SectionHeading
        eyebrow="Education"
        title="Academic foundation supporting hands-on web development practice."
        description="My academic path runs alongside the product and project work above, giving me a solid base while I continue building practical web development experience."
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
          gap: 3,
        }}
      >
        {education.map((item, index) => (
          <MotionDiv
            key={`${item.degree}-${item.period}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.07, ease: "easeOut" }}
          >
            <Box className="premium-card" sx={{ p: { xs: 3, md: 3.25 }, height: "100%", textAlign: "left" }}>
              <Box className="icon-surface" sx={{ mb: 2.3 }}>
                <GraduationCap size={20} />
              </Box>
              <Typography variant="h5" sx={{ mb: 1.2 }}>
                {item.degree}
              </Typography>
              <Typography sx={{ color: "primary.main", fontWeight: 700, mb: 0.6 }}>
                {item.institution}
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 0.4 }}>{item.period}</Typography>
              <Typography sx={{ color: "text.secondary" }}>{item.score}</Typography>
            </Box>
          </MotionDiv>
        ))}
      </Box>
    </Box>
  );
}

export default Education;
