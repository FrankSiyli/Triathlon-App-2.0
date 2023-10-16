"use client";
import React, { useState } from "react";
import Plans from "./components/Plans";
import RunPlans from "./components/RunPlans";
import SpecialPlans from "./components/SpecialPlans";
import SwimPlans from "./components/SwimPlans";
import TriathlonPlans from "./components/TriathlonPlans";

function PlansView() {
  const [showPlans, setShowPlans] = useState(true);
  const [showTriathlonPlans, setShowTriathlonPlans] = useState(false);
  const [showRunPlans, setShowRunPlans] = useState(false);
  const [showSwimPlans, setShowSwimPlans] = useState(false);
  const [showSpecialPlans, setShowSpecialPlans] = useState(false);

  const handleTriathlonPlansClick = () => {
    setShowTriathlonPlans(true);
    setShowRunPlans(false);
    setShowSwimPlans(false);
    setShowSpecialPlans(false);
    setShowPlans(false);
  };

  const handleRunPlansClick = () => {
    setShowRunPlans(true);
    setShowTriathlonPlans(false);
    setShowSwimPlans(false);
    setShowSpecialPlans(false);
    setShowPlans(false);
  };

  const handleSwimPlansClick = () => {
    setShowSwimPlans(true);
    setShowTriathlonPlans(false);
    setShowRunPlans(false);
    setShowSpecialPlans(false);
    setShowPlans(false);
  };

  const handleSpecialPlansClick = () => {
    setShowSpecialPlans(true);
    setShowTriathlonPlans(false);
    setShowRunPlans(false);
    setShowSwimPlans(false);
    setShowPlans(false);
  };

  return (
    <>
      {showPlans && (
        <div className=" flex flex-col items-center  mt-5 gap-1  max-w-xl w-screen ">
          <p>Pläne</p>
          <button
            className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
            onClick={handleTriathlonPlansClick}
          >
            <div className="ml-5"> Triathlonpläne</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
            className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
            onClick={handleRunPlansClick}
          >
            <div className="ml-5"> Laufpläne</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
            className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
            onClick={handleSwimPlansClick}
          >
            <div className="ml-5"> Schwimmpläne</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
            className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
            onClick={handleSpecialPlansClick}
          >
            <div className="ml-5"> Spezialpläne</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
        </div>
      )}
      {showRunPlans && (
        <RunPlans
          setShowRunPlans={setShowRunPlans}
          setShowPlans={setShowPlans}
        />
      )}
      {showSpecialPlans && (
        <SpecialPlans
          setShowSpecialPlans={setShowSpecialPlans}
          setShowPlans={setShowPlans}
        />
      )}
      {showSwimPlans && (
        <SwimPlans
          setShowSwimPlans={setShowSwimPlans}
          setShowPlans={setShowPlans}
        />
      )}
      {showTriathlonPlans && (
        <TriathlonPlans
          setShowPlans={setShowPlans}
          setShowTriathlonPlans={setShowTriathlonPlans}
        />
      )}
    </>
  );
}

export default PlansView;
