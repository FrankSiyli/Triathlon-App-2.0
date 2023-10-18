"use client";
import "../../../../globals.css";
import React, { useState, useRef } from "react";
import PrintSessions from "./components/PrintSessions";
import { useReactToPrint } from "react-to-print";
import Sessions from "./components/Sessions";
import calculateTotalDistance from "../../logicFunctions/totalDistanceFunction";
import calculateTotalDuration from "../../logicFunctions/totalDurationFunction";
import { formatTime } from "@/app/helperFunctions/formatTime";
import NavBar from "@/app/components/NavBar/NavBar";
import Link from "next/link";

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
    <div>
      {initialOpen && <div className="dark-overlay"></div>}
      <div
        className={`overlay-background fixed z-30 max-w-xl mx-auto inset-0 text-center overflow-x-hidden overflow-y-scroll ${
          initialOpen ? "block" : "hidden"
        }`}
      >
        {overlayView ? (
          <div className="z-20">
            <div className="flex">
              <button
                onClick={() => toggleOverlay(dayIndex, activityIndex)}
                className="top-5 left-5 btn btn-ghost btn-sm  m-3 border border-transparent text-first "
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
              <div className="w-full h-auto text-right p-1">
                <p>{singleActivity[0]}</p>
                <p className="my-1">{singleActivity[1]}</p>
                {totalDistance > 0 ? (
                  <div className="flex justify-end">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 mr-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </div>
                    {totalDistance}m
                  </div>
                ) : null}
                {totalDistance > 0 && totalDuration > 0 ? <p>+</p> : null}
                {totalDuration > 0 ? (
                  <div className="flex justify-end items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {formatTime(totalDuration)}
                  </div>
                ) : null}
              </div>
            </div>
            <hr></hr>
            <Sessions
              singleActivity={singleActivity}
              openOverlay={openOverlay}
              dayIndex={dayIndex}
              activityIndex={activityIndex}
            />
            <hr></hr>
            <div className="flex flex-col  items-center">
              <button
                className="btn btn-sm w-32 btn-outline border border-transparent text-first bg-third m-5"
                onClick={handleViewClick}
              >
                Druckversion
              </button>
              <button
                onClick={() => toggleOverlay(dayIndex, activityIndex)}
                className="btn btn-sm btn-circle btn-outline border border-transparent text-first mb-20 bg-third"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
          </div>
        ) : (
          <>
            <div className="flex">
              <button
                onClick={() => toggleOverlay(dayIndex, activityIndex)}
                className="focus:outline-none top-5 left-5 btn btn-ghost btn-sm  m-3 border border-transparent text-first "
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
              </button>{" "}
            </div>
            <PrintSessions
              ref={printComponentRef}
              singleActivity={singleActivity}
              openOverlay={openOverlay}
              dayIndex={dayIndex}
              activityIndex={activityIndex}
              totalDistance={totalDistance}
              totalDuration={totalDuration}
            />
            <div className="flex flex-col items-center gap-10">
              <div className="flex flex-row gap-3">
                <button
                  className="btn btn-sm w-32 btn-outline border border-transparent text-first bg-third"
                  onClick={handleViewClick}
                >
                  Farbversion
                </button>
                <button
                  onClick={handlePrint}
                  className="btn btn-sm w-32 btn-outline border border-transparent text-first bg-third"
                >
                  drucken
                </button>
              </div>
              <button
                onClick={() => toggleOverlay(dayIndex, activityIndex)}
                className="btn btn-sm btn-circle btn-outline border border-transparent text-first mb-20 bg-third"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
        <p className="mb-16">Viel Spaß beim Training 🙂</p>
        <NavBar />
      </div>
    </div>
  );
};

export default SessionOverlay;
