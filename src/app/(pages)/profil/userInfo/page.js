"use client";
import BackButton from "@/app/components/Buttons/BackButton/BackButton";
import NavBar from "@/app/components/NavBar/NavBar";
import React from "react";
import LogoutButton from "./components/LogoutButton";
import DeleteButton from "./components/DeleteButton";
import UserValues from "./components/UserValues";
import { useRecoilState } from "recoil";
import { userNameState } from "@/app/recoil/atoms/user/userNameState";
import { userEmailState } from "@/app/recoil/atoms/user/userEmailState";

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
        <UserValues />
        <LogoutButton />
        <DeleteButton />
      </div>
      <NavBar />
    </>
  );
};

export default Page;
