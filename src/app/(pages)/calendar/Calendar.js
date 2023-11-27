"use client";
import React, { useEffect, useState } from "react";
import NavBar from "@/app/components/NavBar/NavBar";
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
import Image from "next/image";

function Calendar() {
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
  const { openOverlay, toggleOverlay, activityIndex } = useOpenOverlay();
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
          <div className="flex flex-col mx-auto max-w-xl relative w-full  overflow-y-auto max-h-screen  ">
            <PlansView />
            <span className="mb-40"></span>
          </div>
        )}

        {homepagePlan && showCalendar && (
          <>
            <div className="flex flex-col mx-auto max-w-xl relative w-full overflow-y-auto max-h-screen bg-background/90">
              <Image
                className="absolute top-0 right-0 h-12 w-full z-10 object-cover object-center"
                src="/images/triathlonImage_3.jpg"
                alt="sport image"
                quality={100}
                priority
                width={600}
                height={600}
              />
              <div className="h-12 absolute right-0 top-0 w-full  bg-gradient-to-b from-transparent via-transparent via-70% to-background z-10"></div>

              <div className="mx-auto text-center h-10 mt-4 mb-10 rounded-sm px-3 py-1 z-20 bg-gradient-to-b from-transparent  to-background ">
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
                      activity={activity}
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
                          currentWeek={currentWeek}
                          openDay={openDay}
                          activitiesByDay={activitiesByDay}
                          initialOpen={openOverlay.includes(
                            dayIndex * 1000 + activityIndex
                          )}
                        />
                      ))}
                  </div>
                ))}
              <span className="mb-40"></span>
            </div>
          </>
        )}

        {showProfil && (
          <div className="flex flex-col mx-auto max-w-xl relative w-full overflow-y-auto max-h-screen ">
            <ProfilView />
            <span className="mb-40"></span>
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

export default Calendar;
