import React from "react";

function Alert({ alertText }) {
  return (
    <>
      <div className="custom-toast">
        <span>{alertText}</span>
      </div>
    </>
  );
}

export default Alert;
