function findFirstNonRepeating(arr) {
  let n = arr.length;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    let flag = false;
    for (let j = 0; j < n; j++) {
      if (arr[i] === arr[j] && i != j) {
        // console.log('index',j,i);
        flag = true;
        break;
      }
    }

    if (!flag) {
      // console.log(flag)
      return arr[i];
    }
  }

  return null; // If no non-repeating element is found
}

// Test cases
let arr1 = [1, 2, 2, 1, 3, 4, 3];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let arr3 = [10, 10, 10];
let arr4 = [1, 1, 2, 2, 3, 3, 4];

console.log(findFirstNonRepeating(arr1)); // Output: 4
console.log(findFirstNonRepeating(arr2)); // Output: 1
console.log(findFirstNonRepeating(arr3)); // Output: null
console.log(findFirstNonRepeating(arr4)); // Output: 4
