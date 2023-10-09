"use client";
import { userNameState } from "@/app/recoil/atoms/user/userNameState";
import Link from "next/link";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";

function LoginAlert() {
  const userName = useRecoilValue(userNameState);
  const [showLoginAlert, setShowLoginAlert] = useState(false);

  const handleAlertClick = () => {
    setShowLoginAlert(!showLoginAlert);
  };

  return (
    <>
      {userName === "" && (
        <>
          <button
            className="absolute top-2 left-2 active: outline-none"
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
            <div className="fixed mx-auto top-0 inset-x-0 flex flex-col text-center items-center justify-center gap-3 max-w-xl p-2 rounded-md border border-first/50 bg-alert text-first z-50">
              <span>Um deine Pläne und Werte zu speichern, melde dich an.</span>
              <Link
                href="/profil/login"
                className="btn btn-sm m-3 bg-third border border-first text-first shadow-xl"
              >
                <div>Anmelden</div>
              </Link>

              <button
                className="btn btn-sm btn-circle btn-outline border border-first text-first m-1 bg-third shadow-xl"
                onClick={handleAlertClick}
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
          )}
        </>
      )}
    </>
  );
}

export default LoginAlert;
