import React from "react";

const PlanName = ({ homepagePlan }) => {
  return (
    <>
      <div className="mx-auto mb-5 mt-3  text-first text-sm p-1 ">
        {homepagePlan?.name}
      </div>
    </>
  );
};

export default PlanName;
