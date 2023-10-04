"use client";
import BackButton from "@/app/components/Buttons/BackButton/BackButton";
import NavBar from "@/app/components/NavBar/NavBar";
import { showHrInputState } from "@/app/recoil/atoms/showHrInputState";
import { showSwimTimeInputState } from "@/app/recoil/atoms/showSwimTimeInputState";
import React from "react";
import { useRecoilState } from "recoil";
import HeartrateCalculator from "./components/HeartrateCalculator";
import SwimTimeCalculator from "./components/SwimTimeCalculator";

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
      <BackButton href="/profil" />
      <p className=" mx-auto w-40 text-center -mt-10">Kalenderwerte</p>

      <div className="w-11/12 max-w-xl mt-10 mx-auto flex flex-col gap-2 justify-center content-center ">
        <div className="border border-first/50 rounded-md text-center p-3 linear-background ">
          Gib deine Werte an, um persönliche Werte im Kalender zu erhalten.
        </div>

        <div className="relative max-w-xl mt-5">
          <button
            onClick={handleHrClick}
            className={` btn btn-sm w-28 mx-auto  bg-third text-first shadow-xl  border ${
              showHrInput
                ? "border-first border-b-2 border-t-transparent border-r-transparent border-l-transparent"
                : "border-transparent"
            }  `}
          >
            Maximalpuls
          </button>
          {showHrInput && <HeartrateCalculator />}
          <button
            onClick={handleSwimTimeClick}
            className={` absolute top-0 right-0 btn btn-sm w-28 mx-auto  bg-third border ${
              showSwimTimeInput
                ? "border-first border-b-2 border-t-transparent border-r-transparent border-l-transparent"
                : "border-transparent"
            }  text-first shadow-xl `}
          >
            Schwimmzeit
          </button>
          {showSwimTimeInput && <SwimTimeCalculator />}
        </div>
      </div>
      <NavBar />
    </>
  );
}

export default Page;
