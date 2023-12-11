"use client";
import React, { useState } from "react";
import Alert from "@/app/components/Alerts/Alert";
import Image from "next/image";
import ChooseSportCheckBoxes from "./ChooseSportCheckBoxes";
import { useRecoilState } from "recoil";
import { newPlanNameState } from "@/app/recoil/atoms/planBuilder/newPlanNameState";
import { newPlanDescriptionState } from "@/app/recoil/atoms/planBuilder/newPlanDescriptionState";
import ArrowLeftSvg from "@/app/components/SVGs/arrows/ArrowLeftSvg";

const PlanBuilder = ({ setShowPlans, title, image, setActiveComponent }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState("");
  const [newPlanName, setNewPlanName] = useRecoilState(newPlanNameState);
  const [newPlanDescription, setNewPlanDescription] = useRecoilState(
    newPlanDescriptionState
  );

  const handlePlanTypeClick = (planType) => {
    setActiveComponent(planType);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newPlanName) {
      setShowAlert(true);
      setError("Bitte gib deinem Plan einen Namen");
    } else handlePlanTypeClick("newPlan");
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
          <ArrowLeftSvg />
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
            className="input border border-transparent my-10 placeholder-first/80"
            type="string"
            placeholder="Planname"
            onChange={(e) => setNewPlanName(e.target.value)}
          />
          <ChooseSportCheckBoxes />
          <textarea
            className="rounded-md w-full mt-10 max-w-xl bg-sixth border border-alert p-2 placeholder-first/80"
            type="text"
            placeholder="Hier kannst du bald deine eigenen Trainingspläne erstellen."
            value={newPlanDescription}
            onChange={(e) => setNewPlanDescription(e.target.value)}
          />
          <button
            /* disabled */
            type="submit"
            className="btn btn-sm my-5 mx-auto btn-outline border border-alert hover:text-alert text-first"
          >
            weiter
          </button>
        </form>
      </div>
    </>
  );
};

export default PlanBuilder;
