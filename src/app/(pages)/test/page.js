"use client";
import React, { useState } from "react";

function TestPage() {
  const [openOverlayIndex, setOpenOverlayIndex] = useState(-1);

  const handleToggleOverlay = (index) => {
    if (openOverlayIndex === index) {
      setOpenOverlayIndex(-1); // Close the overlay if already open
    } else {
      setOpenOverlayIndex(index); // Open the clicked overlay
    }
  };

  return (
    <>
      {testArray.map((item, index) => (
        <div key={index}>
          <button
            className="btn btn-sm m-5 flex flex-col"
            onClick={() => handleToggleOverlay(index)}
          >
            Day: {item.day}
          </button>

          {openOverlayIndex === index && (
            <button
              onClick={() => handleToggleOverlay(index)}
              className="btn btn-secondary mx-5"
            >
              Second Value: {item.secondValue}
            </button>
          )}
        </div>
      ))}
    </>
  );
}

const testArray = [
  {
    day: "montag",
    secondValue: "montag",
  },
  {
    day: "dienstag",
    secondValue: "dienstag",
  },
  {
    day: "mittwoch",
    secondValue: "mittwoch",
  },
  {
    day: "donnerstag",
    secondValue: "donnerstag",
  },
  {
    day: "freitag",
    secondValue: "freitag",
  },
];

export default TestPage;
