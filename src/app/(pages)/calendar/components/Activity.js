import ArrowRightSvg from "@/app/components/SVGs/arrows/ArrowRightSvg";
import React from "react";

const Activity = ({ openDay, dayIndex, activity, toggleOverlay }) => {
  return (
    <>
      <div className="flex flex-col w-full max-w-xl rounded-md">
        {openDay === dayIndex &&
          activity.map((singleActivity, activityIndex) => (
            <button
              key={activityIndex}
              onClick={() => {
                toggleOverlay(dayIndex, activityIndex);
              }}
            >
              <div
                className={`relative flex mx-2 my-1 justify-between bg-fourth/5 items-center font-light text-first rounded-md shadow-md ${
                  singleActivity[3] === true
                    ? " border-l-2 border-r-2 border-green"
                    : null
                }`}
              >
                <div className="ml-2 text-left">
                  <p className="underline underline-offset-2 text-sm">
                    {singleActivity[0]}
                  </p>
                  <p>{singleActivity[1]}</p>
                </div>
                <ArrowRightSvg />
              </div>
            </button>
          ))}
      </div>
    </>
  );
};

export default Activity;
