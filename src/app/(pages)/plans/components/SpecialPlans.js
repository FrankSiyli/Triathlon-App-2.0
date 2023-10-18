"use client";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { homepagePlanState } from "@/app/recoil/atoms/plans/homepagePlanState";
import Alert from "@/app/components/Alerts/Alert";
import Loader from "../../../components/Loader/Loader";
import useSWR from "swr";
import { getSession } from "next-auth/react";
import { loggedInUserLastLoadedPlanState } from "@/app/recoil/atoms/user/loggedInUserLastLoadedPlanState";
import { lastLoadedPlanState } from "@/app/recoil/atoms/user/lastLoadedPlanState";

const fetcher = (url) => fetch(url).then((res) => res.json());

function SpecialPlans({ setShowPlans }) {
  const { data, error, isLoading } = useSWR(
    "/api/mongoDbFetchSpecialPlans",
    fetcher
  );
  const specialPlans = data?.plans;
  const [expandedPlanIndex, setExpandedPlanIndex] = useState(null);
  const [homepagePlan, setHomepagePlan] = useRecoilState(homepagePlanState);
  const [showToast, setShowToast] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [, setIsLoading] = useState(false);
  const [loggedInUserLastLoadedPlan, setLoggedInUserLastLoadedPlan] =
    useRecoilState(loggedInUserLastLoadedPlanState);
  const [lastLoadedPlan, setLastLoadedPlan] =
    useRecoilState(lastLoadedPlanState);

  const handleInfoClick = (index) => {
    if (index === expandedPlanIndex) {
      setExpandedPlanIndex(null);
    } else {
      setExpandedPlanIndex(index);
    }
  };

  const handleLoadPlanClick = async (event) => {
    setIsLoading(true);
    const session = await getSession();
    const expandedPlan = specialPlans[expandedPlanIndex];
    const specialPlanId = specialPlans.id;
    setHomepagePlan(expandedPlan);
    setLastLoadedPlan(expandedPlan);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
    event.stopPropagation();

    if (session) {
      setIsLoggedIn(true);
      try {
        const userEmail = session.user.email;
        const updateUser = await fetch("/api/mongoDbUpdateUserTrainingPlans", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userEmail,
            trainingPlans: expandedPlan,
            id: specialPlanId,
          }),
        });
        if (updateUser) {
          setLoggedInUserLastLoadedPlan(expandedPlan);
        }
      } catch (error) {
        console.error("user update error spezialplaene");
      }
    }
    setIsLoading(false);
  };

  const handleBackClick = () => {
    setShowPlans();
  };

  return (
    <>
      <div className="w-screen max-w-xl mx-auto">
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
      <p className=" mx-auto text-center -mt-10">Spezialpläne</p>
      <Loader error={error} isLoading={isLoading} />
      {!isLoading && specialPlans.length === 0 && (
        <div className="border border-first/50 rounded-md p-2 text-center mt-20 mx-5">
          Es wurde noch kein Plan erstellt
        </div>
      )}

      {!isLoading && specialPlans.length !== 0 && (
        <div className=" flex flex-col items-center mt-10 gap-2  max-w-xl mx-5 ">
          {specialPlans?.map((specialPlan, specialPlanIndex) => {
            return (
              <div
                key={specialPlanIndex}
                className="w-full max-w-xl shadow-md p-2 rounded-md mx-5 my-1 last:mb-20 "
              >
                <div
                  onClick={() => handleInfoClick(specialPlanIndex)}
                  className=" flex flex-row justify-between cursor-pointer"
                >
                  <div className="ml-5">{specialPlan.name}</div>
                  {expandedPlanIndex === specialPlanIndex ? (
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
                {expandedPlanIndex === specialPlanIndex && (
                  <div className="mt-5 select-none ">
                    <hr />
                    <div className="m-3 mx-auto p-1 w-24 text-sm text-center">
                      <span> Wochen: {specialPlan.duration}</span>
                    </div>
                    <div className="font-light text-center">
                      {specialPlan.info}
                    </div>
                    <div
                      onClick={handleLoadPlanClick}
                      className="btn btn-sm flex mx-auto w-20 m-5 mb-20 border border-transparent bg-third  text-first shadow-xl "
                    >
                      Laden
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          {showToast && (
            <Alert
              alertText={
                isLoggedIn
                  ? "Im Kalender und unter meine Pläne geladen"
                  : "Im Kalender geladen"
              }
            />
          )}{" "}
        </div>
      )}
    </>
  );
}

export default SpecialPlans;
