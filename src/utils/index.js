// Generates unique id of specified length (default 32).
export function getUniqueId(length = 32) {
  const now = Date.now().toString();
  let uniqueId = "";
  const chars =
    "ABCDEFGHIJUKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
  const charsLength = chars.length;

  for (let index = 0; index < length - now.length; index++) {
    uniqueId += chars.charAt(Math.floor(Math.random() * charsLength));
  }
  return uniqueId + Date.now();
}

export function getDate(unixTime) {
  let dateObj = new Date(unixTime);
  return dateObj.toLocaleString([], {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}
