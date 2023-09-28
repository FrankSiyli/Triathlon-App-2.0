"use client";
import BackButton from "@/app/components/Buttons/BackButton/BackButton";
import NavBar from "@/app/components/NavBar/NavBar";
import React from "react";
import { signOut } from "next-auth/react";
import { useRecoilState } from "recoil";
import { userEmailState } from "@/app/recoil/atoms/user/userEmailState";
import { userNameState } from "@/app/recoil/atoms/user/userNameState";

const Page = () => {
  const [userName, setUserName] = useRecoilState(userNameState);
  const [userEmail, setUserEmail] = useRecoilState(userEmailState);

  return (
    <>
      <BackButton href="/profil" />
      <p className=" mx-auto w-40 text-center -mt-10">Konto</p>

      <div className=" flex flex-col items-center  mt-10 gap-1  max-w-xl mx-5 ">
        <span>Name: {userName}</span>
        <span>Email: {userEmail} </span>
        <button
          onClick={() => signOut()}
          className="btn btn-sm bg-third text-first shadow-xl m-5 border border-transparent"
        >
          Abmelden
        </button>
        {/* <button className="btn btn-sm bg-fourth text-first shadow-xl m-10">
          Konto löschen
        </button> */}
      </div>
      <NavBar />
    </>
  );
};

export default Page;
