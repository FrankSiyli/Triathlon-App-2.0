"use client";
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
import WelcomeText from "./components/WelcomeText";
import MyPlansButton from "./components/MyPlansButton";
import AccountButton from "./components/AccountButton";
import { useRecoilState } from "recoil";
import { userNameState } from "@/app/recoil/atoms/user/userNameState";

export default function Page() {
  const [userName, setUserName] = useRecoilState(userNameState);

  return (
    <>
      {/*      <LoginAlert />
       */}{" "}
      {userName === "" ? (
        <div className=" mx-auto w-40 text-center mt-5">Profil</div>
      ) : (
        <div className=" mx-auto w-40 text-center mt-5">
          <WelcomeText />
        </div>
      )}
      <div className=" flex flex-col items-center  mt-10 gap-1  max-w-xl mx-5 ">
        {userName === "" ? <LoginButton /> : null}
        <PersonalZonesButton />
        <InformationsButton />
        {userName !== "" ? <MyPlansButton /> : null}
        {userName !== "" ? <AccountButton /> : null}
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
