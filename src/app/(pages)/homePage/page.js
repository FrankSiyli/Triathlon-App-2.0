"use client";
import Footer from "@/app/components/Footer/Footer";
import "../../globals.css";
import { v1 as uuidv1 } from "uuid";

function Page() {
  return (
    <>
      <button className="btn btn-secondary border-none disabled bg-red m-5 text-2xl">
        Beispielplan
      </button>

      <div className="flex min-h-screen mb-20 flex-col items-center  p-4">
        {/*----------------------weeks ----------------------*/}

        {weeks.map((week) => {
          return (
            <div
              key={uuidv1()}
              className="collapse collapse-arrow rounded-none mt-2"
            >
              <input type="checkbox" className="peer" />
              <div className="collapse-title mb-2  bg-grey text-light text-3xl peer-checked:bg-red peer-checked:text-light ">
                {week}
              </div>
              <div className="collapse-content peer-checked:bg-light peer-checked:text-secondary-content">
                {/*----------------------days------------------------ */}

                {days.map((day) => {
                  return (
                    <div
                      key={uuidv1()}
                      className="collapse collapse-arrow rounded-none mt-4 "
                    >
                      <input type="checkbox" className="peer" />
                      <div className="collapse-title mb-2  bg-grey text-light text-xl peer-checked:bg-red peer-checked:text-light ">
                        {day}
                      </div>
                      <div className="collapse-content peer-checked:bg-light peer-checked:text-secondary-content">
                        {/*----------------------sessions------------------------ */}

                        {sessions.map((session) => {
                          return (
                            <div key={uuidv1()} className="text-center ">
                              <button className="btn w-full m-2 bg-dark text-light">
                                {session.subTitle}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-4 h-4 ml-4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                  />
                                </svg>
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
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
    subTitle: "base run",
    details: ["1k", "5k", "1k"],
  },
  {
    id: uuidv1(),
    title: "swim",
    subTitle: "base swim",
    details: ["1k", "5k", "1k"],
  },
  {
    id: uuidv1(),
    title: "bike",
    subTitle: "base bike",
    details: ["1k", "5k", "1k"],
  },
];

export default Page;
