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
                <div className="text-right mr-3 ">
                  <p className="underline underline-offset-2 text-sm">
                    {singleActivity[0]}
                  </p>
                  <p>{singleActivity[1]}</p>
                  <p>
                    Distanz:{" "}
                    {sessionSection.warmUp.multiplier *
                      sessionSection.warmUp.distance +
                      sessionSection.main.reduce(
                        (total, mainSection) =>
                          total + mainSection.multiplier * mainSection.distance,
                        0
                      ) +
                      sessionSection.coolDown.multiplier *
                        sessionSection.coolDown.distance}
                    m
                  </p>
                  <p>Zeit:</p>
                </div>
              </div>

              {/**if distance > 0 show distance and hide duration and opposite */}

              <div className="mt-10">
                <div className="border border-first/50  rounded-md mx-5">
                  <p className="underline text-xl mt-10">Warm up:</p>
                  <div className="flex flex-row justify-between m-10 ">
                    <p>{sessionSection.warmUp.multiplier}x</p>
                    <p>{sessionSection.warmUp.distance}m</p>
                    <p>Zone:{sessionSection.warmUp.zone}</p>
                  </div>
                </div>
                <br />
                <div className="border border-first/50  rounded-md mx-5">
                  <p className="underline text-xl mt-10">Hauptteil:</p>
                  {sessionSection.main.map((mainSection, mainIndex) => (
                    <div key={mainIndex}>
                      <div className="flex flex-row justify-between m-10 ">
                        <p>{mainSection.multiplier}x</p>
                        <p>{mainSection.distance}m</p>
                        <p>Zone: {mainSection.zone}</p>
                      </div>
                      <p className="">{mainSection.exercise}</p>
                      <br />
                    </div>
                  ))}
                </div>
                <div className="border border-first/50  rounded-md mx-5 mt-5">
                  <p className="underline text-xl mt-10">Cool down:</p>
                  <div className="flex flex-row justify-between m-10 ">
                    <p>{sessionSection.coolDown.multiplier}x</p>
                    <p>{sessionSection.coolDown.distance}m</p>
                    <p>Zone:{sessionSection.coolDown.zone}</p>
                  </div>
                </div>
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
