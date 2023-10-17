"use client";
import React, { useState } from "react";
import RunPlans from "./components/RunPlans";
import SpecialPlans from "./components/SpecialPlans";
import SwimPlans from "./components/SwimPlans";
import TriathlonPlans from "./components/TriathlonPlans";

function PlansView() {
  const [activeComponent, setActiveComponent] = useState("plans");

  const handlePlanTypeClick = (planType) => {
    setActiveComponent(planType);
  };

  return (
    <>
      {activeComponent === "plans" && (
        <div className=" mx-auto w-40 text-center mt-5 mb-10">
          <span>Pläne</span>
        </div>
      )}

      {activeComponent === "plans" && (
        <div className=" flex flex-col items-center  mt-5 gap-1  max-w-xl w-screen ">
          <button
            className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
            onClick={() => handlePlanTypeClick("triathlonPlans")}
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
            onClick={() => handlePlanTypeClick("runPlans")}
          >
            <div className="ml-5"> Laufpläne</div>
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
            className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
            onClick={() => handlePlanTypeClick("swimPlans")}
          >
            <div className="ml-5"> Schwimmpläne</div>
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
            className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
            onClick={() => handlePlanTypeClick("specialPlans")}
          >
            <div className="ml-5"> Spezialpläne</div>
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
        </div>
      )}

      {activeComponent === "runPlans" && (
        <RunPlans setShowPlans={() => handlePlanTypeClick("plans")} />
      )}
      {activeComponent === "specialPlans" && (
        <SpecialPlans setShowPlans={() => handlePlanTypeClick("plans")} />
      )}
      {activeComponent === "swimPlans" && (
        <SwimPlans setShowPlans={() => handlePlanTypeClick("plans")} />
      )}
      {activeComponent === "triathlonPlans" && (
        <TriathlonPlans setShowPlans={() => handlePlanTypeClick("plans")} />
      )}
    </>
  );
}

export default PlansView;
