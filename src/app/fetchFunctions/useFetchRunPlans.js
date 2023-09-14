"use client";
import React, { useEffect } from "react";
import useSWR from "swr";
import { useRecoilState } from "recoil";
import { runPlansFromMongoDbState } from "../recoil/atoms/plans/runPlansFromMongoDbState";

const fetcher = (url) => fetch(url).then((res) => res.json());

function useFetchRunPlans() {
  const { data, error, isLoading } = useSWR(
    "/api/mongoDbFetchRunPlans",
    fetcher
  );

  const [recoilRunPlans, setRecoilRunPlans] = useRecoilState(
    runPlansFromMongoDbState
  );

  useEffect(() => {
    if (data) {
      setRecoilRunPlans(data);
    }
  }, [data, setRecoilRunPlans]);

  return {
    data,
    error,
    isLoading,
  };
}

export default useFetchRunPlans;
