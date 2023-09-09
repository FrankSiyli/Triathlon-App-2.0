import React from "react";

const PlanName = ({ userPlans }) => {
  return (
    <>
      <div className="mx-auto mb-3 mt-5  text-first border border-first/50 p-1 linear-background rounded-md shadow-xl ">
        {userPlans?.[0].name}
      </div>
    </>
  );
};

export default PlanName;
