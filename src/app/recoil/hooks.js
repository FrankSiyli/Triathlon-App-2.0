import { useRecoilValue } from "recoil";
import { savedSwimTimeSelector } from "./selectors/SavedSwimTimeSelector";
import { savedHrMaxSelector } from "./selectors/savedHrMaxSelector";
import { formatTime } from "../helperFunctions";

export const useSavedValues = () => {
  const savedSwimTime = useRecoilValue(savedSwimTimeSelector);
  const savedHrMax = useRecoilValue(savedHrMaxSelector);
  const swim100mPace = savedSwimTime;

  const swimZ1 = `${formatTime(swim100mPace + 20)} min/100m`; // warm up / cool down
  const swimZ2 = `${formatTime(swim100mPace + 10)} min/100m`; // endurance
  const swimZ3 = `${formatTime(swim100mPace + 5)} min/100m`; // tempo
  const swimZ4 = `${formatTime(swim100mPace)} min/100m`; // threshold
  const swimZ5 = `${formatTime(swim100mPace - 5)} min/100m`; // anaerobic
  const swimZ6 = `${formatTime(swim100mPace - 10)} min/100m`; // max effort
  return {
    savedSwimTime,
    savedHrMax,
    swimZ1,
    swimZ2,
    swimZ3,
    swimZ4,
    swimZ5,
    swimZ6,
  };
};
