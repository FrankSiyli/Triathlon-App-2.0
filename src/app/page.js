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
  const { data: sessions, error, isLoading } = useSWR("/api/sessions", fetcher);
  const [recoilSessions, setRecoilSessions] = useRecoilState(sessionsState);

  useEffect(() => {
    if (sessions) {
      setRecoilSessions(sessions);
    }
  }, [sessions, setRecoilSessions]);
  const router = useRouter();
  setTimeout(() => {
    router.push("/home");
  }, 4000);
  return (
    <main>
      {error ? <div>failed to load</div> : null}
      {isLoading ? <div>loading...</div> : null}
      <BackGroundImage />
    </main>
  );
}
/* const createUser = async () => {
    try {
      const createdUser = await fetch("/api/sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
        }),
      }).then((res) => res.json());
      console.log("CREATED DOCUMENT");

      setName("");
      setEmail("");

      console.log(createdUser);
    } catch (error) {
      console.log(error);
    }
  }; */

/* setTimeout(() => {
    router.push("/home");
  }, 2000); */
/* if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>; */
