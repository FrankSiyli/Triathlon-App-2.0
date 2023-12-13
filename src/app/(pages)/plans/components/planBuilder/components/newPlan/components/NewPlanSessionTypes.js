"use client";
import React, { useState } from "react";
import NewPlanSessionBuildTypes from "./NewPlanSessionBuildTypes";
import ArrowUpSvg from "@/app/components/SVGs/arrows/ArrowUpSvg";
import ArrowDownSvg from "@/app/components/SVGs/arrows/ArrowDownSvg";
import SwimSvg from "@/app/components/SVGs/SwimSvg";
import BicycleSvg from "@/app/components/SVGs/BicycleSvg";
import ShoeSvg from "@/app/components/SVGs/ShoeSvg";
import YogaSvg from "@/app/components/SVGs/YogaSvg";
import StabiSvg from "@/app/components/SVGs/StabiSvg";
import FasciaRollSvg from "@/app/components/SVGs/FasciaRollSvg";
import OthersSvg from "@/app/components/SVGs/OthersSvg";

const sessionTypes = [
  { component: <SwimSvg />, label: "Schwimmen" },
  { component: <BicycleSvg />, label: "Rad" },
  { component: <ShoeSvg />, label: "Laufen" },
  { component: <YogaSvg />, label: "Yoga" },
  { component: <StabiSvg />, label: "Stabi" },
  { component: <FasciaRollSvg />, label: "Faszienrolle" },
  { component: <OthersSvg />, label: "Andere" },
];

const NewPlanSessionTypes = ({ showAlert, setShowAlert, error, setError }) => {
  const [sessionTypeClicked, setSessionTypeClicked] = useState(
    new Array(sessionTypes.length).fill(false)
  );
  const handleSessionTypeClick = (sessionTypeIndex) => {
    setSessionTypeClicked((prevClicked) => {
      const newClicked = new Array(sessionTypes.length).fill(false);
      newClicked[sessionTypeIndex] = !prevClicked[sessionTypeIndex];
      return newClicked;
    });
  };
  return (
    <>
      {sessionTypes.map((sessionType, sessionTypeIndex) => (
        <div
          key={sessionTypeIndex}
          onClick={() => handleSessionTypeClick(sessionTypeIndex)}
          className="flex flex-col shadow-md p-1 rounded-md  bg-fourth/5"
        >
          <div className="flex w-full items-center justify-between cursor-pointer ">
            <span className="ml-2">{sessionType.component}</span>
            <p className="ml-4 text-sm">{sessionType.label}</p>
            {sessionTypeClicked[sessionTypeIndex] ? (
              <ArrowDownSvg />
            ) : (
              <ArrowUpSvg />
            )}
          </div>
          {sessionTypeClicked[sessionTypeIndex] && (
            <div className="w-full mx-auto mt-2 text-sm ">
              <hr className="opacity-10 mx-1" />
              <NewPlanSessionBuildTypes
                showAlert={showAlert}
                setShowAlert={setShowAlert}
                error={error}
                setError={setError}
              />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default NewPlanSessionTypes;
