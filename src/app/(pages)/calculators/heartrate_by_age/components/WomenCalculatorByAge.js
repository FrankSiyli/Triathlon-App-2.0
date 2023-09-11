"use client";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { showWomenInputState } from "@/app/recoil/atoms/showWomenInputState";
import { showMenInputState } from "@/app/recoil/atoms/showMenInputState";

const WomenCalculatorByAge = () => {
  const [showWomenInput, setShowWomenInput] =
    useRecoilState(showWomenInputState);
  const [showMenInput, setShowMenInput] = useRecoilState(showMenInputState);

  const [womenShowAlert, setWomenShowAlert] = useState(false);
  const [womenCalculatorInput, setWomenCalculatorInput] = useState("");
  const [womenCalculatedHr, setWomenCalculatedHr] = useState("");
  const handleWomenInputClick = () => {
    if (
      womenCalculatorInput === "" ||
      womenCalculatorInput < 0 ||
      womenCalculatorInput > 100
    ) {
      setWomenShowAlert(true);
      setTimeout(() => {
        setWomenShowAlert(false);
      }, 2000);
    } else {
      setWomenCalculatedHr(Math.round(209 - 0.9 * womenCalculatorInput));
      setWomenCalculatorInput("");
    }
  };
  const handleWomenKeyDown = (event) => {
    if (event.key === "Enter") {
      handleWomenInputClick();
    }
  };
  const handleWomenClick = () => {
    setShowWomenInput(!showWomenInput);
    setShowMenInput(false);
  };

  return (
    <>
      <button
        onClick={handleWomenClick}
        className="btn btn-sm bg-third border border-first/50 text-first shadow-xl ml-5"
      >
        Damen
      </button>

      {showWomenInput && (
        <div className="mt-10 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 absolute top-10 left-24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>

          <div className="  flex flex-col justify-center text-center ">
            <div>
              <input
                type="number"
                placeholder="Dein Alter z.B. 35"
                value={womenCalculatorInput}
                onChange={(e) => setWomenCalculatorInput(e.target.value)}
                onKeyDown={handleWomenKeyDown}
                className="input  border border-first/50 "
              />
            </div>

            <p className="icon-text m-1">HRmax = 209-(0.9 x Alter) </p>
            {womenShowAlert && (
              <div className="alert alert-info fixed inset-x-0 inset-y-3 mx-auto max-w-md h-10 bg-first  flex justify-center ">
                <span>Bitte trage dein Alter ein (0-100)</span>
              </div>
            )}
            <button
              onClick={handleWomenInputClick}
              className="btn btn-sm m-3  bg-third w-32 mx-auto border border-first/50 text-first shadow-xl"
            >
              Berechnen
            </button>
            {womenCalculatedHr && (
              <div className="border border-first/50 linear-background text-center m-3 p-2 rounded-md">
                Dein berechneter Maximalpuls: <p>{womenCalculatedHr} bpm</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default WomenCalculatorByAge;
