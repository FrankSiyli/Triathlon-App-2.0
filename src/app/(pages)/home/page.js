"use client";
import Footer from "@/app/components/Footer/Footer";
import "../../globals.css";
import { v1 as uuidv1 } from "uuid";
import { useState } from "react";
import logo from "../../../../public/images/logoSmall.png";
import Image from "next/image";

function Page() {
  const [openOverlayIndexes, setOpenOverlayIndexes] = useState([]);

  const handleToggleOverlay = (dayIndex, activityIndex) => {
    const clickedIndex = dayIndex * 1000 + activityIndex;
    if (openOverlayIndexes.includes(clickedIndex)) {
      setOpenOverlayIndexes(
        openOverlayIndexes.filter((item) => item !== clickedIndex)
      );
    } else {
      setOpenOverlayIndexes([...openOverlayIndexes, clickedIndex]);
    }
  };

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
    const { day, activity, description, sessionParts } = session;
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push([activity, description, sessionParts]);
    return acc;
  }, {});

  return (
    <>
      <div className="flex flex-col max-w-xl mx-auto">
        <button className="btn btn-sm pointer-events-none mx-auto  border-first/50  bg-third m-5  text-first">
          {examplePlan.name}
        </button>
      </div>

      {/**-----------------------------------week scroll buttons---------------------------------- */}

      <div className="flex flex-col mx-auto max-w-xl  mb-20">
        <div className="flex justify-between my-7 items-center h-10 m-4 rounded-md border  border-first/50  text-first  peer-checked:bg-third peer-checked:text-first ">
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
          <p>{`Woche ${currentWeek} / ${numberOfPlanWeeks.length}`}</p>
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
          {Object.entries(activitiesByDay).map(([day, activity], dayIndex) => (
            <div key={uuidv1()} className="collapse  max-w-xl rounded-md ">
              <input type="checkbox" className="peer" />
              <div className="collapse-title flex flex-row justify-between   text-first   ">
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

              <div className="collapse-content  text-first     ">
                {activity.map((singleActivity, activityIndex) => (
                  <button
                    onClick={() => handleToggleOverlay(dayIndex, activityIndex)}
                    key={activityIndex}
                    className="collapse   max-w-xl my-1  rounded-md "
                  >
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title  flex flex-row justify-between  text-first bg-second  ">
                      <div className=" text-left">
                        <div>
                          <p className="underline underline-offset-2 text-sm">
                            {singleActivity[0]}
                          </p>

                          <p>{singleActivity[1]}</p>

                          {/*----------------------------------session overlay----------------------------------- */}

                          {singleActivity[2].map(
                            (sessionSection) =>
                              openOverlayIndexes.includes(
                                dayIndex * 1000 + activityIndex
                              ) && (
                                <div
                                  key={activityIndex}
                                  className="fixed top-0 left-0  z-50 overflow-auto text-xl max-h-full h-full w-full rounded-none overlay-background text-first flex flex-col justify-center items-center text-center"
                                >
                                  <Image
                                    src={logo}
                                    alt="logo"
                                    className="fixed top-0 left-0 m-3  "
                                    width={100}
                                    height={100}
                                  />
                                  <div className="fixed top-0 right-0 m-8">
                                    <p className="underline underline-offset-2 text-sm">
                                      {singleActivity[0]}
                                    </p>
                                    <p>{singleActivity[1]}</p>
                                  </div>
                                  <div className="mt-80 mb-20">
                                    <p className="underline">Warm up:</p>
                                    <p>{sessionSection.warmUp}</p>
                                    <br />
                                    <p className="underline">Hauptteil:</p>
                                    {sessionSection?.main.map(
                                      (singleSection) => (
                                        <p key={uuidv1()}>{singleSection}</p>
                                      )
                                    )}
                                    <br />
                                    <p className="underline">Cool down:</p>
                                    <p>{sessionSection.coolDown}</p>
                                    <p className="m-10 text-sm">
                                      click anywhere
                                    </p>
                                  </div>
                                </div>
                              )
                          )}
                        </div>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mt-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </button>
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
const bikeTreshold = 190;
const runTreshold = 200;
const swim100mPace = 120;

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
          description: "500 / 1000 / 500",
          sessionParts: [
            {
              warmUp: `200 m @ ${0.9 * swim100mPace}s/100m`,
              main: [
                `500 m @ ${0.8 * swim100mPace}s/100m `,
                `1000 m @ ${0.7 * swim100mPace}s/100m `,
                `500 m @ ${0.8 * swim100mPace}s/100m`,
              ],
              coolDown: `200 m @ ${0.9 * swim100mPace}s/100m`,
            },
          ],
        },
        {
          day: "Montag",
          activity: "Laufen",
          description: "3 x 10 min",
          sessionParts: [
            {
              warmUp: `10 min @ ${0.7 * runTreshold}bpm`,
              main: [
                `10 min @ ${0.8 * runTreshold}bpm`,
                `10 min @ ${0.9 * runTreshold}bpm`,
                `10 min @ ${0.8 * runTreshold}bpm`,
              ],
              coolDown: `5 min @ ${0.7 * runTreshold}bpm`,
            },
          ],
        },
        {
          day: "Montag",
          activity: "Stabilitätstraining",
          description: "Core-Übungen",
          sessionParts: [
            {
              warmUp: "30 sek hüpfen",
              main: [
                `1 min Hampelmann`,
                `1 min Liegestütz`,
                `1 min Plank`,
                `1 min hampelmann`,
                `1 min Liegestütz`,
              ],
              coolDown: "2 min liegen und tief ein und ausatmen",
            },
          ],
        },
        {
          day: "Dienstag",
          activity: "Radfahren",
          description: "3 x 10 min",
          sessionParts: [
            {
              warmUp: `10 min @ ${0.7 * bikeTreshold}bpm`,
              main: [
                `10 min @ ${0.8 * bikeTreshold}bpm`,
                `10 min @ ${0.9 * bikeTreshold}bpm`,
                `10 min @ ${0.8 * bikeTreshold}bpm`,
              ],
              coolDown: `5 min @ ${0.7 * bikeTreshold}bpm`,
            },
          ],
        },
        {
          day: "Dienstag",
          activity: "Yoga",
          description: "Dehnungsübungen",
          sessionParts: [
            {
              warmUp: "2 min Kopf und Schulterkreisen im sitzen",
              main: [
                `1 min Katze`,
                `1 min Hund`,
                `1 min Baby`,
                `1 min Krähe`,
                `1 min Oktopus`,
              ],
              coolDown: "2 min liegen und tief ein und ausatmen",
            },
          ],
        },
        {
          day: "Dienstag",
          activity: "Stabilitätstraining",
          description: "Core-Übungen",
          sessionParts: [
            {
              warmUp: "30 sek hüpfen",
              main: [
                `1 min Hampelmann`,
                `1 min Liegestütz`,
                `1 min Plank`,
                `1 min hampelmann`,
                `1 min Liegestütz`,
              ],
              coolDown: "2 min liegen und tief ein und ausatmen",
            },
          ],
        },
        {
          day: "Mittwoch",
          activity: "Laufen",
          description: "3 x 10 min",
          sessionParts: [
            {
              warmUp: `10 min @ ${0.7 * runTreshold}bpm`,
              main: [
                `10 min @ ${0.8 * runTreshold}bpm`,
                `10 min @ ${0.9 * runTreshold}bpm`,
                `10 min @ ${0.8 * runTreshold}bpm`,
              ],
              coolDown: `5 min @ ${0.7 * runTreshold}bpm`,
            },
          ],
        },
        {
          day: "Mittwoch",
          activity: "Yoga",
          description: "Dehnungsübungen",
          sessionParts: [
            {
              warmUp: "2 min Kopf und Schulterkreisen im sitzen",
              main: [
                `1 min Katze`,
                `1 min Hund`,
                `1 min Baby`,
                `1 min Krähe`,
                `1 min Oktopus`,
              ],
              coolDown: "2 min liegen und tief ein und ausatmen",
            },
          ],
        },
        {
          day: "Mittwoch",
          activity: "Stabilitätstraining",
          description: "Core-Übungen",
          sessionParts: [
            {
              warmUp: "30 sek hüpfen",
              main: [
                `1 min Hampelmann`,
                `1 min Liegestütz`,
                `1 min Plank`,
                `1 min hampelmann`,
                `1 min Liegestütz`,
              ],
              coolDown: "2 min liegen und tief ein und ausatmen",
            },
          ],
        },
        {
          day: "Donnerstag",
          activity: "schwimmen",
          description: "500 / 1000 / 500",
          sessionParts: [
            {
              warmUp: `200 m @ ${0.9 * swim100mPace}s/100m`,
              main: [
                `500 m @ ${0.8 * swim100mPace}s/100m `,
                `1000 m @ ${0.7 * swim100mPace}s/100m `,
                `500 m @ ${0.8 * swim100mPace}s/100m`,
              ],
              coolDown: `200 m @ ${0.9 * swim100mPace}s/100m`,
            },
          ],
        },
        {
          day: "Freitag",
          activity: "Radfahren",
          description: "3 x 10 min",
          sessionParts: [
            {
              warmUp: `10 min @ ${0.7 * bikeTreshold}bpm`,
              main: [
                `10 min @ ${0.8 * bikeTreshold}bpm`,
                `10 min @ ${0.9 * bikeTreshold}bpm`,
                `10 min @ ${0.8 * bikeTreshold}bpm`,
              ],
              coolDown: `5 min @ ${0.7 * bikeTreshold}bpm`,
            },
          ],
        },
        {
          day: "Samstag",
          activity: "Laufen",
          description: "3 x 10 min",
          sessionParts: [
            {
              warmUp: `10 min @ ${0.7 * runTreshold}bpm`,
              main: [
                `10 min @ ${0.8 * runTreshold}bpm`,
                `10 min @ ${0.9 * runTreshold}bpm`,
                `10 min @ ${0.8 * runTreshold}bpm`,
              ],
              coolDown: `5 min @ ${0.7 * runTreshold}bpm`,
            },
          ],
        },
        {
          day: "Sonntag",
          activity: "Schwimmen",
          description: "500 / 1000 / 500",
          sessionParts: [
            {
              warmUp: `200 m @ ${0.9 * swim100mPace}s/100m`,
              main: [
                `500 m @ ${0.8 * swim100mPace}s/100m `,
                `1000 m @ ${0.7 * swim100mPace}s/100m `,
                `500 m @ ${0.8 * swim100mPace}s/100m`,
              ],
              coolDown: `200 m @ ${0.9 * swim100mPace}s/100m`,
            },
          ],
        },
      ],
    },
    {
      week: 2,
      sessions: [
        {
          day: "Montag",
          activity: "Schwimmen",
          description: "500 / 1000 / 500",
          sessionParts: [
            {
              warmUp: `200 m @ ${0.9 * swim100mPace}s/100m`,
              main: [
                `500 m @ ${0.8 * swim100mPace}s/100m `,
                `1000 m @ ${0.7 * swim100mPace}s/100m `,
                `500 m @ ${0.8 * swim100mPace}s/100m`,
              ],
              coolDown: `200 m @ ${0.9 * swim100mPace}s/100m`,
            },
          ],
        },
        {
          day: "Dienstag",
          activity: "Radfahren",
          description: "3 x 10 min",
          sessionParts: [
            {
              warmUp: `10 min @ ${0.7 * bikeTreshold}bpm`,
              main: [
                `10 min @ ${0.8 * bikeTreshold}bpm`,
                `10 min @ ${0.9 * bikeTreshold}bpm`,
                `10 min @ ${0.8 * bikeTreshold}bpm`,
              ],
              coolDown: `5 min @ ${0.7 * bikeTreshold}bpm`,
            },
          ],
        },
        {
          day: "Mittwoch",
          activity: "Laufen",
          description: "3 x 10 min",
          sessionParts: [
            {
              warmUp: `10 min @ ${0.7 * runTreshold}bpm`,
              main: [
                `10 min @ ${0.8 * runTreshold}bpm`,
                `10 min @ ${0.9 * runTreshold}bpm`,
                `10 min @ ${0.8 * runTreshold}bpm`,
              ],
              coolDown: `5 min @ ${0.7 * runTreshold}bpm`,
            },
          ],
        },
        {
          day: "Donnerstag",
          activity: "Schwimmen",
          description: "500 / 1000 / 500",
          sessionParts: [
            {
              warmUp: `200 m @ ${0.9 * swim100mPace}s/100m`,
              main: [
                `500 m @ ${0.8 * swim100mPace}s/100m `,
                `1000 m @ ${0.7 * swim100mPace}s/100m `,
                `500 m @ ${0.8 * swim100mPace}s/100m`,
              ],
              coolDown: `200 m @ ${0.9 * swim100mPace}s/100m`,
            },
          ],
        },
        {
          day: "Freitag",
          activity: "Radfahren",
          description: "3 x 10 min",
          sessionParts: [
            {
              warmUp: `10 min @ ${0.7 * bikeTreshold}bpm`,
              main: [
                `10 min @ ${0.8 * bikeTreshold}bpm`,
                `10 min @ ${0.9 * bikeTreshold}bpm`,
                `10 min @ ${0.8 * bikeTreshold}bpm`,
              ],
              coolDown: `5 min @ ${0.7 * bikeTreshold}bpm`,
            },
          ],
        },
        {
          day: "Samstag",
          activity: "Laufen",
          description: "3 x 10 min",
          sessionParts: [
            {
              warmUp: `10 min @ ${0.7 * runTreshold}bpm`,
              main: [
                `10 min @ ${0.8 * runTreshold}bpm`,
                `10 min @ ${0.9 * runTreshold}bpm`,
                `10 min @ ${0.8 * runTreshold}bpm`,
              ],
              coolDown: `5 min @ ${0.7 * runTreshold}bpm`,
            },
          ],
        },
        {
          day: "Sonntag",
          activity: "Schwimmen",
          description: "500 / 1000 / 500",
          sessionParts: [
            {
              warmUp: `200 m @ ${0.9 * swim100mPace}s/100m`,
              main: [
                `500 m @ ${0.8 * swim100mPace}s/100m `,
                `1000 m @ ${0.7 * swim100mPace}s/100m `,
                `500 m @ ${0.8 * swim100mPace}s/100m`,
              ],
              coolDown: `200 m @ ${0.9 * swim100mPace}s/100m`,
            },
          ],
        },
      ],
    },
  ],
};

export default Page;
