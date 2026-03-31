import { ArrowUpRight } from "lucide-react";
import { Box, Button, Container, Typography } from "@mui/material";
import { portfolioData } from "../data/portfolioData";

function Footer() {
  const { profile } = portfolioData;

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(6, 14, 27, 0.72)",
        backdropFilter: "blur(14px)",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          py: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <Typography sx={{ color: "text.secondary" }}>
          © {new Date().getFullYear()}{" "}
          <Box component="span" sx={{ color: "primary.main", fontWeight: 700 }}>
            {profile.name}
          </Box>
          . Designed for a modern web developer presentation.
        </Typography>

        <Button
          component="a"
          href={`mailto:${profile.email}`}
          variant="text"
          endIcon={<ArrowUpRight size={16} />}
          sx={{ color: "text.primary", px: 0 }}
        >
          {profile.email}
        </Button>
      </Container>
    </Box>
  );
}

export default Footer;
