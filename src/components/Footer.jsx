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
        borderTop: "1px solid rgba(37, 99, 235, 0.16)",
        background: "rgba(255, 255, 255, 0.9)",
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
        <Typography sx={{ color: "text.primary", fontWeight: 500 }}>
          {"\u00A9"} {new Date().getFullYear()}{" "}
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
          sx={{
            color: "primary.dark",
            px: 0,
            fontWeight: 600,
            "&:hover": {
              color: "secondary.dark",
              background: "transparent",
            },
          }}
        >
          {profile.email}
        </Button>
      </Container>
    </Box>
  );
}

export default Footer;
