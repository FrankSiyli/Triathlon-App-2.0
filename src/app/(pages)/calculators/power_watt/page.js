"use client";
import React, { useState } from "react";
import "../../../globals.css";
import Link from "next/link";
import BackButton from "@/app/components/Buttons/BackButton/BackButton";

const Page = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [calculatorInput, setCalculatorInput] = useState("");
  const [tgOutput1, setTgOutput1] = useState("");
  const [tgOutput2, setTgOutput2] = useState("");
  const [tgOutput3, setTgOutput3] = useState("");
  const [tgOutput4, setTgOutput4] = useState("");
  const [tgOutput5, setTgOutput5] = useState("");
  const [tgOutput6, setTgOutput6] = useState("");
  const [tgOutput7, setTgOutput7] = useState("");

  const calculateWattZones = () => {
    const a1 = parseFloat(calculatorInput);
    const b1 = a1 / 100;
    if (
      calculatorInput === "" ||
      calculatorInput < 50 ||
      calculatorInput > 500
    ) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    } else {
      setTgOutput1(`${Math.round(b1 * 50)} - ${Math.round(b1 * 60)}`);
      setTgOutput2(`${Math.round(b1 * 60)} - ${Math.round(b1 * 70)}`);
      setTgOutput3(`${Math.round(b1 * 70)} - ${Math.round(b1 * 80)}`);
      setTgOutput4(`${Math.round(b1 * 80)} - ${Math.round(b1 * 90)}`);
      setTgOutput5(`${Math.round(b1 * 90)} - ${Math.round(b1 * 100)}`);
      setTgOutput6(`${Math.round(b1 * 120)} - ${Math.round(b1 * 150)}`);
      setTgOutput7(`${Math.round(b1 * 150)} - ${"8000"}`);
      setCalculatorInput("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      calculateWattZones();
    }
  };

  return (
    <>
      <BackButton href="/profil" />

      <div className="border border-first rounded-md p-4 max-w-xl mx-auto mb-5  bg-second text-center">
        <p>
          Du hast deinen FTP Wert bereits auf einer smarten Rolle ermittelt?
        </p>
        <p>Dann kannst du hier deine Trainingszonen berechnen.</p>
      </div>
      <div className="">
        <div className="">
          <div className="max-w-xl mx-auto flex flex-col items-center justify-center">
            {showAlert && (
              <div className="alert alert-info max-w-md h-10 bg-first absolute flex justify-center m-10">
                <span>Bitte trage deine FTP ein.</span>
              </div>
            )}
            <label className="label mt-10 ">
              <span className="label-text-alt text-first text-xl">
                Deine FTP in Watt
              </span>
            </label>
            <input
              type="number"
              maxLength={3}
              placeholder="z.B. 250"
              value={calculatorInput}
              onChange={(e) => setCalculatorInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="input  border border-third mb-3 w-full max-w-xs"
            />

            <button
              className="btn btn-sm  mb-10 bg-third border border-first text-first"
              onClick={calculateWattZones}
            >
              Calculate
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-xs table-pin-rows table-pin-cols max-w-xl  mx-auto  bg-second text-first text-center border border-first">
            <thead className="text-first">
              <tr>
                <td>Zone</td>
                <td>Power in Watt</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td id="zone5">7 Sprint Power</td>
                <td>
                  <input
                    className="w-20"
                    type="text"
                    value={tgOutput7}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td id="zone45">6 Anaerobic Capacity</td>
                <td>
                  <input
                    className="w-20"
                    type="text"
                    value={tgOutput6}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td id="zone4">5 VO2max</td>
                <td>
                  <input
                    className="w-20"
                    type="text"
                    value={tgOutput5}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td id="zone35">4 Lactate Threshold</td>
                <td>
                  <input
                    className="w-20"
                    type="text"
                    value={tgOutput4}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td id="zone3">3 Tempo</td>
                <td>
                  <input
                    className="w-20"
                    type="text"
                    value={tgOutput3}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td id="zone2">2 Aerobic Endurance</td>
                <td>
                  <input
                    className="w-20"
                    type="text"
                    value={tgOutput2}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td id="zone1">1 Active Recovery</td>
                <td>
                  <input
                    className="w-20"
                    type="text"
                    value={tgOutput1}
                    readOnly
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Page;
