import { useState } from "react";

export const useOpenDay = () => {
  const [openDay, setOpenDay] = useState(-1);

  const toggleDay = (dayIndex) => {
    setOpenDay((prevOpenDay) => (prevOpenDay === dayIndex ? -1 : dayIndex));
  };

  return {
    openDay,
    toggleDay,
  };
};
