"use client";
import React from "react";
import Footer from "@/app/components/NavBar/NavBar";
import "../../globals.css";
import { v1 as uuidv1 } from "uuid";
import WeekScrollButtons from "./components/WeekScrollButtons";
import Day from "./components/Day";
import SessionOverlay from "./components/SessionOverlay";
import { useOpenOverlay } from "./stateHooks/useOpenOverlay";
import { useOpenDay } from "./stateHooks/useOpenDay";
import { useCurrentWeek } from "./stateHooks/useCurrentWeek";
import { useActivitiesByDay } from "./logicFunctions/useActivitiesByDay";
import Activity from "./components/Activity";
import PlanName from "./components/PlanName";
import MobileHint from "./components/MobileHint";
import Image from "next/image";
import logo from "../../../../public/images/logoSmall.png";
import { useRecoilValue } from "recoil";
import { dataFromMongoDbState } from "@/app/recoil/atoms/dataFromMongoDbState";

function Page() {
  const data = useRecoilValue(dataFromMongoDbState);
  const userPlans = data?.plans;
  const numberOfPlanWeeks = userPlans?.[0]?.sessions.map((weekIndex) =>
    parseInt(weekIndex)
  );

  const { openOverlay, toggleOverlay } = useOpenOverlay();
  const { openDay, toggleDay } = useOpenDay();
  const { currentWeek, handleBackClick, handleNextClick } = useCurrentWeek(
    userPlans?.[0].sessions.map((weekIndex) => parseInt(weekIndex))
  );

  const currentWeekSessions =
    userPlans?.[0]?.sessions[currentWeek - 1].sessions;

  const activitiesByDay = useActivitiesByDay(currentWeekSessions);

  return (
    <>
      <MobileHint />
      <div className="flex flex-col mx-auto max-w-xl relative h-auto  w-screen mb-20 ">
        <Image
          priority
          src={logo}
          alt="logo"
          className="mt-3  ml-3 absolute w-auto"
          width={55}
          height={55}
        />
        <PlanName userPlans={userPlans} />
        <WeekScrollButtons
          currentWeek={currentWeek}
          numberOfPlanWeeks={numberOfPlanWeeks}
          handleBackClick={handleBackClick}
          handleNextClick={handleNextClick}
        />

        {activitiesByDay &&
          activitiesByDay.map(([day, activity], dayIndex) => (
            <div key={uuidv1()}>
              <Day day={day} toggleDay={toggleDay} dayIndex={dayIndex} />

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
            <div className=" " key={dayIndex}>
              {openDay === dayIndex &&
                activity.map((singleActivity, activityIndex) => (
                  <SessionOverlay
                    key={activityIndex}
                    singleActivity={singleActivity}
                    dayIndex={dayIndex}
                    activityIndex={activityIndex}
                    openOverlay={openOverlay}
                    toggleOverlay={toggleOverlay}
                    userPlans={userPlans[0]}
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
