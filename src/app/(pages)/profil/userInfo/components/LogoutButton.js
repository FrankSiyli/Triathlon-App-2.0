"use client";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import useSWR from "swr";
import { useRecoilState } from "recoil";
import { homepagePlanState } from "@/app/recoil/atoms/plans/homepagePlanState";
import { userNameState } from "@/app/recoil/atoms/user/userNameState";

const fetcher = (url) => fetch(url).then((res) => res.json());

const LogoutButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [homepagePlan, setHomepagePlan] = useRecoilState(homepagePlanState);
  const { data } = useSWR("/api/mongoDbFetchHomepagePlan", fetcher);
  const [userName, setUserName] = useRecoilState(userNameState);

  const handleLogoutClick = () => {
    setIsLoading(true);
    const examplePlan = data.plans[0];
    setHomepagePlan(examplePlan);
    setUserName("");
    signOut({ callbackUrl: "/profil" });
    setIsLoading(false);
  };
  return (
    <>
      {isLoading ? (
        <span className="loading loading-ring loading-lg m-10"></span>
      ) : (
        <button
          disabled={!data}
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
