"use client";
import BackButton from "@/app/components/Buttons/BackButton/BackButton";
import NavBar from "@/app/components/NavBar/NavBar";
import React, { useState } from "react";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("Bitte fülle alle Felder aus.");
      return;
    }
    try {
      /* const resUserExists = await fetch("/api/mongoDbUserExists", {
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
        setError("user already exists");
        return;
      } */

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
      } else {
        console.log("User registration failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <BackButton href="/profil/login" />
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
        {error && <div>{error}</div>}
      </div>
      <NavBar />
    </>
  );
};

export default Page;
