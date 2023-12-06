import { newPlanSportTypeState } from "@/app/recoil/atoms/planBuilder/newPlanSportTypeState";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

const ChooseSportCheckBoxes = () => {
  const [triathlonChecked, setTriathlonChecked] = useState(true);
  const [runChecked, setRunChecked] = useState(false);
  const [swimChecked, setSwimChecked] = useState(false);
  const [newPlanSportType, setNewPlanSportType] = useRecoilState(
    newPlanSportTypeState
  );

  const handleTriathlonClick = () => {
    setTriathlonChecked(true);
    setRunChecked(false);
    setSwimChecked(false);
    setNewPlanSportType("triathlon");
  };
  const handleRunClick = () => {
    setTriathlonChecked(false);
    setRunChecked(true);
    setSwimChecked(false);
    setNewPlanSportType("run");
  };
  const handleSwimClick = () => {
    setTriathlonChecked(false);
    setRunChecked(false);
    setSwimChecked(true);
    setNewPlanSportType("swim");
  };

  return (
    <>
      <div className="flex justify-between w-full max-w-xl shadow-md p-2 rounded-md">
        <p className="ml-5">Triathlon</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleTriathlonClick();
          }}
          className={`flex justify-center items-center border  rounded-md w-7 h-7 mr-5 ${
            triathlonChecked ? "border-alert" : "border-alert/50"
          }`}
        >
          {triathlonChecked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-alert "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          ) : null}
        </button>
      </div>

      <div className="flex justify-between w-full max-w-xl shadow-md p-2 rounded-md">
        <p className="ml-5">Laufen</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleRunClick();
          }}
          className={`flex justify-center items-center border  rounded-md w-7 h-7 mr-5 ${
            runChecked ? "border-alert" : "border-alert/50"
          }`}
        >
          {runChecked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-alert m-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          ) : null}
        </button>
      </div>

      <div className="flex justify-between w-full max-w-xl shadow-md p-2 rounded-md">
        <p className="ml-5">Schwimmen</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSwimClick();
          }}
          className={`flex justify-center items-center border  rounded-md w-7 h-7 mr-5 ${
            swimChecked ? "border-alert" : "border-alert/50"
          }`}
        >
          {swimChecked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-alert m-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          ) : null}
        </button>
      </div>
    </>
  );
};

export default ChooseSportCheckBoxes;