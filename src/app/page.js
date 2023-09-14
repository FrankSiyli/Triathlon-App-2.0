"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./globals.css";
import BackGroundImage from "./components/BackGroundImage/BackGroundImage";
import useFetchPlans from "./fetchFunctions/useFetchPlans";

export default function Home() {
  const { error, isLoading } = useFetchPlans();

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
