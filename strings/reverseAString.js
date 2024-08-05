Input = "geeks's quiz practice code";
// wordArray = Array.from(Input);
wordArray = Input.split(" ");
let start = 0;
let end = wordArray.length - 1;
while (start < end) {
  let temp = wordArray[end];
  wordArray[end] = wordArray[start];
  wordArray[start] = temp;
  start++;
  end--;
}

console.log(wordArray.toString().replace(/,/g, " "));
console.log(wordArray.join(" "));

("https://www.geeksforgeeks.org/reverse-words-in-a-given-string/");
