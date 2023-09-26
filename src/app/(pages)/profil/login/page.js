"use client";
import BackButton from "@/app/components/Buttons/BackButton/BackButton";
import NavBar from "@/app/components/NavBar/NavBar";
import Link from "next/link";
import React from "react";
function Page() {
  return (
    <>
      <BackButton href="/profil" />
      <p className=" mx-auto w-40 text-center -mt-10">Login</p>

      <div className=" flex flex-col items-center  mt-10 gap-1  max-w-xl mx-5 ">
        <form className="flex flex-col items-center gap-3">
          <input
            className="input  border border-transparent "
            type="mail"
            placeholder="Email"
          />
          <input
            className="input  border border-transparent "
            type="password"
            placeholder="Passwort"
          />
          <button className="btn btn-sm bg-third text-first shadow-xl ">
            Anmelden
          </button>
          <Link
            href={"/profil/register"}
            className="underline underline-offset-2"
          >
            Konto erstellen
          </Link>
        </form>
        <div className="w-11/12 border border-first/50 linear-background rounded-md p-4 mt-10 mx-auto max-w-xl  text-center">
          <p>
            Zum speichern deiner Werte und Pläne erstelle ein Konto oder melde
            dich an.
          </p>
        </div>
      </div>
      <NavBar />
    </>
  );
}

export default Page;
