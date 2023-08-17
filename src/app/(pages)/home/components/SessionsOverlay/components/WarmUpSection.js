import React from "react";

const WarmUpSection = ({ sessionSections }) => {
  return (
    <>
      <div className="mt-20">
        <div className="relative border-2 border-first/50  rounded-md mx-5 ">
          <p className="absolute -top-7 -left-4 btn btn-outline text-first p-2  linear-background text-xl">
            Warm up
          </p>
          {sessionSections.warmUp.map((warmUpSection, warmUpIndex) => (
            <div key={warmUpIndex}>
              <div className=" flex flex-col mx-3  mt-10 mb-3  p-1 rounded-md bg-third ">
                {warmUpSection.exercises.map((exercise, exerciseIndex) => (
                  <div key={exerciseIndex}>
                    <div className="flex flex-row justify-between items-center my-2 mx-3">
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

                <br />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WarmUpSection;
