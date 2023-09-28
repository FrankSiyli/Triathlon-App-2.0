import Footer from "@/app/components/NavBar/NavBar";
import React from "react";
import "../../globals.css";
import Impressum from "@/app/components/Impressum/Impressum";
import Image from "next/image";
import logo from "../../../../public/images/logoSmall.png";
import Link from "next/link";
import LoginAlert from "@/app/components/Alerts/LoginAlert";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LoginButton from "./components/LoginButton";

export default async function Page() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <LoginAlert session={session} />
      <p className=" mx-auto w-40 text-center mt-5">Profil</p>

      <div className=" flex flex-col items-center  mt-10 gap-1  max-w-xl mx-5 ">
        <LoginButton />
        <Link
          href="/profil/zones"
          className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
        >
          <div className="ml-5">Persönliche Kalenderwerte</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Link>
        <Link
          href="/profil/infos"
          className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
        >
          <div className="ml-5">Informationen</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Link>
        <Link
          href="/plans/myplans"
          className="flex flex-row justify-between w-full max-w-xl shadow-md p-2 rounded-md mx-5 my-1 cursor-pointer"
        >
          <div className="ml-5">Meine Pläne</div>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Link>
        <Link
          href="/profil/userInfo"
          className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
        >
          <div className="ml-5">Konto</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Link>
      </div>

      <Image
        priority
        src={logo}
        alt="logo"
        className="mx-auto  w-40 mt-10 "
        width={100}
        height={100}
      />
      <Impressum />

      <Footer />
    </>
  );
}
