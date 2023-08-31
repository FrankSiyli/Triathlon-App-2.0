"use client";
import Footer from "@/app/components/NavBar/NavBar";
import React, { useState } from "react";
import Link from "next/link";
import "../../globals.css";
import HeartrateCalculator from "./components/HeartrateCalculator/HeartrateCalculator";
import SwimTimeCalculator from "./components/SwimTimeCalculator/SwimTimeCalculator";
import Impressum from "@/app/components/Impressum/Impressum";

function Page() {
  return (
    <>
      <div className="w-screen max-w-xl mx-auto">
        <button className=" top-5 left-5 btn btn-sm pointer-events-none border-first/50  bg-third m-3  text-first">
          Profil
        </button>
      </div>

      <div className="w-11/12 max-w-xl mx-auto flex flex-col gap-5 justify-center content-center">
        <HeartrateCalculator />
        <SwimTimeCalculator />

        <div className="border border-first/50 rounded-md text-center p-3   mt-10">
          <p className=" text-xl">Informationen</p>
          <div className="flex flex-col items-center mt-5 gap-2">
            <Link
              className="underline  underline-offset-2 "
              href="/calculators/heartrate_by_age"
            >
              HRmax nach Alter
            </Link>
            <Link
              className="underline  underline-offset-2 "
              href="/calculators/heartrate_max"
            >
              Puls Zonen
            </Link>
            <Link
              className="underline  underline-offset-2 "
              href="/calculators/power_watt"
            >
              Watt Zonen
            </Link>
          </div>
        </div>

        <Impressum />
      </div>

      <Footer />
    </>
  );
}

export default Page;
