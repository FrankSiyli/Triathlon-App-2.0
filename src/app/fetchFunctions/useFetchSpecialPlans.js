"use client";
import React, { useEffect } from "react";
import useSWR from "swr";
import { useRecoilState } from "recoil";
import { specialPlansFromMongoDbState } from "../recoil/atoms/specialPlansFromMongoDbState";

const fetcher = (url) => fetch(url).then((res) => res.json());

function useFetchSpecialPlans() {
  const { data, error, isLoading } = useSWR(
    "/api/mongoDbFetchSpecialPlans",
    fetcher
  );

  const [recoilSpecialPlans, setRecoilSpecialPlans] = useRecoilState(
    specialPlansFromMongoDbState
  );

  useEffect(() => {
    if (data) {
      setRecoilSpecialPlans(data);
    }
  }, [data, setRecoilSpecialPlans]);

  return {
    data,
    error,
    isLoading,
  };
}

export default useFetchSpecialPlans;
