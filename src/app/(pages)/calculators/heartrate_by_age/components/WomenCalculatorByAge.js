"use client";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { showWomenInputState } from "@/app/recoil/atoms/showWomenInputState";
import { showMenInputState } from "@/app/recoil/atoms/showMenInputState";
import Alert from "@/app/components/Alerts/Alert";

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
        className={`btn btn-sm bg-third text-first shadow-xl ml-5 border  ${
          showWomenInput
            ? "border-first border-b-2 border-t-transparent border-r-transparent border-l-transparent"
            : "border-transparent"
        }  `}
      >
        Damen
      </button>

      {showWomenInput && (
        <div className="mt-10 flex justify-center">
          <div className="  flex flex-col justify-center text-center ">
            <div>
              <input
                type="number"
                placeholder="Dein Alter z.B. 35"
                value={womenCalculatorInput}
                onChange={(e) => setWomenCalculatorInput(e.target.value)}
                onKeyDown={handleWomenKeyDown}
                className="input  border border-transparent "
              />
            </div>

            <p className="icon-text m-1">HRmax = 209-(0.9 x Alter) </p>
            {womenShowAlert && (
              <Alert alertText="Bitte trage dein Alter ein (0-100)" />
            )}
            <button
              onClick={handleWomenInputClick}
              className="btn btn-sm m-3  bg-third w-32 mx-auto border border-transparent text-first shadow-xl"
            >
              Berechnen
            </button>
            {womenCalculatedHr && (
              <div className="text-center m-3 p-2">
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
