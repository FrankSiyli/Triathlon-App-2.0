"use client";
import { userNameState } from "@/app/recoil/atoms/user/userNameState";
import Link from "next/link";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

function LoginAlert() {
  const [showLoginAlert, setShowLoginAlert] = useState(true);
  const [userName, setUserName] = useRecoilState(userNameState);

  const handleAlertClick = () => {
    setShowLoginAlert(false);
  };
  return (
    <>
      {userName === "" && showLoginAlert && (
        <div className="fixed mx-auto top-0 inset-x-0 flex flex-col text-center items-center justify-center gap-3 max-w-xl  p-2 rounded-md border border-first/50  bg-alert text-first z-50">
          <span>Um deine Pläne und Werte zu speichern, melde dich an.</span>
          <Link
            href="/profil/login"
            className="btn btn-sm  m-3 bg-third border border-first text-first shadow-xl "
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
  );
}

export default LoginAlert;
