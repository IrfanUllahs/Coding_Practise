let value = "aba";
value = value.toString();
i = 0;
j = value.length - 1;
let flag = true;
while (i <= j) {
  if (value[i] != value[j]) {
    console.log("not palandrome", i, j);
    flag = false;
    break;
  }
  j--;
  i++;
}
if (flag) {
  console.log("they are palandrome");
}
