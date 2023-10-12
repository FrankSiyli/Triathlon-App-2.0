"use client";
import { formatTime } from "@/app/helperFunctions/formatTime";
import { getSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userEmailState } from "@/app/recoil/atoms/user/userEmailState";

const UserValues = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userEmail, setUserEmail] = useRecoilState(userEmailState);
  const [savedSwimTime, setSavedSwimTime] = useState(0);
  const [savedHrMax, setSavedHrMax] = useState();

  useEffect(() => {
    const fetchData = async () => {
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
