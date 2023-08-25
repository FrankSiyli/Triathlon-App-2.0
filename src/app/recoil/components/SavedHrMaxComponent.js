import React from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { savedHrMaxSelector } from "../selectors/savedHrMaxSelector";

const SavedHrMaxComponent = () => {
  const savedHrMax = useRecoilValue(savedHrMaxSelector);

  return (
    <>
      <RecoilRoot>
        <p>mein Maximalpuls: {savedHrMax}</p>
      </RecoilRoot>
    </>
  );
};

export default SavedHrMaxComponent;
