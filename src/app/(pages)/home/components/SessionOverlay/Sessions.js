import { formatTime } from "@/app/helperFunctions/formatTime";
import getZones from "@/app/helperFunctions/getZones";
import { savedHrMaxState } from "@/app/recoil/atoms/savedHrMaxState";
import { savedSwimTimeState } from "@/app/recoil/atoms/savedSwimTimeState";
import Image from "next/image";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";

const Sessions = ({ singleActivity, openOverlay, dayIndex, activityIndex }) => {
  const savedSwimTime = useRecoilValue(savedSwimTimeState);
  const savedHrMax = useRecoilValue(savedHrMaxState);
  const [openInstructionImage, setOpenInstructionImage] = useState(null);
  return (
    <>
      {singleActivity[2].map(
        (sessionSections) =>
          openOverlay.includes(dayIndex * 1000 + activityIndex) && (
            <div key={activityIndex}>
              <div>
                {/**----------------------------warmUpSection ------------------------------------*/}
                <div className="relative border border-first/50  rounded-md mx-5 my-10">
                  <p className="absolute -top-5 -left-4 btn btn-sm btn-outline text-first p-2  linear-background ">
                    Warm Up
                  </p>
                  {sessionSections.warmUp.map((warmUpSection, warmUpIndex) => {
                    return (
                      <div key={warmUpIndex}>
                        <div className="relative flex flex-col mx-3  mt-10 mb-3  p-1 rounded-md bg-third ">
                          {warmUpSection.multiplier > 1 ? (
                            <p className="absolute -top-7 left-4 mb-3 btn btn-outline text-first p-2  linear-background text-xl">
                              {warmUpSection.multiplier} x{" "}
                            </p>
                          ) : null}

                          {warmUpSection.exercises.map(
                            (warmUpExercise, warmUpExerciseIndex) => (
                              <div key={warmUpExerciseIndex}>
                                <div
                                  className={`flex flex-row justify-between items-center mt-${
                                    warmUpExerciseIndex === 0 &&
                                    warmUpSection.multiplier > 1
                                      ? 10
                                      : 2
                                  } mx-3`}
                                >
                                  {warmUpExercise.distance > 0 ? (
                                    <div>
                                      <p>{warmUpExercise.distance}m</p>
                                    </div>
                                  ) : warmUpExercise.duration > 0 ? (
                                    <p>{formatTime(warmUpExercise.duration)}</p>
                                  ) : null}
                                  <p>
                                    {getZones(
                                      warmUpExercise,
                                      savedSwimTime,
                                      savedHrMax
                                    )}
                                  </p>
                                </div>
                                <div>
                                  {warmUpExercise.name.trim() !== "" ? (
                                    <p className="border border-first/50 text-sm rounded-md p-1 linear-background">
                                      {warmUpExercise.name}
                                    </p>
                                  ) : null}
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>{" "}
                {/**----------------------------mainSection ------------------------------------*/}
                <div className="relative border border-first/50  rounded-md mx-5 my-10">
                  <p className="absolute -top-5 -left-4 btn btn-sm btn-outline text-first p-2  linear-background">
                    Hauptteil
                  </p>
                  {sessionSections.main.map((mainSection, mainIndex) => {
                    return (
                      <div key={mainIndex}>
                        <div className="relative flex flex-col mx-3  mt-10 mb-3  p-1 rounded-md bg-third ">
                          {mainSection.multiplier > 1 ? (
                            <p className="absolute -top-3 left-4 btn btn-outline text-first p-2  linear-background text-xl">
                              {mainSection.multiplier} x{" "}
                            </p>
                          ) : null}

                          {mainSection.exercises.map(
                            (mainExercise, mainExerciseIndex) => (
                              <div key={mainExerciseIndex}>
                                <div
                                  className={`flex flex-row justify-between items-center mt-${
                                    mainExerciseIndex === 0 &&
                                    mainSection.multiplier > 1
                                      ? 10
                                      : 2
                                  } mx-3`}
                                >
                                  {mainExercise.distance > 0 ? (
                                    <div>
                                      <p>{mainExercise.distance}m</p>
                                    </div>
                                  ) : mainExercise.duration > 0 ? (
                                    <p>{formatTime(mainExercise.duration)}</p>
                                  ) : null}
                                  <p>
                                    {getZones(
                                      mainExercise,
                                      savedSwimTime,
                                      savedHrMax
                                    )}
                                  </p>
                                </div>
                                <div>
                                  {mainExercise.name.trim() !== "" ? (
                                    <button
                                      className={`border border-first/50 w-full text-sm rounded-md p-1 linear-background cursor-default ${
                                        mainExercise.imageLink
                                          ? "underline decoration-first decoration-2 underline-offset-4 cursor-pointer "
                                          : ""
                                      }`}
                                      onClick={() => {
                                        if (mainExercise.imageLink) {
                                          setOpenInstructionImage(
                                            mainExerciseIndex
                                          );
                                        }
                                      }}
                                    >
                                      {mainExercise.name}
                                    </button>
                                  ) : null}
                                  {mainExerciseIndex ===
                                  openInstructionImage ? (
                                    <div className="flex flex-col items-center bg-second min-h-72 w-full">
                                      <Image
                                        width={200}
                                        height={200}
                                        src={`/images/yoga_images/${mainExercise.imageLink}.png`}
                                        alt="yoga pose"
                                        className="mt-10"
                                      />
                                      <button
                                        onClick={() =>
                                          setOpenInstructionImage(null)
                                        }
                                        className="btn btn-circle btn-outline text-first m-10"
                                      >
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
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  ) : null}
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>{" "}
                {/**----------------------------coolDownSection ------------------------------------*/}
                <div className="relative border border-first/50  rounded-md mx-5 mb-10">
                  <p className="absolute -top-5 -left-4 btn btn-sm btn-outline text-first p-2  linear-background">
                    Cool down
                  </p>
                  {sessionSections.coolDown.map(
                    (coolDownSection, coolDownIndex) => (
                      <div key={coolDownIndex}>
                        <div className=" flex flex-col mx-3  mt-10 mb-3  p-1 rounded-md bg-third ">
                          {coolDownSection.exercises.map(
                            (coolDownExercise, coolDownExerciseIndex) => (
                              <div key={coolDownExerciseIndex}>
                                <div className="flex flex-row justify-between mt-5 mx-3">
                                  {coolDownExercise.distance > 0 ? (
                                    <p>{coolDownExercise.distance}m</p>
                                  ) : coolDownExercise.duration > 0 ? (
                                    <p>
                                      {formatTime(coolDownExercise.duration)}
                                    </p>
                                  ) : null}
                                  <p>
                                    {getZones(
                                      coolDownExercise,
                                      savedSwimTime,
                                      savedHrMax
                                    )}
                                  </p>
                                </div>
                                <div>
                                  {coolDownExercise.name.trim() !== "" ? (
                                    <p className="border border-first/50 text-sm rounded-md p-1 linear-background">
                                      {coolDownExercise.name}
                                    </p>
                                  ) : null}
                                </div>
                              </div>
                            )
                          )}
                          <br />
                        </div>
                      </div>
                    )
                  )}
                </div>{" "}
              </div>
            </div>
          )
      )}
    </>
  );
};

export default Sessions;
