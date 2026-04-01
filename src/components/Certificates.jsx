import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import {
  Box,
  Button,
  Chip,
  Dialog,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Download, ExternalLink, X } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { portfolioData } from "../data/portfolioData";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const motionSettings = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: "easeOut" },
};

function CertificateDialog({ certificate, open, onClose }) {
  const [numPages, setNumPages] = useState(0);

  return (
    <Dialog open={open} onClose={onClose} fullScreen>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#07111f",
          backgroundImage:
            "radial-gradient(circle at top left, rgba(58, 231, 255, 0.14), transparent 28%), radial-gradient(circle at top right, rgba(255, 122, 89, 0.14), transparent 24%)",
        }}
      >
        <Box
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 3,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            justifyContent: "space-between",
            gap: 2,
            px: { xs: 2, md: 4 },
            py: 2,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            bgcolor: "rgba(7, 17, 31, 0.88)",
            backdropFilter: "blur(18px)",
          }}
        >
          <Box>
            <Typography variant="h5">{certificate?.title}</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {certificate?.issuer} | {certificate?.year}
            </Typography>
          </Box>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.25}
            sx={{ width: { xs: "100%", sm: "auto" } }}
          >
            <Button
              component="a"
              href={certificate?.fileUrl}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              startIcon={<ExternalLink size={16} />}
              sx={{ width: { xs: "100%", sm: "auto" } }}
            >
              Open
            </Button>
            <Button
              component="a"
              href={certificate?.fileUrl}
              target="_blank"
              rel="noreferrer"
              variant="contained"
              startIcon={<Download size={16} />}
              sx={{ width: { xs: "100%", sm: "auto" } }}
            >
              Download
            </Button>
            <IconButton
              onClick={onClose}
              sx={{ color: "text.primary", alignSelf: { xs: "flex-end", sm: "center" } }}
              aria-label="Close certificate viewer"
            >
              <X size={22} />
            </IconButton>
          </Stack>
        </Box>

        <Box sx={{ px: { xs: 1.5, md: 4 }, py: { xs: 3, md: 4 } }}>
          {certificate ? (
            <Document
              file={certificate.fileUrl}
              loading={<Box className="pdf-loading">Loading certificate...</Box>}
              onLoadSuccess={({ numPages: totalPages }) => setNumPages(totalPages)}
              error={<Box className="pdf-loading">Unable to load this certificate preview.</Box>}
            >
              <Stack spacing={3} alignItems="center">
                {Array.from({ length: numPages }, (_, index) => (
                  <Box key={`${certificate.title}-${index + 1}`} className="certificate-page-shell">
                    <Page
                      pageNumber={index + 1}
                      width={1100}
                      renderAnnotationLayer={false}
                      renderTextLayer={false}
                    />
                  </Box>
                ))}
              </Stack>
            </Document>
          ) : null}
        </Box>
      </Box>
    </Dialog>
  );
}

function CertificateCard({ certificate, onOpen }) {
  const Icon = certificate.icon;
  const MotionDiv = motion.div;

  return (
    <MotionDiv {...motionSettings}>
      <Box
        onClick={() => onOpen(certificate)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onOpen(certificate);
          }
        }}
        role="button"
        tabIndex={0}
        className="premium-card certificate-card"
        sx={{
          height: "100%",
          overflow: "hidden",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            px: 2.25,
            pt: 2.25,
            pb: 1.5,
            display: "flex",
            alignItems: { xs: "flex-start", sm: "center" },
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ flex: 1 }}>
            <Box className="icon-surface">
              <Icon size={18} />
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "1rem",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  lineHeight: 1.25,
                }}
              >
                {certificate.title}
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: "0.92rem",
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {certificate.issuer}
              </Typography>
            </Box>
          </Stack>
          <Chip
            label={certificate.year}
            size="small"
            className="soft-chip"
            sx={{ alignSelf: { xs: "flex-end", sm: "center" } }}
          />
        </Box>

        <Box className="certificate-preview-shell">
          <Document
            file={certificate.fileUrl}
            loading={<Box className="pdf-loading pdf-loading--small">Loading preview...</Box>}
            error={<Box className="pdf-loading pdf-loading--small">Preview unavailable</Box>}
          >
            <Page
              pageNumber={1}
              width={650}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Document>
        </Box>

        <Box
          sx={{
            px: 2.25,
            py: 2,
            display: "flex",
            alignItems: { xs: "flex-start", sm: "center" },
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            gap: 1.5,
            mt: "auto",
          }}
        >
          <Typography sx={{ color: "text.secondary", fontSize: "0.92rem" }}>
            Click to open the full certificate PDF.
          </Typography>
          <ExternalLink size={18} />
        </Box>
      </Box>
    </MotionDiv>
  );
}

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const certificates = useMemo(() => portfolioData.certificates, []);

  return (
    <Box
      id="certificates"
      component="section"
      sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: "96px" }}
    >
      <SectionHeading
        eyebrow="Certificates"
        title="Real certificate previews with full PDF access."
        description="Each card shows the actual certificate preview. Clicking any card opens the complete PDF in a fullscreen viewer so recruiters and clients can inspect it directly."
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(3, minmax(0, 1fr))",
          },
          gap: { xs: 1.8, md: 2.1, lg: 2.3 },
          alignItems: "start",
        }}
      >
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate.title}
            certificate={certificate}
            onOpen={setSelectedCertificate}
          />
        ))}
      </Box>

      <CertificateDialog
        certificate={selectedCertificate}
        open={Boolean(selectedCertificate)}
        onClose={() => setSelectedCertificate(null)}
      />
    </Box>
  );
}

export default Certificates;
