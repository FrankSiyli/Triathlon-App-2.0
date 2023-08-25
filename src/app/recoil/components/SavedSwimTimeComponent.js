import React from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { savedSwimTimeSelector } from "../selectors/SavedSwimTimeSelector";

const SavedSwimTimeComponent = () => {
  const savedSwimTime = useRecoilValue(savedSwimTimeSelector);

  return (
    <>
      <RecoilRoot>
        <p>meine 100m SchwimmPace: {savedSwimTime}</p>
      </RecoilRoot>
    </>
  );
};

export default SavedSwimTimeComponent;
