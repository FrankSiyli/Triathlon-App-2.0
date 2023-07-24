"use client";
import React, { useState } from "react";
import "../../../globals.css";
import Link from "next/link";

function Page() {
  const [showAlert, setShowAlert] = useState(false);

  const handleAlertClick = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  return (
    <>
      <Link
        className="btn btn-sm  m-3 bg-third border border-first text-first"
        href="/profil"
      >
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
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </Link>
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
              <div className="alert alert-info w-40 absolute">
                <span>Coming soon</span>
              </div>
            )}
            <label className="label mt-10 ">
              <span className="label-text-alt text-first text-xl">
                Deine FTP
              </span>
            </label>
            <input
              type="number"
              maxLength={3}
              placeholder="FTP z.B. 250"
              id="WattInput"
              className="input  border border-third mb-3 w-full max-w-xs"
            />

            <button
              onClick={handleAlertClick}
              className="btn btn-sm  mb-10 bg-third border border-first text-first"
              id="WcalculateBtn"
              /* onclick="wattZones7(); 
            wattZones6(); 
            wattZones5(); 
            wattZones4(); 
            wattZones3(); 
            wattZones2(); 
            wattZones1();
            clearW();
            " */
            >
              Calculate
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-xs table-pin-rows table-pin-cols max-w-3xl mx-auto bg-second text-first text-center">
            <thead className="text-first">
              <tr>
                <td>Zone</td>
                <td>Power in Watt</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tg1" id="zone5">
                  7 Sprint Power
                </td>
                <td className="tg1">
                  <input
                    className="bg-second"
                    type="text"
                    id="tgOutput700"
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="tg1" id="zone45">
                  6 Anaerobic Capacity
                </td>
                <td className="tg1">
                  <input
                    className="bg-second"
                    type="text"
                    id="tgOutput600"
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="tg1" id="zone4">
                  5 VO2max
                </td>
                <td className="tg1">
                  <input
                    className="bg-second"
                    type="text"
                    id="tgOutput500"
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="tg1" id="zone35">
                  4 Lactate Threshold
                </td>
                <td className="tg1">
                  <input
                    className="bg-second"
                    type="text"
                    id="tgOutput400"
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="tg1" id="zone3">
                  3 Tempo
                </td>
                <td className="tg1">
                  <input
                    className="bg-second"
                    type="text"
                    id="tgOutput300"
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="tg1" id="zone2">
                  2 Aerobic Endurance
                </td>
                <td className="tg1">
                  <input
                    className="bg-second"
                    type="text"
                    id="tgOutput200"
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="tg1" id="zone1">
                  1 Active Recovery
                </td>
                <td className="tg1">
                  <input
                    className="bg-second"
                    type="text"
                    id="tgOutput100"
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
}

export default Page;
