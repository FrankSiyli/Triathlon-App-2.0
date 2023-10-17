import React from "react";

function Alert({ alertText }) {
  return (
    <>
      <div className="toast toast-bottom toast-right z-50 ">
        <div className="alert alert-info">
          <span>{alertText}</span>
        </div>
      </div>
    </>
  );
}

export default Alert;
