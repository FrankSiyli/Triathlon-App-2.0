export function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

export function tresholdsAndPaces() {
  const bikeTreshold = 150;
  const runTreshold = 160;
  const swim100mPace = 120;

  return {
    bikeTreshold,
    runTreshold,
    swim100mPace,
  };
}
