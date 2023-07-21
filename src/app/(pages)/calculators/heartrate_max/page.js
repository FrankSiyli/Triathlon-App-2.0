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
        className="btn  m-3 bg-red border border-light text-light"
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
      <div className="border border-light rounded-md p-4 m-1 bg-dark text-center">
        <p>
          Einem HRmax Test sollten mehrere Monate mit strukturiertem Training
          vorangehen.
        </p>
        <p>
          Falls du in den letzten 6 Monaten bei einem Event einen All OUT
          Zielsprint angesetzt hast kannst du dir diese Puls-Werte gern mal
          genauer anschauen.
        </p>
        <p>
          Der sicherste Weg um genaue Werte zu erhalten bleibt eine
          professionelle Leistungsdiagnostik.
        </p>
      </div>
      <div className="ml-2">
        {showAlert && (
          <div className="alert alert-info w-40 absolute">
            <span>Coming soon</span>
          </div>
        )}
        <label className="label mt-10 ">
          <span className="label-text-alt text-light ">Dein Maximalpuls</span>
        </label>
        <input
          type="number"
          maxLength={3}
          placeholder="HRmax z.B. 185"
          id="heartrateInput"
          className="input  border border-red mb-3 w-full max-w-xs"
        />

        <button
          onClick={handleAlertClick}
          className="btn btn-sm  mb-10 bg-red border border-grey text-light"
          id="calculateBtn"
          /* onClick="percentage1();
            percentage2();
            percentage3();
            percentage4();
            percentage5();
            percentageAnaerob();
            percentageAerob();
            clearHR();
            " */
        >
          Calculate
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols mb-20 bg-dark text-light text-center border border-light">
          <thead className="text-light">
            <tr>
              <td>Zone</td>
              <td>HR percent</td>
              <td>Target HR bpm</td>
              <td>Thresholds bpm</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="zone5"> 5 Speed</td>
              <td>90 - 100</td>
              <td>
                <input
                  className="w-20 bg-dark"
                  type="number"
                  id="tgOutput5"
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td id="zone4">4 Anaerobic</td>
              <td>80 - 90</td>
              <td>
                <input
                  className="w-20 bg-dark"
                  type="number"
                  id="tgOutput4"
                  readOnly
                />
              </td>
              <td>
                Anaerobic{" "}
                <input
                  className="w-20 bg-dark"
                  type="number"
                  id="anaerobicOutput"
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td id="zone3">3 Aerobic</td>
              <td>70 - 80</td>
              <td>
                <input
                  className="w-20 bg-dark"
                  type="number"
                  id="tgOutput3"
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td id="zone2">2 Base</td>
              <td>60 - 70</td>
              <td>
                <input
                  className="w-20 bg-dark"
                  type="number"
                  id="tgOutput2"
                  readOnly
                />
              </td>
              <td>
                Aerobic{" "}
                <input
                  className="w-20 bg-dark"
                  type="number"
                  id="aerobicOutput"
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td id="zone1">1 Warmup</td>
              <td>50 - 60</td>
              <td>
                <input
                  className="w-20 bg-dark"
                  type="number"
                  id="tgOutput1"
                  readOnly
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Page;
