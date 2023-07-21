import Image from "next/image";
import React from "react";
import logo from "../../../../public/images/logoSmall.png";

function BackGroundImage() {
  return (
    <div className="fixed w-screen h-screen flex justify-center content-center -z-20">
      <Image
        src={logo}
        alt="hero-image"
        className=" object-contain opacity-10  "
        width={300}
        height={300}
      />
    </div>
  );
}

export default BackGroundImage;
