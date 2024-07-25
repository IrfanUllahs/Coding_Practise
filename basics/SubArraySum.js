let arr = [15, 2, 4, 8, 9, 5, 10, 23];
let n = arr.length;
let sum = 23;

const find = () => {
  for (let i = 0; i < n; i++) {
    let accum = 0;
    accum = accum + arr[i];
    for (let j = i + 1; j < n; j++) {
      accum = accum + arr[j];
      console.log(accum, arr[i], arr[j]);
      if (accum == sum) {
        i++;
        j++;
        return {
          i,
          j,
        };
      }
      if (accum > sum) {
        break;
      }
    }
  }
  return 0;
};
let cal = find();
console.log(cal);
