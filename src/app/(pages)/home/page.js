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

  const currentWeekDaysArray = [];
  const currentWeekDays = examplePlan.sessions[currentWeek - 1].sessions.map(
    (days) => (
      <p key={uuidv1()} className="text-2xl text-first">
        {currentWeekDaysArray.push(days.day)}
      </p>
    )
  );

  /*   console.log("days", currentWeekDaysArray);
   */
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

      <div className="max-w-xl  mb-20">
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

        {currentWeekDaysArray.map((currentWeekDay) => (
          <div key={uuidv1()} className="collapse mx-auto w-80 my-1 rounded-md">
            <input type="checkbox" className="peer" />
            <div className="collapse-title  bg-second text-first  peer-checked:bg-third ">
              <p>{currentWeekDay}</p>
            </div>
            <div className="collapse-content  text-first bg-second border-first  border-b ">
              <p>hello</p>
              <p>hello</p>
              <p>hello</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}
const examplePlan = {
  name: "Beginner Triathlon Training",
  duration: 2,
  sessions: [
    {
      week: 1,
      sessions: [
        {
          day: "Monday",
          activity: "Swimming",
          description: "Warm-up drills",
          duration: "30 minutes",
          intensity: "Low",
        },
        {
          day: "Tuesday",
          activity: "Cycling",
          description: "Easy ride",
          duration: "1 hour",
          intensity: "Low",
        },
        {
          day: "Wednesday",
          activity: "Running",
          description: "Interval training",
          duration: "45 minutes",
          intensity: "Medium",
        },
        {
          day: "Thursday",
          activity: "Rest",
          description: "Rest day",
          duration: "N/A",
          intensity: "N/A",
        },
        {
          day: "Friday",
          activity: "Cycling",
          description: "Long ride",
          duration: "1.5 hours",
          intensity: "Medium",
        },
        {
          day: "Saturday",
          activity: "Running",
          description: "Easy run",
          duration: "30 minutes",
          intensity: "Low",
        },
        {
          day: "Sunday",
          activity: "Rest",
          description: "Rest day",
          duration: "N/A",
          intensity: "N/A",
        },
      ],
    },
    {
      week: 2,
      sessions: [
        {
          day: "Monday",
          activity: "Swimming",
          description: "Endurance swim",
          duration: "45 minutes",
          intensity: "Medium",
        },
        {
          day: "Tuesday",
          activity: "Cycling",
          description: "Hill repeats",
          duration: "1 hour",
          intensity: "High",
        },
        {
          day: "Wednesday",
          activity: "Running",
          description: "Tempo run",
          duration: "1 hour",
          intensity: "High",
        },
        {
          day: "Thursday",
          activity: "Rest",
          description: "Rest day",
          duration: "N/A",
          intensity: "N/A",
        },
        {
          day: "Friday",
          activity: "Cycling",
          description: "Recovery ride",
          duration: "45 minutes",
          intensity: "Low",
        },
        {
          day: "Saturday",
          activity: "Running",
          description: "Long run",
          duration: "1.5 hours",
          intensity: "Medium",
        },
        {
          day: "Sunday",
          activity: "Rest",
          description: "Rest day",
          duration: "N/A",
          intensity: "N/A",
        },
      ],
    },
  ],
};

export default Page;
