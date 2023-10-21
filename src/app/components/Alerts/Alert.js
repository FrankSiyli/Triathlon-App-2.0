"use client";
import React from "react";

function Alert({ alertText, setShowAlert }) {
  setTimeout(() => {
    setShowAlert(false);
  }, 5000);
  return (
    <>
      <div className="custom-toast">
        <span>{alertText}</span>
      </div>
    </>
  );
}

export default Alert;
