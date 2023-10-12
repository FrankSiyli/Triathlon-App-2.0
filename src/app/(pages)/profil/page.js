"use client";
import React, { useEffect, useState } from "react";
import "../../globals.css";
import Footer from "@/app/components/NavBar/NavBar";
import Impressum from "@/app/components/Impressum/Impressum";
import Image from "next/image";
import logo from "../../../../public/images/logoSmall.png";
import LoginAlert from "@/app/components/Alerts/LoginAlert";
import LoginButton from "./components/LoginButton";
import PersonalZonesButton from "./components/PersonalZonesButton";
import InformationsButton from "./components/InformationsButton";
import IfUserIsLoggedInLogic from "./components/IfUserIsLoggedInLogic";
import WishYouWhatButton from "./components/WishYouWhatButton";
import TrainingpeaksButton from "./components/TrainingpeaksButton";
import { getSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { userNameState } from "@/app/recoil/atoms/user/userNameState";
import Loader from "@/app/components/Loader/Loader";

export default function Page() {
  const [session, setSession] = useState(null);
  const [userName, setUserName] = useRecoilState(userNameState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const session = await getSession();
      if (session) {
        setSession(session);
        setUserName(session?.user.name);
      }
    };
    getData();
  }, [setUserName]);

  return (
    <>
      {!session && <div className="mx-auto w-40 text-center mt-5">Profil</div>}
      <Loader isLoading={isLoading} />

      {session && !isLoading && <IfUserIsLoggedInLogic session={session} />}
      {!session && !isLoading && (
        <>
          <LoginAlert />
          <div className="flex flex-col items-center mt-10 gap-1 max-w-xl mx-5">
            <LoginButton />
            <PersonalZonesButton />
            <InformationsButton />
            <WishYouWhatButton />
            <TrainingpeaksButton />
          </div>
        </>
      )}
      {!isLoading && (
        <div>
          <Image
            priority
            src={logo}
            alt="logo"
            className="mx-auto w-40 mt-10"
            width={100}
            height={100}
          />

          <Impressum />
        </div>
      )}
      <Footer />
    </>
  );
}
