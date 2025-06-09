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