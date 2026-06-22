"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc =
  `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfViewer({ url }) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <Document
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>

      <div className="flex items-center gap-4">
        <button
          disabled={pageNumber <= 1}
          onClick={() =>
            setPageNumber((p) => p - 1)
          }
        >
          Previous
        </button>

        <span>
          {pageNumber} / {numPages}
        </span>

        <button
          disabled={pageNumber >= numPages}
          onClick={() =>
            setPageNumber((p) => p + 1)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}