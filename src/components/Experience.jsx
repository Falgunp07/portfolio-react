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
} from "@mui/material";
import { ArrowRight, Business, CalendarMonth } from "@mui/icons-material";

function Experience() {
  const theme = useTheme();

  const experiences = [
    {
      title: "Frontend Developer Intern (React)",
      company: "Patrixel",
      period: "Jan 2026 - Present",
      description: [
        "Developed a role-based merchant dashboard using React and Vite.",
        "Implemented real-time analytics, audit logs, and reusable UI components.",
        "Built scalable admin interfaces improving admin usability and data visibility across merchant workflows.",
      ],
    },
    {
      title: "Website Developer (Freelance)",
      company: "Self-Employed",
      period: "Jun 2025 - Oct 2025",
      description: [
        "Developed and deployed a WordPress + WooCommerce e-commerce website (caliz.online).",
        "Optimized UI/UX, SEO, security, and performance for production readiness.",
      ],
    },
  ];

  return (
    <Reveal>
      <Box id="experience" className="section-padding">
        <Typography
          variant="h2"
          sx={{
            mb: 8,
            textAlign: "center"
          }}
        >
          Work <span className="text-gradient">Experience</span>
        </Typography>

        <Box sx={{ maxWidth: "900px", mx: "auto", position: "relative" }}>
          {/* Timeline Line */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: "20px", md: "50%" },
              top: 0,
              bottom: 0,
              width: "2px",
              background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              transform: { xs: "none", md: "translateX(-50%)" },
              display: { xs: "none", md: "block" } // Hide line on mobile for simpler layout or adjust
            }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "flex-start", md: index % 2 === 0 ? "flex-end" : "flex-start" },
                  mb: 6,
                  position: "relative",
                  pl: { xs: 0, md: 0 },
                }}
              >
                {/* Timeline Dot */}
                <Box
                  sx={{
                    position: "absolute",
                    left: { xs: "20px", md: "50%" },
                    top: "20px",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: theme.palette.background.default,
                    border: `3px solid ${theme.palette.secondary.main}`,
                    transform: { xs: "none", md: "translateX(-50%)" },
                    zIndex: 2,
                    display: { xs: "none", md: "block" }
                  }}
                />

                <Box
                  className="glass-card"
                  sx={{
                    width: { xs: "100%", md: "45%" },
                    p: 4,
                    borderRadius: "20px",
                    position: "relative",
                    "&:hover": {
                      borderColor: theme.palette.primary.main,
                    }
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: theme.palette.text.primary }}>
                    {exp.title}
                  </Typography>

                  <Stack direction="row" spacing={2} sx={{ mb: 2, opacity: 0.8 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <Business fontSize="small" color="primary" />
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>{exp.company}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <CalendarMonth fontSize="small" color="secondary" />
                      <Typography variant="body2">{exp.period}</Typography>
                    </Box>
                  </Stack>

                  <List dense disablePadding>
                    {exp.description.map((desc, idx) => (
                      <ListItem key={idx} alignItems="flex-start" sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 28, mt: 0.5 }}>
                          <ArrowRight color="secondary" />
                        </ListItemIcon>
                        <ListItemText
                          primary={desc}
                          primaryTypographyProps={{
                            variant: "body2",
                            style: { lineHeight: 1.6, color: theme.palette.text.secondary }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Reveal>
  );
}

export default Experience;
