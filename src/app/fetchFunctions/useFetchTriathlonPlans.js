"use client";
import React, { useEffect } from "react";
import useSWR from "swr";
import { useRecoilState } from "recoil";
import { triathlonPlansFromMongoDbState } from "../recoil/atoms/plans/triathlonPlansFromMongoDbState";

const fetcher = (url) => fetch(url).then((res) => res.json());

function useFetchTriathlonPlans() {
  const { data, error, isLoading } = useSWR(
    "/api/mongoDbFetchTriathlonPlans",
    fetcher
  );

  const [recoilTriathlonPlans, setRecoilTriathlonPlans] = useRecoilState(
    triathlonPlansFromMongoDbState
  );

  useEffect(() => {
    if (data) {
      setRecoilTriathlonPlans(data);
    }
  }, [data, setRecoilTriathlonPlans]);

  return {
    data,
    error,
    isLoading,
  };
}

export default useFetchTriathlonPlans;
