"use client";
import React, { useEffect } from "react";
import useSWR from "swr";
import { useRecoilState } from "recoil";
import { dataFromMongoDbState } from "../recoil/atoms/dataFromMongoDbState";

const fetcher = (url) => fetch(url).then((res) => res.json());

function useFetchData() {
  const { data, error, isLoading } = useSWR("/api/mongoDb", fetcher);
  const [recoilSessions, setRecoilSessions] =
    useRecoilState(dataFromMongoDbState);

  useEffect(() => {
    if (data) {
      setRecoilSessions(data);
    }
  }, [data, setRecoilSessions]);

  return { data, error, isLoading };
}

export default useFetchData;
