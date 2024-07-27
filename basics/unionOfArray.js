let arr1 = [1, 2, 3, 4];
let arr2 = [2, 3, 4, 5, 6, 7];
let arr3 = [...arr1, ...arr2];
let newarray = [];
newarray = arr3.filter((value, index) => {
  // return arr3.indexOf(value) == index;
  return newarray.includes(value) ? false : newarray.push(value);
});

console.log(arr3);

console.log(newarray);
console.log(newarray.length);
