import React from "react";
import CalculatorSvg from "@/app/components/SVGs/CalculatorSvg";
import FolderSvg from "@/app/components/SVGs/FolderSvg";
import LibrarySvg from "@/app/components/SVGs/LibrarySvg";
import ArrowRightSvg from "@/app/components/SVGs/arrows/ArrowRightSvg";

const NewPlanChooseSessionSource = ({
  setShowAlert,
  setError,
  setActiveComponent,
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
    setActiveComponent("appLibrary");
  };
  const sessionBuildTypes = [
    {
      component: <CalculatorSvg />,
      label: "Neue Einheit",
      labelColor: "neutral-500",
      cursor: "not-allowed",
      onclick: () => handleNewSessionClick(),
    },
    {
      component: <FolderSvg />,
      label: "Meine Vorlagen",
      labelColor: "neutral-500",
      cursor: "not-allowed",
      onclick: () => handleMySessionsClick(),
    },
    {
      component: <LibrarySvg />,
      label: "App-Bibliothek",
      labelColor: "first",
      cursor: "pointer",
      onclick: () => handleSiyliLibraryClick(),
    },
  ];

  return (
    <>
      {sessionBuildTypes.map((sessionBuildType, sessionBuildTypeIndex) => (
        <div
          className={`flex m-2 p-1 items-center justify-between  bg-fourth/5 rounded shadow text-${sessionBuildType.labelColor} cursor-${sessionBuildType.cursor}`}
          key={sessionBuildTypeIndex}
          onClick={sessionBuildType.onclick}
        >
          <span className="ml-2 ">{sessionBuildType.component}</span>
          <span>{sessionBuildType.label}</span>
          <ArrowRightSvg />
        </div>
      ))}
    </>
  );
};

export default NewPlanChooseSessionSource;
