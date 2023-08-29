export const useActivitiesByDay = (currentWeekSessions) => {
  if (!Array.isArray(currentWeekSessions)) {
    return [];
  }

  const activitiesByDay = currentWeekSessions.reduce((acc, session) => {
    const { day, activity, description, sessionParts } = session;
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push([activity, description, sessionParts]);
    return acc;
  }, []);

  return Object.entries(activitiesByDay);
};
