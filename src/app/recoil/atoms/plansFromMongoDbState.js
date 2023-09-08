import { atom } from "recoil";

export const plansFromMongoDbState = atom({
  key: "plansFromMongoDbState",
  default: [],
});
