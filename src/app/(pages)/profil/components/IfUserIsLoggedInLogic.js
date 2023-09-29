import React from "react";
import WelcomeText from "./WelcomeText";
import MyPlansButton from "./MyPlansButton";
import AccountButton from "./AccountButton";
import PersonalZonesButton from "./PersonalZonesButton";
import InformationsButton from "./InformationsButton";

function IfUserIsLoggedInLogic({ session }) {
  return (
    <>
      <div className=" mx-auto w-40 text-center mt-5">
        <WelcomeText userName={session.user.name} />
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
