import React from "react";

const MobileHint = () => {
  return (
    <>
      {" "}
      <p className="fixed left-0 hidden xl:block">
        Mobile only
        <br />
        <br />
        Option 1: use your mobile
        <br />
        Option 2: resize your browser
        <br />
        Option 3: use your dev tools
        <br />
        <br />
        Enjoy your trainings schedule
      </p>
    </>
  );
};

export default MobileHint;
