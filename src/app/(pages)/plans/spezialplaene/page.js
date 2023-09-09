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
      <div className="flex flex-col justify-center content-normal items-center w-screen h-screen">
        <div className="  w-72 h-14 flex justify-between btn btn-outline  linear-background items-center  gap-3  rounded-md text-xl text-first ">
          {specialPlans?.map((specialPlan, specialPlanIndex) => {
            return <div key={specialPlanIndex}>{specialPlan.name}</div>;
          })}
        </div>
      </div>

      <NavBar />
    </>
  );
}

export default Page;
