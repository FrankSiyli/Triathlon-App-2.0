import BackButton from "@/app/components/Buttons/BackButton/BackButton";
import NavBar from "@/app/components/NavBar/NavBar";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "./components/LogoutButton";

const Page = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <BackButton href="/profil" />
      <p className=" mx-auto w-40 text-center -mt-10">Konto</p>

      <div className=" flex flex-col items-center  mt-10 gap-1  max-w-xl mx-5 ">
        <span>Name: {session.user.name}</span>
        <span>Email: {session.user.email} </span>
        <LogoutButton />
        {/* <button className="btn btn-sm bg-fourth text-first shadow-xl m-10">
          Konto löschen
        </button> */}
      </div>
      <NavBar />
    </>
  );
};

export default Page;
