"use client";
import ArrowLeftSvg from "@/app/components/SVGs/arrows/ArrowLeftSvg";
import { newPlanClickedSessionTypeState } from "@/app/recoil/atoms/planBuilder/newPlanClickedSessionTypeState";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import BicycleSvg from "@/app/components/SVGs/BicycleSvg";
import ArrowRightSvg from "@/app/components/SVGs/arrows/ArrowRightSvg";

const bikeSessionTypes = [
  {
    type: "beginner",
    name: "Einheiten für Beginner",
    api: "/api/planBuilder/fetchBikeBeginnerSessions",
  },
  {
    type: "lit",
    name: "Leichte Einheiten",
    api: "/api/planBuilder/fetchBikeLitSessions",
  },
  {
    type: "mit",
    name: "Mittlere Einheiten",
    api: "/api/planBuilder/fetchBikeMitSessions",
  },
  {
    type: "hit",
    name: "Harte Einheiten",
    api: "/api/planBuilder/fetchBikeHitSessions",
  },
];

const AppLibrary = ({ image, title, setShowPlans }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/planBuilder/fetchAllBikeSessions", {
          method: "GET",
        });

        if (response.ok) {
          const data = await response.json();
          console.log("sessions", data.sessions);
        } else {
          console.error("Failed to fetch sessions. Status:", response.status);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, []);

  const [newPlanClickedSessionType, setNewPlanClickedSessionType] =
    useRecoilState(newPlanClickedSessionTypeState);
  const handleBackClick = () => {
    setShowPlans();
  };

  const handleBikeSessionTypeClick = () => {};

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
      {newPlanClickedSessionType === "bike" && (
        <div className="flex flex-col items-center mt-20 w-full max-w-xl">
          {bikeSessionTypes.map((bikeSessionType, bikeSessionTypeIndex) => (
            <div
              onClick={handleBikeSessionTypeClick}
              key={bikeSessionTypeIndex}
              className="flex justify-between items-center w-full max-w-xl shadow-md p-2 rounded-md "
            >
              <span className="ml-5">
                <BicycleSvg />
              </span>
              <p>{bikeSessionType.name}</p>
              <ArrowRightSvg />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AppLibrary;
