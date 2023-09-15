"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../../public/images/logoSmall.png";

function BackGroundImage({ isLoading, error }) {
  return (
    <div>
      {" "}
      <div className="fixed bottom-0 left-0  flex h-screen w-screen items-center  justify-center mx-auto  ">
        <Image
          src={logo}
          alt="hero-image"
          className=" object-contain "
          priority
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}

export default BackGroundImage;
