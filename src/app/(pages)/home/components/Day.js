const Day = ({ day, toggleDay, dayIndex, openDay }) => {
  return (
    <div
      onClick={() => toggleDay(dayIndex)}
      className="flex justify-between w-full max-w-xl  shadow-md p-2 rounded-md mx-5 my-1 "
    >
      <div key={dayIndex} className="ml-5 ">
        {day}
      </div>
      {dayIndex === openDay ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      )}
    </div>
  );
};
export default Day;
