import { selectedDayState } from "@/app/recoil/atoms/planBuilder/selectedDayState";
import { useState } from "react";
import { useRecoilState } from "recoil";

export const useOpenNewPlanDay = () => {
  const [openDay, setOpenDay] = useState(null);
  const [selectedDay, setSelectedDay] = useRecoilState(selectedDayState);

  const toggleDay = (dayIndex) => {
    setOpenDay(dayIndex === openDay ? null : dayIndex);
    setSelectedDay(dayIndex);
  };

  return {
    openDay,
    toggleDay,
  };
};
