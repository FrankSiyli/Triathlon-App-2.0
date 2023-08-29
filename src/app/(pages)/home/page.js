"use client";
import Footer from "@/app/components/NavBar/NavBar";
import "../../globals.css";
import { v1 as uuidv1 } from "uuid";
import WeekScrollButtons from "./components/WeekScrollButtons";
import Day from "./components/Day";
import SessionOverlay from "./components/SessionOverlay";
import { useOpenOverlay } from "./stateHooks/useOpenOverlay";
import { useOpenDay } from "./stateHooks/useOpenDay";
import { useCurrentWeek } from "./stateHooks/useCurrentWeek";
import { useActivitiesByDay } from "./logicFunctions/useActivitiesByDay";
import Activity from "./components/Activity";
import PlanName from "./components/PlanName";
import MobileHint from "./components/MobileHint";
import Image from "next/image";
import logo from "../../../../public/images/logoSmall.png";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { dataFromMongoDbState } from "@/app/recoil/atoms/dataFromMongoDbState";

function Page() {
  const data = useRecoilValue(dataFromMongoDbState);
  const boughtUserPlans = data.plans;
  const numberOfPlanWeeks = Object.keys(boughtUserPlans[0].sessions).map(
    (weekIndex) => parseInt(weekIndex)
  );

  const { openOverlay, toggleOverlay } = useOpenOverlay();
  const { openDay, toggleDay } = useOpenDay();
  const { currentWeek, handleBackClick, handleNextClick } = useCurrentWeek(
    Object.keys(boughtUserPlans[0].sessions).map((weekIndex) =>
      parseInt(weekIndex)
    )
  );

  const currentWeekSessions =
    boughtUserPlans[0].sessions[currentWeek - 1].sessions;
  const activitiesByDay = useActivitiesByDay(currentWeekSessions);

  return (
    <>
      <MobileHint />
      <div className="flex flex-col mx-auto max-w-xl relative  min-h-screen w-screen mb-20">
        <Link
          className="btn btn-sm w-20 text-sm absolute right-0 top-0"
          href="/test"
        >
          testpage
        </Link>
        <Image
          priority
          src={logo}
          alt="logo"
          className="mt-3  ml-3 absolute w-auto"
          width={55}
          height={55}
        />
        <PlanName boughtUserPlans={boughtUserPlans} />
        <WeekScrollButtons
          currentWeek={currentWeek}
          numberOfPlanWeeks={numberOfPlanWeeks}
          handleBackClick={handleBackClick}
          handleNextClick={handleNextClick}
        />

        {Object.entries(activitiesByDay).map(([day, activity], dayIndex) => (
          <div key={uuidv1()}>
            <Day day={day} toggleDay={toggleDay} dayIndex={dayIndex} />

            <Activity
              openDay={openDay}
              dayIndex={dayIndex}
              activity={activity}
              toggleOverlay={toggleOverlay}
            />
          </div>
        ))}

        {Object.entries(activitiesByDay).map(([day, activity], dayIndex) => (
          <div className=" " key={dayIndex}>
            {openDay === dayIndex &&
              activity.map((singleActivity, activityIndex) => (
                <SessionOverlay
                  key={activityIndex}
                  singleActivity={singleActivity}
                  dayIndex={dayIndex}
                  activityIndex={activityIndex}
                  openOverlay={openOverlay}
                  toggleOverlay={toggleOverlay}
                  boughtUserPlans={boughtUserPlans[0]}
                  initialOpen={openOverlay.includes(
                    dayIndex * 1000 + activityIndex
                  )}
                />
              ))}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Page;
