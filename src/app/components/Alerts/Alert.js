import React from "react";

function Alert({ alertText }) {
  return (
    <>
      <div className="fixed mx-auto top-0 inset-x-0 flex flex-row items-center justify-center gap-3 max-w-xl  p-2 rounded-md border border-first/50  bg-alert text-first">
        <span>{alertText}</span>
      </div>
    </>
  );
}

export default Alert;
