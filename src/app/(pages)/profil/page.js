"use client";
import Footer from "@/app/components/Footer/Footer";
import React, { useState } from "react";
import Link from "next/link";

function Page() {
  const [showAlert, setShowAlert] = useState(false);
  const [calculatorInput, setCalculatorInput] = useState("");
  const [savedHrMax, setSavedHrMax] = useState();
  const [showHrInput, setShowHrInput] = useState(true);
  const [showSavedHrMax, setShowSavedHrMax] = useState(false);
  const handleInputClick = () => {
    if (
      calculatorInput === "" ||
      calculatorInput < 100 ||
      calculatorInput > 300
    ) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    } else {
      setShowHrInput(false);
      setShowSavedHrMax(true);
      setSavedHrMax(calculatorInput);
      setCalculatorInput("");
    }
  };

  const handleChangeHrMaxClick = () => {
    setShowHrInput(true);
    setShowSavedHrMax(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleInputClick();
    }
  };
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <>
      <button className="btn btn-sm pointer-events-none border-first  bg-third m-5 text-xl text-first">
        Hey user.name 👋
      </button>
      <div className="flex min-h-screen max-w-xl mx-auto mb-20 flex-col items-center p-4">
        {showAlert && (
          <div className="alert alert-info max-w-md h-10 bg-first absolute flex justify-center m-10">
            <span>Bitte trage deine HRmax ein.</span>
          </div>
        )}
        {showHrInput && (
          <>
            <label className="label">
              <span className="label-text-alt text-first text-xl">
                Dein Maximalpuls in bpm
              </span>
            </label>
            <input
              type="number"
              placeholder="z.B. 185"
              value={calculatorInput}
              onChange={(e) => setCalculatorInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="input  border border-third w-full max-w-xs"
            />
            <button
              onClick={handleInputClick}
              className="btn btn-sm m-3 bg-third border border-first text-first"
            >
              Enter
            </button>
          </>
        )}
        {showSavedHrMax && (
          <>
            <div className="border border-first bg-second text-center text-md  p-2 rounded-md">
              Dein gespeicherter Maximalpuls:{" "}
              <p className="text-xl text-third">{savedHrMax}</p>
            </div>
            <button
              onClick={handleChangeHrMaxClick}
              className="btn btn-sm  m-2 bg-third border border-first text-first"
            >
              ändern
            </button>
          </>
        )}

        <div className="border border-third rounded-md text-center p-3 mt-20  bg-second">
          <p className="mt-3">Du kennst deinen Maximalpuls nicht?</p>
          <p>Kein Problem, hier findest du Informationen.</p>
          <div className="flex flex-col items-center mt-5">
            <Link
              className=" text-third underline text-xl"
              href="/calculators/heartrate_by_age"
            >
              HRmax nach Alter
            </Link>
            <Link
              className=" text-third underline text-xl m-5"
              href="/calculators/heartrate_max"
            >
              Puls Zonen
            </Link>
            <Link
              className=" text-third underline text-xl"
              href="/calculators/power_watt"
            >
              Watt Zonen
            </Link>
          </div>
        </div>
        <div className="mt-20 flex flex-row text-first gap-2 underline">
          <Link className=" " href="/impressum">
            Impressum
          </Link>
          <Link className="" href="/agb">
            AGB
          </Link>
          <Link className="" href="/privacy_policy">
            Datenschutz
          </Link>
        </div>
        <div>© Siyli-endurance-coaching 2022-{currentYear} </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
