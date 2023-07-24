"use client";
import React, { useState } from "react";
import "../../../globals.css";
import Link from "next/link";

function Page() {
  return (
    <>
      <Link
        className="btn btn-sm  m-3 bg-third border border-first text-first"
        href="/profil"
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
      <div className="border border-first rounded-md p-4 mx-auto max-w-xl mb-5  bg-second text-center">
        <p>
          Wenn du am Anfang deiner sportlichen Entwicklung stehst oder nach
          einer Pause wieder einsteigen möchtest kannst du auch die Formeln
          benutzen um einen Richtwert zu erhalten.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center mx-auto max-w-xl mt-10 ">
        <button className="btn pointer-events-none border-first  bg-third   text-first">
          <p className="text-xl ">Damen</p>
          <br />
          <p className="text-second">HRmax = 209-(0.9 x Alter) </p>
        </button>
        <label className="label  ">
          <span className="label-text-alt text-first ">Dein Alter</span>
        </label>
        <input
          type="number"
          maxLength={3}
          placeholder="z.B. 35"
          id="HrDamenCalculatorInput"
          className="input  border border-third mb-3 w-full max-w-xs"
        />

        <button
          className="btn btn-sm  mb-20 bg-third border border-first text-first rounded-md"
          id="HrDamenCalculateBtn"
          /*  onclick="HrDamenAlter(),
              clearHrDamenInput()
            " */
        >
          Calculate
        </button>
        {/* <input
          className="bg-first h-8 ml-1 rounded-r-md text-second"
          maxLength={3}
          type="text"
          id="HrDamenCalculatorOutput"
          readOnly
        /> */}
      </div>

      <div className="flex flex-col justify-center items-center mx-auto max-w-xl  ">
        <button className="btn pointer-events-none border-first  bg-third mt-20  text-first">
          <p className="text-xl ">Herren</p>
          <br />
          <p className="text-second">HRmax = 214-(0.8 x Alter) </p>
        </button>

        <label className="label ">
          <span className="label-text-alt text-first ">Dein Alter</span>
        </label>
        <input
          type="number"
          maxLength={3}
          placeholder="z.B. 35"
          id="HrHerrenCalculatorInput"
          className="input  border border-third mb-3 w-full max-w-xs"
        />

        <button
          className="btn btn-sm  mb-20 bg-third border border-first text-first rounded-md"
          id="HrHerrenCalculateBtn"
          /* onclick="HrHerrenAlter(),
              clearHrHerrenInput()
            " */
        >
          Calculate
        </button>

        {/* <input
          className="bg-first h-8 ml-1 rounded-r-md text-second"
          maxLength={3}
          type="text"
          id="HrHerrenCalculatorOutput"
          readOnly
        /> */}
      </div>
    </>
  );
}

export default Page;
