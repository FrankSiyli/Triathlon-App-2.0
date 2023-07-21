import React from "react";
import Link from "next/link";

const Session = ({ session }) => (
  <Link
    href=""
    className="flex flex-row justify-between items-center h-16 p-2 m-1 bg-dark text-xl"
  >
    <div className=" scale-150 ml-2">{session.icon}</div>
    <div className="">{session.subTitle}</div>
    <div>
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
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </div>
  </Link>
);

export default Session;
