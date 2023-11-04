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
import Image from "next/image";
import logo from "../../../../public/images/logoSmall.png";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import HeartrateByAge from "./components/Infos/components/calculators/HeartrateByAge/HeartrateByAge";
import HeartrateMax from "./components/Infos/components/calculators/HeartrateMax/HeartrateMax";
import PowerWatt from "./components/Infos/components/calculators/PowerWatt/PowerWatt";
import Agb from "./components/legal/Agb";
import PrivacyPolicy from "./components/legal/PrivacyPolicy";
import Impressum from "./components/legal/Impressum";
import Link from "next/link";
import trainingpeaksLogo from "../../../../public/images/trainingpeaks_logo_2.png";
import AppUpdates from "./components/AppUpdates/AppUpdates";

function ProfilView() {
  const [activeComponent, setActiveComponent] = useState("profil");
  const [showLogin, setShowLogin] = useState(false);
  const { data: session } = useSession();

  const handleComponentChange = (component) => {
    setActiveComponent(component);
    setShowLogin(false);
  };

  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className="flex flex-col items-center gap-2 max-w-xl">
      {activeComponent === "profil" && (
        <>
          <div className="mx-auto  text-center mt-5 mb-10">
            <span>Willkommen {session?.user.name}</span>
          </div>
          {!session && (
            <button
              onClick={() => handleComponentChange("login")}
              className="flex justify-between w-full max-w-xl shadow-md p-2 rounded-md my-1 "
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
            className="flex justify-between w-full max-w-xl shadow-md p-2 rounded-md  my-1 "
          >
            <div className="ml-5">Puls und Pace Kalenderwerte</div>
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
            className="flex justify-between w-full max-w-xl shadow-md p-2 rounded-md  my-1 "
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
            className="flex justify-between w-full max-w-xl shadow-md p-2 rounded-md  my-1 "
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

          {session && (
            <button
              onClick={() => handleComponentChange("myPlans")}
              className="flex justify-between w-full max-w-xl shadow-md p-2 rounded-md my-1 "
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
              className="flex justify-between w-full max-w-xl shadow-md p-2 rounded-md  my-1 "
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

          <button
            onClick={() => handleComponentChange("trainingpeaks")}
            className="flex justify-between w-full max-w-xl shadow-md p-2 rounded-md  my-1"
          >
            <div className="ml-5  bg-first rounded-md">
              <Image
                alt="trainingpeaks"
                className="w-auto h-7 "
                src={trainingpeaksLogo}
              />
            </div>
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
            onClick={() => handleComponentChange("appUpdates")}
            className="flex justify-between w-full max-w-xl shadow-md p-2 rounded-md  my-1 "
          >
            <div className="ml-5">App-updates</div>
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
      {activeComponent === "appUpdates" && (
        <AppUpdates setShowProfil={() => handleComponentChange("profil")} />
      )}
      {activeComponent === "registerForm" && (
        <RegisterForm
          setShowProfil={() => handleComponentChange("profil")}
          setShowRegisterForm={setShowLogin}
        />
      )}
      {activeComponent === "agb" && (
        <Agb setShowProfil={() => handleComponentChange("profil")} />
      )}
      {activeComponent === "impressum" && (
        <Impressum setShowProfil={() => handleComponentChange("profil")} />
      )}
      {activeComponent === "privacyPolicy" && (
        <PrivacyPolicy setShowProfil={() => handleComponentChange("profil")} />
      )}
      {activeComponent === "profil" && (
        <>
          <Image
            priority
            src={logo}
            alt="logo"
            className="mx-auto w-40 mt-20"
            width={100}
            height={100}
          />
          <Link
            target="_blank"
            href="https://www.instagram.com/siyli_app.de?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
            className="relative flex text-center justify-center items-center m-10 border border-first w-8 h-8 rounded-md cursor-pointer shadow-sm"
          >
            <span className="absolute top-1 right-1 border border-first rounded-full w-1 h-1 shadow-xl bounce-point "></span>
            <span className="border border-first rounded-full w-4 h-4  shadow-xl"></span>
          </Link>
          <button
            onClick={() => handleComponentChange("impressum")}
            className="flex justify-between w-full max-w-xl shadow-md p-2 rounded-md  my-1 "
          >
            <div className="ml-5">Impressum</div>
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
            onClick={() => handleComponentChange("agb")}
            className="flex justify-between w-full max-w-xl shadow-md p-2 rounded-md  my-1 "
          >
            <div className="ml-5">AGB</div>
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
            onClick={() => handleComponentChange("privacyPolicy")}
            className="flex justify-between w-full max-w-xl shadow-md p-2 rounded-md  my-1 "
          >
            <div className="ml-5">Datenschutz</div>
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
          <div className="my-5 text-center flex  justify-center">
            © Siyli-endurance-coaching 2022-{currentYear}{" "}
          </div>{" "}
        </>
      )}
    </div>
  );
}

export default ProfilView;
