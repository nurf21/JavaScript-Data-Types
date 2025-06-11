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