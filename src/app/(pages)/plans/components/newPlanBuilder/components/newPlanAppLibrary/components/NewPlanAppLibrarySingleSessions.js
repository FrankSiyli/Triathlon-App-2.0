"use client";
import React, { useState } from "react";
import ArrowUpSvg from "@/app/components/SVGs/arrows/ArrowUpSvg";
import ArrowDownSvg from "@/app/components/SVGs/arrows/ArrowDownSvg";
import NewPlanAppLibrarySingleSessionParts from "./NewPlanAppLibrarySingleSessionParts";

const NewPlanAppLibrarySingleSessions = ({ singleSessions, sessionType }) => {
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
      <div className="mt-2">
        {singleSessions
          .filter(
            (session) => session?.sessionType === sessionType?.sessionType
          )
          .map((singleSession, singleSessionIndex) => (
            <div
              key={singleSessionIndex}
              onClick={() => handleSingleSessionClick(singleSessionIndex)}
              className="flex flex-col w-full my-0.5 shadow p-1 text-sm rounded-md bg-fourth/5"
            >
              <div className="min-h-8 flex flex-col justify-between items-center">
                <div className="flex justify-between">
                  <p>{singleSession.description}</p>
                  <span>
                    {showSessionParts[singleSessionIndex] ? (
                      <ArrowUpSvg />
                    ) : (
                      <ArrowDownSvg />
                    )}
                  </span>
                </div>
                <div className="flex justify-start text-xs text-alert gap-3">
                  <p>Dauer:</p>
                  <span>+</span>
                  <p>Distanz:</p>
                </div>
              </div>
              {showSessionParts[singleSessionIndex] && (
                <NewPlanAppLibrarySingleSessionParts
                  sessionParts={singleSession.sessionParts}
                />
              )}
            </div>
          ))}
      </div>
    </>
  );
};

export default NewPlanAppLibrarySingleSessions;
