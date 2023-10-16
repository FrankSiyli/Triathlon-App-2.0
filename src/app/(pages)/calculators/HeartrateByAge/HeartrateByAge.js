import React from "react";
import "../../../globals.css";
import MenCalculatorByAge from "./components/MenCalculatorByAge";
import WomenCalculatorByAge from "./components/WomenCalculatorByAge";

function HeartrateByAge({ setShowProfil }) {
  const handleBackClick = () => {
    setShowProfil(true);
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
      <div className="min-h-screen mb-60">
        <div className="w-11/12 border border-first/50 linear-background rounded-md p-4 mb-5 mx-auto max-w-xl  text-center">
          <p>
            Wenn du am Anfang deiner sportlichen Entwicklung stehst oder nach
            einer Pause wieder einsteigen möchtest kannst du auch die Formeln
            benutzen um einen Richtwert zu erhalten.
          </p>
        </div>

        <div className="relative max-w-xl">
          <WomenCalculatorByAge />
          <MenCalculatorByAge />

          <div className="mt-20 w-11/12 border border-first/50 linear-background max-w-xl mx-5 rounded-md p-4  text-center">
            <p>
              Einem HRmax Test sollten mehrere Monate mit strukturiertem
              Training vorangehen.
            </p>
            <br />
            <p>
              Falls du in den letzten 6 Monaten bei einem Event einen All OUT
              Zielsprint angesetzt hast kannst du dir diese Puls-Werte gern mal
              genauer anschauen.
            </p>
            <br />
            <p>
              Der sicherste Weg um genaue Werte zu erhalten bleibt eine
              professionelle Leistungsdiagnostik.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeartrateByAge;
