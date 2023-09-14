import React from "react";

const Topalert = ({ topAlertText }) => {
  return (
    <>
      <div className="fixed mx-auto top-0 inset-x-0 flex flex-row items-center justify-center gap-3 max-w-xl  p-2 rounded-md border border-first/50  bg-alert text-first">
        <span>{topAlertText}</span>
      </div>
    </>
  );
};

export default Topalert;
