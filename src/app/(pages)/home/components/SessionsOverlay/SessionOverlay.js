import Image from "next/image";
import logo from "../../../../../../public/images/logoSmall.png";
import WarmUpSection from "./components/WarmUpSection";
import MainSection from "./components/MainSection";
import CoolDownSection from "./components/CoolDownSection";
import {
  totalWarmUpDistance,
  totalMainDistance,
  totalCoolDownDistance,
} from "./logicFunctions/totalDistanceFunction";

import {
  totalWarmUpDuration,
  totalMainDuration,
  totalCoolDownDuration,
} from "./logicFunctions/totalDurationFunction";

const SessionOverlay = ({
  singleActivity,
  dayIndex,
  activityIndex,
  openOverlay,
  toggleOverlay,
  initialOpen = false,
}) => {
  const calculateTotalDistance = (sessionSections) => {
    const warmUpDistance = totalWarmUpDistance(sessionSections);
    const mainDistance = totalMainDistance(sessionSections);
    const coolDownDistance = totalCoolDownDistance(sessionSections);
    return warmUpDistance + mainDistance + coolDownDistance;
  };
  const calculateTotalDuration = (sessionSections) => {
    const warmUpDuration = totalWarmUpDuration(sessionSections);
    const mainDuration = totalMainDuration(sessionSections);
    const coolDownDuration = totalCoolDownDuration(sessionSections);
    return warmUpDuration + mainDuration + coolDownDuration;
  };
  return (
    <div
      onClick={() => toggleOverlay(dayIndex, activityIndex)}
      className={`overlay-background absolute z-50 inset-0 text-center overflow-y-auto ${
        initialOpen ? "block" : "hidden"
      }`}
    >
      {singleActivity[2].map(
        (sessionSections, sectionIndex) =>
          openOverlay.includes(dayIndex * 1000 + activityIndex) && (
            <div key={activityIndex}>
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
                  {calculateTotalDistance(sessionSections) > 0 ? (
                    <p>Distanz: {calculateTotalDistance(sessionSections)}m</p>
                  ) : calculateTotalDuration(sessionSections) > 0 ? (
                    <p>Zeit: {calculateTotalDuration(sessionSections)}min</p>
                  ) : null}
                </div>
              </div>

              <WarmUpSection sessionSections={sessionSections} />

              <MainSection sessionSections={sessionSections} />

              <CoolDownSection sessionSections={sessionSections} />
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
