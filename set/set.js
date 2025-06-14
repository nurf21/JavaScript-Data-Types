// Filter unique array members
// ==================================================

function unique(arr) {
  return [...new Set(arr)];
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));
// Numbers
console.log(unique([1, 2, 2, 3]));

// Mixed types
console.log(unique([1, "1", null, undefined, NaN, NaN]));

// Objects (different instances are considered unique)
const obj = {};
console.log(unique([obj, obj, {}, {}]));

// Filter anagrams
// ==================================================

function aclean(arr) {
  // Create a Map to hold a canonical representation of each word
  const map = new Map();

  for (let word of arr) {
    // Get a "canonical" key: lowercase the word, split to letters, sort them, then join back
    let key = word.toLowerCase().split('').sort().join('');
    // In the Map, store only one of the anagrams for that key
    if (!map.has(key)) {
      map.set(key, word);
    }
  }

  // Return only one example for each set of anagrams.
  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr));

// Store "unread" flags
// ==================================================

// Create a WeakSet to store read message objects.
const readMessages = new WeakSet();

// When a message is marked as read:
function markAsRead(message) {
  readMessages.add(message);
}

// To check if a message has been read:
function isRead(message) {
  return readMessages.has(message);
}

// Example usage:
let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

markAsRead(messages[0]);

console.log(isRead(messages[0]));
console.log(isRead(messages[1]));