import Reveal from "./Reveal";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  Stack,
  Divider
} from "@mui/material";
import { School, ArrowRight, Grade, CalendarMonth } from "@mui/icons-material";

function Education() {
  const theme = useTheme();

  const education = [
    {
      degree: "Master of Science in Computer Science (M.Sc.)",
      institution: "MIT World Peace University, Pune",
      period: "07/2025 – Present",
      grade: "CGPA: 7.32",
    },
    {
      degree: "Bachelor of Science in Information Technology (B.Sc. IT)",
      institution: "NVPAS, Anand",
      period: "06/2022 – 05/2025",
      grade: "CGPA: 9.12",
    },
    {
      degree: "Higher Secondary Certificate (HSC) – PCM",
      institution: "Parth School, Vadodara",
      period: "03/2022",
      grade: "Percentage: 48.92%",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "My Shannen School, Vadodara",
      period: "03/2020",
      grade: "Percentage: 77.66%",
    }
  ];

  return (
    <Reveal>
      <Box id="education" className="section-padding">
        <Typography
          variant="h2"
          sx={{
            mb: 6,
            textAlign: "center"
          }}
        >
          My <span className="text-gradient">Education</span>
        </Typography>

        <Box sx={{ maxWidth: "800px", mx: "auto" }}>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                className="glass-card"
                sx={{
                  p: 4,
                  mb: 4,
                  borderRadius: "20px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    borderColor: theme.palette.primary.main,
                  }
                }}
              >
                {/* Decorative Icon Background */}
                <School
                  sx={{
                    position: "absolute",
                    right: -20,
                    top: -20,
                    fontSize: "150px",
                    opacity: 0.05,
                    transform: "rotate(15deg)"
                  }}
                />

                <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 3, position: "relative" }}>
                  {/* Icon Column */}
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "16px",
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}
                  >
                    <School color="primary" fontSize="large" />
                  </Box>

                  {/* Content Column */}
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                      {edu.degree}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: "1rem", mb: 2 }}>
                      {edu.institution}
                    </Typography>

                    <Stack direction="row" spacing={3} sx={{ mb: 3 }} divider={<Divider orientation="vertical" flexItem />}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <CalendarMonth fontSize="small" color="action" />
                        <Typography variant="body2" fontWeight={500}>{edu.period}</Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Grade fontSize="small" color="action" />
                        <Typography variant="body2" fontWeight={500} color="primary">{edu.grade}</Typography>
                      </Box>
                    </Stack>

                    {edu.achievements && (
                      <List dense disablePadding>
                        {edu.achievements.map((achievement, idx) => (
                          <ListItem key={idx} disableGutters sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 28 }}>
                              <ArrowRight color="secondary" />
                            </ListItemIcon>
                            <ListItemText
                              primary={achievement}
                              primaryTypographyProps={{ variant: "body2", color: "text.secondary" }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    )}
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Reveal>
  );
}

export default Education;
