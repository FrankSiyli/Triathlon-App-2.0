"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import "./globals.css";
import BackGroundImage from "./components/BackGroundImage/BackGroundImage";
import useSWR from "swr";
import { useRecoilState } from "recoil";
import { dataFromMongoDbState } from "./recoil/atoms/dataFromMongoDbState";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error, isLoading } = useSWR("/api/mongoDb", fetcher);
  const [recoilSessions, setRecoilSessions] =
    useRecoilState(dataFromMongoDbState);

  useEffect(() => {
    if (data) {
      setRecoilSessions(data);
    }
  }, [data, setRecoilSessions]);
  console.log(data);
  const router = useRouter();

  const navigateAfterLoading = () => {
    if (!isLoading) {
      setTimeout(() => {
        router.push("/home");
      }, 2000);
    }
  };
  navigateAfterLoading();

  return (
    <main>
      <BackGroundImage isLoading={isLoading} error={error} />
    </main>
  );
}
