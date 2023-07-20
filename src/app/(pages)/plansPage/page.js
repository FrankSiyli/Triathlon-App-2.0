import Footer from "@/app/components/Footer/Footer";
import Image from "next/image";
import React from "react";
import logo from "../../../../public/images/logoSmall.png";


function Page() {
  return (
    <>
      <div className="flex min-h-screen mb-20 flex-col items-center p-4">
        plans
        <Image
          src={logo}
          alt="hero-image"
          className=" opacity-5 mt-10"
          width={300}
          height={300}
        />
      </div>
      <Footer />
    </>
  );
}

export default Page;
