import BackButton from "@/app/components/Buttons/BackButton/BackButton";
import NavBar from "@/app/components/NavBar/NavBar";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <BackButton href="/profil" />
      <p className=" mx-auto w-40 text-center -mt-10">Wünsch dir was!</p>

      <div className="w-11/12 border border-first/50 linear-background rounded-md p-4 my-20 mx-auto max-w-xl text-sm text-center">
        <p>
          Du wünscht dir eine neue Funktion , oder einen neuen Trainingsplan in
          der App?
        </p>
        <p>Dann entscheide einfach mit was als nächstes kommt.</p>
        <Link
          target="_blank"
          href=""
          className="btn btn-sm flex w-40 mx-auto m-5  border border-transparent bg-third  text-first shadow-xl "
        >
          Coming soon
        </Link>
      </div>

      <NavBar />
    </>
  );
};

export default Page;
