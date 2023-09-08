"use client";
import React, { useEffect } from "react";
import useSWR from "swr";
import { useRecoilState } from "recoil";
import { plansFromMongoDbState } from "../recoil/atoms/plansFromMongoDbState";

const fetcher = (url) => fetch(url).then((res) => res.json());

function useFetchPlans() {
  const { data, error, isLoading } = useSWR("/api/mongoDbFetchPlans", fetcher);

  const [recoilPlans, setRecoilPlans] = useRecoilState(plansFromMongoDbState);

  useEffect(() => {
    if (data) {
      setRecoilPlans(data);
    }
  }, [data, setRecoilPlans]);

  return {
    data,
    error,
    isLoading,
  };
}

export default useFetchPlans;
