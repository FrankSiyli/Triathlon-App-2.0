"use client";
import Footer from "@/app/components/NavBar/NavBar";
import React from "react";
import "../../globals.css";
import HeartrateCalculator from "./components/HeartrateCalculator";
import SwimTimeCalculator from "./components/SwimTimeCalculator";
import Impressum from "@/app/components/Impressum/Impressum";
import Informations from "./components/Informations";
import { useRecoilState } from "recoil";
import { showSwimTimeInputState } from "@/app/recoil/atoms/showSwimTimeInputState";
import { showHrInputState } from "@/app/recoil/atoms/showHrInputState";
import Image from "next/image";
import logo from "../../../../public/images/logoSmall.png";

function Page() {
  const [showHrInput, setShowHrInput] = useRecoilState(showHrInputState);
  const [showSwimTimeInput, setShowSwimTimeInput] = useRecoilState(
    showSwimTimeInputState
  );

  const handleHrClick = () => {
    setShowHrInput(!showHrInput);
    setShowSwimTimeInput(false);
  };
  const handleSwimTimeClick = () => {
    setShowSwimTimeInput(!showSwimTimeInput);
    setShowHrInput(false);
  };
  return (
    <>
      <div className="w-11/12 max-w-xl mx-auto flex flex-col gap-2 justify-center content-center">
        <div className="border border-first/50 rounded-md text-center p-3 linear-background  mt-3">
          Gib deinen
          <span className=" text-xl"> Maximalpuls</span> und deine
          <span className=" text-xl"> 1000m Schwimmzeit</span> ein, um
          persönliche Werte im Homepage-Trainingsplan zu erhalten.
        </div>

        <div className="relative max-w-xl mt-5">
          <button
            onClick={handleHrClick}
            className="btn btn-sm w-28 mx-auto  bg-third border border-first/50 text-first shadow-xl"
          >
            Maximalpuls
          </button>
          {showHrInput && <HeartrateCalculator />}
          <button
            onClick={handleSwimTimeClick}
            className="absolute top-0 right-0 btn btn-sm w-28 mx-auto  bg-third border border-first/50 text-first shadow-xl"
          >
            Schwimmzeit
          </button>
          {showSwimTimeInput && <SwimTimeCalculator />}
        </div>

        <Informations />
        <Image
          priority
          src={logo}
          alt="logo"
          className="mx-auto  w-40 mt-10 "
          width={100}
          height={100}
        />
        <Impressum />
      </div>

      <Footer />
    </>
  );
}

export default Page;
