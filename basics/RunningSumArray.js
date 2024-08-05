let arr = [1, 2, 3, 4, 6];
let accArr = [];
// let sum = 0;
for (i = 0; i < arr.length; i++) {
  if (i == 0) {
    accArr.push(arr[i]);
    // sum = arr[i];
    continue;
  }
  // else {
  //     sum += arr[i];
  //     accArr.push(sum);
  //   }

  let sum = 0;
  for (j = 0; j <= i; j++) {
    sum += arr[j];
  }
  accArr.push(sum);
}
console.log(accArr);
