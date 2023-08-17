export const calculateTotalDuration = () =>
  sessionSections[sectionType].reduce(
    (sum, section) =>
      sum +
      section.exercises.reduce(
        (totalDuration, exercise) =>
          totalDuration + section.multiplier * exercise.duration,
        0
      ),
    0
  );

export const totalWarmUpDuration = (sessionSections) =>
  calculateTotalDuration("warmUp", sessionSections);

export const totalMainDuration = (sessionSections) =>
  calculateTotalDuration("main", sessionSections);

export const totalCoolDownDuration = (sessionSections) =>
  calculateTotalDuration("coolDown", sessionSections);
