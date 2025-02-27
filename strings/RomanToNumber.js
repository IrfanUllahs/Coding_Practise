// This function returns the value of a Roman symbol
function value(r) {
  if (r === "I") return 1;
  if (r === "V") return 5;
  if (r === "X") return 10;
  if (r === "L") return 50;
  if (r === "C") return 100;
  if (r === "D") return 500;
  if (r === "M") return 1000;
  return -1;
}

// Returns the decimal value of a Roman numeral
function romanToDecimal(str) {
  let res = 0; // Initialize the result
  for (let i = 0; i < str.length; i++) {
    // Get the value of the current symbol
    let s1 = value(str[i]);
    if (i + 1 < str.length) {
      // Get the value of the next symbol
      let s2 = value(str[i + 1]);
      if (s1 >= s2) {
        // If the current value is greater
        // or equal, add it to the result
        res += s1;
      } else {
        // Else, add the difference and skip
        // the next symbol
        res += s2 - s1;
        i++;
      }
    } else {
      // Add the last symbol to the result
      res += s1;
    }
  }
  return res;
}

console.log(romanToDecimal("IX"));

("https://www.geeksforgeeks.org/converting-roman-numerals-decimal-lying-1-3999/");
