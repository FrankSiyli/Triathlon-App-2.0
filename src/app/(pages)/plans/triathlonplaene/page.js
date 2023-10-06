"use client";
import BackButton from "@/app/components/Buttons/BackButton/BackButton";
import NavBar from "@/app/components/NavBar/NavBar";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { homepagePlanState } from "@/app/recoil/atoms/plans/homepagePlanState";
import Alert from "@/app/components/Alerts/Alert";
import { triathlonPlansFromMongoDbState } from "@/app/recoil/atoms/plans/triathlonPlansFromMongoDbState";
import useFetchTriathlonPlans from "@/app/fetchFunctions/useFetchTriathlonPlans";
import Loader from "../../../components/Loader/Loader";
import { getSession } from "next-auth/react";
import { loggedInUserLastLoadedPlanState } from "@/app/recoil/atoms/user/loggedInUserLastLoadedPlanState";

const Page = () => {
  const { isLoading, error } = useFetchTriathlonPlans();
  const data = useRecoilValue(triathlonPlansFromMongoDbState);
  const triathlonPlans = data?.plans;
  const [expandedPlanIndex, setExpandedPlanIndex] = useState(null);
  const [homepagePlan, setHomepagePlan] = useRecoilState(homepagePlanState);
  const [showToast, setShowToast] = useState(false);
  const [session, setSession] = useState(null);
  const [lastLoadedPlan, setLastLoadedPlan] = useRecoilState(
    loggedInUserLastLoadedPlanState
  );

  const handleInfoClick = (index) => {
    if (index === expandedPlanIndex) {
      setExpandedPlanIndex(null);
    } else {
      setExpandedPlanIndex(index);
    }
  };

  const handleLoadPlanClick = async (event) => {
    const session = await getSession();
    const expandedPlan = triathlonPlans[expandedPlanIndex];
    const triathlonPlanId = triathlonPlans.id;
    setHomepagePlan(expandedPlan);
    setLastLoadedPlan(expandedPlan);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
    event.stopPropagation();

    if (session) {
      setSession(session);
      setLastLoadedPlan(expandedPlan);
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
            id: triathlonPlanId,
          }),
        });
      } catch (error) {
        console.error("user update error triathlonplaene");
      }
    }
  };

  return (
    <>
      <BackButton href="/plans" />
      <p className=" mx-auto w-40 text-center -mt-10">Triathlonpläne</p>
      <Loader isLoading={isLoading} />
      <div className=" flex flex-col items-center  mt-10 gap-1  max-w-xl mx-5 ">
        {triathlonPlans?.map((triathlonPlan, triathlonPlanIndex) => {
          return (
            <div
              key={triathlonPlanIndex}
              className="w-full max-w-xl shadow-md p-2 rounded-md mx-5 my-1 "
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
                  <div className="m-3 mx-auto p-1 w-24 text-sm text-center">
                    <span> Wochen: {triathlonPlan.duration}</span>
                    <div className="flex">
                      <span> Preis: </span>
                      <span className="ml-1"> {triathlonPlan.price}</span>
                    </div>
                  </div>
                  <div className="font-light text-center">
                    {triathlonPlan.info}
                  </div>
                  <div
                    onClick={handleLoadPlanClick}
                    className="btn btn-sm flex mx-auto w-20 m-5 border border-transparent bg-third  text-first shadow-xl "
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
              session
                ? "Im Kalender und unter meine Pläne geladen"
                : "Im Kalender geladen"
            }
          />
        )}{" "}
      </div>
      <NavBar />
    </>
  );
};

export default Page;
