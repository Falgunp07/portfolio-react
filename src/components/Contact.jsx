import Reveal from "./Reveal";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Stack,
  useTheme,
  IconButton,
  Paper
} from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";

function Contact() {
  const theme = useTheme();

  const contactInfo = [
    {
      icon: <Email fontSize="medium" />,
      label: "Email",
      value: "falgunpatel071@gmail.com",
      link: "mailto:falgunpatel071@gmail.com",
      color: "#ef4444"
    },
    {
      icon: <Phone fontSize="medium" />,
      label: "Phone",
      value: "+91 9461573282", // Added country code for better formatting
      link: "tel:+919461573282",
      color: "#22c55e"
    },
    {
      icon: <LocationOn fontSize="medium" />,
      label: "Location",
      value: "Pune, India",
      link: "#",
      color: "#3b82f6"
    }
  ];

  return (
    <Reveal>
      <Box id="contact" className="section-padding">
        <Typography
          variant="h2"
          sx={{
            mb: 8,
            textAlign: "center"
          }}
        >
          Get In <span className="text-gradient">Touch</span>
        </Typography>

        <Box sx={{ maxWidth: "800px", mx: "auto" }}>
          <Box
            className="glass-card"
            sx={{
              p: 4,
              borderRadius: "24px",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: 4
            }}
          >
            <Box>
              <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
                Let's Chat
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
                Whether you have a question, a project proposal, or just want to say hi,
                I'll try my best to get back to you!
              </Typography>

              <Stack spacing={3}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                  >
                    <Paper
                      component="a"
                      href={info.link}
                      elevation={0}
                      sx={{
                        p: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        borderRadius: "16px",
                        textDecoration: "none",
                        background: theme.palette.mode === 'dark' ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
                        border: `1px solid ${theme.palette.divider}`,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: theme.palette.primary.main,
                          background: theme.palette.mode === 'dark' ? "rgba(139, 92, 246, 0.1)" : "rgba(139, 92, 246, 0.05)",
                        }
                      }}
                    >
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: "12px",
                          background: `rgba(${parseInt(info.color.slice(1, 3), 16)}, ${parseInt(info.color.slice(3, 5), 16)}, ${parseInt(info.color.slice(5, 7), 16)}, 0.1)`,
                          color: info.color,
                          display: "flex",
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          {info.label}
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: 600, color: theme.palette.text.primary }}>
                          {info.value}
                        </Typography>
                      </Box>
                    </Paper>
                  </motion.div>
                ))}
              </Stack>
            </Box>

            <Box sx={{ mt: { xs: 4, md: 0 }, textAlign: "center" }}>
              <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 2, display: "block", mb: 2 }}>
                SOCIALS
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="center">
                <IconButton
                  href="https://github.com/Falgunp07"
                  target="_blank"
                  size="large"
                  sx={{
                    border: `1px solid ${theme.palette.divider}`,
                    "&:hover": { color: "#fff", background: "#333", borderColor: "#333" }
                  }}
                >
                  <GitHub fontSize="large" />
                </IconButton>
                <IconButton
                  href="https://linkedin.com/in/falgun-patel-7386701b0"
                  target="_blank"
                  size="large"
                  sx={{
                    border: `1px solid ${theme.palette.divider}`,
                    "&:hover": { color: "#fff", background: "#0077b5", borderColor: "#0077b5" }
                  }}
                >
                  <LinkedIn fontSize="large" />
                </IconButton>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Reveal>
  );
}

export default Contact;
