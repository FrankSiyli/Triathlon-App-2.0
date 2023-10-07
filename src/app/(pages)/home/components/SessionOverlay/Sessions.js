import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import Image from "next/image";
import { formatTime } from "@/app/helperFunctions/formatTime";
import getZones from "@/app/helperFunctions/getZones";
import { savedHrMaxState } from "@/app/recoil/atoms/user/savedHrMaxState";
import { savedSwimTimeState } from "@/app/recoil/atoms/user/savedSwimTimeState";

const Sessions = ({ singleActivity, openOverlay, dayIndex, activityIndex }) => {
  const savedSwimTime = useRecoilValue(savedSwimTimeState);
  const savedHrMax = useRecoilValue(savedHrMaxState);

  const [openWarmUpImage, setOpenWarmUpImage] = useState(null);
  const [openMainImage, setOpenMainImage] = useState(null);
  const [openCoolDownImage, setOpenCoolDownImage] = useState(null);

  const renderSection = (
    sectionData,
    sectionType,
    openImageState,
    setOpenImageState
  ) => {
    if (sectionData[0].exercises[0].name === "") {
      return null;
    }

    return (
      <div>
        <p className="text-center text-first p-2 ">{sectionType}</p>
        {sectionData.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <div className="relative rounded-md bg-fourth/5 p-1 mb-2 text-sm">
              {section.multiplier > 1 && (
                <p className="absolute top-0 left-1 text-first text-xl">
                  {section.multiplier} x{" "}
                </p>
              )}
              {section.exercises.map((exercise, exerciseIndex) => (
                <div
                  key={exerciseIndex}
                  className={`flex flex-row justify-between ${
                    exerciseIndex === 0 && section.multiplier > 1
                      ? "mt-10"
                      : "mt-2"
                  }`}
                >
                  <div className="flex gap-3">
                    {exercise.distance > 0 ? (
                      <p>{exercise.distance}m</p>
                    ) : exercise.duration > 0 ? (
                      <p>{formatTime(exercise.duration)}</p>
                    ) : null}
                    <p>{getZones(exercise, savedSwimTime, savedHrMax)}</p>
                  </div>
                  <div className="w-1/2 text-right">
                    {exercise.name.trim() !== "" && (
                      <button
                        className={`text-right text-sm rounded-md p-1 cursor-default ${
                          exercise.imageLink
                            ? "underline decoration-first decoration-2 underline-offset-4 cursor-pointer "
                            : ""
                        }`}
                        onClick={() => {
                          if (exercise.imageLink) {
                            setOpenImageState(
                              exerciseIndex === openImageState
                                ? null
                                : exerciseIndex
                            );
                          }
                        }}
                      >
                        {exercise.name}
                      </button>
                    )}
                    {exerciseIndex === openImageState && (
                      <div className="flex flex-col items-center bg-second m-3 rounded-md">
                        <Image
                          width={200}
                          height={200}
                          src={`/images/yoga_images/${exercise.imageLink}.png`}
                          alt="yoga pose"
                          className="my-5"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {Array.isArray(singleActivity[2]) &&
        singleActivity[2].map(
          (sessionSections) =>
            openOverlay.includes(dayIndex * 1000 + activityIndex) && (
              <div key={activityIndex}>
                <div>
                  {renderSection(
                    sessionSections.warmUp,
                    "Warm Up",
                    openWarmUpImage,
                    setOpenWarmUpImage
                  )}
                  {renderSection(
                    sessionSections.main,
                    "Hauptteil",
                    openMainImage,
                    setOpenMainImage
                  )}
                  {renderSection(
                    sessionSections.coolDown,
                    "Cool Down",
                    openCoolDownImage,
                    setOpenCoolDownImage
                  )}
                </div>
              </div>
            )
        )}
    </>
  );
};

export default Sessions;
