import { useState } from "react";

export const useCurrentWeek = (homepagePlan, numberOfPlanWeeks, toggleDay) => {
  const [currentWeek, setCurrentWeek] = useState(0);

  const handleBackClick = () => {
    if (homepagePlan && currentWeek > 0) {
      setCurrentWeek(currentWeek - 1);
      toggleDay(-1);
    }
  };

  const handleNextClick = () => {
    if (homepagePlan && currentWeek + 1 < numberOfPlanWeeks) {
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
