"use client";
import Footer from "@/app/components/Footer/Footer";
import "../../globals.css";
import { v1 as uuidv1 } from "uuid";
import { useState } from "react";

function Page() {
  const numberOfPlanWeeks = Object.keys(examplePlan.sessions).map((weekIndex) =>
    parseInt(weekIndex)
  );
  const [currentWeek, setCurrentWeek] = useState(1);

  const handleBackClick = () => {
    if (currentWeek > 1) {
      setCurrentWeek(currentWeek - 1);
    }
  };

  const handleNextClick = () => {
    if (currentWeek < numberOfPlanWeeks.length) {
      setCurrentWeek(currentWeek + 1);
    }
  };

  const currentWeekSessions = examplePlan.sessions[currentWeek - 1].sessions;
  const activitiesByDay = currentWeekSessions.reduce((acc, session) => {
    const { day, activity, description } = session;
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push([activity, description]);
    return acc;
  }, {});
  console.log(activitiesByDay);

  return (
    <>
      <div className="flex flex-col max-w-xl mx-auto">
        <button className="btn btn-sm pointer-events-none border-first  bg-third m-5  text-first">
          {examplePlan.name}
        </button>
        <button className="btn btn-sm pointer-events-none w-32 border-first  bg-third  ml-5 text-first">
          {examplePlan.duration} Wochen
        </button>
      </div>

      {/**-----------------------------------week scroll buttons---------------------------------- */}

      <div className="flex flex-col mx-auto max-w-xl  mb-20">
        <div className="flex justify-between my-7 items-center h-10 m-4 rounded-md border border-first bg-second text-first  peer-checked:bg-third peer-checked:text-first ">
          <button
            onClick={handleBackClick}
            className="h-9 w-16 flex justify-center items-center bg-third rounded-md active:scale-90"
          >
            {currentWeek === 1 ? (
              <div></div>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            )}
          </button>
          <p>{`Woche ${currentWeek}`}</p>
          <button
            onClick={handleNextClick}
            className="h-9 w-16 flex justify-center items-center bg-third rounded-md active:scale-90"
          >
            {currentWeek - 1 ===
            numberOfPlanWeeks[numberOfPlanWeeks.length - 1] ? (
              <div></div>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            )}
          </button>
        </div>

        {/**-----------------------------------days---------------------------------- */}
        <div className="flex flex-col mx-4 items-center">
          {Object.entries(activitiesByDay).map(([day, activities]) => (
            <div key={uuidv1()} className="collapse  max-w-xl   rounded-md">
              <input type="checkbox" className="peer" />
              <div className="collapse-title flex flex-row justify-between  bg-second text-first  peer-checked:bg-third ">
                <p>{day}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
              {/**-----------------------------------activities---------------------------------- */}
              <div className="collapse-content  text-first bg-second border-first  border-b ">
                {activities.map((activity) => (
                  <div
                    key={uuidv1()}
                    className="collapse  max-w-xl m-1  rounded-md "
                  >
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title flex flex-row justify-between   bg-second text-first  peer-checked:bg-third ">
                      <div className="flex flex-col justify-center content-center">
                        <p className="icon-text underline underline-offset-2 ">
                          {activity[0]}
                        </p>
                        <p>{activity[1]}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
const examplePlan = {
  name: "Beispielplan",
  duration: 2,
  sessions: [
    {
      week: 1,
      sessions: [
        {
          day: "Montag",
          activity: "Schwimmen",
          description: "Aufwärmübungen",
          duration: "30 Minuten",
          intensity: "Niedrig",
        },
        {
          day: "Montag",
          activity: "Yoga",
          description: "Entspannungsübungen",
          duration: "20 Minuten",
          intensity: "Niedrig",
        },
        {
          day: "Montag",
          activity: "Stabilitätstraining",
          description: "Core-Übungen",
          duration: "15 Minuten",
          intensity: "Mittel",
        },
        {
          day: "Dienstag",
          activity: "Radfahren",
          description: "Leichtes Fahren",
          duration: "1 Stunde",
          intensity: "Niedrig",
        },
        {
          day: "Dienstag",
          activity: "Yoga",
          description: "Dehnungsübungen",
          duration: "25 Minuten",
          intensity: "Niedrig",
        },
        {
          day: "Dienstag",
          activity: "Stabilitätstraining",
          description: "Gleichgewichtsübungen",
          duration: "15 Minuten",
          intensity: "Mittel",
        },
        {
          day: "Mittwoch",
          activity: "Laufen",
          description: "Intervalltraining",
          duration: "45 Minuten",
          intensity: "Mittel",
        },
        {
          day: "Mittwoch",
          activity: "Yoga",
          description: "Atemübungen",
          duration: "20 Minuten",
          intensity: "Niedrig",
        },
        {
          day: "Mittwoch",
          activity: "Stabilitätstraining",
          description: "Beckenstabilisation",
          duration: "15 Minuten",
          intensity: "Mittel",
        },
        {
          day: "Donnerstag",
          activity: "Ruhepause",
          description: "Ruhetag",
          duration: "N/A",
          intensity: "N/A",
        },
        {
          day: "Freitag",
          activity: "Radfahren",
          description: "Lange Radtour",
          duration: "1,5 Stunden",
          intensity: "Mittel",
        },
        {
          day: "Samstag",
          activity: "Laufen",
          description: "Leichtes Laufen",
          duration: "30 Minuten",
          intensity: "Niedrig",
        },
        {
          day: "Sonntag",
          activity: "Ruhepause",
          description: "Ruhetag",
          duration: "N/A",
          intensity: "N/A",
        },
      ],
    },
    {
      week: 2,
      sessions: [
        {
          day: "Montag",
          activity: "Schwimmen",
          description: "Ausdauerschwimmen",
          duration: "45 Minuten",
          intensity: "Mittel",
        },
        {
          day: "Dienstag",
          activity: "Radfahren",
          description: "Bergwiederholungen",
          duration: "1 Stunde",
          intensity: "Hoch",
        },
        {
          day: "Mittwoch",
          activity: "Laufen",
          description: "Tempotraining",
          duration: "1 Stunde",
          intensity: "Hoch",
        },
        {
          day: "Donnerstag",
          activity: "Ruhepause",
          description: "Ruhetag",
          duration: "N/A",
          intensity: "N/A",
        },
        {
          day: "Freitag",
          activity: "Radfahren",
          description: "Erholungsfahrt",
          duration: "45 Minuten",
          intensity: "Niedrig",
        },
        {
          day: "Samstag",
          activity: "Laufen",
          description: "Langer Lauf",
          duration: "1,5 Stunden",
          intensity: "Mittel",
        },
        {
          day: "Sonntag",
          activity: "Ruhepause",
          description: "Ruhetag",
          duration: "N/A",
          intensity: "N/A",
        },
      ],
    },
  ],
};

export default Page;
