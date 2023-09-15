"use client";
import React, { useEffect } from "react";
import useSWR from "swr";
import { useRecoilState } from "recoil";
import { homepagePlanState } from "../recoil/atoms/plans/homepagePlanState";

const fetcher = (url) => fetch(url).then((res) => res.json());

function useFetchHomepagePlan() {
  const { data, error, isLoading } = useSWR(
    "/api/mongoDbFetchHomepagePlan",
    fetcher
  );

  const [homepagePlan, setHomepagePlan] = useRecoilState(homepagePlanState);

  useEffect(() => {
    if (data) {
      const plansArray = data.plans[0];
      setHomepagePlan(plansArray);
    }
  }, [data, setHomepagePlan]);

  return {
    data,
    error,
    isLoading,
  };
}

export default useFetchHomepagePlan;
