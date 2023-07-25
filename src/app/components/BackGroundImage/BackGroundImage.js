"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../../../public/images/logoSmall.png";

function BackGroundImage() {
  const [logoOpacity, setLogoOpacity] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setLogoOpacity(0.05);
    }, 2000);
  }, []);

  return (
    <div className="fixed w-screen h-screen flex justify-center content-center -z-20">
      <Image
        src={logo}
        alt="hero-image"
        className=" object-contain"
        priority
        style={{ opacity: logoOpacity }}
        width={300}
        height={300}
      />
    </div>
  );
}

export default BackGroundImage;
