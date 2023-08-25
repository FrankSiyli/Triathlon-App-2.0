import React from "react";

const PrintSessionSections = ({
  singleActivity,
  openOverlay,
  dayIndex,
  activityIndex,
}) => {
  return (
    <>
      {" "}
      <div>
        {singleActivity[2].map(
          (sessionSections, sectionIndex) =>
            openOverlay.includes(dayIndex * 1000 + activityIndex) && (
              <div key={activityIndex}>
                <div className="overflow-scroll h-auto print-page p-1 m-3 mx-auto">
                  {/**----------------------------warmUpSection ------------------------------------*/}
                  {/**----------------------------warmUpSection ------------------------------------*/}
                  {/**----------------------------warmUpSection ------------------------------------*/}

                  <p className="underline">Warm up</p>
                  {sessionSections?.warmUp.map((warmUpSection, warmUpIndex) => (
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
                                <p>{warmUpExercise.zone}</p>
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
                  ))}

                  {/**----------------------------mainSection ------------------------------------*/}
                  {/**----------------------------mainSection ------------------------------------*/}
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
                                  <p>{mainExercise.zone}</p>
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
                  {/**----------------------------coolDownSection ------------------------------------*/}
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
                                  <p>{coolDownExercise.zone}</p>
                                </div>
                                <div>
                                  {coolDownExercise.name.trim() !== "" ? (
                                    <p className="">{coolDownExercise.name}</p>
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
};

export default PrintSessionSections;
