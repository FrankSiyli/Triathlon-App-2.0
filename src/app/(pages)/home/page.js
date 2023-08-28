"use client";
import Footer from "@/app/components/Footer/Footer";
import "../../globals.css";
import { v1 as uuidv1 } from "uuid";
import examplePlan from "../../../../public/mockDb";
import WeekScrollButtons from "./components/WeekScrollButtons";
import DayComponent from "./components/DayComponent";
import SessionOverlay from "./components/SessionsOverlay/SessionOverlay";
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

function Page() {
  const boughtUserPlans = [examplePlan];
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
          src={logo}
          alt="logo"
          className="mt-3  ml-3 absolute"
          width={80}
          height={80}
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
            <DayComponent day={day} toggleDay={toggleDay} dayIndex={dayIndex} />

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
