"use client";
import React, { useState } from "react";
import "../../../globals.css";
import Link from "next/link";

function Page() {
  const [calculatorInput, setCalculatorInput] = useState("");
  const [tgOutput1, setTgOutput1] = useState("");
  const [tgOutput2, setTgOutput2] = useState("");
  const [tgOutput3, setTgOutput3] = useState("");
  const [tgOutput4, setTgOutput4] = useState("");
  const [tgOutput5, setTgOutput5] = useState("");
  const [anaerobicOutput, setAnaerobicOutput] = useState("");
  const [aerobicOutput, setAerobicOutput] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const calculatePercentages = () => {
    const a = parseFloat(calculatorInput);
    const b = a / 100;
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
      setTgOutput1(`${Math.round(b * 50)} - ${Math.round(b * 60)}`);
      setTgOutput2(`${Math.round(b * 60)} - ${Math.round(b * 70)}`);
      setTgOutput3(`${Math.round(b * 70)} - ${Math.round(b * 80)}`);
      setTgOutput4(`${Math.round(b * 80)} - ${Math.round(b * 90)}`);
      setTgOutput5(`${Math.round(b * 90)} - ${Math.round(b * 100)}`);
      setAnaerobicOutput(Math.round(b * 85));
      setAerobicOutput(Math.round(b * 60));
      setCalculatorInput("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      calculatePercentages();
    }
  };

  return (
    <>
      <div className="flex max-w-xl mx-auto">
        <Link
          className="btn btn-sm  m-1 bg-third border border-first text-first"
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
      </div>
      <div className="border border-first max-w-xl mx-auto rounded-md p-4 m-1 bg-second text-center">
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
      <div className="max-w-xl mx-auto flex flex-col justify-center items-center ">
        {showAlert && (
          <div className="alert alert-info max-w-md h-10 bg-first absolute flex justify-center m-10">
            <span>Bitte trage deine HRmax ein.</span>
          </div>
        )}
        <label className="label mt-10 ">
          <span className="label-text-alt text-first text-xl">
            Dein Maximalpuls
          </span>
        </label>

        <input
          type="number"
          placeholder="zwischen 100 und 300"
          className="input  border border-third mb-3 w-full max-w-xs"
          value={calculatorInput}
          onChange={(e) => setCalculatorInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button
          type="submit"
          className="btn btn-sm  mb-10 bg-third border border-first text-first"
          id="calculateBtn"
          onClick={calculatePercentages}
        >
          Calculate
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols max-w-3xl  mx-auto  bg-second text-first text-center border border-first">
          <thead className="text-first">
            <tr>
              <td>Zone</td>
              <td className="w-20">HR in %</td>
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
                  className="w-20"
                  type="text"
                  value={tgOutput5}
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td id="zone4">4 Anaerobic</td>
              <td>80 - 90</td>
              <td>
                <input
                  className="w-20 "
                  type="text"
                  value={tgOutput4}
                  readOnly
                />
              </td>
              <td>
                Anaerobic <br />
                <input
                  className="w-20 "
                  type="text"
                  value={anaerobicOutput}
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td id="zone3">3 Aerobic</td>
              <td>70 - 80</td>
              <td>
                <input
                  className="w-20 "
                  type="text"
                  value={tgOutput3}
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td id="zone2">2 Base</td>
              <td>60 - 70</td>
              <td>
                <input
                  className="w-20 "
                  type="text"
                  value={tgOutput2}
                  readOnly
                />
              </td>
              <td>
                Aerobic <br />
                <input
                  className="w-20 "
                  type="text"
                  value={aerobicOutput}
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td id="zone1">1 Warmup</td>
              <td>50 - 60</td>
              <td>
                <input
                  className="w-20 "
                  type="text"
                  value={tgOutput1}
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
