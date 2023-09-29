"use client";
import BackButton from "@/app/components/Buttons/BackButton/BackButton";
import NavBar from "@/app/components/NavBar/NavBar";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Alert from "@/app/components/Alerts/Alert";
import { useRecoilState } from "recoil";
import { userNameState } from "@/app/recoil/atoms/user/userNameState";
import Loader from "@/app/components/Loader/Loader";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/profil",
      });

      if (res.error) {
        setShowAlert(true);
        setError("Die Eingaben sind nicht korrekt.");
        return;
      }
      if (res.ok) {
        router.push("/profil");
      }
    } catch (error) {}
    setIsLoading(false);
  };
  setTimeout(() => {
    setShowAlert(false);
  }, 2000);

  return (
    <>
      <BackButton href="/profil" />
      <p className=" mx-auto w-40 text-center -mt-10">Login</p>

      {isLoading ? (
        <Loader error={error} isLoading={isLoading} />
      ) : (
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
            <button className="btn btn-sm bg-third text-first shadow-xl m-2 border-transparent">
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
      )}
      <NavBar />
    </>
  );
}

export default Page;
