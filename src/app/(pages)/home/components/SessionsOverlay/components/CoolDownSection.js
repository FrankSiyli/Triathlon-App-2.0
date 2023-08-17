import React from "react";

const CoolDownSection = ({ sessionSections }) => {
  return (
    <>
      <div className="border border-first/50  rounded-md mx-5">
        <p className=" text-xl mt-5">Cool down:</p>
        {sessionSections.coolDown.map((coolDownSection, coolDownIndex) => (
          <div key={coolDownIndex}>
            <div className="relative flex flex-col mx-5 my-3  p-1 rounded-md bg-second ">
              {coolDownSection.exercises.map((exercise, exerciseIndex) => (
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
              <br />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CoolDownSection;
