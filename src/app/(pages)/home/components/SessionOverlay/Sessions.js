import { formatTime } from "@/app/helperFunctions/formatTime";
import getZones from "@/app/helperFunctions/getZones";
import { savedHrMaxState } from "@/app/recoil/atoms/user/savedHrMaxState";
import { savedSwimTimeState } from "@/app/recoil/atoms/user/savedSwimTimeState";
import Image from "next/image";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";

const Sessions = ({ singleActivity, openOverlay, dayIndex, activityIndex }) => {
  const savedSwimTime = useRecoilValue(savedSwimTimeState);
  const savedHrMax = useRecoilValue(savedHrMaxState);
  const [openInstructionImage, setOpenInstructionImage] = useState(null);

  return (
    <>
      {Array.isArray(singleActivity[2]) &&
        singleActivity[2].map(
          (sessionSections) =>
            openOverlay.includes(dayIndex * 1000 + activityIndex) && (
              <div key={activityIndex}>
                <div>
                  {/**----------------------------warmUpSection ------------------------------------*/}
                  {sessionSections.warmUp[0].exercises[0].name === "" ? null : (
                    <p className="text-center text-first p-2 ">Warm Up</p>
                  )}
                  <div>
                    {sessionSections.warmUp.map((warmUpSection, warmUpIndex) =>
                      warmUpSection.exercises[0].name === "" ? null : (
                        <div key={warmUpIndex}>
                          <div className="relative rounded-md bg-fourth/5 p-1 mb-2 text-sm">
                            {warmUpSection.multiplier > 1 ? (
                              <p className="absolute top-0 left-1 text-first text-xl">
                                {warmUpSection.multiplier} x{" "}
                              </p>
                            ) : null}

                            {warmUpSection.exercises.map(
                              (warmUpExercise, warmUpExerciseIndex) => (
                                <div
                                  key={warmUpExerciseIndex}
                                  className={`flex flex-row justify-between items-center mt-${
                                    warmUpExerciseIndex === 0 &&
                                    warmUpSection.multiplier > 1
                                      ? 10
                                      : 2
                                  } `}
                                >
                                  <div className="flex gap-3">
                                    {warmUpExercise.distance > 0 ? (
                                      <p>{warmUpExercise.distance}m</p>
                                    ) : warmUpExercise.duration > 0 ? (
                                      <p>
                                        {formatTime(warmUpExercise.duration)}
                                      </p>
                                    ) : null}
                                    <p>
                                      {getZones(
                                        warmUpExercise,
                                        savedSwimTime,
                                        savedHrMax
                                      )}
                                    </p>
                                  </div>
                                  <div className=" w-1/2 text-right">
                                    {warmUpExercise.name.trim() !== "" ? (
                                      <p>{warmUpExercise.name}</p>
                                    ) : null}
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                  {/**----------------------------mainSection ------------------------------------*/}
                  <p className="text-center text-first p-2 ">Hauptteil</p>
                  <div>
                    {sessionSections.main.map((mainSection, mainIndex) => {
                      return (
                        <div key={mainIndex}>
                          <div className="relative rounded-md bg-fourth/5 p-1 mb-2 text-sm">
                            {mainSection.multiplier > 1 ? (
                              <p className="absolute top-0 left-1 text-first text-xl">
                                {mainSection.multiplier} x{" "}
                              </p>
                            ) : null}

                            {mainSection.exercises.map(
                              (mainExercise, mainExerciseIndex) => (
                                <div
                                  key={mainExerciseIndex}
                                  className={`flex flex-row justify-between   mt-${
                                    mainExerciseIndex === 0 &&
                                    mainSection.multiplier > 1
                                      ? 10
                                      : 2
                                  } `}
                                >
                                  <div className="flex gap-3">
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

                                  <div className="w-1/2 text-right">
                                    {mainExercise.name.trim() !== "" ? (
                                      <button
                                        className={`text-right text-sm rounded-md p-1 cursor-default ${
                                          mainExercise.imageLink
                                            ? "underline decoration-first decoration-2 underline-offset-4 cursor-pointer "
                                            : ""
                                        }`}
                                        onClick={() => {
                                          if (mainExercise.imageLink) {
                                            if (
                                              mainExerciseIndex ===
                                              openInstructionImage
                                            ) {
                                              setOpenInstructionImage(null);
                                            } else {
                                              setOpenInstructionImage(
                                                mainExerciseIndex
                                              );
                                            }
                                          }
                                        }}
                                      >
                                        {mainExercise.name}
                                      </button>
                                    ) : null}
                                    {mainExerciseIndex ===
                                    openInstructionImage ? (
                                      <div className="flex flex-col items-center bg-second m-3 rounded-md">
                                        <Image
                                          width={200}
                                          height={200}
                                          src={`/images/yoga_images/${mainExercise.imageLink}.png`}
                                          alt="yoga pose"
                                          className="my-5 "
                                        />
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
                  {sessionSections.coolDown[0].exercises[0].name ===
                  "" ? null : (
                    <p className="text-center text-first p-2">Cool Down</p>
                  )}
                  <div>
                    {sessionSections.coolDown.map(
                      (coolDownSection, coolDownIndex) =>
                        coolDownSection.exercises[0].name === "" ? null : (
                          <div key={coolDownIndex}>
                            <div className="relative rounded-md bg-fourth/5 flex flex-col p-1 mb-2 text-sm">
                              {coolDownSection.multiplier > 1 ? (
                                <p className="absolute top-0 left-1 text-first text-xl">
                                  {coolDownSection.multiplier} x{" "}
                                </p>
                              ) : null}

                              {coolDownSection.exercises.map(
                                (coolDownExercise, coolDownExerciseIndex) => (
                                  <div
                                    key={coolDownExerciseIndex}
                                    className={`flex flex-row justify-between items-center mt-${
                                      coolDownExerciseIndex === 0 &&
                                      coolDownSection.multiplier > 1
                                        ? 10
                                        : 2
                                    } `}
                                  >
                                    <div className="flex gap-3">
                                      {coolDownExercise.distance > 0 ? (
                                        <div>
                                          <p>{coolDownExercise.distance}m</p>
                                        </div>
                                      ) : coolDownExercise.duration > 0 ? (
                                        <p>
                                          {formatTime(
                                            coolDownExercise.duration
                                          )}
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
                                    <div className="w-1/2 text-right">
                                      {coolDownExercise.name.trim() !== "" ? (
                                        <button
                                          className={`text-right text-sm rounded-md p-1 cursor-default`}
                                        >
                                          {coolDownExercise.name}
                                        </button>
                                      ) : null}
                                    </div>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
            )
        )}
    </>
  );
};

export default Sessions;
