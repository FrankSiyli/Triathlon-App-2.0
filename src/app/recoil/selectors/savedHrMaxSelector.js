import { selector } from "recoil";
import { savedHrMaxState } from "../atoms/savedHrMaxState";

export const savedHrMaxSelector = selector({
  key: "savedHrMaxSelector", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    // const name = get(savedHrMaxState);
    return savedHrMaxState;
  },
});
