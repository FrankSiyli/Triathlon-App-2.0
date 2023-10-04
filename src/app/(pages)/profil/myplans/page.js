"use client";
import Alert from "@/app/components/Alerts/Alert";
import BackButton from "@/app/components/Buttons/BackButton/BackButton";
import Loader from "@/app/components/Loader/Loader";
import NavBar from "@/app/components/NavBar/NavBar";
import { homepagePlanState } from "@/app/recoil/atoms/plans/homepagePlanState";
import { userEmailState } from "@/app/recoil/atoms/user/userEmailState";
import { getSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import EmptyUserPlansArray from "./components/EmptyUserPlansArray";
import FetchedUserPlans from "./components/FetchedUserPlans";

function Page() {
  const [expandedPlanIndex, setExpandedPlanIndex] = useState(null);
  const [homepagePlan, setHomepagePlan] = useRecoilState(homepagePlanState);
  const [showLoadOnHomepageToast, setShowLoadOnHomepageToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userEmail, setUserEmail] = useRecoilState(userEmailState);
  const [userPlans, setUserPlans] = useState([]);
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
        if (response.ok) {
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
  }, [setUserEmail]);

  return (
    <>
      <BackButton href="/profil" />
      <p className=" mx-auto w-40 text-center -mt-10">Meine Pläne</p>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <>
          {!isLoading && userPlans.length === 0 && (
            <EmptyUserPlansArray userPlans={userPlans} />
          )}
          {!isLoading && userPlans.length !== 0 && (
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
        </>
      )}

      {showLoadOnHomepageToast && <Alert alertText="Im Kalender geladen" />}
      <NavBar />
    </>
  );
}

export default Page;
