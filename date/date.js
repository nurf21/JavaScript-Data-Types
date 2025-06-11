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