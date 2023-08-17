"use client";
import React, { useState } from "react";
import "../../../globals.css";

function HeartrateCalculator() {
  const [showAlert, setShowAlert] = useState(false);
  const [heartrateCalculatorInput, setHeartrateCalculatorInput] = useState("");
  const [savedHrMax, setSavedHrMax] = useState(160);
  const [showHrInput, setShowHrInput] = useState(true);
  const [showSavedHrMax, setShowSavedHrMax] = useState(false);

  const handleHeartrateInputClick = () => {
    if (
      heartrateCalculatorInput === "" ||
      heartrateCalculatorInput < 100 ||
      heartrateCalculatorInput > 300
    ) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    } else {
      setShowHrInput(false);
      setShowSavedHrMax(true);
      setSavedHrMax(heartrateCalculatorInput);
      setHeartrateCalculatorInput("");
    }
  };

  const handleChangeHrMaxClick = () => {
    setShowHrInput(true);
    setShowSavedHrMax(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleHeartrateInputClick();
    }
  };

  return (
    <>
      <div className="flex  max-w-xl  flex-col items-center  ">
        {showAlert && (
          <div className="alert alert-info fixed inset-x-0 inset-y-3 mx-auto max-w-md h-10 bg-first  flex justify-center ">
            <span>Bitte trage deine HRmax ein (100-300)</span>
          </div>
        )}
      </div>
      <div className="border border-first/50  rounded-md p-3  w-full max-w-xl flex flex-col justify-center items-center ">
        {showHrInput && (
          <>
            <p>Pulszonen-Berechnung</p>
            <label className="label">
              <p className="label-text-alt text-first text-xl text-center">
                Dein Maximalpuls in bpm
              </p>
            </label>
            <input
              type="number"
              placeholder="z.B. 185"
              value={heartrateCalculatorInput}
              onChange={(e) => setHeartrateCalculatorInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="input  border border-first/50 w-full max-w-xs"
            />
            <button
              onClick={handleHeartrateInputClick}
              className="btn btn-sm m-3 bg-third border border-first/50 text-first"
            >
              Enter
            </button>
          </>
        )}
        {showSavedHrMax && (
          <>
            Dein gespeicherter Maximalpuls:{" "}
            <div className=" text-center  p-2">
              <p className="text-xl">{savedHrMax} bpm</p>
            </div>
            <button
              onClick={handleChangeHrMaxClick}
              className="btn btn-sm  m-2 bg-third border border-first text-first"
            >
              ändern
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default HeartrateCalculator;
