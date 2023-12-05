"use client";
import React, { useState } from "react";
import Alert from "@/app/components/Alerts/Alert";
import Image from "next/image";
import ChooseSportCheckBoxes from "./ChooseSportCheckBoxes";

const PlanBuilder = ({ setShowPlans, title, image }) => {
  const [planName, setPlanName] = useState("");
  const [planInfo, setPlanInfo] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!planName) {
      setShowAlert(true);
      setError("Bitte gib deinem Plan einen Namen");
    }
  };

  const handleBackClick = () => {
    setShowPlans();
  };

  return (
    <>
      <div className="w-full max-w-xl mx-auto">
        <button
          className="top-5 left-5 btn btn-ghost btn-sm  m-3 border border-transparent text-first "
          onClick={handleBackClick}
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
      <p className="mx-auto text-center -mt-10">{title}</p>
      <Image
        className="absolute top-0 right-0 h-16 w-24 rounded-bl"
        src={image}
        alt="sport image"
        width={80}
        height={80}
      />
      <div className="h-16 absolute right-0 top-0 w-24  bg-gradient-to-l from-transparent via-transparent via-80% to-fifth z-10"></div>
      <div className="h-16 absolute right-0 top-0 w-24  bg-gradient-to-b from-transparent via-transparent via-80% to-fifth z-10"></div>
      {showAlert && <Alert alertText={error} setShowAlert={setShowAlert} />}

      <div className=" flex flex-col items-center mt-10 w-full max-w-xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center"
        >
          <input
            className="input border border-transparent my-10"
            type="string"
            placeholder="Planname"
            onChange={(e) => setPlanName(e.target.value)}
          />
          <ChooseSportCheckBoxes />
          <textarea
            className=" rounded-md w-full mt-10 max-w-xl bg-sixth border border-alert p-2"
            type="text"
            placeholder="Planinfos"
            value={planInfo}
            onChange={(e) => setPlanInfo(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-sm my-5 mx-auto btn-outline border border-alert text-first"
          >
            weiter
          </button>
        </form>
      </div>
    </>
  );
};

export default PlanBuilder;
