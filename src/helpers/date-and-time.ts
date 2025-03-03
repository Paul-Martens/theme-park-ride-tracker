/**
 * Returns today's date in 'yyyy-mm-dd' format.
 */
function getCurrentDate() {
  const today = new Date();

  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

/**
 * Returns a timestamp's time in 'hh:mm' format.
 * @param {string} timestamp - Test
 */
function getTimeFromTimestamp(timestamp: string) {
  const date = new Date(timestamp);

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes}`;
}

export { getCurrentDate, getTimeFromTimestamp };
