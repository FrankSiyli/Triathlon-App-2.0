"use client";
import Link from "next/link";
import React, { useState } from "react";

function LoginAlert({ session }) {
  const [showLoginAlert, setShowLoginAlert] = useState(true);
  const handleAlertClick = () => {
    setShowLoginAlert(false);
  };
  return (
    <>
      {!session && showLoginAlert && (
        <div className="fixed mx-auto top-0 inset-x-0 flex flex-col text-center items-center justify-center gap-3 max-w-xl  p-2 rounded-md border border-first/50  bg-alert text-first z-50">
          <span>Um deine Pläne und Werte zu speichern, melde dich an.</span>
          <Link
            href="/profil/login"
            className="btn btn-sm  m-3 bg-third border border-transparent text-first shadow-xl "
          >
            <div className="ml-5">Anmelden</div>
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
          </Link>

          <button
            className="btn btn-circle btn-outline border border-transparent text-first m-5 bg-third shadow-xl"
            onClick={handleAlertClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
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
  );
}

export default LoginAlert;
