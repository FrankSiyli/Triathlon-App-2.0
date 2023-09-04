import React from "react";
import { dataFromMongoDbState } from "../recoil/atoms/dataFromMongoDbState";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/navigation";

function useDataSafety() {
  const data = useRecoilValue(dataFromMongoDbState);
  const router = useRouter();

  setTimeout(() => {
    if (data.length === 0) {
      router.push("/");
    }
  }, 500);
  return <div></div>;
}

export default useDataSafety;
