"use client";
import Footer from "@/app/components/Footer/Footer";
import React, { useState } from "react";
import Link from "next/link";
import "../../globals.css";
import HeartrateCalculator from "./components/HeartrateCalculator/HeartrateCalculator";
import SwimTimeCalculator from "./components/SwimTimeCalculator/SwimTimeCalculator";
import Impressum from "@/app/components/Impressum/Impressum";

function Page() {
  return (
    <>
      <div className="w-11/12 max-w-xl mx-auto flex flex-col gap-5 justify-center content-center">
        <HeartrateCalculator />
        <SwimTimeCalculator />

        <div className="border border-first/50 rounded-md text-center p-3   ">
          <p className="mt-3">Du kennst deinen Maximalpuls nicht?</p>
          <p>Kein Problem, hier findest du Informationen.</p>
          <div className="flex flex-col items-center mt-5">
            <Link
              className="underline  underline-offset-2 "
              href="/calculators/heartrate_by_age"
            >
              HRmax nach Alter
            </Link>
          </div>
        </div>

        <div className="border border-first/50 rounded-md text-center p-3   ">
          <p className="mt-3">Wissenswertes:</p>
          <div className="flex flex-col items-center mt-5">
            <Link
              className="underline  underline-offset-2  mb-2"
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
