"use client";
import { formatTime } from "@/app/helperFunctions/formatTime";
import React from "react";
import { useRecoilState } from "recoil";
import { userEmailState } from "@/app/recoil/atoms/user/userEmailState";
import { savedHrMaxState } from "@/app/recoil/atoms/user/savedHrMaxState";
import { savedSwimTimeState } from "@/app/recoil/atoms/user/savedSwimTimeState";
import { savedWattState } from "@/app/recoil/atoms/user/savedWattState";

const UserValues = ({ isLoading }) => {
  const [userEmail, setUserEmail] = useRecoilState(userEmailState);
  const [savedSwimTime, setSavedSwimTime] = useRecoilState(savedSwimTimeState);
  const [savedHrMax, setSavedHrMax] = useRecoilState(savedHrMaxState);
  const [savedWatt, setSavedWatt] = useRecoilState(savedWattState);

  return (
    <>
      <button className="flex justify-between w-full max-w-xl shadow-md p-2 rounded-md  my-1 mt-5">
        <span className="ml-2">Maximalpuls:</span>
        {isLoading ? (
          <span className="loading loading-ring loading-sm"></span>
        ) : (
          <span className="mr-2"> {savedHrMax} bpm</span>
        )}
      </button>
      <button className="flex justify-between w-full max-w-xl shadow-md p-2 rounded-md  my-1 ">
        <span className="ml-2">FTP:</span>
        {isLoading ? (
          <span className="loading loading-ring loading-sm"></span>
        ) : (
          <span className="mr-2"> {savedWatt} W</span>
        )}
      </button>
      <button className="flex justify-between w-full max-w-xl shadow-md p-2 rounded-md  my-1 ">
        <span className="ml-2">1000m Schwimmzeit:</span>
        {isLoading ? (
          <span className="loading loading-ring loading-sm"></span>
        ) : (
          <span className="mr-2"> {formatTime(savedSwimTime)} min</span>
        )}
      </button>
    </>
  );
};

export default UserValues;
