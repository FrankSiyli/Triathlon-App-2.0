"use client";
import React from "react";
import Zones from "./Zones/Zones";
import Infos from "./Infos/Infos";
import MyPlans from "./MyPlans/MyPlans";
import UserInfo from "./UserInfo/UserInfo";
import WishYouWhat from "./WishYouWhat/WishYouWhat";
import Trainingpeaks from "./Trainingpeaks/Trainingpeaks";

function IfUserIsLoggedInLogic({ session }) {
  return (
    <>
      <div className=" mx-auto w-40 text-center mt-5">
        <span>Willkommen {session?.user.name}</span>
      </div>
      <div className=" flex flex-col items-center  mt-10 gap-1  max-w-xl mx-5 ">
        <Zones />
        <Infos />
        <MyPlans />
        <UserInfo />
        <WishYouWhat />
        <Trainingpeaks />
      </div>
    </>
  );
}

export default IfUserIsLoggedInLogic;
