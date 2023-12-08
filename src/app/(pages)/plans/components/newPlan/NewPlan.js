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
import PlusSvg from "@/app/components/SVGs/PlusSvg";
import ArrowLeftSvg from "@/app/components/SVGs/arrows/ArrowLeftSvg";
import ArrowDownSvg from "@/app/components/SVGs/arrows/ArrowDownSvg";
import ArrowUpSvg from "@/app/components/SVGs/arrows/ArrowUpSvg";
import { newPlanNameState } from "@/app/recoil/atoms/planBuilder/newPlanNameState";
import LibrarySvg from "@/app/components/SVGs/LibrarySvg";
import ShoeSvg from "@/app/components/SVGs/ShoeSvg";
import ArrowRightSvg from "@/app/components/SVGs/arrows/ArrowRightSvg";
import SwimSvg from "@/app/components/SVGs/SwimSvg";
import BicycleSvg from "@/app/components/SVGs/BicycleSvg";
import FasciaRollSvg from "@/app/components/SVGs/FasciaRollSvg";
import YogaSvg from "@/app/components/SVGs/YogaSvg";
import StabiSvg from "@/app/components/SVGs/StabiSvg";
import OthersSvg from "@/app/components/SVGs/OthersSvg";

const NewPlan = ({ image, title, setShowPlans }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [showAddSessionIcons, setShowAddSessionIcons] = useState(false);
  const [error, setError] = useState("");
  const [newPlan, setNewPlan] = useRecoilState(newPlanState);
  const [newPlanName, setNewPlanName] = useRecoilState(newPlanNameState);
  const numberOfPlanWeeks = newPlan?.weeks?.length;
  const { openDay, toggleDay } = useOpenDay();
  const { currentWeek, handlePreviousWeekClick, handleNextWeekClick } =
    useCurrentWeek(newPlan, numberOfPlanWeeks, toggleDay);

  const handleBackClick = () => {
    setShowPlans();
  };

  const handleAddWeekClick = () => {
    const newWeek = {
      week: numberOfPlanWeeks + 1,
      sessions: [
        { day: "Montag" },
        { day: "Dienstag" },
        { day: "Mittwoch" },
        { day: "Donnerstag" },
        { day: "Freitag" },
        { day: "Samstag" },
        { day: "Sonntag" },
      ],
    };
    setNewPlan((prevPlan) => ({
      ...prevPlan,
      weeks: [...prevPlan.weeks, newWeek],
    }));
  };

  const handleDayClick = (dayIndex) => {
    toggleDay(dayIndex);
    setShowAddSessionIcons(false);
  };

  const handleAddSessionClick = () => {
    setShowAddSessionIcons(true);
  };

  const sessionTypes = [
    { component: <SwimSvg />, label: "Schwimmen" },
    { component: <BicycleSvg />, label: "Rad" },
    { component: <ShoeSvg />, label: "Laufen" },
    { component: <YogaSvg />, label: "Yoga" },
    { component: <StabiSvg />, label: "Stabi" },
    { component: <FasciaRollSvg />, label: "Faszienrolle" },
    { component: <OthersSvg />, label: "Andere" },
    { component: <LibrarySvg />, label: "Bibliothek" },
  ];

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
      {showAlert && <Alert alertText={error} setShowAlert={setShowAlert} />}
      <p className="mt-10 text-sm mx-auto text-center">{newPlanName}</p>

      <div className="relative mt-5 mx-auto w-full max-w-xl">
        <div className="flex justify-center ">
          <WeekScrollButtons
            currentWeek={currentWeek}
            numberOfPlanWeeks={numberOfPlanWeeks}
            handlePreviousWeekClick={handlePreviousWeekClick}
            handleNextWeekClick={handleNextWeekClick}
          />
          <button
            onClick={handleAddWeekClick}
            className="absolute right-5 top-1 border border-alert rounded text-alert"
          >
            <PlusSvg />
          </button>
        </div>
        <div>
          {newPlan?.weeks?.[currentWeek]?.sessions.map((session, dayIndex) => (
            <>
              <div
                key={uuidv1()}
                onClick={() => handleDayClick(dayIndex)}
                className="flex justify-between w-full max-w-xl shadow-md py-2 rounded-md my-1 cursor-pointer"
              >
                <div className="ml-5">{session.day}</div>
                {dayIndex === openDay ? <ArrowDownSvg /> : <ArrowUpSvg />}
              </div>
              <div className="flex flex-col w-full max-w-xl rounded-md">
                {dayIndex === openDay && (
                  <div className="relative flex flex-col justify-center gap-4 min-h-12  py-1 mx-5 my-1 bg-fourth/5 font-light text-first rounded-md shadow-md">
                    <button className="border border-alert rounded text-alert w-7 ml-2">
                      <PlusSvg onClick={handleAddSessionClick} />
                    </button>
                    {showAddSessionIcons && (
                      <div className="flex flex-col gap-2">
                        {sessionTypes.map((sessionType) => (
                          <div
                            key={uuidv1()}
                            className="flex items-center justify-between cursor-pointer shadow-md py-2 rounded-md"
                          >
                            <span className="ml-2">
                              {sessionType.component}
                            </span>
                            <p className="ml-4 text-sm">{sessionType.label}</p>
                            <ArrowRightSvg />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewPlan;
