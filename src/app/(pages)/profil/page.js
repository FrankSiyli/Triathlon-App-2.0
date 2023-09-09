"use client";
import Footer from "@/app/components/NavBar/NavBar";
import React, { useState } from "react";
import Link from "next/link";
import "../../globals.css";
import HeartrateCalculator from "./components/HeartrateCalculator/HeartrateCalculator";
import SwimTimeCalculator from "./components/SwimTimeCalculator/SwimTimeCalculator";
import Impressum from "@/app/components/Impressum/Impressum";
import BackButton from "@/app/components/Buttons/BackButton/BackButton";

function Page() {
  return (
    <>
      <BackButton href="/home" />

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
              Maximalpuls nach Alter
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
