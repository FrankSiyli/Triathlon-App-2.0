import { selectedDayState } from "@/app/recoil/atoms/planBuilder/selectedDayState";
import { useState } from "react";
import { useRecoilState } from "recoil";

export const useOpenDay = () => {
  const [openDay, setOpenDay] = useState(null);
  const [selectedDay, setSelectedDay] = useRecoilState(selectedDayState);

  const toggleDay = (dayIndex) => {
    setOpenDay(dayIndex === openDay ? null : dayIndex);
    setSelectedDay(dayIndex);
  };

  console.log("useopenday selectedday", selectedDay);

  return {
    openDay,
    toggleDay,
  };
};
