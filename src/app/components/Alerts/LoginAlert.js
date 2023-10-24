"use client";
import { userNameState } from "@/app/recoil/atoms/user/userNameState";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";

function LoginAlert({ setShowLoginAlert }) {
  const userName = useRecoilValue(userNameState);

  setTimeout(() => {
    setShowLoginAlert(false);
  }, 5000);

  return (
    <>
      {userName === "" && (
        <div className="custom-toast">
          <p>
            Um deine Pläne und Kalenderwerte
            <br />
            zu speichern, melde dich an
          </p>
        </div>
      )}
    </>
  );
}

export default LoginAlert;
