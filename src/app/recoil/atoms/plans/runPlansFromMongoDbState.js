import { atom } from "recoil";

export const runPlansFromMongoDbState = atom({
  key: "runPlansFromMongoDbState",
  default: [],
});
