import getZones from "@/app/helperFunctions/getZones";
import { savedHrMaxState } from "@/app/recoil/atoms/savedHrMaxState";
import { savedSwimTimeState } from "@/app/recoil/atoms/savedSwimTimeState";
import React from "react";
import { useRecoilValue } from "recoil";

const Sessions = ({ singleActivity, openOverlay, dayIndex, activityIndex }) => {
  const savedSwimTime = useRecoilValue(savedSwimTimeState) / 10;
  const savedHrMax = useRecoilValue(savedHrMaxState) / 10;

  return (
    <>
      {singleActivity[2].map(
        (sessionSections, sectionIndex) =>
          openOverlay.includes(dayIndex * 1000 + activityIndex) && (
            <div key={activityIndex}>
              <div>
                {/**----------------------------warmUpSection ------------------------------------*/}
                <div className="mt-20">
                  <div className="relative border-2 border-first/50  rounded-md mx-5 ">
                    <p className="absolute -top-7 -left-4 btn btn-outline text-first p-2  linear-background text-xl">
                      Warm up
                    </p>
                    {sessionSections?.warmUp.map(
                      (warmUpSection, warmUpIndex) => (
                        <div key={warmUpIndex}>
                          <div className=" flex flex-col mx-3  mt-10 mb-3  p-1 rounded-md bg-third ">
                            {warmUpSection.exercises.map(
                              (warmUpExercise, warmUpExerciseIndex) => (
                                <div key={warmUpExerciseIndex}>
                                  <div className="flex flex-row justify-between items-center my-2 mx-3">
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

                            <br />
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>{" "}
                {/**----------------------------mainSection ------------------------------------*/}
                <div className="relative border border-first/50  rounded-md mx-5 my-10">
                  <p className="absolute -top-7 -left-4 btn btn-outline text-first p-2  linear-background text-xl">
                    Hauptteil
                  </p>
                  {sessionSections.main.map((mainSection, mainIndex) => {
                    return (
                      <div key={mainIndex}>
                        <div className="relative flex flex-col mx-3  mt-10 mb-3  p-1 rounded-md bg-third ">
                          {mainSection.multiplier > 1 ? (
                            <p className="absolute -top-7 left-4 mb-3 btn btn-outline text-first p-2  linear-background text-xl">
                              {mainSection.multiplier} x{" "}
                            </p>
                          ) : null}

                          {mainSection.exercises.map(
                            (mainExercise, mainExerciseIndex) => (
                              <div key={mainExerciseIndex} className="">
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
                                    <p>{mainExercise.duration}min</p>
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
                                    <p className="border border-first/50 text-sm rounded-md p-1 linear-background">
                                      {mainExercise.name}
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
                {/**----------------------------coolDownSection ------------------------------------*/}
                <div className="relative border border-first/50  rounded-md mx-5 mb-10">
                  <p className="absolute -top-7 -left-4 btn btn-outline text-first p-2  linear-background text-xl">
                    Cool down
                  </p>
                  {sessionSections.coolDown.map(
                    (coolDownSection, coolDownIndex) => (
                      <div key={coolDownIndex}>
                        <div className=" flex flex-col mx-3  mt-10 mb-3  p-1 rounded-md bg-third ">
                          {coolDownSection.exercises.map(
                            (coolDownExercise, coolDownExerciseIndex) => (
                              <div key={coolDownExerciseIndex} className="">
                                <div className="flex flex-row justify-between mt-5 mx-3">
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
