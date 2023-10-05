"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import logo from "../../public/images/logoSmall.png";
import "./globals.css";
import Image from "next/image";
import useFetchHomepagePlan from "./fetchFunctions/useFetchHomepagePlan";

export default function Home() {
  const { error, isLoading } = useFetchHomepagePlan();
  const router = useRouter();
  useEffect(() => {
    const navigateAfterLoading = () => {
      if (!isLoading) {
        setTimeout(() => {
          router.push("/home");
        }, 1000);
      }
    };
    navigateAfterLoading();
  }, [isLoading, router]);

  return (
    <div className=" w-screen max-w-xl h-screen  flex flex-col justify-center items-center mx-auto text-center">
      <div>
        {isLoading ? (
          <div className="mb-10">
            <p>Life is good</p>
            <p>Triathlon makes it better</p>
          </div>
        ) : null}
      </div>

      <Image
        src={logo}
        alt="hero-image"
        className="fixed h-auto w-40 xl-w-60 md-w-60 object-contain m-10 "
        priority
        width={200}
        height={200}
      />

      <div className="mt-60">
        {error ? <p>failed to load</p> : null}
        {isLoading ? (
          <div className=" flex flex-col text-center items-center mb-10">
            <p className="">loading</p>
            <span className="loading loading-ring loading-lg"></span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
