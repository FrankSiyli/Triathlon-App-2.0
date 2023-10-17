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
import LoginAlert from "@/app/components/Alerts/LoginAlert";

function ProfilView() {
  const [activeComponent, setActiveComponent] = useState("profil");
  const [showLogin, setShowLogin] = useState(false);
  const { data: session } = useSession();

  const handleComponentChange = (component) => {
    setActiveComponent(component);
    setShowLogin(false);
  };

  return (
    <div className="flex flex-col mx-auto max-w-xl relative h-auto w-full   overflow-y-auto max-h-screen ">
      {activeComponent === "profil" && (
        <>
          <LoginAlert />
          <div className="mx-auto w-40 text-center mt-5 mb-10">
            <span>Willkommen {session?.user.name}</span>
          </div>
          {!session && (
            <button
              onClick={() => handleComponentChange("login")}
              className="flex justify-between w-full max-w-xl shadow-md p-2 rounded-md mx-5 my-1 "
            >
              <div className="ml-5">Anmelden</div>
              <svg
                xmlns="http://w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          )}

          <button
            onClick={() => handleComponentChange("zones")}
            className="flex justify-between w-full max-w-xl shadow-md p-2 rounded-md mx-5 my-1 "
          >
            <div className="ml-5">Persönliche Kalenderwerte</div>
            <svg
              xmlns="http://w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          <button
            onClick={() => handleComponentChange("infos")}
            className="flex justify-between w-full max-w-xl shadow-md p-2 rounded-md mx-5 my-1 "
          >
            <div className="ml-5">Informationen</div>
            <svg
              xmlns="http://w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          <button
            onClick={() => handleComponentChange("wishYouWhat")}
            className="flex justify-between w-full max-w-xl shadow-md p-2 rounded-md mx-5 my-1 "
          >
            <div className="ml-5">Wünsch dir was</div>
            <svg
              xmlns="http://w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          <button
            onClick={() => handleComponentChange("trainingpeaks")}
            className="flex justify-between w-full max-w-xl shadow-md p-2 rounded-md mx-5 my-1 "
          >
            <div className="ml-5">Trainingpeaks</div>
            <svg
              xmlns="http://w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          {session && (
            <button
              onClick={() => handleComponentChange("myPlans")}
              className="flex justify-between w-full max-w-xl shadow-md p-2 rounded-md mx-5 my-1 "
            >
              <div className="ml-5">Meine Pläne</div>
              <svg
                xmlns="http://w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          )}

          {session && (
            <button
              onClick={() => handleComponentChange("userInfo")}
              className="flex justify-between w-full max-w-xl shadow-md p-2 rounded-md mx-5 my-1 "
            >
              <div className="ml-5">Konto</div>
              <svg
                xmlns="http://w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          )}
        </>
      )}
      {activeComponent === "heartrateByAge" && (
        <HeartrateByAge setShowInfos={() => handleComponentChange("infos")} />
      )}
      {activeComponent === "heartrateMax" && (
        <HeartrateMax setShowInfos={() => handleComponentChange("infos")} />
      )}
      {activeComponent === "powerWatt" && (
        <PowerWatt setShowInfos={() => handleComponentChange("infos")} />
      )}

      {activeComponent === "login" && (
        <Login
          setShowProfil={() => handleComponentChange("profil")}
          setShowRegisterForm={() => handleComponentChange("registerForm")}
        />
      )}

      {activeComponent === "zones" && (
        <Zones setShowProfil={() => handleComponentChange("profil")} />
      )}

      {activeComponent === "infos" && (
        <Infos
          setShowProfil={() => handleComponentChange("profil")}
          setShowHeartrateByAge={() => handleComponentChange("heartrateByAge")}
          setShowHeartrateMax={() => handleComponentChange("heartrateMax")}
          setShowPowerWatt={() => handleComponentChange("powerWatt")}
        />
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