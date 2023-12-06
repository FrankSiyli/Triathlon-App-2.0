import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { newPlan } from "../../../../../database/mockDb";

const { persistAtom } = recoilPersist();

export const newPlanState = atom({
  key: "newPlanState",
  default: [newPlan],
  effects_UNSTABLE: [persistAtom],
});
