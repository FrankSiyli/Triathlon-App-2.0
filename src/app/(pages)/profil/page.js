"use client";
import Footer from "@/app/components/Footer/Footer";
import React, { useState } from "react";
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
      <button className="btn pointer-events-none border-light  bg-red m-5 text-xl text-light">
        Hey user.name 👋
      </button>
      <div className="flex min-h-screen max-w-xl mx-auto mb-20 flex-col items-center p-4">
        <label className="label">
          <span className="label-text-alt text-light text-xl">
            Dein Maximalpuls
          </span>
        </label>
        <input
          type="number"
          placeholder="👉"
          className="input  border border-red w-full max-w-xs"
        />

        <button
          onClick={handleAlertClick}
          className="btn  m-1 bg-red border border-light text-light"
        >
          Enter
        </button>
        {showAlert && (
          <div className="alert alert-info w-40 absolute">
            <span>Coming soon</span>
          </div>
        )}

        <div className="border border-red rounded-md text-center p-3 mt-20  bg-dark">
          <p className="mt-3">Du kennst deinen Maximalpuls nicht?</p>
          <p>Kein Problem, hier findest du Informationen.</p>
          <div className="flex flex-col items-center mt-5">
            <Link
              className=" text-red underline text-xl"
              href="/calculators/heartrate_by_age"
            >
              HRmax nach Alter
            </Link>
            <Link
              className=" text-red underline text-xl m-5"
              href="/calculators/heartrate_max"
            >
              Puls Zonen
            </Link>
            <Link
              className=" text-red underline text-xl"
              href="/calculators/power_watt"
            >
              Watt Zonen
            </Link>
          </div>
        </div>
        <div className="mt-20 flex flex-row text-light gap-2 underline">
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
      </div>
      <Footer />
    </>
  );
}

export default Page;
