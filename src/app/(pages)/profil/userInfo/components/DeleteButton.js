"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import useSWR from "swr";
import Alert from "@/app/components/Alerts/Alert";
import { useRecoilState } from "recoil";
import { homepagePlanState } from "@/app/recoil/atoms/plans/homepagePlanState";
import { userNameState } from "@/app/recoil/atoms/user/userNameState";

const fetcher = (url) => fetch(url).then((res) => res.json());

const DeleteButton = () => {
  const [homepagePlan, setHomepagePlan] = useRecoilState(homepagePlanState);
  const { data } = useSWR("/api/mongoDbFetchHomepagePlan", fetcher);
  const { data: session } = useSession();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [userName, setUserName] = useRecoilState(userNameState);

  const handleDeleteUserClick = async () => {
    setIsLoading(true);
    const plansArray = data.plans[0];
    setHomepagePlan(plansArray);
    setUserName("");
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

      const response = await fetch("/api/mongoDbDeleteUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: session.user.email }),
      });

      if (response.ok) {
        signOut({ callbackUrl: "/profil" });
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
          disabled={!data}
          onClick={handleDeleteUserClick}
          className="btn btn-sm border- border-transparent bg-fourth text-first shadow-xl m-10"
        >
          {isLoading ||
            (!data && (
              <span className="loading loading-ring loading-sm"></span>
            ))}
          Konto löschen
        </button>
      )}
      {error && showAlert && <Alert alertText={error} />}
    </>
  );
};

export default DeleteButton;
