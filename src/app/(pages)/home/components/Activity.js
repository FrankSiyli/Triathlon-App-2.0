import React from "react";

const Activity = ({
  openDay,
  dayIndex,
  activity,
  toggleOverlay,
  sessionSections,
}) => {
  return (
    <>
      <div className="flex flex-col mx-5 rounded-md ">
        {openDay === dayIndex &&
          activity.map((singleActivity, activityIndex) => (
            <button
              key={activityIndex}
              onClick={() => {
                toggleOverlay(dayIndex, activityIndex);
              }}
            >
              <div className="flex p-1 mx-2 my-1 justify-between bg-fourth/10 items-center font-light text-first rounded-md  shadow-md">
                <div className="ml-2 text-left">
                  <p className="underline underline-offset-2 text-sm">
                    {singleActivity[0]}
                  </p>
                  <p>{singleActivity[1]}</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </button>
          ))}
      </div>
    </>
  );
};

export default Activity;
