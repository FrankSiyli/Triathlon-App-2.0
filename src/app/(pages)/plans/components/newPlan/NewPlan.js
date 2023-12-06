"use client";
import React, { useState } from "react";
import { v1 as uuidv1 } from "uuid";
import Alert from "@/app/components/Alerts/Alert";
import Image from "next/image";
import WeekScrollButtons from "@/app/(pages)/calendar/components/WeekScrollButtons";
import { useCurrentWeek } from "@/app/(pages)/calendar/stateHooks/useCurrentWeek";
import { useRecoilState } from "recoil";
import { useOpenDay } from "@/app/(pages)/calendar/stateHooks/useOpenDay";
import { newPlanState } from "@/app/recoil/atoms/planBuilder/newPlanState";
import { newPlan } from "../../../../../../database/mockDb";
import Day from "@/app/(pages)/calendar/components/Day";
import Activity from "@/app/(pages)/calendar/components/Activity";
import { useOpenOverlay } from "@/app/(pages)/calendar/stateHooks/useOpenOverlay";

const NewPlan = ({ image, title, setShowPlans }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState("");
  const handleBackClick = () => {
    setShowPlans();
  };
  /*   const [newPlan, setNewPlan] = useRecoilState(newPlanState);
   */ const numberOfPlanWeeks = newPlan?.duration;
  const { openDay, toggleDay } = useOpenDay();
  const { openOverlay, toggleOverlay, activityIndex } = useOpenOverlay();

  const { currentWeek, handlePreviousWeekClick, handleNextWeekClick } =
    useCurrentWeek(newPlan, numberOfPlanWeeks, toggleDay);

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
      <p className="mx-auto text-center -mt-10">{title}</p>
      <Image
        className="absolute top-0 right-0 h-16 w-24 rounded-bl"
        src={image}
        alt="sport image"
        width={80}
        height={80}
      />
      <div className="h-16 absolute right-0 top-0 w-24  bg-gradient-to-l from-transparent via-transparent via-80% to-fifth z-10"></div>
      <div className="h-16 absolute right-0 top-0 w-24  bg-gradient-to-b from-transparent via-transparent via-80% to-fifth z-10"></div>
      {showAlert && <Alert alertText={error} setShowAlert={setShowAlert} />}

      <div className="mt-20 mx-auto w-full max-w-xl">
        <div className="flex justify-center ">
          <WeekScrollButtons
            currentWeek={currentWeek}
            numberOfPlanWeeks={numberOfPlanWeeks}
            handlePreviousWeekClick={handlePreviousWeekClick}
            handleNextWeekClick={handleNextWeekClick}
          />
          {/*  <button
            onClick={}
            className="absolute right-5  btn btn-sm btn-outline border border-alert flex content-center items-center text-first"
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button> */}
        </div>
        {newPlan?.weeks?.[0]?.sessions?.map((session, dayIndex) => (
          <div key={uuidv1()}>
            {session.day}
            {/*  <Day
              day={session.day}
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
            /> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default NewPlan;
