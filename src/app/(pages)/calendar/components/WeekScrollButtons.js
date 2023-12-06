import React from "react";

const WeekScrollButtons = ({
  currentWeek,
  numberOfPlanWeeks,
  handlePreviousWeekClick,
  handleNextWeekClick,
}) => (
  <div className="relative flex justify-between  mb-5 items-center  mx-10">
    <button
      onClick={handlePreviousWeekClick}
      className="btn btn-sm btn-outline  border border-transparent w-12 flex justify-center items-center text-first hover:bg-transparent hover:border-transparent"
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
      onClick={handleNextWeekClick}
      className="btn btn-sm btn-outline border border-transparent w-12 flex justify-center items-center text-first hover:bg-transparent hover:border-transparent"
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
