"use client";
import React, { useState } from "react";
import Alert from "@/app/components/Alerts/Alert";
import PlusSvg from "@/app/components/SVGs/PlusSvg";
import ArrowDownSvg from "@/app/components/SVGs/arrows/ArrowDownSvg";
import ArrowUpSvg from "@/app/components/SVGs/arrows/ArrowUpSvg";
import { newPlanState } from "@/app/recoil/atoms/planBuilder/newPlanState";
import { useRecoilState } from "recoil";
import { v1 as uuidv1 } from "uuid";
import NewPlanSessionTypes from "./NewPlanSessionTypes";

const NewPlanWeekSchedule = ({ currentWeek, openDay, toggleDay }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState("");
  const [newPlan, setNewPlan] = useRecoilState(newPlanState);
  const [showAddSessionMenu, setShowAddSessionMenu] = useState(false);

  const handleDayClick = (dayIndex) => {
    toggleDay(dayIndex);
    setShowAddSessionMenu(false);
  };

  const handleAddSessionClick = () => {
    setShowAddSessionMenu(true);
  };

  return (
    <>
      <div>
        {newPlan?.weeks?.[currentWeek]?.sessions.map((session, dayIndex) => (
          <div key={uuidv1()}>
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
                <div className="relative flex flex-col justify-center gap-4 min-h-12  py-1 mx-5 my-1 font-light text-first rounded-md shadow-md">
                  <button className="border border-alert rounded text-alert w-7 ml-2">
                    <PlusSvg onClick={handleAddSessionClick} />
                  </button>
                  {showAddSessionMenu && (
                    <div className="flex flex-col gap-2">
                      <NewPlanSessionTypes
                        showAlert={showAlert}
                        setShowAlert={setShowAlert}
                        error={error}
                        setError={setError}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {showAlert && <Alert alertText={error} setShowAlert={setShowAlert} />}
    </>
  );
};

export default NewPlanWeekSchedule;
