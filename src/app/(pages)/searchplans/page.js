"use client";
import Link from "next/link";
import React, { useState } from "react";
import { v1 as uuidv1 } from "uuid";

function Page() {
  const [showAlert, setShowAlert] = useState(false);
  const handleAlertClick = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  return (
    <>
      <Link
        className="btn btn-sm  m-3 bg-third border border-first text-first"
        href="/plans"
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
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </Link>
      <div className="flex flex-col items-center  mt-10 gap-5 ">
        {kindOfSport.map((item) => (
          <Link
            onClick={handleAlertClick}
            href="/searchplans"
            className="bg-second w-72 h-20 flex justify-around items-center p-3 gap-3  rounded-md text-xl text-first"
            key={uuidv1()}
          >
            {item}
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
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {showAlert && (
              <div className="alert alert-info w-40 absolute">
                <span>Coming soon</span>
              </div>
            )}
          </Link>
        ))}
      </div>
    </>
  );
}

const kindOfSport = ["Triathlonpläne", "Laufpläne", "Schwimmpläne", "Radpläne"];

export default Page;
