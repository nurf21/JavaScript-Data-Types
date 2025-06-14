// Array operations
// ==================================================

// Step 1: Create initial array
let styles = ["Jazz", "Blues"];
console.log(styles);

// Step 2: Append "Rock-n-Roll" to the end
styles.push("Rock-n-Roll");
console.log(styles);

// Step 3: Replace middle value with "Classics"
const middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Classics";
console.log(styles);

// Step 4: Strip off first value and show it
const firstValue = styles.shift();
console.log(firstValue);
console.log(styles);

// Step 5: Prepend "Rap" and "Reggae"
styles.unshift("Rap", "Reggae");
console.log(styles);

// A maximal subarray
// ==================================================

function getMaxSubSum(arr) {
  let maxSum = 0;
  let currentSum = 0;

  for (let num of arr) {
    currentSum += num;
    if (currentSum > maxSum) maxSum = currentSum;
    if (currentSum < 0) currentSum = 0;
  }

  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
console.log(getMaxSubSum([-1, -2, -3]));

// Translate border-left-width to borderLeftWidth
// ==================================================

function camelize(str) {
  return str
    .split('-')              // Split the string by dashes
    .map((word, index) =>    // Process each word
      index === 0
        ? word               // Leave the first word unchanged
        : word.charAt(0).toUpperCase() + word.slice(1)  // Capitalize first letter of other words
    )
    .join('');               // Join words back together
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
console.log(camelize("a-b-c"));
console.log(camelize("test"));

// Filter range
// ==================================================

function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <= b);
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

console.log(filtered);
console.log(arr);
console.log(filterRange([10, 20, 30, 40], 15, 35));
console.log(filterRange([1, 2, 3, 4, 5], 3, 3));
console.log(filterRange(['apple', 'banana', 'cherry'], 'a', 'c'));

// Filter range "in place"
// ==================================================

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--; // Adjust index after removal
    }
  }
}

// Test 1: Basic functionality
let arr1 = [5, 3, 8, 1];
filterRangeInPlace(arr1, 1, 4);
console.log(arr1);

// Test 2: No elements removed
let arr2 = [2, 3, 4];
filterRangeInPlace(arr2, 1, 5);
console.log(arr2);

// Test 3: All elements removed
let arr3 = [10, 20, 30];
filterRangeInPlace(arr3, 1, 5);
console.log(arr3);

// Test 4: Boundary values included
let arr4 = [1, 2, 3, 4, 5];
filterRangeInPlace(arr4, 2, 4);
console.log(arr4);

// Test 5: Negative numbers
let arr5 = [-5, -3, 0, 3, 5];
filterRangeInPlace(arr5, -4, 4);
console.log(arr5);

// Sort in decreasing order
// ==================================================

let arr6 = [5, 2, 1, -10, 8];
arr6.sort((a, b) => b - a);
console.log(arr6);

// Copy and sort array
// ==================================================

function copySorted(arr) {
  return arr.slice().sort();
}

let arr7 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr7);

console.log(sorted);
console.log(arr7);

// Create an extendable calculator
// ==================================================

function Calculator() {
  // Store methods in an object: operator => function
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b
  };

  // Calculate method to parse and evaluate expressions
  this.calculate = function (str) {
    // Split string into parts
    const parts = str.split(' ');
    if (parts.length !== 3) throw new Error("Invalid expression format");

    const a = +parts[0];
    const op = parts[1];
    const b = +parts[2];

    // Validate numbers and operator
    if (isNaN(a) || isNaN(b)) throw new Error("Invalid numbers");
    if (!this.methods[op]) throw new Error(`Unknown operator: ${op}`);

    // Perform calculation
    return this.methods[op](a, b);
  };

  // Add new methods to the calculator
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

// Basic calculator with + and -
let calc = new Calculator();
console.log(calc.calculate("3 + 7"));
console.log(calc.calculate("10 - 5"));

// Extended calculator with *, /, and **
let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => Math.pow(a, b));

console.log(powerCalc.calculate("2 ** 3"));
console.log(powerCalc.calculate("10 / 2"));
console.log(powerCalc.calculate("3 * 4"));

// Map to names
// ==================================================

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map(user => user.name);

console.log(names);

// Map to objects
// ==================================================

let johnSmith = { name: "John", surname: "Smith", id: 1 };
let peteHunt = { name: "Pete", surname: "Hunt", id: 2 };
let maryKey = { name: "Mary", surname: "Key", id: 3 };

let users2 = [johnSmith, peteHunt, maryKey];

let usersMapped = users2.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);

// Sort users by age
// ==================================================

function sortByAge(users) {
  users.sort((a, b) => a.age - b.age);
}

let johnAge = { name: "John", age: 25 };
let peteAge = { name: "Pete", age: 30 };
let maryAge = { name: "Mary", age: 28 };

let arrUsers = [peteAge, johnAge, maryAge];

sortByAge(arrUsers);

console.log(arrUsers[0].name);
console.log(arrUsers[1].name);
console.log(arrUsers[2].name);

// Shuffle an array
// ==================================================

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let arr8 = [1, 2, 3];
shuffle(arr8);
console.log(arr8);

shuffle(arr8);
console.log(arr8);

// Get average age
// ==================================================

function getAverageAge(users) {
  return users.reduce((sum, user) => sum + user.age, 0) / users.length;
}

let arr9 = [johnAge, peteAge, maryAge];

console.log(getAverageAge(arr9));

// Filter unique array members
// ==================================================

function unique(arr) {
  return Array.from(new Set(arr));
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings));

// Create keyed object from array
// ==================================================

function groupById(arr) {
  return arr.reduce((obj, user) => {
    obj[user.id] = user;
    return obj;
  }, {});
}

let users3 = [
  { id: 'john', name: "John Smith", age: 20 },
  { id: 'ann', name: "Ann Smith", age: 24 },
  { id: 'pete', name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users3);

console.log(usersById)