import React from "react";

function Impressum({ setShowProfil }) {
  const handleBackClick = () => {
    setShowProfil();
  };

  return (
    <div>
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

      <div className="flex min-h-screen max-w-xl flex-col mx-auto p-4 text-center">
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

export default Impressum;