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

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' :
    str;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));
console.log(truncate("Hello", 5));
console.log(truncate("Hello", 4));
console.log(truncate("A", 1));

function extractCurrencyValue(str) {
  return +str.slice(1);
}

console.log(extractCurrencyValue('$120'));
console.log(extractCurrencyValue('$0'));
console.log(extractCurrencyValue('$5.99'));
console.log(extractCurrencyValue('$120.50'));
console.log(extractCurrencyValue('$-100'));