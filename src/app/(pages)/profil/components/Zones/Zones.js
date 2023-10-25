"use client";
import { showHrInputState } from "@/app/recoil/atoms/showHrInputState";
import { showSwimTimeInputState } from "@/app/recoil/atoms/showSwimTimeInputState";
import React from "react";
import { useRecoilState } from "recoil";
import HeartrateCalculator from "./components/HeartrateCalculator";
import SwimTimeCalculator from "./components/SwimTimeCalculator";

function Zones({ setShowProfil }) {
  const [showHrInput, setShowHrInput] = useRecoilState(showHrInputState);
  const [showSwimTimeInput, setShowSwimTimeInput] = useRecoilState(
    showSwimTimeInputState
  );

  const handleHrClick = () => {
    setShowHrInput(!showHrInput);
    setShowSwimTimeInput(false);
  };
  const handleSwimTimeClick = () => {
    setShowSwimTimeInput(!showSwimTimeInput);
    setShowHrInput(false);
  };
  const handleBackClick = () => {
    setShowProfil();
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
      <p className=" mx-auto w-40 text-center -mt-10">Kalenderwerte</p>

      <div className="w-11/12 max-w-xl mt-10 mx-auto flex flex-col gap-2 justify-center content-center ">
        <div className="border border-first/50 rounded-md text-center p-3 linear-background ">
          Gib deine Werte an, um persönliche Werte im Kalender zu erhalten.
        </div>
      </div>

      <div className="relative max-w-xl w-full mt-5">
        <button
          onClick={handleHrClick}
          className="flex justify-between w-full max-w-xl shadow-md p-2 rounded-md  my-1 "
        >
          <div className="ml-5"> Maximalpuls</div>
          <svg
            xmlns="http://w3.org/2000/svg"
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
          onClick={handleSwimTimeClick}
          className="flex justify-between w-full max-w-xl shadow-md p-2 rounded-md  my-1 "
        >
          <div className="ml-5"> Schwimmzeit</div>
          <svg
            xmlns="http://w3.org/2000/svg"
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
        {showHrInput && <HeartrateCalculator />}
        {showSwimTimeInput && <SwimTimeCalculator />}
      </div>
    </>
  );
}

export default Zones;
