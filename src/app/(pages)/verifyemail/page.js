"use client";
import Loader from "@/app/components/Loader/Loader";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/navigation";
import Alert from "@/app/components/Alerts/Alert";
import { loggedInUserLastLoadedPlanState } from "@/app/recoil/atoms/user/loggedInUserLastLoadedPlanState";
import { homepagePlanState } from "@/app/recoil/atoms/plans/homepagePlanState";
import { userNameState } from "@/app/recoil/atoms/user/userNameState";
import { userIsVerificatedState } from "@/app/recoil/atoms/user/userIsVerificatedState";
import { signIn } from "next-auth/react";

const VarifyEmailPage = () => {
  const router = useRouter();
  const [tokenIsSet, setTokenIsSet] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [token, setToken] = useState("");
  const [userIsVerificated, setUserIsVerificated] = useRecoilState(
    userIsVerificatedState
  );

  useEffect(() => {
    setIsLoading(true);
    const urlToken = async () => {
      const newToken = window.location.search.split("=")[1];
      setToken(newToken || "");
      setTokenIsSet(true);
    };
    urlToken();
  }, []);

  if (tokenIsSet) {
    const verifyEmail = async () => {
      try {
        const response = await fetch("/api/user/verifyEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: token,
          }),
        });
        if (response.ok) {
          const user = await response.json();
          console.log("user.email", user.email),
            console.log("user.password", user.password),
            setUserIsVerificated(true);
          setTokenIsSet(false);
          setIsLoading(false);
          await signIn("credentials", {
            email: user.email,
            password: user.password,
            redirect: true,
            callbackUrl: "/",
          });

          return;
        } else {
          setShowAlert(true);
          setError("Etwas ist schief gelaufen");
          setIsLoading(false);
          setTokenIsSet(false);
          return;
        }
      } catch (error) {
        setShowAlert(true);
        setError("Etwas ist schief gelaufen");
        setIsLoading(false);
        setTokenIsSet(false);
        return;
      }
    };
    verifyEmail();
  }

  /*  const handleLoginClick = async () => {
    try {
      const signInResponse = await signIn("credentials", {
        name: userName,
        email: userEmail,
        password: userPassword,
      });
      setIsVerifying(false);
      if (loggedInUserLastLoadedPlan.length !== 0) {
        setHomepagePlan(loggedInUserLastLoadedPlan);
      } else {
        setHomepagePlan(examplePlan);
      }
    } catch (error) {
      console.error("Sign-in error:", error);
    }
    router.push("/");
  }; */

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-full py-2">
        {!userIsVerificated && (
          <h2>Bestätigung deiner Email Adresse für siyli-app.de</h2>
        )}
        <br />
        {userIsVerificated ? (
          <>
            <div>Email wurde verifiziert.</div>
            <Loader isLoading={isLoading} />
          </>
        ) : (
          <Loader isLoading={isLoading} />
        )}

        {error && showAlert && (
          <Alert alertText={error} setShowAlert={setShowAlert} />
        )}
      </div>
    </>
  );
};

export default VarifyEmailPage;
