"use client";
import React from "react";
import "../../globals.css";
import { PDFViewer } from "@react-pdf/renderer";
import PDFContent from "@/app/(pages)/home/components/SessionsOverlay/components/PdfContent/PdfContent";

function TestPage() {
  return (
    <>
      <PDFViewer style={{ width: "100%", height: "500px" }}>
        <PDFContent />
      </PDFViewer>
      <button className="btn btn-primary mt-5" onClick={() => window.print()}>
        Print Page
      </button>
    </>
  );
}

export default TestPage;
