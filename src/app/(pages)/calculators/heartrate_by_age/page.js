"use client";
import React, { useState } from "react";
import "../../../globals.css";
import Link from "next/link";

function Page() {
  const [womenShowAlert, setWomenShowAlert] = useState(false);
  const [menShowAlert, setMenShowAlert] = useState(false);
  const [womenCalculatorInput, setWomenCalculatorInput] = useState("");
  const [menCalculatorInput, setMenCalculatorInput] = useState("");
  const [womenCalculatedHr, setWomenCalculatedHr] = useState("");
  const [menCalculatedHr, setMenCalculatedHr] = useState("");
  const handleWomenInputClick = () => {
    if (
      womenCalculatorInput === "" ||
      womenCalculatorInput < 0 ||
      womenCalculatorInput > 100
    ) {
      setWomenShowAlert(true);
      setTimeout(() => {
        setWomenShowAlert(false);
      }, 2000);
    } else {
      setWomenCalculatedHr(Math.round(209 - 0.9 * womenCalculatorInput));
      setWomenCalculatorInput("");
    }
  };
  const handleMenInputClick = () => {
    if (
      menCalculatorInput === "" ||
      menCalculatorInput < 0 ||
      menCalculatorInput > 100
    ) {
      setMenShowAlert(true);
      setTimeout(() => {
        setMenShowAlert(false);
      }, 2000);
    } else {
      setMenCalculatedHr(Math.round(214 - 0.8 * menCalculatorInput));
      setMenCalculatorInput("");
    }
  };
  const handleWomenKeyDown = (event) => {
    if (event.key === "Enter") {
      handleWomenInputClick();
    }
  };
  const handleMenKeyDown = (event) => {
    if (event.key === "Enter") {
      handleMenInputClick();
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
      <div className="border border-first rounded-md p-4 mx-auto max-w-xl mb-5  bg-second text-center">
        <p>
          Wenn du am Anfang deiner sportlichen Entwicklung stehst oder nach
          einer Pause wieder einsteigen möchtest kannst du auch die Formeln
          benutzen um einen Richtwert zu erhalten.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center mx-auto max-w-xl mt-10 ">
        <button className="btn pointer-events-none border-first  bg-third   text-first">
          <p className="text-xl ">Damen</p>
          <br />
          <p className="">HRmax = 209-(0.9 x Alter) </p>
        </button>
        {womenShowAlert && (
          <div className="alert alert-info max-w-md h-10 bg-first absolute flex justify-center m-10">
            <span>Bitte trage dein Alter ein.</span>
          </div>
        )}
        <label className="label  ">
          <span className="label-text-alt text-first text-xl">Dein Alter</span>
        </label>
        <input
          type="number"
          placeholder="z.B. 35"
          value={womenCalculatorInput}
          onChange={(e) => setWomenCalculatorInput(e.target.value)}
          onKeyDown={handleWomenKeyDown}
          className="input  border border-third w-full max-w-xs"
        />
        <button
          onClick={handleWomenInputClick}
          className="btn btn-sm m-3 bg-third border border-first text-first"
        >
          Calculate
        </button>
        {womenCalculatedHr && (
          <div className="border border-first bg-second text-center text-md p-2 rounded-md">
            Dein berechneter Maximalpuls:{" "}
            <p className="text-xl text-third">{womenCalculatedHr}</p>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-center items-center mx-auto max-w-xl  ">
        <button className="btn pointer-events-none border-first  bg-third mt-20  text-first">
          <p className="text-xl ">Herren</p>
          <br />
          <p className="">HRmax = 214-(0.8 x Alter) </p>
        </button>
        {menShowAlert && (
          <div className="alert alert-info max-w-md h-10 bg-first absolute flex justify-center m-10">
            <span>Bitte trage dein Alter ein.</span>
          </div>
        )}
        <label className="label ">
          <span className="label-text-alt text-first text-xl">Dein Alter</span>
        </label>
        <input
          type="number"
          maxLength={3}
          placeholder="z.B. 35"
          value={menCalculatorInput}
          onChange={(e) => setMenCalculatorInput(e.target.value)}
          onKeyDown={handleMenKeyDown}
          className="input  border border-third mb-3 w-full max-w-xs"
        />

        <button
          onClick={handleMenInputClick}
          className="btn btn-sm bg-third border border-first text-first"
        >
          Calculate
        </button>
        {menCalculatedHr && (
          <div className="border border-first bg-second text-center text-md m-3 p-2 rounded-md">
            Dein berechneter Maximalpuls:{" "}
            <p className="text-xl text-third">{menCalculatedHr}</p>
          </div>
        )}
      </div>
      <div className="border border-first max-w-xl mx-auto rounded-md p-4 mt-20 m-1 bg-second text-center">
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
    </>
  );
}

export default Page;
