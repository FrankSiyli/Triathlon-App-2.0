"use client";
import React, { useState } from "react";
import BicycleSvg from "@/app/components/SVGs/BicycleSvg";
import ArrowUpSvg from "@/app/components/SVGs/arrows/ArrowUpSvg";
import ArrowDownSvg from "@/app/components/SVGs/arrows/ArrowDownSvg";
import NewPlanAppLibrarySingleSessions from "./NewPlanAppLibrarySingleSessions";

const bikeSessionTypes = [
  {
    id: "0",
    name: "Einheiten für Beginner",
    api: "/api/planBuilder/fetchBikeBeginnerSessions",
    sessionType: "bikeBeginner",
  },
  {
    id: "1",
    name: "Leichte Einheiten",
    api: "/api/planBuilder/fetchBikeLitSessions",
    sessionType: "bikeLit",
  },
  {
    id: "2",
    name: "Mittlere Einheiten",
    api: "/api/planBuilder/fetchBikeMitSessions",
    sessionType: "bikeMit",
  },
  {
    id: "3",
    name: "Harte Einheiten",
    api: "/api/planBuilder/fetchBikeHitSessions",
    sessionType: "bikeHit",
  },
];

const NewPlanAppLibrarySessionTypes = ({ singleSessions }) => {
  const [showSingleSessions, setShowSingleSessions] = useState(false);
  const [clickedSessionType, setClickedSessionType] = useState(null);
  const [clickedSingleSession, setClickedSingleSession] = useState(-1);

  const handleBikeSessionTypeClick = (bikeSessionType) => {
    if (clickedSessionType === bikeSessionType.id) {
      setShowSingleSessions(!showSingleSessions);
    } else {
      setShowSingleSessions(true);
      setClickedSessionType(bikeSessionType.id);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center mt-20 w-full max-w-xl">
        {bikeSessionTypes.map((bikeSessionType) => (
          <div
            key={bikeSessionType.id}
            className="flex flex-col w-full max-w-xl cursor-pointer shadow-md p-2 rounded-md "
          >
            <div
              onClick={() => handleBikeSessionTypeClick(bikeSessionType)}
              className="flex justify-between items-center"
            >
              <span className="ml-5">
                <BicycleSvg />
              </span>
              <p>{bikeSessionType.name}</p>
              {clickedSessionType === bikeSessionType.id &&
              showSingleSessions ? (
                <ArrowUpSvg />
              ) : (
                <ArrowDownSvg />
              )}
            </div>

            {clickedSessionType === bikeSessionType.id &&
              showSingleSessions && (
                <NewPlanAppLibrarySingleSessions
                  singleSessions={singleSessions}
                  clickedSingleSession={clickedSingleSession}
                  bikeSessionType={bikeSessionType}
                />
              )}
          </div>
        ))}
      </div>
    </>
  );
};

export default NewPlanAppLibrarySessionTypes;
