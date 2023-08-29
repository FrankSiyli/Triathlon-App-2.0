import React from "react";

const PlanName = ({ userPlans }) => {
  return (
    <>
      <button className="btn btn-sm pointer-events-none mx-auto  border-first/50  bg-third m-5  text-first">
        {userPlans?.[0]?.name}
      </button>
    </>
  );
};

export default PlanName;
