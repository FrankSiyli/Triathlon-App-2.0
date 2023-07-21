import Footer from "@/app/components/Footer/Footer";
import React from "react";
import Link from "next/link";

function Page() {
  return (
    <>
      <button className="btn btn-secondary pointer-events-none border-light  bg-red m-5 text-2xl text-light">
        Hey user.name 👋
      </button>
      <div className="flex min-h-screen mb-20 flex-col items-center p-4">
        <label className="label">
          <span className="label-text-alt text-light text-xl">
            Dein Maximalpuls
          </span>
        </label>
        <input
          type="number"
          placeholder="👉"
          className="input  border border-red w-full max-w-xs"
        />
        <button className="btn  m-1 bg-red border border-light text-light">
          Enter
        </button>
        <div className="border border-red rounded-md text-center p-3 m-10 bg-dark">
          <p className="mt-3">Du kennst deinen Maximalpuls nicht?</p>
          <p>Kein Problem</p>
          <Link
            className="btn w-20 m-3 bg-red border border-light text-light"
            href=""
          >
            hier
          </Link>
          <p>findest du Informationen.</p>
        </div>
        <div className="mt-20 text-center">
          <Link
            className="btn mx-auto m-3 bg-red border border-light text-light"
            href="/impressum"
          >
            Impressum
          </Link>
          <Link
            className="btn m-3 bg-red border border-light text-light"
            href="/agb"
          >
            AGB
          </Link>
          <Link
            className="btn m-3 bg-red border border-light text-light"
            href="/datenschutz"
          >
            Datenschutz
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
