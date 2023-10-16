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

function ProfilView() {
  const [showProfil, setShowProfil] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showZones, setShowZones] = useState(false);
  const [showInfos, setShowInfos] = useState(false);
  const [showWishYouWhat, setShowWishYouWhat] = useState(false);
  const [showTrainingpeaks, setShowTrainingpeaks] = useState(false);
  const [showMyPlans, setShowMyPlans] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);

  const { data: session } = useSession();

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowZones(false);
    setShowInfos(false);
    setShowWishYouWhat(false);
    setShowTrainingpeaks(false);
    setShowMyPlans(false);
    setShowUserInfo(false);
    setShowProfil(false);
  };

  const handleZonesClick = () => {
    setShowZones(true);
    setShowInfos(false);
    setShowWishYouWhat(false);
    setShowTrainingpeaks(false);
    setShowMyPlans(false);
    setShowUserInfo(false);
    setShowProfil(false);
  };

  const handleInfosClick = () => {
    setShowZones(false);
    setShowInfos(true);
    setShowWishYouWhat(false);
    setShowTrainingpeaks(false);
    setShowMyPlans(false);
    setShowUserInfo(false);
    setShowProfil(false);
  };

  const handleWishYouWhatClick = () => {
    setShowZones(false);
    setShowInfos(false);
    setShowWishYouWhat(true);
    setShowTrainingpeaks(false);
    setShowMyPlans(false);
    setShowUserInfo(false);
    setShowProfil(false);
  };

  const handleTrainingpeaksClick = () => {
    setShowZones(false);
    setShowInfos(false);
    setShowWishYouWhat(false);
    setShowTrainingpeaks(true);
    setShowMyPlans(false);
    setShowUserInfo(false);
    setShowProfil(false);
  };

  const handleMyPlansClick = () => {
    setShowZones(false);
    setShowInfos(false);
    setShowWishYouWhat(false);
    setShowTrainingpeaks(false);
    setShowMyPlans(true);
    setShowUserInfo(false);
    setShowProfil(false);
  };

  const handleUserInfoClick = () => {
    setShowZones(false);
    setShowInfos(false);
    setShowWishYouWhat(false);
    setShowTrainingpeaks(false);
    setShowMyPlans(false);
    setShowUserInfo(true);
    setShowProfil(false);
  };

  return (
    <>
      <div className=" mx-auto w-40 text-center mt-5">
        {session ? (
          <span>Willkommen {session?.user.name}</span>
        ) : (
          <span>Willkommen</span>
        )}
      </div>

      {showProfil && (
        <div className=" flex flex-col items-center  mt-5 gap-1  max-w-xl w-screen ">
          <button
            onClick={handleLoginClick}
            className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
          >
            <div className="ml-5"> Login</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
            onClick={handleZonesClick}
            className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
          >
            <div className="ml-5"> Zones</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
            onClick={handleInfosClick}
            className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
          >
            <div className="ml-5"> Infos</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
            onClick={handleWishYouWhatClick}
            className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
          >
            <div className="ml-5"> WishYouWhat</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
            onClick={handleTrainingpeaksClick}
            className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
          >
            <div className="ml-5"> Trainingpeaks</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
            onClick={handleMyPlansClick}
            className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
          >
            <div className="ml-5"> MyPlans</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
            onClick={handleUserInfoClick}
            className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
          >
            <div className="ml-5"> UserInfo</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
        </div>
      )}

      {!session && showLogin && <Login setShowProfil={setShowProfil} />}
      {session && showZones && <Zones setShowProfil={setShowProfil} />}
      {session && showInfos && <Infos setShowProfil={setShowProfil} />}
      {session && showWishYouWhat && (
        <WishYouWhat setShowProfil={setShowProfil} />
      )}
      {session && showTrainingpeaks && (
        <Trainingpeaks setShowProfil={setShowProfil} />
      )}
      {!session && showMyPlans && <MyPlans setShowProfil={setShowProfil} />}
      {!session && showUserInfo && <UserInfo setShowProfil={setShowProfil} />}
    </>
  );
}

export default ProfilView;
