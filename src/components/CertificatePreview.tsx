"use client";

import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc =
  `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

type CertificatePreviewProps = {
  pdfUrl: string;
  title: string;
};

export default function CertificatePreview({
  pdfUrl,
  title,
}: CertificatePreviewProps) {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden p-3">
      <Document
        file={pdfUrl}
        loading={
          <div className="animate-pulse text-sm text-white/40">
            Loading certificate...
          </div>
        }
        error={
          <p className="text-center text-xs text-white/50">
            Preview unavailable
          </p>
        }
      >
        <Page
          pageNumber={1}
          width={260}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          className="certificate-pdf-page"
        />
      </Document>
    </div>
  );
}