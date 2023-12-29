import { selectedWeekState } from "@/app/recoil/atoms/planBuilder/selectedWeekState";
import { useState } from "react";
import { useRecoilState } from "recoil";

export const useCurrentNewPlanWeek = (
  homepagePlan,
  numberOfPlanWeeks,
  toggleDay
) => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const [selectedWeek, setSelectedWeek] = useRecoilState(selectedWeekState);

  const handlePreviousWeekClick = () => {
    if (homepagePlan && currentWeek > 0) {
      setCurrentWeek(currentWeek - 1);
      toggleDay(-1);
      setSelectedWeek(currentWeek - 1);
    }
  };

  const handleNextWeekClick = () => {
    if (homepagePlan && currentWeek + 1 < numberOfPlanWeeks) {
      setCurrentWeek(currentWeek + 1);
      toggleDay(-1);
      setSelectedWeek(currentWeek + 1);
    }
  };

  return {
    currentWeek,
    handlePreviousWeekClick,
    handleNextWeekClick,
  };
};
