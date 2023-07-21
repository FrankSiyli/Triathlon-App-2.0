"use client";
import React, { useState } from "react";
import "../../../globals.css";
import Link from "next/link";

function Page() {
  const [showAlert, setShowAlert] = useState(false);

  const handleAlertClick = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  return (
    <>
      <Link
        className="btn  m-3 bg-red border border-light text-light"
        href="/profil"
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
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </Link>
      <div className="border border-light rounded-md p-4 mx-1 mb-5  bg-dark text-center">
        <p>
          Wenn du am Anfang deiner sportlichen Entwicklung stehst oder nach
          einer Pause wieder einsteigen möchtest kannst du auch die Formeln
          benutzen um einen Richtwert zu erhalten.
        </p>
      </div>

      <div className="ml-2 mt-10 ">
        <button className="btn btn-secondary pointer-events-none border-light  bg-red   text-light">
          <p className="text-xl ">Damen</p>
          <br />
          <p className="text-dark">HRmax = 209-(0.9 x Alter) </p>
        </button>
        <label className="label  ">
          <span className="label-text-alt text-light ">Dein Alter</span>
        </label>
        <input
          type="number"
          maxLength={3}
          placeholder="z.B. 35"
          id="HrDamenCalculatorInput"
          className="input  border border-red mb-3 w-full max-w-xs"
        />

        <button
          onClick={handleAlertClick}
          className="btn btn-sm  mb-10 bg-red border border-light text-light rounded-r-none"
          id="HrDamenCalculateBtn"
          /*  onclick="HrDamenAlter(),
              clearHrDamenInput()
            " */
        >
          Calculate
        </button>
        <input
          className="bg-light h-8 ml-1 rounded-r-md text-dark"
          maxLength={3}
          type="text"
          id="HrDamenCalculatorOutput"
          readOnly
        />
      </div>
      {showAlert && (
        <div className="alert alert-info w-40 absolute">
          <span>Coming soon</span>
        </div>
      )}

      <div className="ml-2 ">
        <button className="btn btn-secondary pointer-events-none border-light  bg-red mt-20  text-light">
          <p className="text-xl ">Herren</p>
          <br />
          <p className="text-dark">HRmax = 214-(0.8 x Alter) </p>
        </button>

        <label className="label ">
          <span className="label-text-alt text-light ">Dein Alter</span>
        </label>
        <input
          type="number"
          maxLength={3}
          placeholder="z.B. 35"
          id="HrHerrenCalculatorInput"
          className="input  border border-red mb-3 w-full max-w-xs"
        />

        <button
          onClick={handleAlertClick}
          className="btn btn-sm  mb-20 bg-red border border-light text-light rounded-r-none"
          id="HrHerrenCalculateBtn"
          /* onclick="HrHerrenAlter(),
              clearHrHerrenInput()
            " */
        >
          Calculate
        </button>

        <input
          className="bg-light h-8 ml-1 rounded-r-md text-dark"
          maxLength={3}
          type="text"
          id="HrHerrenCalculatorOutput"
          readOnly
        />
      </div>
    </>
  );
}

export default Page;
