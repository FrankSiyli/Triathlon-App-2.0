"use client";
import React from "react";
import { useSession } from "next-auth/react";

const WelcomeText = () => {
  const { data: session } = useSession();

  return (
    <>
      <span>Willkommen {session?.user?.name}</span>
    </>
  );
};

export default WelcomeText;
