"use client";
import BackButton from "@/app/components/Buttons/BackButton/BackButton";
import NavBar from "@/app/components/NavBar/NavBar";
import { specialPlansFromMongoDbState } from "@/app/recoil/atoms/specialPlansFromMongoDbState";
import React from "react";
import { useRecoilValue } from "recoil";

function Page() {
  const data = useRecoilValue(specialPlansFromMongoDbState);
  const specialPlans = data?.plans;

  return (
    <>
      <BackButton href="/plans/searchplans" />
      <div className="flex flex-col items-center  mt-10 gap-5  max-w-xl mx-auto  ">
        <div className="flex flex-row justify-between items-center border border-first/50 w-80 linear-background shadow-xl p-2 rounded-md mx-5 my-1 cursor-pointer">
          {specialPlans?.map((specialPlan, specialPlanIndex) => {
            return <div key={specialPlanIndex}>{specialPlan.name}</div>;
          })}
          {/* <svg
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
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg> */}

          <div className="btn btn-sm bg-fourth text-first shadow-sm">
            coming soon
          </div>
        </div>
      </div>

      <NavBar />
    </>
  );
}

export default Page;
