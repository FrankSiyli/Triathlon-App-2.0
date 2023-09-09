"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./globals.css";
import BackGroundImage from "./components/BackGroundImage/BackGroundImage";
import useFetchPlans from "./fetchFunctions/useFetchPlans";
import useFetchSpecialPlans from "./fetchFunctions/useFetchSpecialPlans";

export default function Home() {
  const router = useRouter();
  const [elapsedTime, setElapsedTime] = useState(0);
  const { error, isLoading } = useFetchPlans();
  const { errorSpecialPlans, isLoadingSpecialPlans } = useFetchSpecialPlans();

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1000);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const navigateAfterLoading = () => {
    if (!isLoading > 0 && elapsedTime > 4000) {
      setTimeout(() => {
        router.push("/home");
      }, 100);
    }
  };
  navigateAfterLoading();

  return (
    <main>
      <BackGroundImage isLoading={isLoading} error={error} />
    </main>
  );
}
