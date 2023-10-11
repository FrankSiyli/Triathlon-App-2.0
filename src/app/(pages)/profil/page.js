import Footer from "@/app/components/NavBar/NavBar";
import React from "react";
import "../../globals.css";
import Impressum from "@/app/components/Impressum/Impressum";
import Image from "next/image";
import logo from "../../../../public/images/logoSmall.png";
import LoginAlert from "@/app/components/Alerts/LoginAlert";
import LoginButton from "./components/LoginButton";
import PersonalZonesButton from "./components/PersonalZonesButton";
import InformationsButton from "./components/InformationsButton";
import IfUserIsLoggedInLogic from "./components/IfUserIsLoggedInLogic";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function Page() {
  const session = await getServerSession(authOptions);

  return (
    <>
      {!session ? (
        <>
          <LoginAlert />
          <div className=" mx-auto w-40 text-center mt-5">Profil</div>
          <div className=" flex flex-col items-center  mt-10 gap-1  max-w-xl mx-5 ">
            <LoginButton />
            <PersonalZonesButton />
            <InformationsButton />
          </div>
        </>
      ) : (
        <IfUserIsLoggedInLogic session={session} />
      )}
      <Image
        priority
        src={logo}
        alt="logo"
        className="mx-auto  w-40 mt-10 "
        width={100}
        height={100}
      />

      <div className="w-11/12 border border-first/50 linear-background rounded-md p-4 my-20 mx-auto max-w-xl text-sm text-center">
        <p>
          Falls dir ein Trainingsplan gefällt und du die Einheiten zum
          trainieren auf dein Device laden möchtest, sind alle Pläne bei
          Trainingpeaks erhältlich.{" "}
        </p>
        <br />
        <p> Der Basic Trainingpeaks account ist kostenfrei. </p>
        <br />
        <Link
          target="_blank"
          href="https://www.trainingpeaks.com/coach/siyli-endurance-coaching#trainingplans"
          className="btn btn-sm flex w-40 mx-auto m-5  border border-transparent bg-third  text-first shadow-xl "
        >
          Trainingpeaks
        </Link>
      </div>

      <Impressum />
      <Footer />
    </>
  );
}
