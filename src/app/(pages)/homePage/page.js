"use client";
import { useState } from "react";
import Footer from "@/app/components/Footer/Footer";
import "../../globals.css";
import { v1 as uuidv1 } from "uuid";
import Image from "next/image";
import logo from "../../../../public/images/logoSmall.png";

const Week = ({ week, handleBackClick, handleNextClick }) => {
  return (
    <div className="rounded-none mt-2 ">
      <div className="flex justify-between items-center h-10 rounded-md m-2 bg-grey text-dark text-2xl peer-checked:bg-red peer-checked:text-light ">
        <button
          onClick={handleBackClick}
          className="h-10 w-16 flex justify-center items-center bg-red rounded-md active:scale-90"
        >
          {week === weeks[0] ? (
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
        {week}
        <button
          onClick={handleNextClick}
          className="h-10 w-16 flex justify-center items-center bg-red rounded-md active:scale-90"
        >
          {week === weeks[weeks.length - 1] ? (
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
      <div className="collapse-content peer-checked:bg-none peer-checked:text-secondary-content">
        {days.map((day) => (
          <Day key={uuidv1()} day={day} />
        ))}
      </div>
    </div>
  );
};

const Day = ({ day }) => (
  <div className="collapse collapse-arrow rounded-none mt-4">
    <input type="checkbox" className="peer" />
    <div className="collapse-title mb-2 bg-grey text-dark text-xl peer-checked:bg-red peer-checked:text-light ">
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
  const [actualWeek, setActualWeek] = useState(weeks[0]);
  const handleBackClick = () => {
    const currentIndex = weeks.indexOf(actualWeek);
    const newIndex = currentIndex - 1;
    if (newIndex >= 0) {
      setActualWeek(weeks[newIndex]);
    }
  };

  const handleNextClick = () => {
    const currentIndex = weeks.indexOf(actualWeek);
    const newIndex = currentIndex + 1;
    if (newIndex < weeks.length) {
      setActualWeek(weeks[newIndex]);
    }
  };
  return (
    <>
      <button className="btn btn-secondary active:border-none border-none  bg-red m-5 text-2xl">
        Beispielplan
      </button>
      <div>
        <div>
          <Week
            key={uuidv1()}
            week={actualWeek}
            handleBackClick={handleBackClick}
            handleNextClick={handleNextClick}
          />
        </div>
      </div>

      <Image
        src={logo}
        alt="hero-image"
        className=" opacity-5 mx-auto mb-20"
        width={300}
        height={300}
      />
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
