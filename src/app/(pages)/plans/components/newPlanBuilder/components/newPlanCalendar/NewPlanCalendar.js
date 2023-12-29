"use client";
import React from "react";
import Image from "next/image";
import WeekScrollButtons from "@/app/(pages)/calendar/components/WeekScrollButtons";
import { useRecoilState } from "recoil";
import { newPlanState } from "@/app/recoil/atoms/planBuilder/newPlanState";
import ArrowLeftSvg from "@/app/components/SVGs/arrows/ArrowLeftSvg";
import NewPlanWeekSchedule from "./components/NewPlanWeekSchedule";
import NewPlanAddWeekButton from "./components/NewPlanAddWeekButton";
import { useCurrentNewPlanWeek } from "@/app/(pages)/calendar/stateHooks/useCurrentNewPlanWeek";
import { useOpenNewPlanDay } from "@/app/(pages)/calendar/stateHooks/useOpenNewPlanDay";

const NewPlanCalendar = ({
  image,
  title,
  setShowPlans,
  setActiveComponent,
}) => {
  const [newPlan, setNewPlan] = useRecoilState(newPlanState);
  const numberOfPlanWeeks = newPlan?.weeks?.length;
  const { openDay, toggleDay } = useOpenNewPlanDay();

  console.log("NewPlanCalendar newPlan", newPlan);

  const { currentWeek, handlePreviousWeekClick, handleNextWeekClick } =
    useCurrentNewPlanWeek(newPlan, numberOfPlanWeeks, toggleDay);
  const handleBackClick = () => {
    setShowPlans();
  };

  return (
    <>
      <div className="w-full max-w-xl mx-auto">
        <button
          className="top-5 left-5 btn btn-ghost btn-sm m-3 border border-transparent text-first"
          onClick={handleBackClick}
        >
          <ArrowLeftSvg />
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
      <div className="h-16 absolute right-0 top-0 w-24 bg-gradient-to-l from-transparent via-transparent via-80% to-fifth z-10"></div>
      <div className="h-16 absolute right-0 top-0 w-24 bg-gradient-to-b from-transparent via-transparent via-80% to-fifth z-10"></div>
      <p className="mt-10 text-sm mx-auto text-center">{newPlan.name}</p>

      <div className="relative mt-5 mx-auto w-full max-w-xl">
        <div className="flex justify-center ">
          <WeekScrollButtons
            currentWeek={currentWeek}
            numberOfPlanWeeks={numberOfPlanWeeks}
            handlePreviousWeekClick={handlePreviousWeekClick}
            handleNextWeekClick={handleNextWeekClick}
          />
          <NewPlanAddWeekButton numberOfPlanWeeks={numberOfPlanWeeks} />
        </div>
        <NewPlanWeekSchedule
          currentWeek={currentWeek}
          openDay={openDay}
          toggleDay={toggleDay}
          setActiveComponent={setActiveComponent}
        />
        {/* to NewPlanCalendarSessionTypes*/}
      </div>
    </>
  );
};

export default NewPlanCalendar;
