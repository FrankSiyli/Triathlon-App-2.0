import React from "react";

function Plans() {
  return (
    <>
      <div className=" flex flex-col items-center  mt-10 gap-1  max-w-xl w-screen mx-5 ">
        {kindOfPlansArray.map((kindOfPlan, kindOfPlanIndex) => (
          <button
            className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
            key={kindOfPlanIndex}
          >
            <div className="ml-5">{kindOfPlan}</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        ))}
      </div>
    </>
  );
}

const kindOfPlansArray = [
  "Triathlonpläne",
  "Laufpläne",
  "Schwimmpläne",
  "Spezialpläne",
];

export default Plans;
