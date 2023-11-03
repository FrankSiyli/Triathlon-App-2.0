const Day = ({ day, toggleDay, dayIndex, openDay, activity }) => {
  const allDaySessionsDone = () => {
    const singleActivities = activity.map(
      (singleActivity) => singleActivity[3]
    );
    return singleActivities.every((value) => value === true);
  };

  return (
    <>
      <div
        onClick={() => toggleDay(dayIndex)}
        className={`flex justify-between w-full max-w-xl shadow-md p-2 rounded-md my-1 ${
          allDaySessionsDone() ? "border-l-2 border-r-2 border-green" : null
        }`}
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
            className="w-6 h-6 mr-5"
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
            className="w-6 h-6 mr-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </div>
    </>
  );
};
export default Day;
