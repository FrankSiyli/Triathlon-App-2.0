"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogoutClick = () => {
    signOut({ callbackUrl: "/profil" });
  };
  return (
    <>
      <button
        onClick={handleLogoutClick}
        className="btn btn-sm bg-third text-first shadow-xl m-5 border border-transparent"
      >
        Abmelden
      </button>
    </>
  );
};

export default LogoutButton;
