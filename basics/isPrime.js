let num = 11;
let flag = true;
for (i = 2; i < num; i++) {
  if (num % i == 0) {
    console.log("the number is not prime");
    flag = false;
    break;
  }
}
if (flag) console.log("the number is prime");
