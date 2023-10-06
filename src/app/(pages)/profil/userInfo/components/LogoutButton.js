"use client";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import { useRecoilState } from "recoil";
import { userNameState } from "@/app/recoil/atoms/user/userNameState";
import { homepagePlanState } from "@/app/recoil/atoms/plans/homepagePlanState";

const LogoutButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useRecoilState(userNameState);
  const [homepagePlan, setHomepagePlan] = useRecoilState(homepagePlanState);

  const handleLogoutClick = () => {
    setIsLoading(true);
    setUserName("");
    setHomepagePlan("");
    signOut({ callbackUrl: "/" });
    setIsLoading(false);
  };
  return (
    <>
      {isLoading ? (
        <span className="loading loading-ring loading-lg m-10"></span>
      ) : (
        <button
          onClick={handleLogoutClick}
          className="btn btn-sm bg-third text-first shadow-xl m-5 border border-transparent"
        >
          Abmelden
        </button>
      )}
    </>
  );
};

export default LogoutButton;
