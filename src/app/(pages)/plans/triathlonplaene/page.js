"use client";
import BackButton from "@/app/components/Buttons/BackButton/BackButton";
import NavBar from "@/app/components/NavBar/NavBar";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { homepagePlanState } from "@/app/recoil/atoms/plans/homepagePlanState";
import { myPlansState } from "@/app/recoil/atoms/plans/myPlansState";
import Alert from "@/app/components/Alerts/Alert";
import { triathlonPlansFromMongoDbState } from "@/app/recoil/atoms/plans/triathlonPlansFromMongoDbState";

const Page = () => {
  const data = useRecoilValue(triathlonPlansFromMongoDbState);
  const triathlonPlans = data?.plans;
  const [expandedPlanIndex, setExpandedPlanIndex] = useState(null);
  const [homepagePlan, setHomepagePlan] = useRecoilState(homepagePlanState);
  const [myPlans, setMyPlans] = useRecoilState(myPlansState);
  const [showToast, setShowToast] = useState(false);
  const handleInfoClick = (index) => {
    if (index === expandedPlanIndex) {
      setExpandedPlanIndex(null);
    } else {
      setExpandedPlanIndex(index);
    }
  };

  const handleLoadPlanClick = (event) => {
    const expandedPlan = triathlonPlans[expandedPlanIndex];
    setHomepagePlan(expandedPlan);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
    setMyPlans((prevPlans) => [...prevPlans, expandedPlan]);
    event.stopPropagation();
  };

  return (
    <>
      <BackButton href="/plans/searchplans" />
      <p className=" mx-auto w-40 text-center -mt-10">Triathlonpläne</p>

      <div className=" flex flex-col items-center  mt-10 gap-1  max-w-xl mx-5 ">
        {triathlonPlans?.map((triathlonPlan, triathlonPlanIndex) => {
          return (
            <div
              key={triathlonPlanIndex}
              className=" border border-first/50 w-full max-w-xl linear-background  shadow-xl p-2 rounded-md mx-5 my-1 "
            >
              <div
                onClick={() => handleInfoClick(triathlonPlanIndex)}
                className=" flex flex-row justify-between cursor-pointer"
              >
                <div className="ml-5">{triathlonPlan.name}</div>
                {expandedPlanIndex === triathlonPlanIndex ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </div>
              {expandedPlanIndex === triathlonPlanIndex && (
                <div className="mt-5 select-none ">
                  <hr />
                  <div className="m-3 mx-auto border border-first/50 p-1 w-24 text-sm text-center linear-background rounded-md shadow-xl">
                    Wochen: {triathlonPlan.duration}
                  </div>
                  <div className="font-light text-center">
                    {triathlonPlan.info}
                  </div>
                  <div
                    onClick={handleLoadPlanClick}
                    className="btn btn-sm flex mx-auto w-20 m-5 border border-first/50 bg-third  text-first shadow-xl "
                  >
                    Laden
                  </div>
                </div>
              )}
            </div>
          );
        })}
        {showToast && <Alert alertText="Auf Homepage geladen" />}
      </div>

      <NavBar />
    </>
  );
};

export default Page;
