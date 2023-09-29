import BackButton from "@/app/components/Buttons/BackButton/BackButton";
import NavBar from "@/app/components/NavBar/NavBar";
import React from "react";
import RegisterForm from "./components/RegisterForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Page() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <BackButton href="/profil" />
      {!session && <RegisterForm />}
      {session && (
        <div className=" w-full max-w-xl  text-center  p-2 mx-5 my-1 ">
          Erfolgreich angemeldet.
        </div>
      )}
      <NavBar />
    </>
  );
}
