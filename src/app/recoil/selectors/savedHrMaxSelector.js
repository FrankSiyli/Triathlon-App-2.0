import { selector } from "recoil";
import { savedHrMaxState } from "../atoms/savedHrMaxState";

export const savedHrMaxSelector = selector({
  key: "savedHrMaxSelector",
  get: ({ get }) => {
    return savedHrMaxState;
  },
});
