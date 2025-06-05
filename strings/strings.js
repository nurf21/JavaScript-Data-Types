function ucFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(ucFirst("john"));
console.log(ucFirst("a"));
console.log(ucFirst(""));
console.log(ucFirst("hello"));
console.log(ucFirst("123"));

function checkSpam(str) {
  const lowerStr = str.toLowerCase();
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));
console.log(checkSpam('VIAGRA'));
console.log(checkSpam('xXx'));
console.log(checkSpam(''));                