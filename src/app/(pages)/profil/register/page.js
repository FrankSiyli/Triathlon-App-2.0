import BackButton from "@/app/components/Buttons/BackButton/BackButton";
import NavBar from "@/app/components/NavBar/NavBar";
import React from "react";
import RegisterForm from "./components/RegisterForm";

export default async function Page() {
  return (
    <>
      <BackButton href="/profil" />
      <RegisterForm />
      <NavBar />
    </>
  );
}
