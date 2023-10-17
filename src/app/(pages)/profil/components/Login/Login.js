"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Alert from "@/app/components/Alerts/Alert";
import Loader from "@/app/components/Loader/Loader";

function Login({ setShowProfil, setShowRegisterForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!email || !password) {
      setIsLoading(false);
      setShowAlert(true);
      setError("Bitte fülle alle Felder aus.");
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return;
    }
    try {
      const res = await signIn("credentials", {
        email,
        password,
      });

      if (res.ok) {
        setIsLoading(false);
        return;
      } else {
        setIsLoading(false);
        setShowAlert(true);
        setError("Die Eingaben sind nicht korrekt.");
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
        return;
      }
    } catch (error) {
      setIsLoading(false);
      setShowAlert(true);
      setError("Die Eingaben sind nicht korrekt.");
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return;
    }
  };

  const handleBackClick = () => {
    setShowProfil();
  };
  const handleRegisterClick = () => {
    setShowRegisterForm();
  };

  return (
    <>
      <div className="w-screen max-w-xl mx-auto">
        <button
          className="top-5 left-5 btn btn-ghost btn-sm  m-3 border border-transparent text-first "
          onClick={handleBackClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
      <p className=" mx-auto w-40 text-center -mt-10">Login</p>

      {isLoading ? (
        <Loader isLoading={isLoading} />
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
            <button
              onClick={handleRegisterClick}
              className="underline underline-offset-2"
            >
              Konto erstellen
            </button>
          </form>
          {error && showAlert && <Alert alertText={error} />}
        </div>
      )}
    </>
  );
}

export default Login;
