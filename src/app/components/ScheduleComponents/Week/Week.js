import React from "react";
import Day from "../Day/Day";
import { v1 as uuidv1 } from "uuid";
import { useState } from "react";

const weeks = ["Woche 1", "Woche 2", "Woche 3", "Woche 4"];

const Week = () => {
  const [week, setWeek] = useState(weeks[0]);

  const handleBackClick = () => {
    const currentIndex = weeks.indexOf(week);
    const newIndex = currentIndex - 1;
    if (newIndex >= 0) {
      setWeek(weeks[newIndex]);
    }
  };

  const handleNextClick = () => {
    const currentIndex = weeks.indexOf(week);
    const newIndex = currentIndex + 1;
    if (newIndex < weeks.length) {
      setWeek(weeks[newIndex]);
    }
  };
  return (
    <>
      <div className=" m-4">
        <div className="flex justify-between my-7 items-center h-10 rounded-md border border-light bg-dark text-light text-xl peer-checked:bg-red peer-checked:text-light ">
          <button
            onClick={handleBackClick}
            className="h-9 w-16 flex justify-center items-center bg-red rounded-md active:scale-90"
          >
            {week === weeks[0] ? (
              <div></div>
            ) : (
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
            )}
          </button>
          <p>{week}</p>
          <button
            onClick={handleNextClick}
            className="h-9 w-16 flex justify-center items-center bg-red rounded-md active:scale-90"
          >
            {week === weeks[weeks.length - 1] ? (
              <div></div>
            ) : (
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
            )}
          </button>
        </div>
        <div className="collapse-content mb-20 peer-checked:bg-none peer-checked:text-secondary-content">
          {days.map((day) => (
            <Day key={uuidv1()} day={day} />
          ))}
        </div>
      </div>
    </>
  );
};
const days = [
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
  "Sonntag",
];

export default Week;
