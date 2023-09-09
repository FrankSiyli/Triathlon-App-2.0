import { useState } from "react";

export const useOpenDay = () => {
  const [openDay, setOpenDay] = useState(null);

  const toggleDay = (dayIndex) => {
    setOpenDay(dayIndex === openDay ? -1 : dayIndex);
  };

  return {
    openDay,
    toggleDay,
  };
};
