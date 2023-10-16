"use client";
import React from "react";
import "../../../globals.css";
import Impressum from "@/app/components/Impressum/Impressum";
import Image from "next/image";
import logo from "../../../../../public/images/logoSmall.png";
import LoginAlert from "@/app/components/Alerts/LoginAlert";
import IfUserIsLoggedInLogic from "./IfUserIsLoggedInLogic";
import { useSession } from "next-auth/react";
import Login from "./Login/Login";
import Zones from "./Zones/Zones";
import Infos from "./Infos/Infos";
import WishYouWhat from "./WishYouWhat/WishYouWhat";
import Trainingpeaks from "./Trainingpeaks/Trainingpeaks";

export default function Profil() {
  const { data: session } = useSession();
  return (
    <>
      {!session ? (
        <>
          <div className="relative">
            <LoginAlert />
            <div className=" mx-auto w-40 text-center mt-5">Profil</div>
          </div>
          <div className="flex flex-col items-center  mt-10 gap-1  max-w-xl w-screen mx-5 ">
            <Login />
            <Zones />
            <Infos />
            <WishYouWhat />
            <Trainingpeaks />
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

      <Impressum />
    </>
  );
}
