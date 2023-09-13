"use client";
import BackButton from "@/app/components/Buttons/BackButton/BackButton";
import NavBar from "@/app/components/NavBar/NavBar";
import Link from "next/link";
import React from "react";

function Page() {
  const characterMap = {
    ä: "ae",
    ö: "oe",
    ü: "ue",
  };
  return (
    <>
      <BackButton href="/plans" />
      <p className=" mx-auto w-40 text-center -mt-10">Pläne suchen</p>
      <div className=" flex flex-col items-center  mt-10 gap-1  max-w-xl mx-5 ">
        {kindOfPlansArray.map((kindOfPlan, kindOfPlanIndex) => (
          <Link
            href={kindOfPlan
              .toLowerCase()
              .replace(/[äöü]/g, (match) => characterMap[match] || match)}
            className="flex justify-between border border-first/50 w-full max-w-xl linear-background  shadow-xl p-2 rounded-md mx-5 my-1 "
            key={kindOfPlanIndex}
          >
            <div className="ml-5">{kindOfPlan}</div>
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
        ))}
      </div>
      <NavBar />
    </>
  );
}

const kindOfPlansArray = ["Triathlonpläne", "Laufpläne", "Spezialpläne"];

export default Page;
