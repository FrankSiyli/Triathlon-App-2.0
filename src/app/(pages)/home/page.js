"use client";
import Footer from "@/app/components/Footer/Footer";
import "../../globals.css";
import { v1 as uuidv1 } from "uuid";
import examplePlan from "../../../../public/mockDb";
import WeekScrollButtons from "./components/WeekScrollButtons";
import DayComponent from "./components/DayComponent";
import ActivityButton from "./components/ActivityButton";
import SessionOverlay from "./components/SessionOverlay";
import { useOpenOverlay } from "./stateHooks/useOpenOverlay";
import { useOpenDay } from "./stateHooks/useOpenDay";
import { useCurrentWeek } from "./stateHooks/useCurrentWeek";
import { useActivitiesByDay } from "./logicFunctions/useActivitiesByDay";

function Page() {
  const numberOfPlanWeeks = Object.keys(examplePlan.sessions).map((weekIndex) =>
    parseInt(weekIndex)
  );

  const { openOverlay, toggleOverlay } = useOpenOverlay();
  const { openDay, toggleDay } = useOpenDay();
  const { currentWeek, handleBackClick, handleNextClick } = useCurrentWeek(
    Object.keys(examplePlan.sessions).map((weekIndex) => parseInt(weekIndex))
  );

  const currentWeekSessions = examplePlan.sessions[currentWeek - 1].sessions;
  const activitiesByDay = useActivitiesByDay(currentWeekSessions);

  return (
    <>
      <div className="flex flex-col mx-auto max-w-xl relative  min-h-screen w-screen">
        <button className="btn btn-sm pointer-events-none mx-auto  border-first/50  bg-third m-5  text-first">
          {examplePlan.name}
        </button>

        <WeekScrollButtons
          currentWeek={currentWeek}
          numberOfPlanWeeks={numberOfPlanWeeks}
          handleBackClick={handleBackClick}
          handleNextClick={handleNextClick}
        />

        {Object.entries(activitiesByDay).map(([day, activity], dayIndex) => (
          <div key={uuidv1()}>
            <DayComponent day={day} toggleDay={toggleDay} dayIndex={dayIndex} />

            <div className="flex flex-col items-center">
              {openDay === dayIndex &&
                activity.map((singleActivity, activityIndex) => (
                  <ActivityButton
                    key={activityIndex}
                    singleActivity={singleActivity}
                    toggleOverlay={toggleOverlay}
                    dayIndex={dayIndex}
                    activityIndex={activityIndex}
                  />
                ))}
            </div>
          </div>
        ))}

        {Object.entries(activitiesByDay).map(([day, activity], dayIndex) => (
          <div key={uuidv1()}>
            {openDay === dayIndex &&
              activity.map((singleActivity, activityIndex) => (
                <SessionOverlay
                  key={activityIndex}
                  singleActivity={singleActivity}
                  dayIndex={dayIndex}
                  activityIndex={activityIndex}
                  openOverlay={openOverlay}
                  toggleOverlay={toggleOverlay}
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
