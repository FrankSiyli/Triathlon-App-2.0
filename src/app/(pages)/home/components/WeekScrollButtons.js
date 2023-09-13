import React from "react";

const WeekScrollButtons = ({
  currentWeek,
  numberOfPlanWeeks,
  handleBackClick,
  handleNextClick,
}) => (
  <div className="flex justify-between mb-5 items-center border border-first/10  mx-5  linear-background rounded-xl  shadow-xl">
    <button
      onClick={handleBackClick}
      className="btn btn-sm btn-outline  border border-first/50 w-12 flex justify-center items-center bg-third text-first shadow-xl"
    >
      {currentWeek > 1 ? (
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
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      ) : null}
    </button>

    <p>{`Woche ${currentWeek} / ${numberOfPlanWeeks}`}</p>
    <button
      onClick={handleNextClick}
      className="btn btn-sm btn-outline border border-first/50 w-12 flex justify-center items-center bg-third text-first shadow-xl"
    >
      {currentWeek === numberOfPlanWeeks - 1 ? (
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
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      ) : null}
    </button>
  </div>
);
export default WeekScrollButtons;
