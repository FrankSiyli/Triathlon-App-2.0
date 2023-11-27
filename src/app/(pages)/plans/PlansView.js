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
      imageSrc: "/images/triathlonImage.jpg",
    },
    {
      type: "runPlans",
      name: "Laufen",
      imageSrc: "/images/runImage.jpg",
    },
    {
      type: "swimPlans",
      name: "Schwimmen",
      imageSrc: "/images/swimImage.jpg",
    },
    {
      type: "specialPlans",
      name: "Spezial",
      imageSrc: "/images/specialImage.jpg",
    },
  ];

  return (
    <>
      {activeComponent === "plans" && (
        <>
          <div className="mx-auto text-center h-10 mt-3 mb-10 rounded-sm px-3 py-1 z-40 bg-gradient-to-b from-transparent  to-background ">
            <span>Pläne</span>
          </div>
          <Image
            className="absolute top-0 right-0 h-12 w-full z-10 object-cover object-top"
            src="/images/triathlonImage_4.jpg"
            alt="sport image"
            quality={100}
            width={600}
            height={600}
          />
          <div className="h-12 absolute right-0 top-0 w-full  bg-gradient-to-b from-transparent via-transparent via-70% to-background z-40"></div>
          <div className="h-12 absolute right-0 top-0 w-full  bg-gradient-to-l from-transparent via-transparent via-70% to-background z-40"></div>
          <div className="h-12 absolute right-0 top-0 w-full  bg-gradient-to-r from-transparent via-transparent via-70% to-background z-40"></div>
        </>
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
              <div className="h-12 absolute left-0 top-0 w-20  bg-gradient-to-b from-transparent via-transparent via-70% to-background z-40"></div>
              <div className="h-12 absolute left-0 top-0 w-20  bg-gradient-to-r from-transparent via-transparent via-70% to-background z-40"></div>

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
        </div>
      )}

      {activeComponent === "runPlans" && (
        <PlanComponent
          title="Laufpläne"
          apiEndpoint="/api/trainingPlans/fetchRunPlans"
          setShowPlans={() => handlePlanTypeClick("plans")}
          image="/images/runImage.jpg"
        />
      )}
      {activeComponent === "specialPlans" && (
        <PlanComponent
          title="Spezialpläne"
          apiEndpoint="/api/trainingPlans/fetchSpecialPlans"
          setShowPlans={() => handlePlanTypeClick("plans")}
          image="/images/specialImage.jpg"
        />
      )}
      {activeComponent === "swimPlans" && (
        <PlanComponent
          title="Schwimmpläne"
          apiEndpoint="/api/trainingPlans/fetchSwimPlans"
          setShowPlans={() => handlePlanTypeClick("plans")}
          image="/images/swimImage.jpg"
        />
      )}
      {activeComponent === "triathlonPlans" && (
        <PlanComponent
          title="Triathlonpläne"
          apiEndpoint="/api/trainingPlans/fetchTriathlonPlans"
          setShowPlans={() => handlePlanTypeClick("plans")}
          image="/images/triathlonImage.jpg"
        />
      )}
    </>
  );
}

export default PlansView;
