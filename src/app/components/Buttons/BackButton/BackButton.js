import Link from "next/link";
import React from "react";

function BackButton({ href }) {
  return (
    <>
      <div className="w-screen max-w-xl mx-auto">
        <Link
          href={href}
          className="top-5 left-5 btn btn-sm  m-3 bg-third border border-first/50 text-first shadow-xl"
        >
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
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </Link>
      </div>
    </>
  );
}

export default BackButton;
