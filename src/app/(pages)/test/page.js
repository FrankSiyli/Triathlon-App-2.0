"use client";
import { sessionsState } from "@/app/recoil/atoms/sessionsState";
import React from "react";
import { useRecoilValue } from "recoil";

const TestPage = () => {
  const sessions = useRecoilValue(sessionsState);
  console.log("sessions", sessions);
  return (
    <>
      <div>
        {sessions?.map((session, id) => (
          <div key={id}>{session.title}</div>
        ))}
      </div>
    </>
  );
};

export default TestPage;
