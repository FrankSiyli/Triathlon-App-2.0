"use client";
import React, { useState } from "react";
import { getSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Alert from "@/app/components/Alerts/Alert";
import { useRecoilState } from "recoil";
import { userNameState } from "@/app/recoil/atoms/user/userNameState";
import { loggedInUserLastLoadedPlanState } from "@/app/recoil/atoms/user/loggedInUserLastLoadedPlanState";
import { homepagePlanState } from "@/app/recoil/atoms/plans/homepagePlanState";

const DeleteButton = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [userName, setUserName] = useRecoilState(userNameState);
  const [lastLoadedPlan, setLastLoadedPlan] = useRecoilState(
    loggedInUserLastLoadedPlanState
  );
  const [homepagePlan, setHomepagePlan] = useRecoilState(homepagePlanState);

  const handleDeleteUserClick = async () => {
    setIsLoading(true);
    const session = await getSession();
    try {
      if (!session) {
        setIsLoading(false);
        setShowAlert(true);
        setError("Etwas ist schief gelaufen.");
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
        return;
      }

      setUserName("");
      setLastLoadedPlan("");
      setHomepagePlan("");
      const response = await fetch("/api/mongoDbDeleteUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: session.user.email }),
      });

      if (response.ok) {
        signOut({ callbackUrl: "/" });
        setIsLoading(false);
        setShowAlert(true);
        setError("Löschen erfolgreich.");
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      } else {
        setIsLoading(false);
        setShowAlert(true);
        setError("Etwas ist schief gelaufen.");
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      }
    } catch (error) {
      setIsLoading(false);
      setShowAlert(true);
      setError("Etwas ist schief gelaufen.");
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <span className="loading loading-ring loading-lg m-10"></span>
      ) : (
        <button
          onClick={handleDeleteUserClick}
          className="btn btn-sm border- border-transparent bg-fourth text-first shadow-xl m-10"
        >
          Konto löschen
        </button>
      )}
      {error && showAlert && <Alert alertText={error} />}
    </>
  );
};

export default DeleteButton;
