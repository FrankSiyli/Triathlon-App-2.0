import React from "react";

const PlanName = ({ homepagePlan }) => {
  return (
    <>
      <div className="mx-auto mb-5 mt-3  text-first text-sm border border-first/50 p-1 linear-background rounded-md shadow-xl ">
        {homepagePlan?.name}
      </div>
    </>
  );
};

export default PlanName;
