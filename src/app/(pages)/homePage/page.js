"use client";
import Footer from "@/app/components/Footer/Footer";
import "../../globals.css";
import { v1 as uuidv1 } from "uuid";
import React from "react";

const Week = ({ week }) => (
  <div className="collapse collapse-arrow rounded-none mt-2">
    <input type="checkbox" className="peer" />
    <div className="collapse-title mb-2 bg-grey text-light text-3xl peer-checked:bg-red peer-checked:text-light ">
      {week}
    </div>
    <div className="collapse-content peer-checked:bg-light peer-checked:text-secondary-content">
      {days.map((day) => (
        <Day key={uuidv1()} day={day} />
      ))}
    </div>
  </div>
);

// Day component
const Day = ({ day }) => (
  <div className="collapse collapse-arrow rounded-none mt-4">
    <input type="checkbox" className="peer" />
    <div className="collapse-title mb-2 bg-grey text-light text-xl peer-checked:bg-red peer-checked:text-light ">
      {day}
    </div>
    <div className="collapse-content peer-checked:bg-light peer-checked:text-secondary-content">
      {sessions.map((session) => (
        <Session key={session.id} session={session} />
      ))}
    </div>
  </div>
);

// Session component
const Session = ({ session }) => (
  <div className="text-center">
    <div className="collapse collapse-arrow rounded-none mt-4">
      <input type="checkbox" className="peer" />
      <div className="collapse-title flex content-around text-center mb-2 bg-grey text-light text-xl peer-checked:bg-red peer-checked:text-light">
        <div>{session.icon}</div>
        <div className="ml-2">{session.subTitle}</div>
      </div>
      <div className="collapse-content peer-checked:bg-light peer-checked:text-secondary-content">
        <ul>
          {session.details.map((detail, index) => (
            <li key={index} className="text-dark">
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

// Page component
function Page() {
  return (
    <>
      <button className="btn btn-secondary border-none disabled bg-red m-5 text-2xl">
        Beispielplan
      </button>

      <div className="flex min-h-screen mb-20 flex-col items-center p-4">
        {weeks.map((week) => (
          <Week key={uuidv1()} week={week} />
        ))}
      </div>

      <Footer />
    </>
  );
}

const weeks = ["Woche 1", "Woche 2", "Woche 3", "Woche 4"];
const days = [
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
  "Sonntag",
];
const sessions = [
  {
    id: uuidv1(),
    title: "run",
    icon: "🏃‍♀️",
    subTitle: "base run",
    details: ["1k", "5k", "1k"],
  },
  {
    id: uuidv1(),
    title: "swim",

    icon: "🌊",
    subTitle: "base swim",
    details: ["1k", "5k", "1k"],
  },
  {
    id: uuidv1(),
    title: "bike",

    icon: "🚴‍♂️",
    subTitle: "base bike",
    details: ["1k", "5k", "1k"],
  },
];

export default Page;
