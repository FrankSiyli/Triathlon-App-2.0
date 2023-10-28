"use client";
import React, { useEffect, useState } from "react";
import logo from "../../public/images/logoSmall.png";
import "./globals.css";
import Image from "next/image";
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
import Calendar from "./(pages)/calendar/Calendar";
import Alert from "./components/Alerts/Alert";

export default function Home() {
  const [homepagePlan, setHomepagePlan] = useRecoilState(homepagePlanState);
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
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
              `/api/user/fetchUserHeartRate?email=${session.user.email}`,
              setSavedHrMax
            );

            fetchUserData(
              `/api/user/fetchUserSwimTime?email=${session.user.email}`,
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
      setTimeout(() => {
        setShowAlert(true);
      }, 1000);
    };

    if (showConsent) {
      return null;
    }
    return (
      <div className=" fixed mx-auto z-50 bottom-0 left-0 right-0 flex flex-col gap-3 items-center text-center bg-background px-2 py-2 border border-alert rounded-md max-w-2xl">
        <p className="text-alert mt-5">Einfach trainieren mit der Siyli-App</p>
        <p className="text-alert">
          Finde deinen Trainingsplan und erreiche deine Ziele 🚀
        </p>
        <Image
          priority
          src={logo}
          alt="logo"
          className="mx-auto w-32 m-5"
          width={100}
          height={100}
        />{" "}
        <p className="text-center text-sm">
          Diese Website verwendet Cookies. Wenn du fortfährst, gehen wir davon
          aus, dass du damit einverstanden bist. Weitere Informationen findest
          du in unserer
          <span
            onClick={handlePolicyClick}
            className="underline cursor-pointer text-sm ml-1"
          >
            Datenschutzrichtlinie
          </span>
          .
        </p>
        <button
          className="btn btn-sm btn-outline text-alert m-3 py-2 px-6"
          onClick={() => acceptCookie()}
        >
          ok
        </button>
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

      {!showPrivacyPolicy && isClient && <Calendar />}
      {showPrivacyPolicy && isClient && (
        <div className="mx-5 overflow-y-auto max-h-screen">
          <button className="fixed top-0 left-0 z-50 h-16 w-full bg-background">
            <span
              onClick={handleBackClick}
              className="underline text-alert flex justify-start m-3 ml-5"
            >
              zurück
            </span>
          </button>
          <PrivacyPolicy />
        </div>
      )}
      {!showPrivacyPolicy && <CookieConsent />}
      {showAlert && (
        <Alert
          alertText="Um deine Pläne und Kalenderwerte zu speichern, melde dich an"
          setShowAlert={setShowAlert}
        />
      )}
    </div>
  );
}
