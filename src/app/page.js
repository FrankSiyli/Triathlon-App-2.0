"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import "./globals.css";
import BackGroundImage from "./components/BackGroundImage/BackGroundImage";
import useSWR from "swr";
import { useRecoilState } from "recoil";
import { sessionsState } from "./recoil/atoms/sessionsState";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data: sessions, error, isLoading } = useSWR("/api/mongoDb", fetcher);
  const [recoilSessions, setRecoilSessions] = useRecoilState(sessionsState);

  useEffect(() => {
    if (sessions) {
      setRecoilSessions(sessions);
    }
  }, [sessions, setRecoilSessions]);
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
