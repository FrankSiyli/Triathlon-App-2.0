import Image from "next/image";
import logo from "../../../../../public/images/logoSmall.png";
import { v1 as uuidv1 } from "uuid";

const SessionOverlay = ({
  singleActivity,
  dayIndex,
  activityIndex,
  openOverlay,
  toggleOverlay,
  initialOpen = false,
}) => {
  return (
    <div
      onClick={() => toggleOverlay(dayIndex, activityIndex)}
      className={`overlay-background absolute z-50 inset-0 text-center overflow-y-auto ${
        initialOpen ? "block" : "hidden"
      }`}
    >
      {singleActivity[2].map(
        (sessionSection, sectionIndex) =>
          openOverlay.includes(dayIndex * 1000 + activityIndex) && (
            <div key={activityIndex} className="">
              <div className="w-full h-auto  flex justify-between items-center">
                <Image
                  src={logo}
                  alt="logo"
                  className="mt-5  ml-5 "
                  width={100}
                  height={100}
                />
                <div className="text-right mr-3">
                  <p className="underline underline-offset-2 text-sm">
                    {singleActivity[0]}
                  </p>
                  <p>{singleActivity[1]}</p>
                </div>
              </div>

              <div className="mt-10">
                <p className="underline">Warm up:</p>
                <p>{sessionSection.warmUp.multiplier}x</p>
                <p>{sessionSection.warmUp.distance}m</p>
                <p>Zone:{sessionSection.warmUp.zone}</p>
                <br />
                <p className="underline">Hauptteil:</p>
                {sessionSection.main.map((mainSection, mainIndex) => (
                  <div key={mainIndex}>
                    <p>Multiplier: {mainSection.multiplier}x</p>
                    <p>Distance: {mainSection.distance}m</p>
                    <p>Zone: {mainSection.zone}</p>
                    <p>{mainSection.exercise}</p>
                    <br />
                  </div>
                ))}
                <p className="underline">Cool down:</p>
                <p>{sessionSection.coolDown.multiplier}x</p>
                <p>{sessionSection.coolDown.distance}m</p>
                <p>Zone:{sessionSection.coolDown.zone}</p>
              </div>
            </div>
          )
      )}
      <div className="btn btn-circle btn-outline m-20  border-2 border-first">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
};

export default SessionOverlay;
