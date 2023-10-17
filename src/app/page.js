"use client";
import React, { useEffect, useState } from "react";
import logo from "../../public/images/logoSmall.png";
import "./globals.css";
import Image from "next/image";
import SiyliApp from "./(pages)/home/SiyliApp";
import { homepagePlanState } from "./recoil/atoms/plans/homepagePlanState";
import { savedSwimTimeState } from "./recoil/atoms/user/savedSwimTimeState";
import { savedHrMaxState } from "./recoil/atoms/user/savedHrMaxState";
import { userEmailState } from "./recoil/atoms/user/userEmailState";
import { userNameState } from "./recoil/atoms/user/userNameState";
import { useRecoilState } from "recoil";
import { loggedInUserLastLoadedPlanState } from "./recoil/atoms/user/loggedInUserLastLoadedPlanState";
import { lastLoadedPlanState } from "./recoil/atoms/user/lastLoadedPlanState";
import { getSession } from "next-auth/react";
import { examplePlan } from "../../database/mockDb";

export default function Home() {
  const [homepagePlan, setHomepagePlan] = useRecoilState(homepagePlanState);
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useRecoilState(userNameState);
  const [userEmail, setUserEmail] = useRecoilState(userEmailState);
  const [savedSwimTime, setSavedSwimTime] = useRecoilState(savedSwimTimeState);
  const [savedHrMax, setSavedHrMax] = useRecoilState(savedHrMaxState);
  const [loggedInUserLastLoadedPlan, setLoggedInUserLastLoadedPlan] =
    useRecoilState(loggedInUserLastLoadedPlanState);
  const [lastLoadedPlan, setLastLoadedPlan] =
    useRecoilState(lastLoadedPlanState);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (typeof window !== "undefined") {
      const fetchData = async () => {
        const session = await getSession();
        if (!session) {
          if (lastLoadedPlan) {
            setHomepagePlan(lastLoadedPlan);
          } else {
            setHomepagePlan(examplePlan);
          }
        } else {
          if (loggedInUserLastLoadedPlan) {
            setHomepagePlan(loggedInUserLastLoadedPlan);
          } else if (lastLoadedPlan) {
            setHomepagePlan(lastLoadedPlan);
          } else {
            setHomepagePlan(examplePlan);
          }

          setUserEmail(session.user.email);
          setUserName(session.user.name);

          try {
            const fetchUserData = async (url, setStateFunction) => {
              const response = await fetch(url, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
              });

              if (response.ok) {
                const data = await response.json();
                setStateFunction(data);
              } else {
                console.error(`Failed to fetch data from ${url}`);
              }
            };

            fetchUserData(
              `/api/mongoDbFetchUserHeartRate?email=${session.user.email}`,
              setSavedHrMax
            );

            fetchUserData(
              `/api/mongoDbFetchUserSwimTime?email=${session.user.email}`,
              setSavedSwimTime
            );
          } catch (error) {
            console.error("An error occurred:", error);
          }
        }

        setIsLoading(false);
      };
      fetchData();
    }
  }, [
    setHomepagePlan,
    lastLoadedPlan,
    loggedInUserLastLoadedPlan,
    setUserName,
    setSavedHrMax,
    setSavedSwimTime,
    setUserEmail,
  ]);
  return (
    <div className="">
      {isLoading && (
        <div className="flex flex-col justify-center items-center w-screen h-screen">
          <Image
            src={logo}
            alt="hero-image"
            className=" h-auto w-40 xl-w-60 md-w-60 object-contain m-10 "
            priority
            width={200}
            height={200}
          />
          <span className="loading loading-ring loading-sm"></span>
        </div>
      )}
      {isClient && <SiyliApp />}
    </div>
  );
}
