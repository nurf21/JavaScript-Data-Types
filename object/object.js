// Sum the properties
// ==================================================

function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(sumSalaries(salaries));

// Count properties
// ==================================================

function count(obj) {
  return Object.keys(obj).length;
}

let user = {
  name: 'John',
  age: 30
};

console.log(count(user));

// Destructuring assignment
// ==================================================

let user2 = { name: "John", years: 30 };

let { name, years: age, isAdmin = false } = user2;

console.log(name);
console.log(age);
console.log(isAdmin);

// The maximal salary
// ==================================================

function topSalary(salaries) {
  let maxSalary = 0;
  let topPerson = null;

  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      topPerson = name;
    }
  }

  return topPerson;
}

// Example usage:
let salaries2 = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(topSalary(salaries2));