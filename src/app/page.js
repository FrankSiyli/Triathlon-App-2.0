"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./globals.css";
import BackGroundImage from "./components/BackGroundImage/BackGroundImage";
import useSWR from "swr";
import { useRecoilState } from "recoil";
import { dataFromMongoDbState } from "./recoil/atoms/dataFromMongoDbState";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error, isLoading } = useSWR("/api/mongoDb", fetcher);
  const router = useRouter();
  const [elapsedTime, setElapsedTime] = useState(0);
  const [recoilSessions, setRecoilSessions] =
    useRecoilState(dataFromMongoDbState);

  useEffect(() => {
    if (data) {
      setRecoilSessions(data);
    }
  }, [data, setRecoilSessions]);

  useEffect(() => {
    if (data) {
      setRecoilSessions(data);
    }
  }, [data, setRecoilSessions]);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1000);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const navigateAfterLoading = () => {
    if (!isLoading && elapsedTime > 4000) {
      setTimeout(() => {
        router.push("/home");
      }, 500);
    }
  };
  navigateAfterLoading();

  return (
    <main>
      <BackGroundImage
        isLoading={isLoading}
        error={error}
        elapsedTime={elapsedTime}
      />
    </main>
  );
}
