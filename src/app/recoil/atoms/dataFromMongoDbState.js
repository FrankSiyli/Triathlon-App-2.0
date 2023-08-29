import { atom } from "recoil";

export const dataFromMongoDbState = atom({
  key: "dataFromMongoDbState",
  default: [],
});
