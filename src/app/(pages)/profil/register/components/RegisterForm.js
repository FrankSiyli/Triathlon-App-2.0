"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Alert from "@/app/components/Alerts/Alert";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setShowAlert(true);
      setError("Bitte fülle alle Felder aus.");
      return;
    }
    try {
      const resUserExists = await fetch("/api/mongoDbUserExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setShowAlert(true);
        setError("Konto existiert bereits");
        return;
      }

      const res = await fetch("/api/mongoDbRegisterUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        const signInResponse = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });
        router.push("/profil");

        if (!signInResponse.error) {
          router.push("/profil");
        } else {
          setError("Anmeldung nach Registrierung fehlgeschlagen.");
        }
      } else {
        console.log("User registration failed");
      }
    } catch (error) {
      console.error(error);
    }
  };
  setTimeout(() => {
    setShowAlert(false);
  }, 2000);

  return (
    <>
      <p className=" mx-auto w-40 text-center -mt-10">Konto erstellen</p>

      <div className=" flex flex-col items-center  mt-10 gap-1  max-w-xl mx-5 ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-3"
        >
          <input
            className="input  border border-transparent "
            type="string"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input  border border-transparent "
            type="mail"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input  border border-transparent "
            type="password"
            placeholder="Passwort"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-sm bg-third text-first shadow-xl">
            Konto erstellen
          </button>
        </form>
        {error && showAlert && <Alert alertText={error} />}
      </div>
    </>
  );
}
