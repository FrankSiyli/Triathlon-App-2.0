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
import { getSession } from "next-auth/react";
import { examplePlan } from "../../database/mockDb";
import { hasCookie, setCookie } from "cookies-next";
import PrivacyPolicy from "./(pages)/profil/components/legal/PrivacyPolicy";

export default function Home() {
  const [homepagePlan, setHomepagePlan] = useRecoilState(homepagePlanState);
  const [isLoading, setIsLoading] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [userName, setUserName] = useRecoilState(userNameState);
  const [userEmail, setUserEmail] = useRecoilState(userEmailState);
  const [savedSwimTime, setSavedSwimTime] = useRecoilState(savedSwimTimeState);
  const [savedHrMax, setSavedHrMax] = useRecoilState(savedHrMaxState);
  const [loggedInUserLastLoadedPlan, setLoggedInUserLastLoadedPlan] =
    useRecoilState(loggedInUserLastLoadedPlanState);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (isClient) {
      const fetchData = async () => {
        const session = await getSession();
        if (session) {
          if (loggedInUserLastLoadedPlan.length !== 0) {
            setHomepagePlan(loggedInUserLastLoadedPlan);
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
        } else {
          setHomepagePlan(examplePlan);
        }

        setIsLoading(false);
      };
      fetchData();
    }
  }, [
    setHomepagePlan,

    loggedInUserLastLoadedPlan,
    setUserName,
    setSavedHrMax,
    setSavedSwimTime,
    setUserEmail,
    isClient,
  ]);

  const handlePolicyClick = () => {
    setShowPrivacyPolicy(true);
  };
  const handleBackClick = () => {
    setShowPrivacyPolicy(false);
  };

  const CookieConsent = (props) => {
    const [showConsent, setShowConsent] = useState(true);

    useEffect(() => {
      setShowConsent(hasCookie("localConsent"));
    }, []);

    const acceptCookie = () => {
      setShowConsent(true);
      setCookie("localConsent", "true", {});
    };

    if (showConsent) {
      return null;
    }
    return (
      <div className=" fixed mx-auto z-50 bottom-0 left-0 right-0 flex flex-col gap-3 items-center bg-background/95 px-2 py-2 border border-alert rounded-md text-sm max-w-2xl">
        <button
          className="btn btn-sm btn-outline text-alert  py-2 px-6"
          onClick={() => acceptCookie()}
        >
          ok
        </button>
        <p className="text-center">
          Diese Website verwendet Cookies, um die Benutzererfahrung zu
          verbessern. Durch die Nutzung unserer Website stimmen Sie allen
          Cookies gemäß unserer Einwilligung zu.
        </p>
        <span onClick={handlePolicyClick} className="underline cursor-pointer">
          Datenschutz
        </span>
      </div>
    );
  };

  return (
    <div>
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
      {!showPrivacyPolicy && isClient && <SiyliApp />}
      {showPrivacyPolicy && isClient && (
        <div className="mx-10 overflow-y-auto max-h-screen ">
          <button className="fixed top-0 left-0 z-50 h-16 w-full bg-background">
            <span
              onClick={handleBackClick}
              className="underline text-alert flex justify-start m-3"
            >
              zurück
            </span>
          </button>
          <PrivacyPolicy />
        </div>
      )}
      {!showPrivacyPolicy && <CookieConsent />}
    </div>
  );
}
