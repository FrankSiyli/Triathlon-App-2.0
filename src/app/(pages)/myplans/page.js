import BackButton from "@/app/components/Buttons/BackButton/BackButton";
import Link from "next/link";
import React from "react";
import { v1 as uuidv1 } from "uuid";

//map function for myplans is ready to rocknroll

function Page() {
  const myPlans = [];
  return (
    <>
      <BackButton href="/plans" />
      <div className="flex flex-col items-center  mt-10 gap-5 ">
        {myPlans.length === 0 ? (
          <div className="border rounded-md p-3">
            Es sind noch keine Pläne vorhanden
          </div>
        ) : (
          <div className="flex flex-col items-center gap-1">
            <p className="text-xl m-5">Meine Pläne</p>
            {myPlans.map((myPlan) => (
              <div
                className="bg-second w-72  flex justify-between items-center text-center rounded-md text-xl text-first"
                key={uuidv1()}
              >
                <div className="ml-3">{myPlan}</div>
                <div className="flex flex-col  items-center m-2">
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
                      d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
                    />
                  </svg>
                  <p className="icon-text">Plan laden</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Page;
