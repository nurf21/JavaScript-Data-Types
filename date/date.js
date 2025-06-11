// Create a date
// ==================================================

let date = new Date(2012, 1, 20, 3, 12);
console.log(date);

// Show a weekday
// ==================================================

function getWeekDay(date) {
  const days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  return days[date.getDay()];
}

// Example:
let date2 = new Date(2012, 0, 3);
console.log(getWeekDay(date2));

// European weekday
// ==================================================

function getLocalDay(date) {
  let day = date.getDay();
  return day === 0 ? 7 : day;
}

// Example usage:
let date3 = new Date(2012, 0, 3);
console.log(getLocalDay(date3));

// Which day of month was many days ago?
// ==================================================

function getDateAgo(date, days) {
  // Create a copy of the date so as not to modify the original.
  let dateCopy = new Date(date);
  // Subtract "days" from the day number.
  dateCopy.setDate(date.getDate() - days);
  // Return the day of the month.
  return dateCopy.getDate();
}

let date4 = new Date(2015, 0, 2);
console.log(getDateAgo(date4, 1));
console.log(getDateAgo(date4, 2));
console.log(getDateAgo(date4, 365));

// Last day of month?
// ==================================================

function getLastDayOfMonth(year, month) {
  // month + 1 is next month, setting day to 0 gives us the last day of the current month.
  return new Date(year, month + 1, 0).getDate();
}

console.log(getLastDayOfMonth(2012, 1));

// How many seconds have passed today?
// ==================================================

function getSecondsToday() {
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.floor((now - todayStart) / 1000);
}

console.log(getSecondsToday());

// How many seconds till tomorrow?
// ==================================================

function getSecondsToTomorrow() {
  const now = new Date();
  // Create a date object for tomorrow at midnight.
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  // Calculate the difference in seconds.
  return Math.floor((tomorrow - now) / 1000);
}

console.log(getSecondsToTomorrow());

// Format the relative date
// ==================================================

function formatDate(date) {
  const now = new Date();
  const diff = now - date; // difference in milliseconds

  // Less than 1 second
  if (diff < 1000) {
    return "right now";
  }
  // Less than 1 minute -> seconds ago
  else if (diff < 60000) {
    const seconds = Math.floor(diff / 1000);
    return `${seconds} sec. ago`;
  }
  // Less than 1 hour -> minutes ago
  else if (diff < 3600000) {
    const minutes = Math.floor(diff / 60000);
    return `${minutes} min. ago`;
  }
  // Else, full date in "DD.MM.YY HH:mm" format.
  else {
    let day = date.getDate();
    let month = date.getMonth() + 1; // Months are zero-indexed!
    let year = date.getFullYear() % 100; // Two-digit year, example: 2016 -> 16
    let hours = date.getHours();
    let minutes = date.getMinutes();

    // Format each part as 2-digit values:
    day = String(day).padStart(2, "0");
    month = String(month).padStart(2, "0");
    year = String(year).padStart(2, "0");
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");

    return `${day}.${month}.${year} ${hours}:${minutes}`;
  }
}

// Example usage:
console.log(formatDate(new Date(new Date - 1)));
console.log(formatDate(new Date(new Date - 30 * 1000)));
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));

// For a date like yesterday:
console.log(formatDate(new Date(new Date - 86400 * 1000)));