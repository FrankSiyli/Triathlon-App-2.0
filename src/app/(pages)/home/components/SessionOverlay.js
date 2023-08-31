"use client";
import "../../../globals.css";
import React, { useState, useRef } from "react";
import Image from "next/image";
import logo from "../../../../../public/images/logoSmall.png";
import PrintSessions from "./PrintSessions";
import { useReactToPrint } from "react-to-print";
import Sessions from "./Sessions";
import calculateTotalDistance from "../logicFunctions/totalDistanceFunction";
import calculateTotalDuration from "../logicFunctions/totalDurationFunction";

const SessionOverlay = ({
  sessionSections,
  singleActivity,
  dayIndex,
  activityIndex,
  openOverlay,
  toggleOverlay,
  initialOpen = false,
}) => {
  const [overlayView, setOverlayView] = useState(true);
  const handleViewClick = () => {
    setOverlayView(!overlayView);
  };
  const printComponentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printComponentRef.current,
  });

  const totalDistance = calculateTotalDistance(singleActivity, sessionSections);
  const totalDuration = calculateTotalDuration(singleActivity, sessionSections);

  return (
    <div
      className={`overlay-background fixed z-50 max-w-xl mx-auto inset-0 text-center overflow-y-scroll ${
        initialOpen ? "block" : "hidden"
      }`}
    >
      {overlayView ? (
        <>
          <div className="w-full h-auto flex justify-between items-center">
            <Image
              src={logo}
              alt="logo"
              className="mt-3  ml-3 w-auto"
              width={80}
              height={80}
            />

            <div className="text-right mr-3 ">
              <p className="underline underline-offset-2">
                {singleActivity[0]}
              </p>
              <p className="my-1">{singleActivity[1]}</p>
              {totalDistance > 0 ? <p>Distanz: {totalDistance}m</p> : null}
              {totalDuration > 0 ? <p>Zeit: {totalDuration}min</p> : null}
            </div>
          </div>
          <Sessions
            singleActivity={singleActivity}
            openOverlay={openOverlay}
            dayIndex={dayIndex}
            activityIndex={activityIndex}
          />
          <div className="flex flex-col  items-center gap-10">
            <button
              className="btn btn-sm w-32 btn-outline text-first linear-background"
              onClick={handleViewClick}
            >
              Druckversion
            </button>
            <button
              onClick={() => toggleOverlay(dayIndex, activityIndex)}
              className="btn btn-circle btn-outline text-first mb-20 linear-background"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </>
      ) : (
        <>
          <PrintSessions
            ref={printComponentRef}
            singleActivity={singleActivity}
            openOverlay={openOverlay}
            dayIndex={dayIndex}
            activityIndex={activityIndex}
            totalDistance={totalDistance}
            totalDuration={totalDuration}
          />
          <div className="flex flex-col  items-center gap-10">
            <div className="flex flex-row gap-3">
              <button
                className="btn btn-sm w-32 btn-outline text-first linear-background"
                onClick={handleViewClick}
              >
                zurück
              </button>
              <button
                onClick={handlePrint}
                className="btn btn-sm w-32 btn-outline text-first linear-background"
              >
                drucken
              </button>
            </div>
            <button
              onClick={() => toggleOverlay(dayIndex, activityIndex)}
              className="btn btn-circle btn-outline text-first mb-20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </>
      )}
      <p>Viel Spaß beim Training 🙂</p>
    </div>
  );
};

export default SessionOverlay;
