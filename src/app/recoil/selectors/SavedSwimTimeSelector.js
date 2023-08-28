import { selector } from "recoil";
import { savedSwimTimeState } from "../atoms/savedSwimTimeState";

export const savedSwimTimeSelector = selector({
  key: "savedSwimTimeSelector", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    // const name = get(savedHrMaxState);
    return savedSwimTimeState;
  },
});
