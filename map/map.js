// Iterable keys
// ==================================================

let map = new Map();
map.set("name", "John");

let keys = Array.from(map.keys());
keys.push("more");

console.log(keys);

// Store read dates
// ==================================================

// Create a WeakMap to store the read date for each message.
const messageReadDates = new WeakMap();

function markAsRead(message) {
  // Mark the message as read by setting the current date.
  messageReadDates.set(message, new Date());
}

function getReadDate(message) {
  // Retrieve the read date of the message.
  return messageReadDates.get(message);
}

// Example usage:
let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

// Mark the first message as read.
markAsRead(messages[0]);

console.log(getReadDate(messages[0]));