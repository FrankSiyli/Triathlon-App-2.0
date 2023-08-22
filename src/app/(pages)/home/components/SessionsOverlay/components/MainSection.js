import React from "react";

const MainSection = ({ sessionSections }) => {
  return (
    <>
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

                {mainSection.exercises.map((exercise, exerciseIndex) => (
                  <div key={exerciseIndex} className="">
                    <div
                      className={`flex flex-row justify-between items-center mt-${
                        exerciseIndex === 0 && mainSection.multiplier > 1
                          ? 10
                          : 2
                      } mx-3`}
                    >
                      {exercise.distance > 0 ? (
                        <p>{exercise.distance}m</p>
                      ) : exercise.duration > 0 ? (
                        <p>{exercise.duration}min</p>
                      ) : null}
                      <p>{exercise.zone}</p>
                    </div>
                    <div>
                      {exercise.name.trim() !== "" ? (
                        <p className="border border-first/50 text-sm rounded-md p-1 linear-background">
                          {exercise.name}
                        </p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MainSection;
