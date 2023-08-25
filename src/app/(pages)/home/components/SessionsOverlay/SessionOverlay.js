"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../../../public/images/logoSmall.png";
import SessionSections from "../SessionSections";
import PrintSessionSections from "../PrintSessionSections";

const SessionOverlay = ({
  totalDistance,
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

  return (
    <div
      className={`overlay-background absolute z-50 h-screen min-h-screen inset-0 text-center overflow-y-auto ${
        initialOpen ? "block" : "hidden"
      }`}
    >
      <div className="w-full h-auto flex justify-between items-center">
        <Image
          src={logo}
          alt="logo"
          className="mt-5  ml-5 "
          width={100}
          height={100}
        />
        <div className="text-right mr-3 ">
          <p className="underline underline-offset-2">{singleActivity[0]}</p>
          <p className="my-1">{singleActivity[1]}</p>
          <p>Distanz: {totalDistance}m</p>
          <p>Zeit: min</p>
        </div>
      </div>
      {overlayView ? (
        <>
          <SessionSections
            singleActivity={singleActivity}
            openOverlay={openOverlay}
            dayIndex={dayIndex}
            activityIndex={activityIndex}
          />
          <div className="flex flex-col  items-center gap-10">
            <button
              className="btn btn-sm w-32 btn-outline text-first "
              onClick={handleViewClick}
            >
              Druckversion
            </button>
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
      ) : (
        <>
          <PrintSessionSections
            singleActivity={singleActivity}
            openOverlay={openOverlay}
            dayIndex={dayIndex}
            activityIndex={activityIndex}
          />
          <div className="flex flex-col  items-center gap-10">
            <div className="flex flex-row gap-3">
              <button
                className="btn btn-sm w-32 btn-outline text-first "
                onClick={handleViewClick}
              >
                zurück
              </button>
              <button className="btn btn-sm w-32 btn-outline text-first ">
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
    </div>
  );
};

export default SessionOverlay;