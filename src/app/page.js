"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./globals.css";
import BackGroundImage from "./components/BackGroundImage/BackGroundImage";
import useFetchPlans from "./fetchFunctions/useFetchPlans";

export default function Home() {
  const router = useRouter();
  const [elapsedTime, setElapsedTime] = useState(0);
  const { data, error, isLoading } = useFetchPlans();

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1000);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const navigateAfterLoading = (isLoading) => {
    if (!isLoading && elapsedTime > 4000) {
      setTimeout(() => {
        router.push("/home");
      }, 100);
    }
  };
  navigateAfterLoading();

  return (
    <main>
      <BackGroundImage
        isLoading={isLoading}
        error={error}
        elapsedTime={elapsedTime}
      />
    </main>
  );
}
