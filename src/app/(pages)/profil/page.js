import Footer from "@/app/components/NavBar/NavBar";
import React from "react";
import "../../globals.css";
import Impressum from "@/app/components/Impressum/Impressum";
import Image from "next/image";
import logo from "../../../../public/images/logoSmall.png";
import LoginAlert from "@/app/components/Alerts/LoginAlert";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LoginButton from "./components/LoginButton";
import PersonalZonesButton from "./components/PersonalZonesButton";
import InformationsButton from "./components/InformationsButton";
import WelcomeText from "./components/WelcomeText";
import MyPlansButton from "./components/MyPlansButton";
import AccountButton from "./components/AccountButton";

export default async function Page() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <LoginAlert session={session} />
      {!session && <div className=" mx-auto w-40 text-center mt-5">Profil</div>}
      {session && (
        <div className=" mx-auto w-40 text-center mt-5">
          <WelcomeText />
        </div>
      )}

      <div className=" flex flex-col items-center  mt-10 gap-1  max-w-xl mx-5 ">
        <LoginButton />
        <PersonalZonesButton />
        <InformationsButton />
        <MyPlansButton />
        <AccountButton />
      </div>

      <Image
        priority
        src={logo}
        alt="logo"
        className="mx-auto  w-40 mt-10 "
        width={100}
        height={100}
      />
      <Impressum />

      <Footer />
    </>
  );
}
