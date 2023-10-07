import React, { forwardRef } from "react";
import logoBlack from "../../../../../../public/images/logoSmallBlack.png";
import Image from "next/image";
import { savedSwimTimeState } from "@/app/recoil/atoms/user/savedSwimTimeState";
import { useRecoilValue } from "recoil";
import { savedHrMaxState } from "@/app/recoil/atoms/user/savedHrMaxState";
import getZones from "@/app/helperFunctions/getZones";
import { formatTime } from "@/app/helperFunctions/formatTime";

const PrintSessions = forwardRef(
  (
    {
      singleActivity,
      openOverlay,
      dayIndex,
      activityIndex,
      totalDistance,
      totalDuration,
    },
    ref
  ) => {
    const savedSwimTime = useRecoilValue(savedSwimTimeState);
    const savedHrMax = useRecoilValue(savedHrMaxState);
    return (
      <>
        <div ref={ref}>
          {Array.isArray(singleActivity[2]) &&
            singleActivity[2].map(
              (sessionSections, sectionIndex) =>
                openOverlay.includes(dayIndex * 1000 + activityIndex) && (
                  <div key={activityIndex}>
                    <div className=" print-page  p-1 m-3 mx-auto min-h-screen">
                      <div className="flex flex-row justify-between">
                        <Image
                          src={logoBlack}
                          alt="logo"
                          className="mt-1 ml-1 w-auto"
                          width={80}
                          height={80}
                        />
                        <div className="text-right mr-3 ">
                          <p className="underline underline-offset-2">
                            {singleActivity[0]}
                          </p>
                          <p className="my-1">{singleActivity[1]}</p>
                          {totalDistance > 0 ? (
                            <p>Distanz: {totalDistance}m</p>
                          ) : null}
                          {totalDistance > 0 && totalDuration > 0 ? (
                            <p>+</p>
                          ) : null}
                          {totalDuration > 0 ? (
                            <p>Zeit: {formatTime(totalDuration)}</p>
                          ) : null}
                        </div>
                      </div>
                      {/**----------------------------warmUpSection ------------------------------------*/}

                      {sessionSections.warmUp[0].exercises[0].name ===
                      "" ? null : (
                        <p className="underline">Warm Up</p>
                      )}

                      {sessionSections.warmUp.map(
                        (warmUpSection, warmUpIndex) =>
                          warmUpSection.exercises[0].name === "" ? null : (
                            <div key={warmUpIndex}>
                              <div className="border">
                                {warmUpSection.multiplier > 1 ? (
                                  <p className="flex justify-start mx-3">
                                    {warmUpSection.multiplier} x{" "}
                                  </p>
                                ) : null}

                                {warmUpSection.exercises.map(
                                  (warmUpExercise, warmUpExerciseIndex) => (
                                    <div
                                      key={warmUpExerciseIndex}
                                      className="flex flex-row justify-between mx-3"
                                    >
                                      <div className="flex flex-row justify-between gap-3">
                                        {warmUpExercise.distance > 0 ? (
                                          <p>{warmUpExercise.distance}m</p>
                                        ) : warmUpExercise.duration > 0 ? (
                                          <p>
                                            {formatTime(
                                              warmUpExercise.duration
                                            )}
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
                                      <div>
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

                      {/**----------------------------mainSection ------------------------------------*/}
                      <p className="underline">Hauptteil</p>
                      {sessionSections.main.map((mainSection, mainIndex) => {
                        return (
                          <div key={mainIndex}>
                            <div className="border">
                              {mainSection.multiplier > 1 ? (
                                <p className="flex justify-start mx-3">
                                  {mainSection.multiplier} x{" "}
                                </p>
                              ) : null}

                              {mainSection.exercises.map(
                                (mainExercise, mainExerciseIndex) => (
                                  <div
                                    key={mainExerciseIndex}
                                    className="flex flex-row justify-between mx-3"
                                  >
                                    <div className="flex flex-row justify-between gap-3">
                                      {mainExercise.distance > 0 ? (
                                        <p>{mainExercise.distance}m</p>
                                      ) : mainExercise.duration > 0 ? (
                                        <p>
                                          {formatTime(mainExercise.duration)}
                                        </p>
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
                                        <p>{mainExercise.name}</p>
                                      ) : null}
                                    </div>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        );
                      })}
                      {/**----------------------------coolDownSection ------------------------------------*/}
                      {sessionSections.coolDown[0].exercises[0].name ===
                      "" ? null : (
                        <p className="underline">Cool Down</p>
                      )}

                      {sessionSections.coolDown.map(
                        (coolDownSection, coolDownIndex) =>
                          coolDownSection.exercises[0].name === "" ? null : (
                            <div key={coolDownIndex}>
                              <div className="border">
                                {coolDownSection.multiplier > 1 ? (
                                  <p className="flex justify-start mx-3">
                                    {coolDownSection.multiplier} x{" "}
                                  </p>
                                ) : null}

                                {coolDownSection.exercises.map(
                                  (coolDownExercise, coolDownExerciseIndex) => (
                                    <div
                                      key={coolDownExerciseIndex}
                                      className="flex flex-row justify-between mx-3"
                                    >
                                      <div className="flex flex-row justify-between gap-3">
                                        {coolDownExercise.distance > 0 ? (
                                          <p>{coolDownExercise.distance}m</p>
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
                                      <div>
                                        {coolDownExercise.name.trim() !== "" ? (
                                          <p>{coolDownExercise.name}</p>
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
                )
            )}
        </div>
      </>
    );
  }
);

PrintSessions.displayName = "PrintSessions";

export default PrintSessions;
