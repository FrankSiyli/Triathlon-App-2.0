"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./globals.css";
import BackGroundImage from "./components/BackGroundImage/BackGroundImage";
import useFetchPlans from "./fetchFunctions/useFetchPlans";
import useFetchSpecialPlans from "./fetchFunctions/useFetchSpecialPlans";

export default function Home() {
  const { error, isLoading } = useFetchPlans();
  useFetchSpecialPlans();
  const router = useRouter();

  const navigateAfterLoading = () => {
    if (!isLoading) {
      setTimeout(() => {
        router.push("/home");
      }, 1000);
    }
  };
  navigateAfterLoading();

  return (
    <main>
      <BackGroundImage isLoading={isLoading} error={error} />
    </main>
  );
}
