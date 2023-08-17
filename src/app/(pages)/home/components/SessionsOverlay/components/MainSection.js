import React from "react";

const MainSection = ({ sessionSections }) => {
  return (
    <>
      <div className="border border-first/50  rounded-md m-5">
        <p className="text-xl mt-5">Hauptteil:</p>
        {sessionSections.main.map((mainSection, mainIndex) => {
          return (
            <div key={mainIndex}>
              <div className="relative flex flex-col mx-5  my-6  p-1 rounded-md bg-second ">
                {mainSection.multiplier > 1 ? (
                  <p className="absolute border  border-first/50  rounded-md p-1 -top-5 left-2 text-xl">
                    {mainSection.multiplier} x{" "}
                  </p>
                ) : null}

                {mainSection.exercises.map((exercise, exerciseIndex) => (
                  <div key={exerciseIndex} className="">
                    <div className="flex flex-row justify-between mt-5 mx-3">
                      {exercise.distance}
                      <p>{exercise.zone}</p>
                    </div>
                    <div>
                      <p className="border  border-first/50  rounded-md mx-2 mt-2 p-3">
                        {exercise.name}
                      </p>
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
