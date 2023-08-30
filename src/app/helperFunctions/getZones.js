import React from "react";
import { formatTime } from "@/app/helperFunctions/formatTime";

const getZones = (exercise, savedSwimTime, savedHrMax) => {
  // Swim pace zones
  const swimZ1 = `${formatTime(Math.round(savedSwimTime + 20))} min/100m`; // warm up / cool down
  const swimZ2 = `${formatTime(Math.round(savedSwimTime + 10))} min/100m`; // endurance
  const swimZ3 = `${formatTime(Math.round(savedSwimTime + 5))} min/100m`; // tempo
  const swimZ4 = `${formatTime(Math.round(savedSwimTime))} min/100m`; // threshold
  const swimZ5 = `${formatTime(Math.round(savedSwimTime - 5))} min/100m`; // anaerobic
  const swimZ6 = `${formatTime(Math.round(savedSwimTime - 10))} min/100m`; // max effort
  // Run heart rate zones
  const runZ1 = `${Math.round(savedHrMax * 50)} - ${Math.round(
    savedHrMax * 60
  )} bpm`;
  const runZ2 = `${Math.round(savedHrMax * 60)} - ${Math.round(
    savedHrMax * 70
  )} bpm`;
  const runZ3 = `${Math.round(savedHrMax * 70)} - ${Math.round(
    savedHrMax * 80
  )} bpm`;
  const runZ4 = `${Math.round(savedHrMax * 80)} - ${Math.round(
    savedHrMax * 90
  )} bpm`;
  const runZ5 = `${Math.round(savedHrMax * 90)} - ${Math.round(
    savedHrMax * 100
  )} bpm`;
  // Bike heart rate zones
  const bikeHeartrateZ1 = `${Math.round(savedHrMax * 45)} - ${Math.round(
    savedHrMax * 55
  )} bpm`;
  const bikeHeartrateZ2 = `${Math.round(savedHrMax * 55)} - ${Math.round(
    savedHrMax * 65
  )} bpm`;
  const bikeHeartrateZ3 = `${Math.round(savedHrMax * 65)} - ${Math.round(
    savedHrMax * 75
  )} bpm`;
  const bikeHeartrateZ4 = `${Math.round(savedHrMax * 75)} - ${Math.round(
    savedHrMax * 85
  )} bpm`;
  const bikeHeartrateZ5 = `${Math.round(savedHrMax * 85)} - ${Math.round(
    savedHrMax * 95
  )} bpm`;

  if (exercise.zone === "swimZ1") {
    return swimZ1;
  } else if (exercise.zone === "swimZ2") {
    return swimZ2;
  } else if (exercise.zone === "swimZ3") {
    return swimZ3;
  } else if (exercise.zone === "swimZ4") {
    return swimZ4;
  } else if (exercise.zone === "swimZ5") {
    return swimZ5;
  } else if (exercise.zone === "swimZ6") {
    return swimZ6;
  } else if (exercise.zone === "runZ1") {
    return runZ1;
  } else if (exercise.zone === "runZ2") {
    return runZ2;
  } else if (exercise.zone === "runZ3") {
    return runZ3;
  } else if (exercise.zone === "runZ4") {
    return runZ4;
  } else if (exercise.zone === "runZ5") {
    return runZ5;
  } else if (exercise.zone === "bikeHeartrateZ1") {
    return bikeHeartrateZ1;
  } else if (exercise.zone === "bikeHeartrateZ2") {
    return bikeHeartrateZ2;
  } else if (exercise.zone === "bikeHeartrateZ3") {
    return bikeHeartrateZ3;
  } else if (exercise.zone === "bikeHeartrateZ4") {
    return bikeHeartrateZ4;
  } else if (exercise.zone === "bikeHeartrateZ5") {
    return bikeHeartrateZ5;
  } else {
    return exercise.zone;
  }
};

export default getZones;
