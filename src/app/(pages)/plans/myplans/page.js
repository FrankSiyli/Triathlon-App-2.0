"use client";
import Topalert from "@/app/components/Alerts/Topalert";
import BackButton from "@/app/components/Buttons/BackButton/BackButton";
import NavBar from "@/app/components/NavBar/NavBar";
import { homepagePlanState } from "@/app/recoil/atoms/plans/homepagePlanState";
import { myPlansState } from "@/app/recoil/atoms/plans/myPlansState";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

function Page() {
  const [myPlans, setMyPlans] = useRecoilState(myPlansState);
  const [expandedPlanIndex, setExpandedPlanIndex] = useState(null);
  const [homepagePlan, setHomepagePlan] = useRecoilState(homepagePlanState);
  const [showLoadOnHomepageToast, setShowLoadOnHomepageToast] = useState(false);
  const [showDeleteToast, setShowDeleteToast] = useState(false);
  const handleInfoClick = (index) => {
    if (index === expandedPlanIndex) {
      setExpandedPlanIndex(null);
    } else {
      setExpandedPlanIndex(index);
    }
  };

  const handleLoadPlanClick = (event) => {
    const expandedPlan = myPlans[expandedPlanIndex];
    setHomepagePlan(expandedPlan);
    setShowLoadOnHomepageToast(true);
    setTimeout(() => {
      setShowLoadOnHomepageToast(false);
    }, 2000);
    event.stopPropagation();
  };

  const handleRemovePlanClick = (expandedPlanIndex) => {
    setMyPlans((prevPlans) => {
      const updatedPlans = [...prevPlans];
      updatedPlans.splice(expandedPlanIndex, 1);
      setShowDeleteToast(true);
      setExpandedPlanIndex(null);
      setTimeout(() => {
        setShowDeleteToast(false);
      }, 2000);

      return updatedPlans;
    });
  };

  return (
    <>
      <BackButton href="/plans" />
      <p className=" mx-auto w-40 text-center -mt-10">Meine Pläne</p>
      {myPlans.length === 0 ? (
        <div className="border border-first/50 rounded-md p-2 text-center mt-20 mx-5">
          Es wurde noch kein Plan geladen
        </div>
      ) : (
        <div className=" flex flex-col items-center  mt-10 mb-20 gap-1  max-w-xl mx-5 ">
          {myPlans?.map((myPlan, myPlanIndex) => {
            return (
              <div
                key={myPlanIndex}
                className=" border border-first/50 w-full max-w-xl linear-background  shadow-xl p-2 rounded-md mx-5 my-1 "
              >
                <div
                  onClick={() => handleInfoClick(myPlanIndex)}
                  className=" flex flex-row justify-between cursor-pointer"
                >
                  <div className="ml-5">{myPlan.name}</div>
                  {expandedPlanIndex === myPlanIndex ? (
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
                {expandedPlanIndex === myPlanIndex && (
                  <div className="mt-5 select-none ">
                    <hr />
                    <div className="m-3 mx-auto border border-first/50 p-1 w-24 text-sm text-center linear-background rounded-md shadow-xl">
                      Wochen: {myPlan.duration}
                    </div>
                    <div className="font-light text-center">{myPlan.info}</div>
                    <div className="flex justify-between mt-20">
                      <div
                        onClick={() => {
                          handleRemovePlanClick(expandedPlanIndex);
                        }}
                        className="btn btn-sm flex  w-20 border border-first/50   text-first shadow-xl "
                      >
                        Löschen
                      </div>
                      <div
                        onClick={handleLoadPlanClick}
                        className="btn btn-sm flex  w-20  border border-first/50 bg-third  text-first shadow-xl "
                      >
                        Laden
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          {showLoadOnHomepageToast && (
            <Topalert topAlertText="Auf Homepage geladen" />
          )}

          {showDeleteToast && <Topalert topAlertText="Plan wurde gelöscht" />}
        </div>
      )}

      <NavBar />
    </>
  );
}

export default Page;
