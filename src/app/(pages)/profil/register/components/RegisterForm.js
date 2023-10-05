"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import Alert from "@/app/components/Alerts/Alert";
import { useRecoilState } from "recoil";
import { userNameState } from "@/app/recoil/atoms/user/userNameState";
import { userEmailState } from "@/app/recoil/atoms/user/userEmailState";
import Loader from "@/app/components/Loader/Loader";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [userName, setUserName] = useRecoilState(userNameState);
  const [userEmail, setUserEmail] = useRecoilState(userEmailState);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordHints, setPasswordHints] = useState({
    length: true,
    specialChar: true,
    upperCase: true,
  });

  const router = useRouter();
  const calculateHints = (password) => {
    const newHints = {
      length: true,
      specialChar: true,
      upperCase: true,
    };

    if (password.length >= 10) {
      newHints.length = true;
    } else {
      newHints.length = false;
    }
    if (/(?=.*[A-Z])/.test(password)) {
      newHints.upperCase = true;
    } else {
      newHints.upperCase = false;
    }
    if (/(?=.*[!@#$%^&?*])/.test(password)) {
      newHints.specialChar = true;
    } else {
      newHints.specialChar = false;
    }
    return newHints;
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordHints(calculateHints(newPassword));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!name || !email || !password) {
      setShowAlert(true);
      setError("Bitte fülle alle Felder aus.");
      setIsLoading(false);
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&?*])(?=.{10,})/;
    const isPasswordValid = passwordRegex.test(password);

    if (!isPasswordValid) {
      setShowAlert(true);
      setError("Passwort erfüllt nicht die Anforderungen.");
      setIsLoading(false);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);

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
        setIsLoading(false);
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
        const signInResponse = await signIn("credentials", {
          name,
          email,
          password,
          callbackUrl: "/profil",
        });
        setUserName(name);
        setUserEmail(email);
      } else {
        console.log("User registration failed");
      }
    } catch (error) {
      setIsLoading(false);
      setShowAlert(true);
      setError("Etwas ist schief gelaufen.");
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
    setIsLoading(false);
  };

  return (
    <>
      <p className=" mx-auto w-40 text-center -mt-10">Konto erstellen</p>

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
              type="string"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="input  border border-transparent "
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className=" flex flex-col text-center text-alert">
              {!passwordHints.length && <span>10 Zeichen</span>}
              {!passwordHints.specialChar && <span>1 Sonderzeichen </span>}
              {!passwordHints.upperCase && <span>1 Großbuchstabe </span>}
            </div>
            <input
              className="input  border border-transparent "
              type="password"
              placeholder="Passwort"
              onChange={handlePasswordChange}
            />

            <button className="btn btn-sm bg-third mt-5 text-first shadow-xl border-transparent">
              Konto erstellen
            </button>
          </form>
          {error && showAlert && <Alert alertText={error} />}
        </div>
      )}
    </>
  );
}
