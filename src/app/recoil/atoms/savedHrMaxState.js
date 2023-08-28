import { atom } from "recoil";

export const savedHrMaxState = atom({
  key: "savedHrMaxState", // unique ID (with respect to other atoms/selectors)
  default: 160, // default value (aka initial value)
});
