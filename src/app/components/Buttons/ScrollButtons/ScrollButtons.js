import { useState } from "react";

function ScrollButtons() {
  const handleBackClick = () => {
    if (currentWeek > 1) {
      setCurrentWeek(currentWeek - 1);
    }
  };

  const handleNextClick = () => {
    if (currentWeek < numberOfPlanWeeks.length) {
      setCurrentWeek(currentWeek + 1);
    }
  };
  return <></>;
}

export default ScrollButtons;
