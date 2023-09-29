import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const homepagePlanState = atom({
  key: "homepagePlanState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
