import Link from "next/link";
import React from "react";

function InformationsButton() {
  return (
    <>
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
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </Link>
    </>
  );
}

export default InformationsButton;
