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