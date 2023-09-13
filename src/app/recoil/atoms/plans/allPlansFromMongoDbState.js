import { atom } from "recoil";

export const allPlansFromMongoDbState = atom({
  key: "allPlansFromMongoDbState",
  default: [],
});
