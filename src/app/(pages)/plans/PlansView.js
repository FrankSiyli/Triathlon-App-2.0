"use client";
import React, { useState } from "react";
import PlanComponent from "./components/PlanComponent";

function PlansView() {
  const [activeComponent, setActiveComponent] = useState("plans");

  const handlePlanTypeClick = (planType) => {
    setActiveComponent(planType);
  };

  return (
    <>
      {activeComponent === "plans" && (
        <div className=" mx-auto  text-center mt-5 mb-10">
          <span>Pläne</span>
        </div>
      )}

      {activeComponent === "plans" && (
        <div className="flex flex-col mx-auto max-w-xl relative h-auto w-full  mb-20 overflow-y-auto max-h-screen ">
          <button
            className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md  my-1 "
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
            className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md  my-1 "
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
            className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md  my-1 "
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
            className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md  my-1 "
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
        <PlanComponent
          title="Laufpläne"
          apiEndpoint="/api/mongoDbFetchRunPlans"
          setShowPlans={() => handlePlanTypeClick("plans")}
        />
      )}
      {activeComponent === "specialPlans" && (
        <PlanComponent
          title="Spezialpläne"
          apiEndpoint="/api/mongoDbFetchSpecialPlans"
          setShowPlans={() => handlePlanTypeClick("plans")}
        />
      )}
      {activeComponent === "swimPlans" && (
        <PlanComponent
          title="Schwimmpläne"
          apiEndpoint="/api/mongoDbFetchSwimPlans"
          setShowPlans={() => handlePlanTypeClick("plans")}
        />
      )}
      {activeComponent === "triathlonPlans" && (
        <PlanComponent
          title="Triathlonpläne"
          apiEndpoint="/api/mongoDbFetchTriathlonPlans"
          setShowPlans={() => handlePlanTypeClick("plans")}
        />
      )}
    </>
  );
}

export default PlansView;
