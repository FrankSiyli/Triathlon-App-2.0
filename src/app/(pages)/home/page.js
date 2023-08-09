"use client";
import Footer from "@/app/components/Footer/Footer";
import "../../globals.css";
import { v1 as uuidv1 } from "uuid";
import { useState } from "react";
import logo from "../../../../public/images/logoSmall.png";
import Image from "next/image";
import examplePlan from "../../../../public/mockDb";

function Page() {
  const [openOverlay, setOpenOverlay] = useState([]);
  const [openDay, setOpenDay] = useState(-1);

  const toggleDay = (dayIndex) => {
    if (openDay === dayIndex) {
      setOpenDay(-1);
    } else {
      setOpenDay(dayIndex);
    }
  };

  const toggleOverlay = (dayIndex, activityIndex) => {
    const clickedIndex = dayIndex * 1000 + activityIndex;
    if (openOverlay.includes(clickedIndex)) {
      setOpenOverlay(openOverlay.filter((item) => item !== clickedIndex));
    } else {
      setOpenOverlay([...openOverlay, clickedIndex]);
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
      <div className="flex flex-col  max-w-xl mx-auto">
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
        <div className="flex flex-col items-center max-w-xl">
          {Object.entries(activitiesByDay).map(([day, activity], dayIndex) => (
            <div key={uuidv1()}>
              <div
                onClick={() => toggleDay(dayIndex)}
                className="flex flex-row justify-between w-screen  my-3 mx-auto  text-first   "
              >
                <p className="ml-5">{day}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>

              {/**-----------------------------------activities---------------------------------- */}

              <div className=" text-first flex flex-col items-center">
                {openDay === dayIndex &&
                  activity.map((singleActivity, activityIndex) => (
                    <button
                      onClick={() => toggleOverlay(dayIndex, activityIndex)}
                      key={activityIndex}
                    >
                      <div className="flex flex-row h-14 my-1 w-80  justify-between items-center rounded-md   bg-second  ">
                        <div className="ml-5 text-left">
                          <div>
                            <p className="underline underline-offset-2 text-sm">
                              {singleActivity[0]}
                            </p>

                            <p>{singleActivity[1]}</p>

                            {/*----------------------------------session overlay----------------------------------- */}

                            {singleActivity[2].map(
                              (sessionSection) =>
                                openOverlay.includes(
                                  dayIndex * 1000 + activityIndex
                                ) && (
                                  <div
                                    key={activityIndex}
                                    className="fixed top-0 left-0  z-50 overflow-auto text-xl max-h-screen h-screen w-screen rounded-none overlay-background text-first flex flex-col justify-center items-center text-center"
                                  >
                                    <div className="">
                                      <Image
                                        src={logo}
                                        alt="logo"
                                        className="fixed top-0 left-0 m-3  "
                                        width={100}
                                        height={100}
                                      />
                                      <div className="fixed top-0 right-0 m-8 text-right">
                                        <p className="underline underline-offset-2 text-sm">
                                          {singleActivity[0]}
                                        </p>
                                        <p>{singleActivity[1]}</p>
                                      </div>

                                      <div className="global-css-overlay mt-40 mb-20">
                                        <p className="underline">Warm up:</p>
                                        <p>{sessionSection.warmUp}</p>
                                        <br />
                                        <p className="underline">Hauptteil:</p>
                                        {sessionSection?.main.map(
                                          (singleSection) => (
                                            <p key={uuidv1()}>
                                              {singleSection}
                                            </p>
                                          )
                                        )}
                                        <br />
                                        <p className="underline">Cool down:</p>
                                        <p>{sessionSection.coolDown}</p>
                                        <div className="btn btn-circle btn-outline mt-10  border-2 border-first">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="3"
                                              d="M6 18L18 6M6 6l12 12"
                                            />
                                          </svg>
                                        </div>
                                      </div>
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
                          className="w-6 h-6 mr-5"
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

export default Page;
