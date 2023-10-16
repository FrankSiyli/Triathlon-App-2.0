"use client";
import NavBar from "@/app/components/NavBar/NavBar";
import Link from "next/link";
import React from "react";

function Infos({ setShowInfos, setShowProfil }) {
  const handleBackClick = () => {
    setShowProfil(true), setShowInfos(false);
  };

  return (
    <>
      <div className="w-screen max-w-xl mx-auto">
        <button
          className="top-5 left-5 btn btn-ghost btn-sm  m-3 border border-transparent text-first "
          onClick={handleBackClick}
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
      </div>
      <p className=" mx-auto w-40 text-center -mt-10">Informationen</p>

      <div className=" flex flex-col items-center  mt-10 gap-1  max-w-xl mx-5 ">
        <Link
          className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
          href="/calculators/heartrate_by_age"
        >
          <div className="ml-5">Maximalpuls nach Alter</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
        <Link
          className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
          href="/calculators/heartrate_max"
        >
          <div className="ml-5">Puls Zonen</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
        <Link
          className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
          href="/calculators/power_watt"
        >
          <div className="ml-5">Watt Zonen</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      </div>
      <NavBar />
    </>
  );
}

export default Infos;
