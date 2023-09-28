"use client";
import React from "react";
import { useRecoilState } from "recoil";
import { userNameState } from "@/app/recoil/atoms/user/userNameState";

const WelcomeText = () => {
  const [userName, setUserName] = useRecoilState(userNameState);

  return (
    <>
      <span>Willkommen {userName}</span>
    </>
  );
};

export default WelcomeText;
