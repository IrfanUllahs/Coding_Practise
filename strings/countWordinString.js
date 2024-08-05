function numberOfWords(str) {
  let count = 0;
  let check = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " && !check) {
      count++;
      check = true;
    } else if (str[i] === " ") {
      check = false;
    }
  }

  return count;
}

const str = "Welcome to the Geeksforgeeks";
console.log("Word count:", numberOfWords(str));
("https://www.geeksforgeeks.org/javascript-program-to-count-words-of-a-string/#javascript-program-to-count-words-of-a-string-using-for-loop");
