"use client";
import React, { useEffect, useState } from "react";
import LogoutButton from "./components/LogoutButton";
import DeleteButton from "./components/DeleteButton";
import UserValues from "./components/UserValues";
import { useRecoilState } from "recoil";
import { userNameState } from "@/app/recoil/atoms/user/userNameState";
import { userEmailState } from "@/app/recoil/atoms/user/userEmailState";
import { savedHrMaxState } from "@/app/recoil/atoms/user/savedHrMaxState";
import { savedSwimTimeState } from "@/app/recoil/atoms/user/savedSwimTimeState";
import { getSession } from "next-auth/react";

const UserInfo = ({ setShowProfil }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useRecoilState(userNameState);
  const [savedHrMax, setSavedHrMax] = useRecoilState(savedHrMaxState);
  const [savedSwimTime, setSavedSwimTime] = useRecoilState(savedSwimTimeState);
  const [userEmail, setUserEmail] = useRecoilState(userEmailState);

  const handleBackClick = () => {
    setShowProfil();
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const session = await getSession();
      if (session) {
        const fetchedUserEmail = session?.user.email;
        setUserEmail(fetchedUserEmail);
        try {
          const heartRateResponse = await fetch(
            `/api/mongoDbFetchUserHeartRate?email=${fetchedUserEmail}`,
            {
              method: "GET",
            }
          );
          if (heartRateResponse.ok) {
            const fetchedHrMax = await heartRateResponse.json();
            setSavedHrMax(fetchedHrMax);
          } else {
            console.error("Failed to fetch user hrmax");
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
        try {
          const swimTimeResponse = await fetch(
            `/api/mongoDbFetchUserSwimTime?email=${fetchedUserEmail}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (swimTimeResponse.ok) {
            const fetchedSwimTime = await swimTimeResponse.json();
            setSavedSwimTime(fetchedSwimTime);
          } else {
            console.error("Failed to fetch user swim time");
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
        setIsLoading(false);
      }
    };
    fetchData();
  }, [setSavedSwimTime, setSavedHrMax, setUserEmail]);

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
        <UserValues isLoading={isLoading} />
        <LogoutButton setShowProfil={setShowProfil} />
        <DeleteButton setShowProfil={setShowProfil} />
      </div>
    </>
  );
};

export default UserInfo;