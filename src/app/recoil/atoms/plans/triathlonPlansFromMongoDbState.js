import { atom } from "recoil";

export const triathlonPlansFromMongoDbState = atom({
  key: "triathlonPlansFromMongoDbState",
  default: [],
});
