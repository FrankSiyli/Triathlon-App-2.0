"use client";
import React, { useState } from "react";
import "../../../globals.css";
import Link from "next/link";
import BackButton from "@/app/components/Buttons/BackButton/BackButton";

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
      <BackButton href="/profil" />

      <div className="border border-first/50 rounded-md p-4 mx-auto max-w-xl mb-5  text-center">
        <p>
          Wenn du am Anfang deiner sportlichen Entwicklung stehst oder nach
          einer Pause wieder einsteigen möchtest kannst du auch die Formeln
          benutzen um einen Richtwert zu erhalten.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center mx-auto max-w-xl mt-10 ">
        <button className="btn pointer-events-none border-first/50 bg-third   text-first">
          <p className="text-xl ">Damen</p>
          <br />
          <p className="">HRmax = 209-(0.9 x Alter) </p>
        </button>

        <label className="label  ">
          <span className="label-text-alt text-first text-xl">Dein Alter</span>
        </label>
        <input
          type="number"
          placeholder="z.B. 35"
          value={womenCalculatorInput}
          onChange={(e) => setWomenCalculatorInput(e.target.value)}
          onKeyDown={handleWomenKeyDown}
          className="input  border border-first/50 w-full max-w-xs"
        />
        {womenShowAlert && (
          <div className="alert alert-info fixed inset-x-0 inset-y-3 mx-auto max-w-md h-10 bg-first  flex justify-center ">
            <span>Bitte trage dein Alter ein (0-100)</span>
          </div>
        )}
        <button
          onClick={handleWomenInputClick}
          className="btn btn-sm m-3 bg-third border border-first/50 text-first"
        >
          Berechnen
        </button>
        {womenCalculatedHr && (
          <div className="border border-first bg-second text-center text-md p-2 rounded-md">
            Dein berechneter Maximalpuls:{" "}
            <p className="text-xl ">{womenCalculatedHr}</p>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-center items-center mx-auto max-w-xl  ">
        <button className="btn pointer-events-none border-first/50 bg-third mt-20  text-first">
          <p className="text-xl ">Herren</p>
          <br />
          <p className="">HRmax = 214-(0.8 x Alter) </p>
        </button>

        <label className="label ">
          <span className="label-text-alt text-first text-xl">Dein Alter</span>
        </label>
        {menShowAlert && (
          <div className="alert alert-info fixed inset-x-0 inset-y-3 mx-auto max-w-md h-10 bg-first  flex justify-center ">
            <span>Bitte trage dein Alter ein (0-100)</span>
          </div>
        )}
        <input
          type="number"
          maxLength={3}
          placeholder="z.B. 35"
          value={menCalculatorInput}
          onChange={(e) => setMenCalculatorInput(e.target.value)}
          onKeyDown={handleMenKeyDown}
          className="input  border border-first/50 mb-3 w-full max-w-xs"
        />

        <button
          onClick={handleMenInputClick}
          className="btn btn-sm bg-third border border-first/50 text-first"
        >
          Berechnen
        </button>
        {menCalculatedHr && (
          <div className="border border-first bg-second text-center text-md m-3 p-2 rounded-md">
            Dein berechneter Maximalpuls:{" "}
            <p className="text-xl ">{menCalculatedHr}</p>
          </div>
        )}
      </div>
      <div className="border border-first/50 max-w-xl mx-auto rounded-md p-4 mt-20 m-1  text-center">
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
