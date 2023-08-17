"use client";
import Footer from "@/app/components/Footer/Footer";
import "../../globals.css";
import { v1 as uuidv1 } from "uuid";
import examplePlan from "../../../../public/mockDb";
import WeekScrollButtons from "./components/WeekScrollButtons";
import DayComponent from "./components/DayComponent";
import ActivityButton from "./components/ActivityButton";
import SessionOverlay from "./components/SessionsOverlay/SessionOverlay";
import { useOpenOverlay } from "./stateHooks/useOpenOverlay";
import { useOpenDay } from "./stateHooks/useOpenDay";
import { useCurrentWeek } from "./stateHooks/useCurrentWeek";
import { useActivitiesByDay } from "./logicFunctions/useActivitiesByDay";

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
      <p className="fixed hidden xl:block">
        Mobile only
        <br />
        <br />
        Option 1: use your mobile
        <br />
        Option 2: resize your browser
        <br />
        Option 3: use your dev tools
        <br />
        <br />
        Enjoy your trainings schedule
      </p>

      <div className="flex flex-col mx-auto max-w-xl relative  min-h-screen w-screen mb-20">
        <button className="btn btn-sm pointer-events-none mx-auto  border-first/50  bg-third m-5  text-first">
          {boughtUserPlans[0].name}
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
