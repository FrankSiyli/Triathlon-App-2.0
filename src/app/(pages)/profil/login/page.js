"use client";
import BackButton from "@/app/components/Buttons/BackButton/BackButton";
import NavBar from "@/app/components/NavBar/NavBar";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Alert from "@/app/components/Alerts/Alert";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res.error) {
        setShowAlert(true);
        setError("Die Eingaben sind nicht korrekt.");
        return;
      }
      router.replace("/profil");
    } catch (error) {}
  };
  setTimeout(() => {
    setShowAlert(false);
  }, 2000);

  return (
    <>
      <BackButton href="/profil" />
      <p className=" mx-auto w-40 text-center -mt-10">Login</p>

      <div className=" flex flex-col items-center  mt-10 gap-1  max-w-xl mx-5 ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-3"
        >
          <input
            className="input  border border-transparent "
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input  border border-transparent "
            type="password"
            placeholder="Passwort"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-sm bg-third text-first shadow-xl m-2">
            Anmelden
          </button>
          <Link
            href={"/profil/register"}
            className="underline underline-offset-2"
          >
            Konto erstellen
          </Link>
        </form>
        {error && showAlert && <Alert alertText={error} />}
      </div>
      <NavBar />
    </>
  );
}

export default Page;
