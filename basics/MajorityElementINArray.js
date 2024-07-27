let arr = [];
// Expected output: No majority element found

let count;
majValue = 0;
for (let i = 0; i < arr.length; i++) {
  count = 1;
  for (j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      count = count + 1;
    }
  }
  // console.log(count,'count')
  if (count > arr.length / 2) {
    majValue = arr[i];
    console.log("count", count);
  }
}
console.log(majValue, "majValue");
// console.log(8/2)
