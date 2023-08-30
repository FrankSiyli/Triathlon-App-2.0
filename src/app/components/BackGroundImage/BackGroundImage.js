"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../../public/images/logoSmall.png";

function BackGroundImage({ isLoading, error, elapsedTime }) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen  flex flex-col items-center justify-center mx-auto  ">
      <Image
        src={logo}
        alt="hero-image"
        className="w-auto object-contain  block"
        priority
        width={300}
        height={300}
      />
      <div className="relative mt-5 flex flex-col text-center items-center">
        <p className="">Life is good</p>
        <p>Triathlon makes it better</p>
        <div className="absolute mt-20">
          {error ? <p>failed to load</p> : null}

          {isLoading || elapsedTime < 4000 ? (
            <span className="loading loading-ring loading-lg"></span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default BackGroundImage;
