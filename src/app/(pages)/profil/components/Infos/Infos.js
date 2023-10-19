"use client";
import React from "react";

function Infos({
  setShowProfil,
  setShowHeartrateByAge,
  setShowHeartrateMax,
  setShowPowerWatt,
}) {
  const handleBackClick = () => {
    setShowProfil();
  };
  const handleHeartrateByAgeClick = () => {
    setShowHeartrateByAge();
  };
  const handleHeartrateMaxClick = () => {
    setShowHeartrateMax();
  };
  const handlePowerWattClick = () => {
    setShowPowerWatt();
  };

  return (
    <>
      <div className="w-full max-w-xl mx-auto">
        <button
          className="top-5 left-5 btn btn-ghost btn-sm  m-3 border border-transparent text-first "
          onClick={handleBackClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
      <p className=" mx-auto w-40 text-center -mt-10 mb-10">Informationen</p>

      <>
        <button
          onClick={handleHeartrateByAgeClick}
          className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
        >
          <div className="ml-5">Maximalpuls nach Alter</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <button
          onClick={handleHeartrateMaxClick}
          className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
        >
          <div className="ml-5">Pulszonen</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <button
          onClick={handlePowerWattClick}
          className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
        >
          <div className="ml-5">Wattzonen</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </>
    </>
  );
}

export default Infos;
