"use client";
import BackButton from "@/app/components/Buttons/BackButton/BackButton";
import NavBar from "@/app/components/NavBar/NavBar";
import Link from "next/link";
import React from "react";

function Infos() {
  return (
    <>
      <BackButton href="/profil" />
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
