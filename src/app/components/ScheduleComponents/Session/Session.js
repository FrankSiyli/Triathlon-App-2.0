import React from "react";
import Link from "next/link";

const Session = ({ session }) => (
  <Link
    href=""
    className="flex flex-row justify-between items-center h-16 p-2 m-1 bg-second"
  >
    <div className=" scale-150 ">{session.icon}</div>
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
          d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  </Link>
);

export default Session;
