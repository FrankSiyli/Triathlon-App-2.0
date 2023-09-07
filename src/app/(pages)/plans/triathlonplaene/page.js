import BackButton from "@/app/components/Buttons/BackButton/BackButton";
import NavBar from "@/app/components/NavBar/NavBar";
import React from "react";

const Page = () => {
  return (
    <>
      <BackButton href="/plans/searchplans" />
      <p>Coming soon</p>
      <NavBar />
    </>
  );
};

export default Page;
