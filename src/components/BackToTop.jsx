import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fab } from "@mui/material";
import { ArrowUp } from "lucide-react";

function BackToTop() {
  const [visible, setVisible] = useState(false);
  const MotionDiv = motion.div;

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
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
      {visible ? (
        <MotionDiv
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
          <MotionDiv whileHover={{ scale: 1.08, y: -4 }} whileTap={{ scale: 0.95 }}>
            <Fab
              onClick={scrollToTop}
              aria-label="back to top"
              sx={{
                background: "linear-gradient(135deg, #3ae7ff 0%, #ff7a59 100%)",
                color: "#06101d",
                boxShadow: "0 16px 34px rgba(0, 0, 0, 0.24)",
                "&:hover": {
                  background: "linear-gradient(135deg, #5af0ff 0%, #ff926f 100%)",
                  boxShadow: "0 22px 44px rgba(0, 0, 0, 0.28)",
                },
              }}
            >
              <ArrowUp size={22} />
            </Fab>
          </MotionDiv>
        </MotionDiv>
      ) : null}
    </AnimatePresence>
  );
}

export default BackToTop;
