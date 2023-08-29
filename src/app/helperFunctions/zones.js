import React from "react";
import { formatTime } from "@/app/helperFunctions/formatTime";
import { useSavedValues } from "../recoil/hooks";
const Zones = () => {
  const { savedSwimTime, savedHrMax } = useSavedValues();
  const swim100mPace = savedSwimTime;
  const userMaxHeartrate = 200;
  const heartrateInput = userMaxHeartrate / 100;

  // Swim pace zones
  const swimZ1 = `${formatTime(swim100mPace + 20)} min/100m`; // warm up / cool down
  const swimZ2 = `${formatTime(swim100mPace + 10)} min/100m`; // endurance
  const swimZ3 = `${formatTime(swim100mPace + 5)} min/100m`; // tempo
  const swimZ4 = `${formatTime(swim100mPace)} min/100m`; // threshold
  const swimZ5 = `${formatTime(swim100mPace - 5)} min/100m`; // anaerobic
  const swimZ6 = `${formatTime(swim100mPace - 10)} min/100m`; // max effort

  // Run heart rate zones
  const runZ1 = `${Math.round(heartrateInput * 50)} - ${Math.round(
    heartrateInput * 60
  )} bpm`;
  const runZ2 = `${Math.round(heartrateInput * 60)} - ${Math.round(
    heartrateInput * 70
  )} bpm`;
  const runZ3 = `${Math.round(heartrateInput * 70)} - ${Math.round(
    heartrateInput * 80
  )} bpm`;
  const runZ4 = `${Math.round(heartrateInput * 80)} - ${Math.round(
    heartrateInput * 90
  )} bpm`;
  const runZ5 = `${Math.round(heartrateInput * 90)} - ${Math.round(
    heartrateInput * 100
  )} bpm`;

  // Bike heart rate zones
  const bikeHeartrateZ1 = `${Math.round(heartrateInput * 45)} - ${Math.round(
    heartrateInput * 55
  )} bpm`;
  const bikeHeartrateZ2 = `${Math.round(heartrateInput * 55)} - ${Math.round(
    heartrateInput * 65
  )} bpm`;
  const bikeHeartrateZ3 = `${Math.round(heartrateInput * 65)} - ${Math.round(
    heartrateInput * 75
  )} bpm`;
  const bikeHeartrateZ4 = `${Math.round(heartrateInput * 75)} - ${Math.round(
    heartrateInput * 85
  )} bpm`;
  const bikeHeartrateZ5 = `${Math.round(heartrateInput * 85)} - ${Math.round(
    heartrateInput * 95
  )} bpm`;

  return { swimZ1, swimZ2, swimZ3, swimZ4, swimZ5, swimZ6 };
};

export default Zones;
