function ucFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(ucFirst("john"));
console.log(ucFirst("a"));
console.log(ucFirst(""));
console.log(ucFirst("hello"));
console.log(ucFirst("123"));   