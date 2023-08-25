import { atom } from "recoil";

export const savedSwimTimeState = atom({
  key: "savedSwimTimeState", // unique ID (with respect to other atoms/selectors)
  default: 1200, // default value (aka initial value)
});
