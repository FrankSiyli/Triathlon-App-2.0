"use client";
import React, { useEffect, useState } from "react";
import { formatTime } from "@/app/helperFunctions/formatTime";
import "../../../../globals.css";
import { useRecoilState } from "recoil";
import { savedSwimTimeState } from "@/app/recoil/atoms/savedSwimTimeState";
import { swimTimeInputFiredState } from "@/app/recoil/atoms/swimTimeInputFiredState";

function SwimTimeCalculator() {
  const [swimCalculatorInput, setSwimCalculatorInput] = useState(1200);
  const [savedSwimTime, setSavedSwimTime] = useRecoilState(savedSwimTimeState);
  const [showSwimTimeInput, setShowSwimTimeInput] = useState(true);
  const [showSavedSwimTime, setShowSavedSwimTime] = useState(false);
  const [swimTimeInputFired, setSwinTimeInputFired] = useRecoilState(
    swimTimeInputFiredState
  );

  const handleSwimTimeInputClick = () => {
    setShowSwimTimeInput(false);
    setShowSavedSwimTime(true);
    setSavedSwimTime(swimCalculatorInput);
    setSwinTimeInputFired(true);
  };

  useEffect(() => {
    setShowSwimTimeInput(false);
    setShowSavedSwimTime(true);
  }, [swimTimeInputFired]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSwimTimeInputClick();
    }
  };

  const handleChangeSwimTimeClick = () => {
    setShowSwimTimeInput(true);
    setShowSavedSwimTime(false);
  };

  return (
    <>
      <div className="border border-first/50  rounded-md p-3  w-full max-w-xl flex flex-col justify-center items-center ">
        {showSwimTimeInput && (
          <>
            <p>Schwimm-Pace-Berechnung</p>
            <label className="label">
              <p className="label-text-alt text-first text-xl text-center">
                Deine 1000m PB
              </p>
            </label>
            <div>
              <input
                type="range"
                list="tickmarks"
                value={swimCalculatorInput}
                min="600"
                max="1800"
                className="input w-80"
                onChange={(e) => setSwimCalculatorInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <datalist id="tickmarks">
                <option value="600"></option>
                <option value="900"></option>
                <option value="1200"></option>
                <option value="1500"></option>
                <option value="1800"></option>
              </datalist>
              <p className="text-xl text-center">
                {formatTime(swimCalculatorInput)} min
              </p>
            </div>

            <button
              onClick={handleSwimTimeInputClick}
              className="btn btn-sm m-3 bg-third border border-first/50 text-first"
            >
              speichern
            </button>
          </>
        )}
        {showSavedSwimTime && (
          <>
            Deine gespeicherte 1000m Schwimmzeit:{" "}
            <div className=" text-center  p-2">
              <p className="text-xl ">{formatTime(savedSwimTime)} min</p>
            </div>
            <button
              onClick={handleChangeSwimTimeClick}
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

export default SwimTimeCalculator;
