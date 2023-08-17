import React from "react";

const WarmUpSection = ({ sessionSections }) => {
  return (
    <>
      <div className="mt-10">
        <div className="border border-first/50  rounded-md mx-5">
          <p className=" text-xl mt-5">Warm up:</p>
          {sessionSections.warmUp.map((warmUpSection, warmUpIndex) => (
            <div key={warmUpIndex}>
              <div className="relative flex flex-col mx-5 my-3  p-1 rounded-md bg-second ">
                {warmUpSection.exercises.map((exercise, exerciseIndex) => (
                  <div key={exerciseIndex}>
                    <div className="flex flex-row justify-between mt-5 mx-3">
                      {exercise.distance > 0 ? (
                        <p>{exercise.distance}m</p>
                      ) : exercise.duration > 0 ? (
                        <p>{exercise.duration}min</p>
                      ) : null}
                      <p>{exercise.zone}</p>
                    </div>
                    <div>
                      <p className="border  border-first/50  rounded-md mx-2 mt-2 p-3">
                        {exercise.name}
                      </p>
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
