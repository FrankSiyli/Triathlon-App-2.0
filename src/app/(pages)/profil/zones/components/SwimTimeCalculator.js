"use client";
import React, { useState } from "react";
import { formatTime } from "@/app/helperFunctions/formatTime";
import "../../../../globals.css";
import { useRecoilState } from "recoil";
import { savedSwimTimeState } from "@/app/recoil/atoms/user/savedSwimTimeState";
import { swimTimeInputFiredState } from "@/app/recoil/atoms/swimTimeInputFiredState";
import { getSession } from "next-auth/react";
import Loader from "@/app/components/Loader/Loader";

function SwimTimeCalculator() {
  const [session, setSession] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [swimCalculatorInput, setSwimCalculatorInput] = useState(1200);
  const [savedSwimTime, setSavedSwimTime] = useRecoilState(savedSwimTimeState);
  const [swimTimeInputFired, setSwinTimeInputFired] = useRecoilState(
    swimTimeInputFiredState
  );

  const handleSwimTimeInputClick = async () => {
    setIsLoading(true);
    const session = await getSession();
    setSavedSwimTime(swimCalculatorInput);
    setSwinTimeInputFired(true);
    if (session) {
      setSession(session);
      try {
        const userEmail = session.user.email;
        const updateUser = await fetch("/api/mongoDbUpdateUserSwimTime", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userEmail,
            newSwimTime: swimCalculatorInput,
          }),
        });
      } catch (error) {
        setIsLoading(false);
        console.error("user update error swimtime");
      }
    }
    setIsLoading(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSwimTimeInputClick();
    }
  };

  const handleChangeSwimTimeClick = () => {
    setSwinTimeInputFired(false);
  };

  return (
    <>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <div className="border border-fourth mt-10 rounded-md p-3  w-full max-w-xl flex flex-col justify-center items-center linear-background">
          {!swimTimeInputFired && (
            <>
              <p>Schwimm-Pace-Berechnung</p>
              <label className="label">
                <p className="label-text-alt text-first text-center">
                  Deine 1000m P<span className="icon-text">ersönliche</span>B
                  <span className="icon-text">estleistung</span>
                </p>
              </label>

              <p className="text-xl text-center mt-10">
                {formatTime(swimCalculatorInput)} min
              </p>
              <input
                type="range"
                list="tickmarks"
                value={swimCalculatorInput}
                min="600"
                max="1800"
                className="input w-full"
                onChange={(e) => setSwimCalculatorInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <datalist id="tickmarks">
                <option value="600"></option>
                <option value="900"></option>
                <option value="1200"></option>
                <option value="1500"></option>
                <option value="1800"></option>
              </datalist>

              <button
                onClick={handleSwimTimeInputClick}
                className="btn btn-sm m-3 bg-third border border-transparent text-first shadow-xl"
              >
                speichern
              </button>
            </>
          )}
          {swimTimeInputFired && (
            <>
              Deine gespeicherte 1000m Schwimmzeit:{" "}
              <div className=" text-center  p-2">
                <p className="text-xl ">{formatTime(savedSwimTime)} min</p>
              </div>
              <button
                onClick={handleChangeSwimTimeClick}
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

export default SwimTimeCalculator;