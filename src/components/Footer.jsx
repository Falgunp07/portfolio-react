import { Box, Typography, Link, useTheme } from "@mui/material";

function Footer() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                textAlign: "center",
                py: 4,
                borderTop: `1px solid ${theme.palette.divider}`,
                background: theme.palette.mode === "dark"
                    ? "rgba(15, 23, 42, 0.5)"
                    : "rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(10px)",
            }}
        >
            <Typography variant="body2" color="text.secondary">
                © {new Date().getFullYear()} <span style={{ color: theme.palette.primary.main, fontWeight: 600 }}>Falgun Patel</span>. All rights reserved.
            </Typography>
        </Box>
    );
}

export default Footer;
