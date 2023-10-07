const calculateSectionDistance = (sections) => {
  let totalDistance = 0;

  sections?.forEach((section) => {
    section.exercises.forEach((exercise) => {
      if (exercise.distance > 0) {
        totalDistance += exercise.distance * section.multiplier;
      }
    });
  });

  return totalDistance;
};

const calculateTotalDistance = (singleActivity) => {
  const sessionSections = singleActivity[2];

  const warmUpDistance = calculateSectionDistance(sessionSections.warmUp);
  const mainDistance = calculateSectionDistance(sessionSections.main);
  const coolDownDistance = calculateSectionDistance(sessionSections.coolDown);

  const totalDistance = warmUpDistance + mainDistance + coolDownDistance;
  return totalDistance;
};

export default calculateTotalDistance;
