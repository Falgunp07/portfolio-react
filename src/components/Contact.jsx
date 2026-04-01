import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Phone, Pin } from "lucide-react";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import SectionHeading from "./SectionHeading";
import { portfolioData } from "../data/portfolioData";

function Contact() {
  const { contact, profile } = portfolioData;
  const MotionDiv = motion.div;
  const MotionAnchor = motion.a;

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      link: `mailto:${profile.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: profile.phone,
      link: "tel:+919461573282",
    },
    {
      icon: Pin,
      label: "Location",
      value: profile.location,
      link: "#home",
    },
  ];

  return (
    <Box id="contact" component="section" sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: "96px" }}>
      <SectionHeading
        eyebrow="Contact"
        title={contact.title}
        description={contact.description}
      />

      <MotionDiv
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Box className="contact-shell">
          <Box className="premium-card contact-main-card" sx={{ p: { xs: 3, md: 4 } }}>
            <Typography variant="h3" sx={{ mb: 1.4 }}>
              Let's talk about your next web build.
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.85, mb: 2.5, maxWidth: 640 }}>
              Whether it is a dashboard, product interface, freelance website, or a polished React
              web app, I enjoy building experiences that look intentional and feel smooth to use.
            </Typography>

            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>
              {contact.chips.map((chip) => (
                <Chip key={chip} label={chip} className="soft-chip" />
              ))}
            </Stack>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              <Button
                component="a"
                href={`mailto:${profile.email}`}
                variant="contained"
                endIcon={<ArrowRight size={18} />}
              >
                Start a Conversation
              </Button>
              <Button
                component="a"
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                variant="outlined"
                startIcon={<Download size={18} />}
              >
                View Resume
              </Button>
            </Stack>
          </Box>

          <Box sx={{ display: "grid", gap: 2 }}>
            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <MotionAnchor
                  key={item.label}
                  href={item.link}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
                  className="contact-link-card"
                >
                  <Box className="premium-card" sx={{ p: 2.4 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.4 }}>
                      <Box className="icon-surface">
                        <Icon size={18} />
                      </Box>
                      <Box>
                        <Typography sx={{ color: "text.secondary", fontSize: "0.88rem" }}>
                          {item.label}
                        </Typography>
                        <Typography sx={{ fontWeight: 700 }}>{item.value}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </MotionAnchor>
              );
            })}

            <Box className="premium-card" sx={{ p: 2.4 }}>
              <Typography sx={{ color: "text.secondary", fontSize: "0.88rem", mb: 1.4 }}>
                Social Profiles
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.2}>
                <Button
                  component="a"
                  href="https://github.com/Falgunp07"
                  target="_blank"
                  rel="noreferrer"
                  variant="outlined"
                  startIcon={<Github size={18} />}
                  sx={{ width: { xs: "100%", sm: "auto" } }}
                >
                  GitHub
                </Button>
                <Button
                  component="a"
                  href="https://www.linkedin.com/in/falgun-patel07/"
                  target="_blank"
                  rel="noreferrer"
                  variant="outlined"
                  startIcon={<Linkedin size={18} />}
                  sx={{ width: { xs: "100%", sm: "auto" } }}
                >
                  LinkedIn
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </MotionDiv>
    </Box>
  );
}

export default Contact;
