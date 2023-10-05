"use client";
import { formatTime } from "@/app/helperFunctions/formatTime";
import { savedHrMaxState } from "@/app/recoil/atoms/user/savedHrMaxState";
import { savedSwimTimeState } from "@/app/recoil/atoms/user/savedSwimTimeState";
import React from "react";
import { useRecoilValue } from "recoil";

const UserValues = () => {
  const savedHrMax = useRecoilValue(savedHrMaxState);
  const savedSwimTime = useRecoilValue(savedSwimTimeState);

  return (
    <>
      <span className="mt-3">Maximalpuls: {savedHrMax}</span>
      <span>1000m Schwimmzeit: {formatTime(savedSwimTime)}</span>
    </>
  );
};

export default UserValues;
