import React from "react";

const updates = [
  {
    name: "Tage werden grün markiert wenn alle Tageseinheiten absolviert wurden",
    date: "2.11.23",
  },
  {
    name: "Einheiten können als absolviert markiert und gespeichert werden",
    date: "1.11.23",
  },
  {
    name: "einen Einsteiger*innen-Triathlonplan hinzugefügt",
    date: "30.10.23",
  },
  {
    name: "zwei Aufbau-Schwimmpläne hinzugefügt",
    date: "28.10.23",
  },
  {
    name: "die Gesamtplanwochen werden in der Planübersicht angezeigt",
    date: "27.10.23",
  },
  {
    name: "drei 10km Laufpläne hinzugefügt",
    date: "25.10.23",
  },
];

const AppUpdates = ({ setShowProfil }) => {
  const handleBackClick = () => {
    setShowProfil();
  };
  return (
    <>
      <div className="w-full max-w-xl mx-auto">
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
      <p className="mx-auto w-40 text-center -mt-10">App-updates</p>
      <div className="mt-10 mb-20">
        {updates.map((update, index) => (
          <div
            key={index}
            className="shadow-md p-2 rounded-md  max-w-xl w-full"
          >
            <div className="text-sm">{update.date}</div>
            <div className=" ">{update.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AppUpdates;
