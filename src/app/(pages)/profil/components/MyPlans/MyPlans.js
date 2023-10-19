"use client";
import Alert from "@/app/components/Alerts/Alert";
import Loader from "@/app/components/Loader/Loader";
import { homepagePlanState } from "@/app/recoil/atoms/plans/homepagePlanState";
import { userEmailState } from "@/app/recoil/atoms/user/userEmailState";
import { getSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import FetchedUserPlans from "./components/FetchedUserPlans";
import { loggedInUserLastLoadedPlanState } from "@/app/recoil/atoms/user/loggedInUserLastLoadedPlanState";

function MyPlans({ setShowProfil }) {
  const [expandedPlanIndex, setExpandedPlanIndex] = useState(null);
  const [homepagePlan, setHomepagePlan] = useRecoilState(homepagePlanState);
  const [showLoadOnHomepageToast, setShowLoadOnHomepageToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userEmail, setUserEmail] = useRecoilState(userEmailState);
  const [userPlans, setUserPlans] = useState([]);
  const [loggedInUserLastLoadedPlan, setLoggedInUserLastLoadedPlan] =
    useRecoilState(loggedInUserLastLoadedPlanState);

  useEffect(() => {
    const fetchUserPlans = async () => {
      setIsLoading(true);
      const session = await getSession();
      const fetchedUserEmail = session?.user.email;
      setUserEmail(fetchedUserEmail);
      try {
        const response = await fetch(
          `/api/mongoDbFetchUserPlans?email=${fetchedUserEmail}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response) {
          const plansData = await response.json();
          setUserPlans(plansData);
        } else {
          console.error("Failed to fetch user plans");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
      setIsLoading(false);
    };

    fetchUserPlans();
  }, [setUserEmail, loggedInUserLastLoadedPlan]);

  const handleBackClick = () => {
    setShowProfil();
  };

  return (
    <>
      <div className="w-full max-w-xl mx-auto">
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
      <p className=" mx-auto w-40 text-center -mt-10">Meine Pläne</p>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : userPlans.length === 0 ? (
        <div className="border border-first/50 rounded-md p-2 text-center mt-20 mx-5">
          Es wurde noch kein Plan geladen
        </div>
      ) : (
        <FetchedUserPlans
          expandedPlanIndex={expandedPlanIndex}
          setExpandedPlanIndex={setExpandedPlanIndex}
          userPlans={userPlans}
          setHomepagePlan={setHomepagePlan}
          setShowLoadOnHomepageToast={setShowLoadOnHomepageToast}
          userEmail={userEmail}
          setUserPlans={setUserPlans}
          setIsLoading={setIsLoading}
        />
      )}

      {showLoadOnHomepageToast && <Alert alertText="Im Kalender geladen" />}
    </>
  );
}

export default MyPlans;
