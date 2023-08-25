import React from "react";

const SessionSections = ({
  singleActivity,
  openOverlay,
  dayIndex,
  activityIndex,
}) => {
  let totalMainDistance = 0;

  return (
    <>
      {singleActivity[2].map(
        (sessionSections, sectionIndex) =>
          openOverlay.includes(dayIndex * 1000 + activityIndex) && (
            <div key={activityIndex}>
              <div className="overflow-scroll h-auto">
                {/**----------------------------warmUpSection ------------------------------------*/}
                {/**----------------------------warmUpSection ------------------------------------*/}
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
                                    <p>{warmUpExercise.zone}</p>
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
                {/**----------------------------mainSection ------------------------------------*/}
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
                                  <p>{mainExercise.zone}</p>
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
                {/**----------------------------coolDownSection ------------------------------------*/}
                {/**----------------------------coolDownSection ------------------------------------*/}
                <div className="relative border border-first/50  rounded-md mx-5 mb-20">
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
                                  <p>{coolDownExercise.zone}</p>
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

export default SessionSections;
