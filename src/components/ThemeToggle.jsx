import { motion, AnimatePresence } from "framer-motion";
import { IconButton, useTheme } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

function ThemeToggle({ isDark, toggleTheme }) {
  const theme = useTheme();

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <IconButton
        onClick={toggleTheme}
        color="inherit"
        sx={{
          background: theme.palette.mode === "dark"
            ? "rgba(124, 58, 237, 0.15)"
            : "rgba(124, 58, 237, 0.1)",
          border: "2px solid",
          borderColor: theme.palette.primary.main,
          transition: "all 0.3s ease",
          "&:hover": {
            background: theme.palette.primary.main,
            color: "#fff",
          },
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isDark ? "moon" : "sun"}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            {isDark ? <Brightness7 /> : <Brightness4 />}
          </motion.div>
        </AnimatePresence>
      </IconButton>
    </motion.div>
  );
}

export default ThemeToggle;
