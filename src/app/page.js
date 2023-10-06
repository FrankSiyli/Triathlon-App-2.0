"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import logo from "../../public/images/logoSmall.png";
import "./globals.css";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/home");
    }, 2000);
  }, [router]);

  return (
    <div className=" w-screen max-w-xl h-screen  flex flex-col justify-center items-center mx-auto text-center">
      <Image
        src={logo}
        alt="hero-image"
        className="fixed h-auto w-40 xl-w-60 md-w-60 object-contain m-10 "
        priority
        width={200}
        height={200}
      />
    </div>
  );
}
