export const useActivitiesByDay = (currentWeekSessions) => {
  const activitiesByDay = currentWeekSessions.reduce((acc, session) => {
    const { day, activity, description, sessionParts } = session;
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push([activity, description, sessionParts]);
    return acc;
  }, {});

  return activitiesByDay;
};
