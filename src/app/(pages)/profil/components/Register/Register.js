import BackButton from "@/app/components/Buttons/BackButton/BackButton";
import React from "react";
import RegisterForm from "./components/RegisterForm";

export default async function Register() {
  return (
    <>
      <BackButton href="/profil" />
      <RegisterForm />
    </>
  );
}
