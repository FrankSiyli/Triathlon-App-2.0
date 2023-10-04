"use client";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import "../../../../globals.css";
import { savedHrMaxState } from "@/app/recoil/atoms/user/savedHrMaxState";
import { heartrateInputFiredState } from "@/app/recoil/atoms/heartrateInputFiredState";
import Alert from "@/app/components/Alerts/Alert";
import { getSession } from "next-auth/react";
import Loader from "@/app/components/Loader/Loader";

function HeartrateCalculator() {
  const [session, setSession] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [heartrateCalculatorInput, setHeartrateCalculatorInput] = useState("");
  const [savedHrMax, setSavedHrMax] = useRecoilState(savedHrMaxState);
  const [isLoading, setIsLoading] = useState(false);
  const [heartrateInputFired, setHeartrateInputFired] = useRecoilState(
    heartrateInputFiredState
  );

  const handleHeartrateInputClick = async () => {
    setIsLoading(true);

    const session = await getSession();

    if (
      heartrateCalculatorInput === "" ||
      heartrateCalculatorInput < 100 ||
      heartrateCalculatorInput > 300
    ) {
      setIsLoading(false);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    } else {
      setHeartrateInputFired(true);
      setSavedHrMax(heartrateCalculatorInput);
      setHeartrateCalculatorInput("");
    }

    if (session) {
      setSession(session);
      try {
        const userEmail = session.user.email;
        const updateUser = await fetch("/api/mongoDbUpdateUserHeartRate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userEmail,
            newHeartRate: heartrateCalculatorInput,
          }),
        });
      } catch (error) {
        setIsLoading(false);
        console.error("user update error hrmax");
      }
    }
    setIsLoading(false);
  };

  const handleChangeHrMaxClick = () => {
    setHeartrateInputFired(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleHeartrateInputClick();
    }
  };

  return (
    <>
      <div className="flex  max-w-xl  flex-col items-center  ">
        {showAlert && (
          <Alert alertText="Bitte trage deine HRmax ein (100-300)" />
        )}
      </div>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <div className="border border-fourth mt-10 rounded-md p-3  w-full max-w-xl flex flex-col justify-center items-center linear-background">
          {!heartrateInputFired && (
            <>
              <p>Pulszonen-Berechnung</p>
              <label className="label">
                <p className="label-text-alt text-first  text-center">
                  Dein Maximalpuls in bpm
                </p>
              </label>
              <input
                type="number"
                placeholder="z.B. 185"
                value={heartrateCalculatorInput}
                onChange={(e) => setHeartrateCalculatorInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="input  border border-transparent w-full max-w-xs"
              />
              <button
                onClick={handleHeartrateInputClick}
                className="btn btn-sm m-3 bg-third border border-transparent text-first shadow-xl"
              >
                speichern
              </button>
            </>
          )}
          {heartrateInputFired && (
            <>
              Dein gespeicherter Maximalpuls:{" "}
              <div className=" text-center  p-2">
                <p className="text-xl">{savedHrMax} bpm</p>
              </div>
              <button
                onClick={handleChangeHrMaxClick}
                className="btn btn-sm  m-2 bg-third border border-transparent text-first shadow-xl"
              >
                ändern
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default HeartrateCalculator;
