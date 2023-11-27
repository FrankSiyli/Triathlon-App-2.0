"use client";
import React, { useState } from "react";
import PlanComponent from "./components/PlanComponent";
import Image from "next/image";

function PlansView() {
  const [activeComponent, setActiveComponent] = useState("plans");

  const handlePlanTypeClick = (planType) => {
    setActiveComponent(planType);
  };

  const planTypes = [
    {
      type: "triathlonPlans",
      name: "Triathlon",
      label: "Triathlonpläne",
      imageSrc: "/images/triathlonImage.jpg",
    },
    {
      type: "runPlans",
      name: "Laufen",
      label: "Laufpläne",
      imageSrc: "/images/runImage.jpg",
    },
    {
      type: "swimPlans",
      name: "Schwimmen",
      label: "Schwimmpläne",
      imageSrc: "/images/swimImage.jpg",
    },
    {
      type: "specialPlans",
      name: "Spezial",
      label: "Spezialpläne",
      imageSrc: "/images/specialImage.jpg",
    },
  ];

  return (
    <>
      {activeComponent === "plans" && (
        <div className=" mx-auto  text-center mt-5 mb-10">
          <span>Pläne</span>
        </div>
      )}

      {activeComponent === "plans" && (
        <div className="flex flex-col mx-auto max-w-xl relative h-auto w-full overflow-y-auto max-h-screen ">
          {planTypes.map((plan) => (
            <button
              key={plan.type}
              className="relative text-center h-12 w-full max-w-xl shadow-md p-2 rounded-md  my-1 "
              onClick={() => handlePlanTypeClick(plan.type)}
            >
              <Image
                className="h-12 object-cover absolute left-0 top-0 rounded-l-sm"
                src={plan.imageSrc}
                alt="siyli app"
                width={80}
                height={80}
              />
              <div className="h-12 absolute left-0 top-0 w-20 rounded-sm bg-gradient-to-b from-transparent via-transparent via-70% to-background z-40"></div>

              <p> {plan.name}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="absolute w-5 h-5 right-7 top-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          ))}
          {/* <button
            className="relative text-center h-12 w-full max-w-xl shadow-md p-2 rounded-md  my-1 "
            onClick={() => handlePlanTypeClick("runPlans")}
          >
            <Image
              className="h-12 object-cover absolute left-0 top-0 rounded-l-sm"
              src="/images/runImage.jpg"
              alt="siyli app"
              width={80}
              height={80}
            />
            <div className="h-12 absolute left-0 top-0 w-20 rounded-sm bg-gradient-to-b from-transparent via-transparent via-70% to-background z-40"></div>

            <p> Laufpläne</p>
            <svg
              xmlns="http://w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute w-5 h-5 right-7 top-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <button
            className="relative text-center h-12 w-full max-w-xl shadow-md p-2 rounded-md  my-1 "
            onClick={() => handlePlanTypeClick("swimPlans")}
          >
            <Image
              className="h-12 object-cover absolute left-0 top-0 rounded-l-sm"
              src="/images/swimImage.jpg"
              alt="siyli app"
              width={80}
              height={80}
            />
            <div className="h-12 absolute left-0 top-0 w-20 rounded-sm bg-gradient-to-b from-transparent via-transparent via-70% to-background z-40"></div>

            <p> Schwimmpläne</p>
            <svg
              xmlns="http://w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute w-5 h-5 right-7 top-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <button
            className="relative text-center h-12 w-full max-w-xl shadow-md p-2 rounded-md  my-1 "
            onClick={() => handlePlanTypeClick("specialPlans")}
          >
            <Image
              className="h-12 object-cover absolute left-0 top-0 rounded-l-sm"
              src="/images/specialImage.jpg"
              alt="siyli app"
              width={80}
              height={80}
            />
            <div className="h-12 absolute left-0 top-0 w-20 rounded-sm bg-gradient-to-b from-transparent via-transparent via-70% to-background z-40"></div>

            <p> Spezialpläne</p>
            <svg
              xmlns="http://w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute w-5 h-5 right-7 top-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button> */}
        </div>
      )}

      {activeComponent === "runPlans" && (
        <PlanComponent
          title="Laufpläne"
          apiEndpoint="/api/trainingPlans/fetchRunPlans"
          setShowPlans={() => handlePlanTypeClick("plans")}
        />
      )}
      {activeComponent === "specialPlans" && (
        <PlanComponent
          title="Spezialpläne"
          apiEndpoint="/api/trainingPlans/fetchSpecialPlans"
          setShowPlans={() => handlePlanTypeClick("plans")}
        />
      )}
      {activeComponent === "swimPlans" && (
        <PlanComponent
          title="Schwimmpläne"
          apiEndpoint="/api/trainingPlans/fetchSwimPlans"
          setShowPlans={() => handlePlanTypeClick("plans")}
        />
      )}
      {activeComponent === "triathlonPlans" && (
        <PlanComponent
          title="Triathlonpläne"
          apiEndpoint="/api/trainingPlans/fetchTriathlonPlans"
          setShowPlans={() => handlePlanTypeClick("plans")}
        />
      )}
    </>
  );
}

export default PlansView;
