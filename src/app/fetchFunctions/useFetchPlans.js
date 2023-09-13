"use client";
import React, { useEffect } from "react";
import useSWR from "swr";
import { useRecoilState } from "recoil";
import { plansFromMongoDbState } from "../recoil/atoms/plansFromMongoDbState";
import { homepagePlanState } from "../recoil/atoms/homepagePlanState";

const fetcher = (url) => fetch(url).then((res) => res.json());

function useFetchPlans() {
  const { data, error, isLoading } = useSWR("/api/mongoDbFetchPlans", fetcher);
  const [recoilPlans, setRecoilPlans] = useRecoilState(plansFromMongoDbState);
  const [homepagePlan, setHomepagePlan] = useRecoilState(homepagePlanState);

  useEffect(() => {
    if (data) {
      const plansArray = data.plans[0];
      setRecoilPlans(data);
      setHomepagePlan(plansArray);
    }
  }, [data, setRecoilPlans, setHomepagePlan]);

  return {
    data,
    error,
    isLoading,
  };
}

export default useFetchPlans;
