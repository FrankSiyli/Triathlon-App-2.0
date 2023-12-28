import DistanceSvg from "@/app/components/SVGs/DistanceSvg";
import WatchSvg from "@/app/components/SVGs/WatchSvg";
import React from "react";

const renderExercises = (exercises) => {
  return exercises.map((exercise, exerciseIndex) => (
    <div key={exerciseIndex} className="flex bg-fifth/40 rounded">
      <p className="w-5/12">{exercise.name}</p>
      <div className="flex justify-between w-7/12">
        {exercise.distance > 0 ? (
          <div className="flex items-center">
            <DistanceSvg />
            <p>{exercise.distance}m</p>
          </div>
        ) : null}

        {exercise.duration > 0 ? (
          <div className="flex items-center">
            <WatchSvg />
            <p>{exercise.duration}</p>
          </div>
        ) : null}
        <p className="flex items-center">{exercise.zone}</p>
      </div>
    </div>
  ));
};

const renderSessionPart = (sessionPart, title) => (
  <div className="w-full text-s mt-3 p-1 bg-fifth/40 rounded" key={title}>
    <h3 className="text-alert">{title}</h3>
    {sessionPart.map((partItem, partIndex) => (
      <div key={partIndex}>
        <h4 className="mt-2">{partItem.multiplier}x</h4>
        {renderExercises(partItem.exercises)}
      </div>
    ))}
  </div>
);

const NewPlanAppLibrarySingleSessionParts = ({ singleSession }) => {
  return (
    <>
      {singleSession.sessionParts.map((sessionPart, sessionPartIndex) => (
        <div key={sessionPartIndex}>
          {renderSessionPart(sessionPart.warmUp, "Warm Up")}
          {renderSessionPart(sessionPart.main, "Main")}
          {renderSessionPart(sessionPart.coolDown, "Cool Down")}
        </div>
      ))}
    </>
  );
};

export default NewPlanAppLibrarySingleSessionParts;
