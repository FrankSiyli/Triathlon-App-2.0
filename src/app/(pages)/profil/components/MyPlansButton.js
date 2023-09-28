import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

export default async function MyPlansButton() {
  const session = await getServerSession(authOptions);

  return (
    <>
      {session && (
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
      )}
    </>
  );
}
