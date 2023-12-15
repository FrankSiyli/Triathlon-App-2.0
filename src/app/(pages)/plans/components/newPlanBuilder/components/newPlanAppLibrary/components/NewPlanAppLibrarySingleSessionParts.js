import React from "react";

const NewPlanAppLibrarySingleSessionParts = ({ sessionParts }) => {
  return (
    <>
      {sessionParts.map((sessionPart, sessionPartIndex) => (
        <div
          className="w-full text-sm mt-3 p-1 bg-fifth/40 rounded"
          key={sessionPartIndex}
        >
          <h3 className=" text-alert">Warm-Up</h3>
          {sessionPart.warmUp.map((warmUpItem, warmUpIndex) => (
            <div key={warmUpIndex}>
              <h4>{warmUpItem.multiplier}x</h4>

              {warmUpItem.exercises.map((exercise, exerciseIndex) => (
                <div className="flex justify-between" key={exerciseIndex}>
                  <p>{exercise.name}</p>
                  <p>m{exercise.distance}</p>
                  <p>t{exercise.duration}</p>
                  <p>{exercise.zone}</p>
                </div>
              ))}
            </div>
          ))}
          <h3 className="mt-5 text-alert">Main</h3>
          {sessionPart.main.map((mainItem, mainIndex) => (
            <div key={mainIndex}>
              <h4>{mainItem.multiplier}x</h4>

              {mainItem.exercises.map((exercise, exerciseIndex) => (
                <div className="flex justify-between" key={exerciseIndex}>
                  <p>{exercise.name}</p>
                  <p>m{exercise.distance}</p>
                  <p>t{exercise.duration}</p>
                  <p>{exercise.zone}</p>
                </div>
              ))}
            </div>
          ))}
          <h3 className="mt-5 text-alert">Cool-Down</h3>
          {sessionPart.coolDown.map((coolDownItem, coolDownIndex) => (
            <div key={coolDownIndex}>
              <h4>{coolDownItem.multiplier}x</h4>

              {coolDownItem.exercises.map((exercise, exerciseIndex) => (
                <div className="flex justify-between" key={exerciseIndex}>
                  <p>{exercise.name}</p>
                  <p>m{exercise.distance}</p>
                  <p>t{exercise.duration}</p>
                  <p>{exercise.zone}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default NewPlanAppLibrarySingleSessionParts;
