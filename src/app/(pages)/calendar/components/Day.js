import ArrowDownSvg from "@/app/components/SVGs/ArrowDownSvg";
import ArrowUpSvg from "@/app/components/SVGs/ArrowUpSvg";

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
        className={`flex justify-between w-full max-w-xl shadow-md p-2 rounded-md my-1 cursor-pointer ${
          allDaySessionsDone() ? "border-l-2 border-r-2 border-green" : null
        }`}
      >
        <div key={dayIndex} className="ml-5 ">
          {day}
        </div>
        {dayIndex === openDay ? <ArrowDownSvg /> : <ArrowUpSvg />}
      </div>
    </>
  );
};
export default Day;
