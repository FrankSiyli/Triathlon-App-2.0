import BackButton from "@/app/components/Buttons/BackButton/BackButton";
import NavBar from "@/app/components/NavBar/NavBar";
import React from "react";

const Page = () => {
  return (
    <>
      <BackButton href="/profil" />
      <p className=" mx-auto w-40 text-center -mt-10">Konto</p>

      <div className=" flex flex-col items-center  mt-10 gap-1  max-w-xl mx-5 ">
        <span>Name:</span>
        <span>Email:</span>
        <button className="btn btn-sm bg-third text-first shadow-xl ">
          Abmelden
        </button>
        <button className="btn btn-sm bg-fourth text-first shadow-xl m-10">
          Konto löschen
        </button>
      </div>
      <NavBar />
    </>
  );
};

export default Page;
