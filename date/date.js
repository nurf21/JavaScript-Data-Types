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