let num1 = 60;
let num2 = 36;
let HCF = false;
let highestNum = num1 < num2 ? num1 : num2;
for (i = 1; i <= highestNum; i++) {
  if (num1 % i == 0 && num2 % i == 0) {
    if (HCF < i) {
      HCF = i;
    }
  }
}
if (HCF) {
  console.log(HCF);
} else {
  console.log("no HCF");
}
