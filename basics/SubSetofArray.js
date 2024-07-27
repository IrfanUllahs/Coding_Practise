let arr = [1, 9, 3, 10, 4, 20, 2];
let arr1 = [1, 9, 3, 10, 4, 20, 2];
// Expected output: "subset"

let isSubset = true;

for (let i = 0; i < arr1.length; i++) {
  if (!arr.includes(arr1[i])) {
    console.log("not a subset");
    isSubset = false;
    break;
  }
}

if (isSubset) {
  console.log("subset");
}
