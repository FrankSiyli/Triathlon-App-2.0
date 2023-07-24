import React from "react";
import Session from "../Session/Session";
import { v1 as uuidv1 } from "uuid";

const Day = ({ day }) => (
  <div className="collapse collapse-arrow rounded-md  mt-1">
    <input type="checkbox" className="peer" />
    <div className="collapse-title bg-second  text-first peer-checked:bg-third peer-checked:text-first ">
      <p className="">{day}</p>
    </div>
    <div className="collapse-content peer-checked:bg-none peer-checked:text-secondary-content">
      {sessions.map((session) => (
        <Session key={session.id} session={session} />
      ))}
    </div>
  </div>
);

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

export default Day;
