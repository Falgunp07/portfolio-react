import Reveal from "./Reveal";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Chip,
  Grid,
  useTheme,
} from "@mui/material";

function Skills() {
  const theme = useTheme();

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
      icon: "🎨"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "MongoDB"],
      icon: "⚙️"
    },
    {
      title: "Tools & Platforms",
      skills: ["GitHub", "CI/CD", "Vercel", "Clerk"],
      icon: "🚀"
    },
    {
      title: "CMS & SEO",
      skills: ["WordPress", "WooCommerce", "SEO Optimization"],
      icon: "🔍"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Reveal>
      <Box id="skills" className="section-padding">
        <Typography
          variant="h2"
          sx={{
            mb: 6,
            textAlign: "center"
          }}
        >
          Technical <span className="text-gradient">Skills</span>
        </Typography>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={3}>
            {skillCategories.map((category, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <motion.div variants={itemVariants} style={{ height: "100%" }}>
                  <Box
                    className="glass-card"
                    sx={{
                      height: "100%",
                      p: 4,
                      borderRadius: "24px",
                      transition: "all 0.3s ease",
                      border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                      "&:hover": {
                        borderColor: theme.palette.primary.main,
                        transform: "translateY(-5px)",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", mb: 3, gap: 2 }}>
                      <Box
                        sx={{
                          fontSize: "2.5rem",
                          lineHeight: 1,
                          filter: "drop-shadow(0 0 10px rgba(124, 58, 237, 0.3))"
                        }}
                      >
                        {category.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: 700 }}
                      >
                        {category.title}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1.5,
                      }}
                    >
                      {category.skills.map((skill, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Chip
                            label={skill}
                            sx={{
                              fontSize: "0.95rem",
                              background: theme.palette.mode === "dark"
                                ? "rgba(255, 255, 255, 0.05)"
                                : "rgba(0, 0, 0, 0.05)",
                              border: "1px solid",
                              borderColor: theme.palette.divider,
                              backdropFilter: "blur(4px)",
                              transition: "all 0.2s ease",
                              "&:hover": {
                                borderColor: theme.palette.primary.main,
                                background: "rgba(139, 92, 246, 0.1)",
                                color: theme.palette.primary.main,
                              }
                            }}
                          />
                        </motion.div>
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </Reveal>
  );
}

export default Skills;
