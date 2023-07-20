"use client";
import Footer from "@/app/components/Footer/Footer";
import "../../globals.css";
import { v1 as uuidv1 } from "uuid";
import React from "react";
import Image from "next/image";
import logo from "../../../../public/images/logoSmall.png";

const Week = ({ week }) => (
  <div className="collapse collapse-arrow rounded-none mt-2">
    <input type="checkbox" className="peer" />
    <div className="collapse-title mb-2 bg-grey text-light text-2xl peer-checked:bg-red peer-checked:text-light ">
      {week}
    </div>
    <div className="collapse-content peer-checked:bg-none peer-checked:text-secondary-content">
      {days.map((day) => (
        <Day key={uuidv1()} day={day} />
      ))}
    </div>
  </div>
);

const Day = ({ day }) => (
  <div className="collapse rounded-none mt-4">
    <input type="checkbox" className="peer" />
    <div className="collapse-title mb-2 bg-grey text-light text-xl peer-checked:bg-red peer-checked:text-light ">
      {day}
    </div>
    <div className="collapse-content peer-checked:bg-none peer-checked:text-secondary-content">
      {sessions.map((session) => (
        <Session key={session.id} session={session} />
      ))}
    </div>
  </div>
);

const Session = ({ session }) => (
  <div className="text-center">
    <div className="collapse  rounded-none mt-4">
      <input type="checkbox" className="peer" />
      <div className="collapse-title   mb-2 bg-grey text-light text-xl peer-checked:bg-red peer-checked:text-light">
        <div className="flex flex-row">
          <div className="left- 2 mr-4">{session.icon}</div>
          <div className="">{session.subTitle}</div>
        </div>
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

function Page() {
  return (
    <>
      <button className="btn btn-secondary active:border-none border-none  bg-red m-5 text-2xl">
        Beispielplan
      </button>

      <div className="flex min-h-screen mb-20 flex-col items-center p-4">
        {weeks.map((week) => (
          <Week key={uuidv1()} week={week} />
        ))}
        <Image
          src={logo}
          alt="hero-image"
          className=" opacity-5 mt-10"
          width={300}
          height={300}
        />
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
