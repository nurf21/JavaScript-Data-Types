// Turn the object into JSON and back
// ==================================================

let user = {
  name: "John Smith",
  age: 35
};

// 1) Turn object into a JSON string
let json = JSON.stringify(user);

// 2) Read JSON back into an object
let copy = JSON.parse(json);

console.log(json);
console.log(copy);