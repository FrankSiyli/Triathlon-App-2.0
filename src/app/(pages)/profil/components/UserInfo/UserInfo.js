"use client";
import React from "react";
import LogoutButton from "./components/LogoutButton";
import DeleteButton from "./components/DeleteButton";
import UserValues from "./components/UserValues";
import { useRecoilState } from "recoil";
import { userNameState } from "@/app/recoil/atoms/user/userNameState";
import { userEmailState } from "@/app/recoil/atoms/user/userEmailState";

const UserInfo = ({ setShowProfil }) => {
  const [userName, setUserName] = useRecoilState(userNameState);
  const [userEmail, setUserEmail] = useRecoilState(userEmailState);
  const handleBackClick = () => {
    setShowProfil();
  };

  return (
    <>
      <div className="w-screen max-w-xl mx-auto">
        <button
          className="top-5 left-5 btn btn-ghost btn-sm  m-3 border border-transparent text-first "
          onClick={handleBackClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
      <p className=" mx-auto w-40 text-center -mt-10">Konto</p>
      <div className=" flex flex-col items-center  mt-10 gap-1  max-w-xl mx-5 ">
        <span>Name: {userName}</span>
        <span>Email: {userEmail} </span>
        <UserValues />
        <LogoutButton />
        <DeleteButton />
      </div>
    </>
  );
};

export default UserInfo;
