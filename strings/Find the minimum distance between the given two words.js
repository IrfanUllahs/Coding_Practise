let str = "geeks for geeks contribute practise ali practise geeks";
let word1 = "geeks";
let word2 = "practise";
let wordArray = str.split(" ");
let start = 0;
let end = 0;
for (let i = 0; i < wordArray.length; i++) {
  if (word1 == wordArray[i]) {
    start = i;
  }
  if (word2 == wordArray[i]) {
    end = i;
  }
}
console.log(wordArray);
console.log("the distance is ==> ", Math.abs(end - start));
("https://www.geeksforgeeks.org/find-the-minimum-distance-between-the-given-two-words/");
