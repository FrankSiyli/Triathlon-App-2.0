import { useState } from "react";

export const useCurrentWeek = (numberOfPlanWeeks, toggleDay) => {
  const [currentWeek, setCurrentWeek] = useState(1);

  const handleBackClick = () => {
    if (currentWeek > 1) {
      setCurrentWeek(currentWeek - 1);
      toggleDay(-1);
    }
  };

  const handleNextClick = () => {
    if (currentWeek < numberOfPlanWeeks) {
      setCurrentWeek(currentWeek + 1);
      toggleDay(-1);
    }
  };

  return {
    currentWeek,
    handleBackClick,
    handleNextClick,
  };
};
