"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../../public/images/logoSmall.png";

function BackGroundImage({ isLoading, error }) {
  return (
    <div>
      {" "}
      <div className="fixed bottom-0 left-0 w-screen h-screen  flex   justify-center mx-auto  ">
        <Image
          src={logo}
          alt="hero-image"
          className="w-80 object-contain "
          priority
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}

export default BackGroundImage;
