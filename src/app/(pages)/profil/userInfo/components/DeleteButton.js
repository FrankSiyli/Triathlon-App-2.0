"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

import Loader from "@/app/components/Loader/Loader";
import Alert from "@/app/components/Alerts/Alert";

const DeleteButton = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleDeleteUserClick = async () => {
    setIsLoading(true);

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
        <Loader error={error} isLoading={isLoading} />
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
