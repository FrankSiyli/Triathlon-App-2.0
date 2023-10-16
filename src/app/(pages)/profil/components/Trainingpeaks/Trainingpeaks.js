import BackButton from "@/app/components/Buttons/BackButton/BackButton";
import NavBar from "@/app/components/NavBar/NavBar";
import Link from "next/link";
import React from "react";

const Trainingpeaks = () => {
  return (
    <>
      <BackButton href="/profil" />
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
          className="btn btn-sm flex w-40 mx-auto m-5  border border-transparent bg-third  text-first shadow-xl "
        >
          Trainingpeaks
        </Link>
      </div>

      <NavBar />
    </>
  );
};

export default Trainingpeaks;
