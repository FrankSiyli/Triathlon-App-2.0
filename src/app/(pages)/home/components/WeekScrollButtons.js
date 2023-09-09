import React from "react";

const WeekScrollButtons = ({
  currentWeek,
  numberOfPlanWeeks,
  handleBackClick,
  handleNextClick,
}) => (
  <div className="flex justify-between mb-7 items-center h-10 mx-3 rounded-md border  border-first/50 shadow-xl">
    <button
      onClick={handleBackClick}
      className="h-9 w-16 flex justify-center items-center bg-third rounded-md active:scale-90 "
    >
      {currentWeek > 1 ? (
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
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      ) : null}
    </button>

    <p>{`Woche ${currentWeek} / ${numberOfPlanWeeks?.length}`}</p>
    <button
      onClick={handleNextClick}
      className="h-9 w-16 flex justify-center items-center bg-third rounded-md active:scale-90"
    >
      {currentWeek === numberOfPlanWeeks?.length - 1 ? (
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
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      ) : null}
    </button>
  </div>
);
export default WeekScrollButtons;
