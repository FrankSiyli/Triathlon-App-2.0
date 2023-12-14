"use client";
import React, { useState } from "react";
import ArrowUpSvg from "@/app/components/SVGs/arrows/ArrowUpSvg";
import ArrowDownSvg from "@/app/components/SVGs/arrows/ArrowDownSvg";
import NewPlanAppLibrarySingleSessionParts from "./NewPlanAppLibrarySingleSessionParts";

const NewPlanAppLibrarySingleSessions = ({
  singleSessions,
  bikeSessionType,
}) => {
  const [showSessionParts, setShowSessionParts] = useState({});

  const handleSingleSessionClick = (singleSessionIndex) => {
    const newShowSessionParts = {};
    Object.keys(showSessionParts).forEach((index) => {
      newShowSessionParts[index] = false;
    });
    newShowSessionParts[singleSessionIndex] =
      !showSessionParts[singleSessionIndex];
    setShowSessionParts(newShowSessionParts);
  };

  return (
    <>
      {singleSessions
        .filter(
          (session) => session?.sessionType === bikeSessionType?.sessionType
        )
        .map((singleSession, singleSessionIndex) => (
          <div
            key={singleSessionIndex}
            onClick={() => handleSingleSessionClick(singleSessionIndex)}
            className="flex flex-col w-full my-1 shadow p-1 text-sm rounded-md bg-fourth/5"
          >
            <div className="flex justify-between items-center">
              <p>{singleSession.description}</p>
              <span>
                {showSessionParts[singleSessionIndex] ? (
                  <ArrowUpSvg />
                ) : (
                  <ArrowDownSvg />
                )}
              </span>
            </div>
            {showSessionParts[singleSessionIndex] && (
              <NewPlanAppLibrarySingleSessionParts
                sessionParts={singleSession.sessionParts}
              />
            )}
          </div>
        ))}
    </>
  );
};

export default NewPlanAppLibrarySingleSessions;
