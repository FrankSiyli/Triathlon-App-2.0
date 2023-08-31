import { selector } from "recoil";
import { savedSwimTimeState } from "../atoms/savedSwimTimeState";

export const savedSwimTimeSelector = selector({
  key: "savedSwimTimeSelector",
  get: ({ get }) => {
    return savedSwimTimeState;
  },
});
