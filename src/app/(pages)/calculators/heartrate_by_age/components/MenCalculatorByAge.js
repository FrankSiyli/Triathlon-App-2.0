"use client";
import React, { useState } from "react";
import { showMenInputState } from "@/app/recoil/atoms/showMenInputState";
import { showWomenInputState } from "@/app/recoil/atoms/showWomenInputState";
import { useRecoilState } from "recoil";
import Alert from "@/app/components/Alerts/Alert";

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
        className={`absolute top-0 right-5 btn btn-sm bg-third border  ${
          showMenInput
            ? "border-first border-b-2 border-t-transparent border-r-transparent border-l-transparent"
            : "border-transparent"
        } text-first shadow-xl `}
      >
        Herren
      </button>

      {showMenInput && (
        <div className="mt-10 flex justify-center">
          <div className="flex flex-col justify-center text-center ">
            <div>
              <input
                type="number"
                maxLength={3}
                placeholder="Dein Alter z.B. 35"
                value={menCalculatorInput}
                onChange={(e) => setMenCalculatorInput(e.target.value)}
                onKeyDown={handleMenKeyDown}
                className="input  border border-transparent "
              />
            </div>

            <p className="icon-text m-1">HRmax = 214-(0.8 x Alter) </p>
            {menShowAlert && (
              <Alert alertText="Bitte trage dein Alter ein (0-100)" />
            )}
            <button
              onClick={handleMenInputClick}
              className="btn btn-sm m-3 bg-third w-32 mx-auto border border-transparent text-first shadow-xl"
            >
              Berechnen
            </button>
            {menCalculatedHr && (
              <div className="text-center m-3 p-2">
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
