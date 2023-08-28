"use client";
import { useRouter } from "next/navigation";

import "./globals.css";
import BackGroundImage from "./components/BackGroundImage/BackGroundImage";

export default function Home() {
  const router = useRouter();
  setTimeout(() => {
    router.push("/home");
  }, 2000);

  return (
    <main>
      <BackGroundImage />
    </main>
  );
}
