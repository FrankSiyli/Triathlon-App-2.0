const calculateSectionDuration = (sections) => {
  let totalDuration = 0;

  sections?.forEach((section) => {
    section.exercises.forEach((exercise) => {
      if (exercise.duration > 0) {
        totalDuration += exercise.duration * section.multiplier;
      }
    });
  });

  return totalDuration;
};

const calculateTotalDuration = (singleActivity) => {
  const sessionSections = singleActivity[2];

  const warmUpDuration = calculateSectionDuration(sessionSections.warmUp);
  const mainDuration = calculateSectionDuration(sessionSections.main);
  const coolDownDuration = calculateSectionDuration(sessionSections.coolDown);

  const totalDuration = warmUpDuration + mainDuration + coolDownDuration;
  return totalDuration;
};

export default calculateTotalDuration;
