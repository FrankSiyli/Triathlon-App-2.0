import React, { forwardRef } from "react";
import logoBlack from "../../../../../public/images/logoSmallBlack.png";
import Image from "next/image";
import { savedSwimTimeState } from "@/app/recoil/atoms/savedSwimTimeState";
import { useRecoilValue } from "recoil";
import { savedHrMaxState } from "@/app/recoil/atoms/savedHrMaxState";
import getZones from "@/app/helperFunctions/getZones";

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
    const savedSwimTime = useRecoilValue(savedSwimTimeState) / 10;
    const savedHrMax = useRecoilValue(savedHrMaxState) / 10;
    return (
      <>
        <div ref={ref}>
          {singleActivity[2].map(
            (sessionSections, sectionIndex) =>
              openOverlay.includes(dayIndex * 1000 + activityIndex) && (
                <div key={activityIndex}>
                  <div className=" print-page  p-1 m-3 mx-auto ">
                    <div className="flex flex-row justify-between">
                      <Image
                        src={logoBlack}
                        alt="logo"
                        className="mt-1 ml-1 w-auto"
                        width={50}
                        height={50}
                      />
                      <div className="text-right mr-3 ">
                        <p className="underline underline-offset-2">
                          {singleActivity[0]}
                        </p>
                        <p className="my-1">{singleActivity[1]}</p>
                        {totalDistance > 0 ? (
                          <p>Distanz: {totalDistance}m</p>
                        ) : null}
                        {totalDuration > 0 ? (
                          <p>Zeit: {totalDuration}min</p>
                        ) : null}
                      </div>
                    </div>
                    {/**----------------------------warmUpSection ------------------------------------*/}
                    <p className="underline">Warm up</p>
                    {sessionSections?.warmUp.map(
                      (warmUpSection, warmUpIndex) => (
                        <div key={warmUpIndex}>
                          <div className="border ">
                            {warmUpSection.exercises.map(
                              (warmUpExercise, warmUpExerciseIndex) => (
                                <div
                                  className="flex flex-row justify-between mx-3"
                                  key={warmUpExerciseIndex}
                                >
                                  <div className="flex flex-row justify-between gap-3">
                                    {warmUpExercise.distance > 0 ? (
                                      <p>{warmUpExercise.distance}m</p>
                                    ) : warmUpExercise.duration > 0 ? (
                                      <p>{warmUpExercise.duration}min</p>
                                    ) : null}
                                    <p>
                                      {getZones(
                                        warmUpExercise,
                                        savedSwimTime,
                                        savedHrMax
                                      )}
                                    </p>{" "}
                                  </div>
                                  <div>
                                    {warmUpExercise.name.trim() !== "" ? (
                                      <p className="">{warmUpExercise.name}</p>
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
                                      <p>{mainExercise.duration}min</p>
                                    ) : null}
                                    <p>
                                      {getZones(
                                        mainExercise,
                                        savedSwimTime,
                                        savedHrMax
                                      )}
                                    </p>{" "}
                                  </div>
                                  <div>
                                    {mainExercise.name.trim() !== "" ? (
                                      <p className="">{mainExercise.name}</p>
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
                    <p className="underline">Cool down</p>
                    {sessionSections.coolDown.map(
                      (coolDownSection, coolDownIndex) => (
                        <div key={coolDownIndex}>
                          <div className="border">
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
                                      <p>{coolDownExercise.duration}min</p>
                                    ) : null}
                                    <p>
                                      {getZones(
                                        coolDownExercise,
                                        savedSwimTime,
                                        savedHrMax
                                      )}
                                    </p>{" "}
                                  </div>
                                  <div>
                                    {coolDownExercise.name.trim() !== "" ? (
                                      <p className="">
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
