"use client";
import React from "react";

function Alert({ alertText, setShowAlert }) {
  setTimeout(() => {
    setShowAlert(false);
  }, 5000);
  return (
    <>
      <div className="custom-toast relative">
        <div className="absolute -top-10 left-0  w-16 h-10 z-50 custom-bike">
          {/** rear wheel */}
          <div className="absolute bottom-0 left-0 w-5 h-5 rounded-full border-2 border-alert">
            <span className="absolute left-1.6 top-0.4 h-4 w-0 border border-alert animate-spin"></span>
            <span className="absolute left-0 top-2 h-0 w-4 border border-alert animate-spin"></span>
            <span className="absolute left-1 top-0.4 h-0 w-5 border border-alert -rotate-45 "></span>
            <span className="absolute left-1.5 top-1.5 h-0 w-4 border border-alert "></span>
            <span className="absolute left-3 -top-0.5 h-0 w-5 border border-alert rotate-90"></span>
            <span className="absolute left-5 -top-1.5 h-0 w-5 border border-alert"></span>
            <span className="absolute left-5 top-0 h-0 w-4 border border-alert -rotate-45"></span>
            <span className="absolute left-4 -top-3 h-0 w-2 border border-alert"></span>
            <span className="absolute left-9 -top-2.5 h-0 w-1.5 border border-alert rotate-90"></span>
            <span className="absolute left-8 -top-3 h-0 w-1.5 border border-alert"></span>
          </div>
          {/** front wheel */}
          <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full border-2 border-alert">
            <span className="absolute left-1.6 top-0.4 h-4 w-0.5 border border-alert animate-spin"></span>
            <span className="absolute left-0 top-2 h-0.5 w-4 border border-alert animate-spin"></span>
            <span className="absolute right-1 top-0.4 h-0.5 w-5 border border-alert rotate-45 "></span>
          </div>
        </div>
        <span>{alertText}</span>
      </div>
    </>
  );
}

export default Alert;
