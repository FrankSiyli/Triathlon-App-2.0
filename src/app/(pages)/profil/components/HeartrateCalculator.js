"use client";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import "../../../globals.css";
import { savedHrMaxState } from "@/app/recoil/atoms/savedHrMaxState";
import { heartrateInputFiredState } from "@/app/recoil/atoms/heartrateInputFiredState";

function HeartrateCalculator() {
  const [showAlert, setShowAlert] = useState(false);
  const [heartrateCalculatorInput, setHeartrateCalculatorInput] = useState("");
  const [savedHrMax, setSavedHrMax] = useRecoilState(savedHrMaxState);
  const [heartrateInputFired, setHeartrateInputFired] = useRecoilState(
    heartrateInputFiredState
  );

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
      setHeartrateInputFired(true);
      setSavedHrMax(heartrateCalculatorInput);
      setHeartrateCalculatorInput("");
    }
  };

  const handleChangeHrMaxClick = () => {
    setHeartrateInputFired(false);
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
          <div className="fixed top-0 inset-x-0 flex flex-row items-center justify-center gap-3 max-w-xl  p-2 rounded-md border border-first/50  bg-fourth text-first">
            <span>Bitte trage deine HRmax ein (100-300)</span>
          </div>
        )}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 absolute top-10 left-28"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
        />
      </svg>
      <div className="border border-fourth mt-10 rounded-md p-3  w-full max-w-xl flex flex-col justify-center items-center linear-background">
        {!heartrateInputFired && (
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
              className="btn btn-sm m-3 bg-third border border-first/50 text-first shadow-xl"
            >
              speichern
            </button>
          </>
        )}
        {heartrateInputFired && (
          <>
            Dein gespeicherter Maximalpuls:{" "}
            <div className=" text-center  p-2">
              <p className="text-xl">{savedHrMax} bpm</p>
            </div>
            <button
              onClick={handleChangeHrMaxClick}
              className="btn btn-sm  m-2 bg-third border border-first text-first shadow-xl"
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
