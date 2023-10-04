import React from "react";

const EmptyUserPlansArray = ({ userPlans }) => {
  return (
    <>
      {userPlans.length === 0 && (
        <div className="border border-first/50 rounded-md p-2 text-center mt-20 mx-5">
          Es wurde noch kein Plan geladen
        </div>
      )}
    </>
  );
};

export default EmptyUserPlansArray;
