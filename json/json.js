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

// Exclude backreferences
// ==================================================

let room = { number: 23 };

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

let json2 = JSON.stringify(meetup, function replacer(key, value) {
  // the very first call has key==="" and value==meetup (the root),
  // so we test key to avoid dropping the root itself.
  if (key !== "" && value === meetup) {
    return undefined; // skip any property whose value is meetup
  }
  return value;       // otherwise keep it
});

console.log(json2);