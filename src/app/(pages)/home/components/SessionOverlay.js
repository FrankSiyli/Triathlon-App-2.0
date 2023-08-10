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
}) => (
  <div
    onClick={() => toggleOverlay(dayIndex, activityIndex)}
    className={`overlay-background absolute z-50 inset-0   text-xl text-center overflow-y-auto ${
      initialOpen ? "block" : "hidden"
    }`}
  >
    {singleActivity[2].map(
      (sessionSection, sectionIndex) =>
        openOverlay.includes(dayIndex * 1000 + activityIndex) && (
          <div key={activityIndex} className="">
            <div className="w-full h-40  flex justify-between items-center">
              <Image
                src={logo}
                alt="logo"
                className="  ml-3 "
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

            <div className="">
              <p className="underline">Warm up:</p>
              <p>{sessionSection.warmUp}</p>
              <br />
              <p className="underline">Hauptteil:</p>
              {sessionSection?.main.map((singleSection) => (
                <p key={uuidv1()}>{singleSection}</p>
              ))}
              <br />
              <p className="underline">Cool down:</p>
              <p>{sessionSection.coolDown}</p>
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

export default SessionOverlay;
