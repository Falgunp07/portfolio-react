import { Box, Typography } from "@mui/material";

function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const titleWords = title ? title.trim().split(/\s+/) : [];
  const titleGradientWordCount = Math.min(3, titleWords.length);
  const titleStart = titleWords.slice(0, titleWords.length - titleGradientWordCount).join(" ");
  const titleEnd = titleWords.slice(-titleGradientWordCount).join(" ");

  return (
    <Box sx={{ mb: 4.5, textAlign: align }}>
      <Typography
        component="p"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 1.25,
          fontSize: { xs: "0.9rem", sm: "1rem" },
          fontWeight: 700,
          letterSpacing: { xs: "0.12em", sm: "0.16em" },
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
        {titleStart ? `${titleStart} ` : ""}
        <Box
          component="span"
          sx={{
            display: "inline-block",
            whiteSpace: "nowrap",
            background: "linear-gradient(120deg, #3ae7ff 0%, #7d5fff 45%, #ff7a59 100%)",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {titleEnd}
        </Box>
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
