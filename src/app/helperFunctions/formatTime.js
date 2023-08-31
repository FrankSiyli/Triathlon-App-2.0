export function formatTime(seconds) {
  const totalMs = seconds * 1000;
  const result = new Date(totalMs).toISOString().slice(11, 19);

  return result;
}
