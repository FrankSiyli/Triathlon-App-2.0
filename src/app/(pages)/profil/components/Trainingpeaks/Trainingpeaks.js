import Image from "next/image";
import Link from "next/link";
import React from "react";
import trainingpeaksLogo from "../../../../../../public/images/trainingpeaks_logo_2.png";

const Trainingpeaks = ({ setShowProfil }) => {
  const handleBackClick = () => {
    setShowProfil();
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
      <p className=" mx-auto w-40 text-center -mt-10">Trainingpeaks</p>

      <div className="w-11/12 border border-first/50 linear-background rounded-md p-4 my-20 mx-auto max-w-xl text-center">
        <p>
          Falls dir ein Trainingsplan gefällt und du die Einheiten zum
          trainieren auf dein Device laden möchtest, sind alle Pläne bei
          Trainingpeaks erhältlich.{" "}
        </p>
        <br />
        <p> Der Basis Trainingpeaks account ist kostenfrei. </p>
        <br />
        <Link
          target="_blank"
          href="https://www.trainingpeaks.com/coach/siyli-endurance-coaching#trainingplans"
          className="btn btn-sm flex w-40 mx-auto m-5  border border-transparent bg-first  text-first shadow-xl "
        >
          <div className=" -m-2">
            <Image
              alt="trainingpeaks"
              className="w-auto h-10 "
              src={trainingpeaksLogo}
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Trainingpeaks;
