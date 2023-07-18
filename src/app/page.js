"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "public/images/logoSmall.png";
import "./globals.css";

export default function Home() {
  const router = useRouter();
  setTimeout(() => {
    router.push("/homePage");
  }, 3000);

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Image
        className="mt-10"
        src={logo}
        alt="logo"
        width={300}
        height={300}
        priority
      />
    </main>
  );
}
