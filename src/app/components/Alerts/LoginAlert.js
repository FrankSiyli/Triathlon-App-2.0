"use client";
import { userNameState } from "@/app/recoil/atoms/user/userNameState";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";

function LoginAlert() {
  const userName = useRecoilValue(userNameState);
  const [showLoginAlert, setShowLoginAlert] = useState(false);

  const handleAlertClick = () => {
    setShowLoginAlert(true);
    setTimeout(() => {
      setShowLoginAlert(false);
    }, 5000);
  };

  return (
    <>
      {userName === "" && (
        <>
          <button
            className="absolute top-2 right-2 active: outline-none"
            onClick={handleAlertClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 text-alert motion-safe:animate-spin"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
          </button>

          {showLoginAlert && (
            <div className="custom-toast">
              <p>
                Um deine Pläne und Kalenderwerte
                <br />
                zu speichern, melde dich an
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default LoginAlert;
