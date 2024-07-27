let arr = [1, 2, 3, 4, 5];
let newArr = [];
const irfan = () => {
  let temp1 = arr[0];
  let temp2 = 0;
  arr[0] = arr[arr.length - 1];
  // arr[arr.length-1]=arr[arr.length-2]
  for (let i = 1; i < arr.length; i++) {
    temp2 = arr[i];
    arr[i] = temp1;
    temp1 = temp2;
  }
  console.log(arr);
};
irfan();
