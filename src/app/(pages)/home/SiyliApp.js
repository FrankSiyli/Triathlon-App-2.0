"use client";

import React, { useEffect, useState } from "react";
import NavBar from "@/app/components/NavBar/NavBar";
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
import { useRecoilState } from "recoil";
import { homepagePlanState } from "@/app/recoil/atoms/plans/homepagePlanState";
import PlansView from "../plans/PlansView";
import ProfilView from "../profil/ProfilView";

function SiyliApp() {
  const [homepagePlan, setHomepagePlan] = useRecoilState(homepagePlanState);
  const [showCalendar, setShowCalendar] = useState(true);
  const [showPlans, setShowPlans] = useState(false);
  const [showProfil, setShowProfil] = useState(false);

  useEffect(() => {
    const updateStateBasedOnScreenWidth = () => {
      if (window.innerWidth > 1024) {
        setShowCalendar(true);
        setShowPlans(true);
        setShowProfil(true);
      } else {
        setShowCalendar(true);
        setShowPlans(false);
        setShowProfil(false);
      }
    };
    updateStateBasedOnScreenWidth();
    window.addEventListener("resize", updateStateBasedOnScreenWidth);
    return () => {
      window.removeEventListener("resize", updateStateBasedOnScreenWidth);
    };
  }, []);

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
    <div className="sm:grid sm:grid-cols-1 md:grid md:grid-cols-1 lg:grid lg:grid-cols-3 gap-5">
      <>
        {showPlans && (
          <div className="flex flex-col mx-auto max-w-xl relative h-auto w-full mb-20 overflow-y-auto max-h-screen ">
            <PlansView />
          </div>
        )}

        {homepagePlan && showCalendar && (
          <div className="flex flex-col mx-auto max-w-xl relative h-auto w-full overflow-y-auto max-h-screen ">
            <div className="mx-auto mb-5 mt-3  text-first text-sm p-1 ">
              {homepagePlan?.name}
            </div>
            <WeekScrollButtons
              currentWeek={currentWeek}
              numberOfPlanWeeks={numberOfPlanWeeks}
              handleBackClick={handleBackClick}
              handleNextClick={handleNextClick}
            />

            {activitiesByDay &&
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
              ))}

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
        )}

        {showProfil && (
          <div className="flex flex-col mx-auto max-w-xl relative h-auto w-full mb-20 overflow-y-auto max-h-screen ">
            <ProfilView />
          </div>
        )}
      </>

      <NavBar
        showCalendar={showCalendar}
        setShowCalendar={setShowCalendar}
        showPlans={showPlans}
        setShowPlans={setShowPlans}
        showProfil={showProfil}
        setShowProfil={setShowProfil}
      />
    </div>
  );
}

export default SiyliApp;
