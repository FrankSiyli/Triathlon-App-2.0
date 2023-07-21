"use client";
import { useRouter } from "next/navigation";

import "./globals.css";

export default function Home() {
  const router = useRouter();
  setTimeout(() => {
    router.push("/home");
  }, 2000);

  return <main className="flex min-h-screen flex-col items-center "></main>;
}
