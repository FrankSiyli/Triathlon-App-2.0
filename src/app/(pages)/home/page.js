"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/app/components/NavBar/NavBar";
import "../../globals.css";
import { v1 as uuidv1 } from "uuid";
import WeekScrollButtons from "./components/WeekScrollButtons";
import Day from "./components/Day";
import SessionOverlay from "./components/SessionOverlay/SessionOverlay";
import { useOpenOverlay } from "./stateHooks/useOpenOverlay";
import { useOpenDay } from "./stateHooks/useOpenDay";
import { useCurrentWeek } from "./stateHooks/useCurrentWeek";
import { useActivitiesByDay } from "./logicFunctions/useActivitiesByDay";
import Activity from "./components/Activity";
import PlanName from "./components/PlanName";
import MobileHint from "./components/HintsAndAlerts/MobileHint";
import { useRecoilState } from "recoil";
import { homepagePlanState } from "@/app/recoil/atoms/plans/homepagePlanState";
import { getSession } from "next-auth/react";
import { savedHrMaxState } from "@/app/recoil/atoms/user/savedHrMaxState";
import { userEmailState } from "@/app/recoil/atoms/user/userEmailState";
import Loader from "@/app/components/Loader/Loader";
import { savedSwimTimeState } from "@/app/recoil/atoms/user/savedSwimTimeState";
import { userNameState } from "@/app/recoil/atoms/user/userNameState";
import { loggedInUserLastLoadedPlanState } from "@/app/recoil/atoms/user/loggedInUserLastLoadedPlanState";
import { examplePlan } from "../../../../database/mockDb";

function Page() {
  const [homepagePlan, setHomepagePlan] = useRecoilState(homepagePlanState);
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useRecoilState(userNameState);
  const [userEmail, setUserEmail] = useRecoilState(userEmailState);
  const [savedSwimTime, setSavedSwimTime] = useRecoilState(savedSwimTimeState);
  const [savedHrMax, setSavedHrMax] = useRecoilState(savedHrMaxState);
  const [lastLoadedPlan, setLastLoadedPlan] = useRecoilState(
    loggedInUserLastLoadedPlanState
  );

  useEffect(() => {
    setIsLoading(true);
    const fetchSessionData = async () => {
      const session = await getSession();
      return session;
    };

    (async () => {
      const session = await fetchSessionData();
      setHomepagePlan(examplePlan);
      if (lastLoadedPlan.length !== 0) {
        setHomepagePlan(lastLoadedPlan);
      }
      if (session) {
        console.log("session");
        setUserEmail(session.user.email);
        setUserName(session.user.name);
        try {
          const heartRateResponse = await fetch(
            `/api/mongoDbFetchUserHeartRate?email=${session.user.email}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (heartRateResponse.ok) {
            const fetchedHrMax = await heartRateResponse.json();
            setSavedHrMax(fetchedHrMax);
          } else {
            console.error("Failed to fetch user hrmax");
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
        try {
          const swimTimeResponse = await fetch(
            `/api/mongoDbFetchUserSwimTime?email=${session.user.email}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (swimTimeResponse.ok) {
            const fetchedSwimTime = await swimTimeResponse.json();
            setSavedSwimTime(fetchedSwimTime);
          } else {
            console.error("Failed to fetch user hrmax");
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
      }
      setIsLoading(false);
    })();
  }, [
    setHomepagePlan,
    lastLoadedPlan,
    homepagePlan,
    setUserEmail,
    setUserName,
    setSavedHrMax,
    setSavedSwimTime,
  ]);

  const numberOfPlanWeeks = homepagePlan?.duration;
  const { openOverlay, toggleOverlay } = useOpenOverlay();
  const { openDay, toggleDay } = useOpenDay();

  const { currentWeek, handleBackClick, handleNextClick } = useCurrentWeek(
    homepagePlan,
    numberOfPlanWeeks,
    toggleDay
  );
  const currentWeekSessions = homepagePlan?.weeks?.[currentWeek]?.sessions;
  const activitiesByDay = useActivitiesByDay(currentWeekSessions);

  return (
    <>
      <MobileHint />
      <div className="flex flex-col mx-auto max-w-xl relative h-auto  w-screen mb-20 ">
        {isLoading ? null : (
          <>
            <PlanName homepagePlan={homepagePlan} />
            <WeekScrollButtons
              currentWeek={currentWeek}
              numberOfPlanWeeks={numberOfPlanWeeks}
              handleBackClick={handleBackClick}
              handleNextClick={handleNextClick}
            />
          </>
        )}
        {isLoading ? (
          <Loader isLoading={isLoading} />
        ) : (
          activitiesByDay &&
          activitiesByDay.map(([day, activity], dayIndex) => (
            <div key={uuidv1()}>
              <Day
                day={day}
                toggleDay={toggleDay}
                dayIndex={dayIndex}
                openDay={openDay}
              />

              <Activity
                openDay={openDay}
                dayIndex={dayIndex}
                activity={activity}
                toggleOverlay={toggleOverlay}
              />
            </div>
          ))
        )}
        {activitiesByDay &&
          activitiesByDay.map(([day, activity], dayIndex) => (
            <div key={dayIndex}>
              {openDay === dayIndex &&
                activity.map((singleActivity, activityIndex) => (
                  <SessionOverlay
                    key={activityIndex}
                    singleActivity={singleActivity}
                    dayIndex={dayIndex}
                    activityIndex={activityIndex}
                    openOverlay={openOverlay}
                    toggleOverlay={toggleOverlay}
                    homepagePlan={homepagePlan}
                    initialOpen={openOverlay.includes(
                      dayIndex * 1000 + activityIndex
                    )}
                  />
                ))}
            </div>
          ))}
      </div>

      <Footer />
    </>
  );
}

export default Page;
