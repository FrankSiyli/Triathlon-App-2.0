const ActivityButton = ({
  singleActivity,
  toggleOverlay,
  dayIndex,
  activityIndex,
}) => (
  <button onClick={() => toggleOverlay(dayIndex, activityIndex)}>
    <div className="flex h-14 my-1 w-80 justify-between items-center rounded-md bg-second ">
      <div className="ml-5 text-left">
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
        className="w-6 h-6 mr-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  </button>
);
export default ActivityButton;
