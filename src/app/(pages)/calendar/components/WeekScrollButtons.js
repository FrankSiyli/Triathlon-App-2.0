import React from "react";

const WeekScrollButtons = ({
  currentWeek,
  numberOfPlanWeeks,
  handleBackClick,
  handleNextClick,
}) => (
  <div className="flex justify-between  mb-5 items-center  mx-10">
    <button
      onClick={handleBackClick}
      className="btn btn-sm btn-outline  border border-transparent w-12 flex justify-center items-center text-first"
    >
      {currentWeek > 0 ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
          />
        </svg>
      ) : null}
    </button>

    <p>{`Woche ${currentWeek + 1} | ${numberOfPlanWeeks}`}</p>
    <button
      onClick={handleNextClick}
      className="btn btn-sm btn-outline border border-transparent w-12 flex justify-center items-center text-first"
    >
      {currentWeek + 1 < numberOfPlanWeeks ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
          />
        </svg>
      ) : null}
    </button>
  </div>
);
export default WeekScrollButtons;
