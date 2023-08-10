import { useState } from "react";

export const useCurrentWeek = (numberOfPlanWeeks) => {
  const [currentWeek, setCurrentWeek] = useState(1);

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

  return {
    currentWeek,
    handleBackClick,
    handleNextClick,
  };
};
