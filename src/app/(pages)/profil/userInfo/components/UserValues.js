"use client";
import { formatTime } from "@/app/helperFunctions/formatTime";
import { getSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Loader from "@/app/components/Loader/Loader";
import { useRecoilState } from "recoil";
import { userEmailState } from "@/app/recoil/atoms/user/userEmailState";
import { savedSwimTimeState } from "@/app/recoil/atoms/user/savedSwimTimeState";
import { savedHrMaxState } from "@/app/recoil/atoms/user/savedHrMaxState";

const UserValues = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userEmail, setUserEmail] = useRecoilState(userEmailState);
  const [savedSwimTime, setSavedSwimTime] = useRecoilState(savedSwimTimeState);
  const [savedHrMax, setSavedHrMax] = useRecoilState(savedHrMaxState);

  useEffect(() => {
    const loadUserValues = async () => {
      const session = await getSession();
      if (session) {
        setIsLoading(true);
        const fetchedUserEmail = session?.user.email;
        setUserEmail(fetchedUserEmail);
        try {
          const heartRateResponse = await fetch(
            `/api/mongoDbFetchUserHeartRate?email=${fetchedUserEmail}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
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
            console.error("Failed to fetch user hrmax");
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
        setIsLoading(false);
      } else {
        null;
      }
    };
    loadUserValues();
  }, [setSavedHrMax, setSavedSwimTime, setUserEmail]);

  return (
    <>
      <div className="mt-3">
        Maximalpuls:
        {isLoading ? (
          <span className="loading loading-ring loading-sm"></span>
        ) : (
          <span> {savedHrMax} </span>
        )}
      </div>
      <div>
        1000m Schwimmzeit:
        {isLoading ? (
          <span className="loading loading-ring loading-sm"></span>
        ) : (
          <span> {formatTime(savedSwimTime)} </span>
        )}
      </div>
    </>
  );
};

export default UserValues;
