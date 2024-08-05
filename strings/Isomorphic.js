var str1 = "aack";
var str2 = "xxyy";
let arr = [];
for (let i = 0; i < str2.length; i++) {
  let value1 = arr.find((item) => item.val1 == str1[i]);
  if (value1) {
    if (!(value1.val2 == str2[i])) {
      console.log(value1, str2[i], value1.val2 == str2[i]);
      console.log("not isomorphic of each other 1");
      break;
    }
  } else if (arr.find((item) => item.val2 == str2[i])) {
    let value2 = arr.find((item) => item.val2 == str2[i]);
    if (value2) {
      if (!(value2.val1 == str1[i])) {
        console.log("not isomorphic 2");
        break;
      }
    }
  } else {
    arr.push({ val1: str1[i], val2: str2[i] });
  }
}
console.log(arr);

("https://www.geeksforgeeks.org/check-if-two-given-strings-are-isomorphic-to-each-other/");
