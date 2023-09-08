import React from "react";
import { plansFromMongoDbState } from "../recoil/atoms/plansFromMongoDbState";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/navigation";

function useDataSafety() {
  const data = useRecoilValue(plansFromMongoDbState);
  const router = useRouter();

  setTimeout(() => {
    if (data.length === 0) {
      router.push("/");
    }
  }, 500);
  return <div></div>;
}

export default useDataSafety;
