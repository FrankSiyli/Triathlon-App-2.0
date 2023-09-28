import Link from "next/link";
import React from "react";

function PersonalZonesButton() {
  return (
    <>
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
    </>
  );
}

export default PersonalZonesButton;
