import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div>
      <Link
        className="btn  m-3 bg-third border border-first text-first"
        href="/profil"
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
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </Link>
      <div className="flex min-h-screen mb-20 flex-col items-center p-4 text-center">
        <p>Frank Siyli</p>
        <p>Siyli endurance coaching</p>
        <p>Vogt Groth Weg 45a</p>
        <p>22609 Hamburg</p>
        <p>Tel.: 016099159478</p>
        <p>E-Mail: info@siyli-endurance-coaching.com</p>
        <p>
          USt. wird nicht ausgewiesen, da der Verkäufer/ die Verkäuferin
          Kleinunternehmer:in im Sinne des UStG ist.
        </p>
        <p>
          Plattform der EU-Kommission zur Online-Streitbeilegung:
          https://ec.europa.eu/odr
        </p>
        <p>
          Ich bin zur Teilnahme an einem Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
        </p>
      </div>
    </div>
  );
}

export default Page;
