let num = -456;
console.log(num);

let ReverseNum = 0;
while (num) {
  ReverseNum = ReverseNum * 10 + (num % 10);
  num = Math.trunc(num / 10);
}
console.log(ReverseNum);
