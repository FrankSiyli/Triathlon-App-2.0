import React from "react";

const CoolDownSection = ({ sessionSections }) => {
  return (
    <>
      <div className="relative border border-first/50  rounded-md mx-5 mb-20">
        <p className="absolute -top-7 -left-4 btn btn-outline text-first p-2  linear-background text-xl">
          Cool down
        </p>
        {sessionSections.coolDown.map((coolDownSection, coolDownIndex) => (
          <div key={coolDownIndex}>
            <div className=" flex flex-col mx-3  mt-10 mb-3  p-1 rounded-md bg-third ">
              {coolDownSection.exercises.map((exercise, exerciseIndex) => (
                <div key={exerciseIndex} className="">
                  <div className="flex flex-row justify-between mt-5 mx-3">
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
    </>
  );
};

export default CoolDownSection;
