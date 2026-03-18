import { Box, Typography } from "@mui/material";

function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <Box sx={{ mb: 4.5, textAlign: align }}>
      <Typography
        component="p"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 1.25,
          fontSize: "0.82rem",
          fontWeight: 700,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "primary.main",
          mb: 1.5,
        }}
      >
        <Box
          component="span"
          sx={{
            width: 26,
            height: 1,
            display: "inline-block",
            background: "linear-gradient(90deg, transparent, currentColor)",
          }}
        />
        {eyebrow}
      </Typography>

      <Typography
        variant="h2"
        sx={{
          maxWidth: align === "center" ? 760 : 680,
          mx: align === "center" ? "auto" : 0,
          mb: description ? 1.5 : 0,
        }}
      >
        {title}
      </Typography>

      {description ? (
        <Typography
          sx={{
            maxWidth: align === "center" ? 700 : 620,
            mx: align === "center" ? "auto" : 0,
            color: "text.secondary",
            fontSize: "1rem",
            lineHeight: 1.8,
          }}
        >
          {description}
        </Typography>
      ) : null}
    </Box>
  );
}

export default SectionHeading;
