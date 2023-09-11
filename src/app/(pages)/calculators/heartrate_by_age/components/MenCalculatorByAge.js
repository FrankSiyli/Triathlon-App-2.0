"use client";
import React, { useState } from "react";
import { showMenInputState } from "@/app/recoil/atoms/showMenInputState";
import { showWomenInputState } from "@/app/recoil/atoms/showWomenInputState";
import { useRecoilState } from "recoil";
const MenCalculatorByAge = () => {
  const [showWomenInput, setShowWomenInput] =
    useRecoilState(showWomenInputState);
  const [showMenInput, setShowMenInput] = useRecoilState(showMenInputState);

  const [menShowAlert, setMenShowAlert] = useState(false);
  const [menCalculatorInput, setMenCalculatorInput] = useState("");
  const [menCalculatedHr, setMenCalculatedHr] = useState("");

  const handleMenInputClick = () => {
    if (
      menCalculatorInput === "" ||
      menCalculatorInput < 0 ||
      menCalculatorInput > 100
    ) {
      setMenShowAlert(true);
      setTimeout(() => {
        setMenShowAlert(false);
      }, 2000);
    } else {
      setMenCalculatedHr(Math.round(214 - 0.8 * menCalculatorInput));
      setMenCalculatorInput("");
    }
  };

  const handleMenKeyDown = (event) => {
    if (event.key === "Enter") {
      handleMenInputClick();
    }
  };

  const handleMenClick = () => {
    setShowMenInput(!showMenInput);
    setShowWomenInput(false);
  };
  return (
    <>
      <button
        onClick={handleMenClick}
        className="absolute top-0 right-5 btn btn-sm bg-third border border-first/50 text-first shadow-xl"
      >
        Herren
      </button>

      {showMenInput && (
        <div className="mt-10 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 absolute top-10 right-24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25"
            />
          </svg>

          <div className="flex flex-col justify-center text-center ">
            <div>
              <input
                type="number"
                maxLength={3}
                placeholder="Dein Alter z.B. 35"
                value={menCalculatorInput}
                onChange={(e) => setMenCalculatorInput(e.target.value)}
                onKeyDown={handleMenKeyDown}
                className="input  border border-first/50 "
              />
            </div>

            <p className="icon-text m-1">HRmax = 214-(0.8 x Alter) </p>
            {menShowAlert && (
              <div className="alert alert-info fixed inset-x-0 inset-y-3 mx-auto max-w-md h-10 bg-first  flex justify-center">
                <span>Bitte trage dein Alter ein (0-100)</span>
              </div>
            )}
            <button
              onClick={handleMenInputClick}
              className="btn btn-sm m-3 bg-third w-32 mx-auto border border-first/50 text-first shadow-xl"
            >
              Berechnen
            </button>
            {menCalculatedHr && (
              <div className="border border-first/50 linear-background text-center m-3 p-2 rounded-md">
                Dein berechneter Maximalpuls: <p>{menCalculatedHr} bpm</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MenCalculatorByAge;
