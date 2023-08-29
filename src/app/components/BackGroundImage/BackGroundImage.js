"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../../../public/images/logoSmall.png";

function BackGroundImage({ isLoading, error }) {
  const [logoOpacity, setLogoOpacity] = useState("block");

  return (
    <div className="fixed top-0 left-0 w-screen h-screen  flex flex-col items-center justify-center mx-auto  ">
      <Image
        src={logo}
        alt="hero-image"
        className={`w-auto object-contain  ${logoOpacity}`}
        priority
        width={300}
        height={300}
      />
      <p className="mt-10">Life is good</p>
      <p>Triathlon makes it better</p>
      {error ? <p className="absolute bottom-10">failed to load</p> : null}
      {isLoading ? <p className="absolute bottom-10">loading...</p> : null}
    </div>
  );
}

export default BackGroundImage;
