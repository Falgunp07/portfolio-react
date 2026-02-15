import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fab, useTheme } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

function BackToTop() {
  const theme = useTheme();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          style={{
            position: "fixed",
            bottom: 32,
            right: 32,
            zIndex: 999,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Fab
              onClick={scrollToTop}
              aria-label="back to top"
              sx={{
                background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
                color: "#fff",
                boxShadow: "0 10px 20px -10px rgba(139, 92, 246, 0.5)",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0 20px 40px -10px rgba(139, 92, 246, 0.7)",
                },
              }}
            >
              <KeyboardArrowUp fontSize="large" />
            </Fab>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;
