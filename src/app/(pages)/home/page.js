"use client";

import React from "react";
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
import { useRecoilValue } from "recoil";

import { homepagePlanState } from "@/app/recoil/atoms/plans/homepagePlanState";
import NoDataPush from "@/app/components/NoDataPush/NoDataPush";

function Page() {
  const data = useRecoilValue(homepagePlanState);

  const homepagePlan = data;
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
        <PlanName homepagePlan={homepagePlan} />
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
      <NoDataPush data={data} />
      <Footer />
    </>
  );
}

export default Page;
