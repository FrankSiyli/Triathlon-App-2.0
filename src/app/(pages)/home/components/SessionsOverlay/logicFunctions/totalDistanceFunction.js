export const calculateTotalDistance = (sectionType, sessionSections) =>
  sessionSections[sectionType].reduce(
    (sum, section) =>
      sum +
      section.exercises.reduce(
        (totalDistance, exercise) =>
          totalDistance + section.multiplier * exercise.distance,
        0
      ),
    0
  );

export const totalWarmUpDistance = (sessionSections) =>
  calculateTotalDistance("warmUp", sessionSections);

export const totalMainDistance = (sessionSections) =>
  calculateTotalDistance("main", sessionSections);

export const totalCoolDownDistance = (sessionSections) =>
  calculateTotalDistance("coolDown", sessionSections);
