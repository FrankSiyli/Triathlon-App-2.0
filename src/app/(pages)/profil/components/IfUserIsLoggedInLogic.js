"use client";
import React, { useEffect } from "react";
import useSWR from "swr";
import WelcomeText from "./WelcomeText";
import MyPlansButton from "./MyPlansButton";
import AccountButton from "./AccountButton";
import PersonalZonesButton from "./PersonalZonesButton";
import InformationsButton from "./InformationsButton";
import { userNameState } from "@/app/recoil/atoms/user/userNameState";
import { useRecoilState } from "recoil";

const fetcher = (url) => fetch(url).then((res) => res.json());

function IfUserIsLoggedInLogic() {
  const { data, error, isLoading } = useSWR("/api/mongoDbGetUserName", fetcher);
  const [userName, setUserName] = useRecoilState(userNameState);

  useEffect(() => {
    if (data) {
      const dbUserName = data?.name;
      setUserName(dbUserName);
    }
  }, [data, setUserName]);

  return (
    <>
      <div className=" mx-auto w-40 text-center mt-5">
        <WelcomeText userName={userName} />
      </div>
      <div className=" flex flex-col items-center  mt-10 gap-1  max-w-xl mx-5 ">
        <PersonalZonesButton />
        <InformationsButton />
        <MyPlansButton />
        <AccountButton />
      </div>
    </>
  );
}

export default IfUserIsLoggedInLogic;
