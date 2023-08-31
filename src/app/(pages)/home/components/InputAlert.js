"use client";
import { inputAlertFiredState } from "@/app/recoil/atoms/inputAlertFiredState";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const InputAlert = () => {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowDiv(true);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const [showInputAlert, setShowInputAlert] =
    useRecoilState(inputAlertFiredState);

  const handleInputAlertClick = () => {
    setShowInputAlert(false);
  };
  return (
    <>
      {showDiv && showInputAlert && (
        <div className="fixed w-screen h-screen flex items-center max-w-xl z-50">
          <div className="alert alert-info h-1/2 flex justify-center flex-col text-xl m-5 ">
            <span className="">
              Gib auf deiner Profilseite deine HRmax und Schwimmpace ein um
              persönliche Werte im Trainingsplan zu erhalten.
            </span>
            <button
              onClick={() => handleInputAlertClick()}
              className="btn btn-circle btn-outline text-first linear-background m-10"
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
        </div>
      )}
    </>
  );
};

export default InputAlert;
