"use client";
import { formatTime } from "@/app/helperFunctions/formatTime";
import React from "react";
import { useRecoilState } from "recoil";
import { userEmailState } from "@/app/recoil/atoms/user/userEmailState";
import { savedHrMaxState } from "@/app/recoil/atoms/user/savedHrMaxState";
import { savedSwimTimeState } from "@/app/recoil/atoms/user/savedSwimTimeState";

const UserValues = ({ isLoading }) => {
  const [userEmail, setUserEmail] = useRecoilState(userEmailState);
  const [savedSwimTime, setSavedSwimTime] = useRecoilState(savedSwimTimeState);
  const [savedHrMax, setSavedHrMax] = useRecoilState(savedHrMaxState);

  return (
    <>
      <div className="mt-3 flex items-center">
        Maximalpuls:
        {isLoading ? (
          <span className="loading loading-ring loading-sm"></span>
        ) : (
          <span className="ml-1"> {savedHrMax} </span>
        )}
      </div>
      <div className="flex items-center">
        1000m Schwimmzeit:
        {isLoading ? (
          <span className="loading loading-ring loading-sm"></span>
        ) : (
          <span className="ml-1"> {formatTime(savedSwimTime)} </span>
        )}
      </div>
    </>
  );
};

export default UserValues;
