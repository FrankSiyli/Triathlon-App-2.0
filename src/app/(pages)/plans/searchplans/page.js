"use client";
import BackButton from "@/app/components/Buttons/BackButton/BackButton";
import NavBar from "@/app/components/NavBar/NavBar";
import Link from "next/link";
import React, { useState } from "react";

function Page() {
  const characterMap = {
    ä: "ae",
    ö: "oe",
    ü: "ue",
  };
  return (
    <>
      <BackButton href="/plans" />

      <div className="flex flex-col items-center  mt-10 gap-5  max-w-xl mx-auto  ">
        {kindOfPlansArray.map((kindOfPlan, kindOfPlanIndex) => (
          <Link
            href={kindOfPlan
              .toLowerCase()
              .replace(/[äöü]/g, (match) => characterMap[match] || match)}
            className="  w-72 h-14 flex justify-between btn btn-outline  linear-background items-center  gap-3  rounded-md text-xl text-first"
            key={kindOfPlanIndex}
          >
            {kindOfPlan}
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
