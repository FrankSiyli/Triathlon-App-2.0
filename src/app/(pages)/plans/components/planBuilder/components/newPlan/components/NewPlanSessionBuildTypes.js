"use client";
import React, { useState } from "react";
import Alert from "@/app/components/Alerts/Alert";
import CalculatorSvg from "@/app/components/SVGs/CalculatorSvg";
import FolderSvg from "@/app/components/SVGs/FolderSvg";
import LibrarySvg from "@/app/components/SVGs/LibrarySvg";
import ArrowRightSvg from "@/app/components/SVGs/arrows/ArrowRightSvg";

const NewPlanSessionBuildTypes = ({
  showAlert,
  setShowAlert,
  error,
  setError,
}) => {
  const handleNewSessionClick = () => {
    setShowAlert(true);
    setError("Feature ist in Arbeit");
  };
  const handleMySessionsClick = () => {
    setShowAlert(true);
    setError("Feature ist in Arbeit");
  };

  const handleSiyliLibraryClick = () => {
    setShowAlert(true);
    setError("Feature ist in Arbeit");
  };
  const sessionBuildTypes = [
    {
      component: <CalculatorSvg />,
      label: "Neue Einheit",
      onclick: () => handleNewSessionClick(),
    },
    {
      component: <FolderSvg />,
      label: "Meine Vorlagen",
      onclick: () => handleMySessionsClick(),
    },
    {
      component: <LibrarySvg />,
      label: "App-Bibliothek",
      onclick: () => handleSiyliLibraryClick(),
    },
  ];

  return (
    <>
      {sessionBuildTypes.map((sessionBuildType, sessionBuildTypeIndex) => (
        <div
          className="hover:text-neutral-500 cursor-not-allowed flex m-1 p-1 items-center justify-between  bg-fourth/5 rounded shadow"
          key={sessionBuildTypeIndex}
          onClick={sessionBuildType.onclick}
        >
          <span className="ml-2">{sessionBuildType.component}</span>
          {sessionBuildType.label}
          <ArrowRightSvg />
        </div>
      ))}
    </>
  );
};

export default NewPlanSessionBuildTypes;
