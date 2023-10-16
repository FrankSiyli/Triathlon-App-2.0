"use client";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import Login from "./components/Login/Login";
import Zones from "./components/Zones/Zones";
import Infos from "./components/Infos/Infos";
import WishYouWhat from "./components/WishYouWhat/WishYouWhat";
import Trainingpeaks from "./components/Trainingpeaks/Trainingpeaks";
import MyPlans from "./components/MyPlans/MyPlans";
import UserInfo from "./components/UserInfo/UserInfo";
import Impressum from "@/app/components/Impressum/Impressum";
import Image from "next/image";
import logo from "../../../../public/images/logoSmall.png";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import HeartrateByAge from "../calculators/HeartrateByAge/HeartrateByAge";
import HeartrateMax from "../calculators/HeartrateMax/HeartrateMax";
import PowerWatt from "../calculators/PowerWatt/PowerWatt";

function ProfilView() {
  const [activeComponent, setActiveComponent] = useState("profil");
  const [showLogin, setShowLogin] = useState(false);
  const { data: session } = useSession();

  const handleComponentChange = (component) => {
    setActiveComponent(component);
    setShowLogin(false);
  };

  return (
    <div className=" flex flex-col items-center  mt-5 gap-1  max-w-xl w-screen ">
      {activeComponent === "profil" && (
        <>
          <div className=" mx-auto w-40 text-center mt-5">
            <span>Willkommen {session?.user.name}</span>
          </div>
          {!session && (
            <button
              onClick={() => handleComponentChange("login")}
              className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
            >
              Anmelden
            </button>
          )}

          <button
            onClick={() => handleComponentChange("zones")}
            className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
          >
            Persönliche Kalenderwerte
          </button>

          <button
            onClick={() => handleComponentChange("infos")}
            className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
          >
            Informationen
          </button>

          <button
            onClick={() => handleComponentChange("wishYouWhat")}
            className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
          >
            Wünsch dir was
          </button>

          <button
            onClick={() => handleComponentChange("trainingpeaks")}
            className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
          >
            Trainingpeaks
          </button>

          {session && (
            <button
              onClick={() => handleComponentChange("myPlans")}
              className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
            >
              Meine Pläne
            </button>
          )}

          {session && (
            <button
              onClick={() => handleComponentChange("userInfo")}
              className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
            >
              Konto
            </button>
          )}

          <button
            onClick={() => handleComponentChange("heartrateByAge")}
            className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
          >
            Maximalpuls nach Alter
          </button>
          <button
            onClick={() => handleComponentChange("heartrateMax")}
            className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
          >
            Pulszonen
          </button>
          <button
            onClick={() => handleComponentChange("powerWatt")}
            className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
          >
            Wattzonen
          </button>
        </>
      )}
      {activeComponent === "heartrateByAge" && (
        <HeartrateByAge setShowProfil={() => handleComponentChange("profil")} />
      )}
      {activeComponent === "heartrateMax" && (
        <HeartrateMax setShowProfil={() => handleComponentChange("profil")} />
      )}
      {activeComponent === "powerWatt" && (
        <PowerWatt setShowProfil={() => handleComponentChange("profil")} />
      )}

      {activeComponent === "login" && (
        <Login
          setShowLogin={setShowLogin}
          setShowProfil={() => handleComponentChange("profil")}
          setShowRegisterForm={() => handleComponentChange("registerForm")}
        />
      )}

      {activeComponent === "zones" && (
        <Zones setShowProfil={() => handleComponentChange("profil")} />
      )}

      {activeComponent === "infos" && (
        <Infos setShowProfil={() => handleComponentChange("profil")} />
      )}

      {activeComponent === "wishYouWhat" && (
        <WishYouWhat setShowProfil={() => handleComponentChange("profil")} />
      )}

      {activeComponent === "trainingpeaks" && (
        <Trainingpeaks setShowProfil={() => handleComponentChange("profil")} />
      )}

      {activeComponent === "myPlans" && (
        <MyPlans setShowProfil={() => handleComponentChange("profil")} />
      )}

      {activeComponent === "userInfo" && (
        <UserInfo setShowProfil={() => handleComponentChange("profil")} />
      )}

      {activeComponent === "registerForm" && (
        <RegisterForm
          setShowProfil={() => handleComponentChange("profil")}
          setShowRegisterForm={setShowLogin}
        />
      )}

      <Image
        priority
        src={logo}
        alt="logo"
        className="mx-auto w-40 mt-40"
        width={100}
        height={100}
      />

      <Impressum />
    </div>
  );
}

export default ProfilView;
