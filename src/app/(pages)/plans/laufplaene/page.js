import BackButton from "@/app/components/Buttons/BackButton/BackButton";
import NavBar from "@/app/components/NavBar/NavBar";
import React from "react";

function Page() {
  return (
    <>
      <BackButton href="/plans/searchplans" />
      <p className=" mx-auto w-40 text-center -mt-10">Laufpläne</p>

      <p>Coming soon</p>
      <NavBar />
    </>
  );
}

export default Page;
