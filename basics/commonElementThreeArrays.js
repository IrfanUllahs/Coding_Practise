let A = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
let B = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let C = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let smLength = 0;
if (A.length < B.length && A.length < C.length) {
  smLength = A.length;
} else if (B.length < A.length && B.length < C.length) {
  smLength = B.length;
} else {
  smLength = C.length;
}
let arrCom = [];
for (i = 0; i < smLength; i++) {
  if (A.includes(C[i]) && B.includes(C[i]) && !arrCom.includes[C[i]]) {
    arrCom.push(C[i]);
  }
}
console.log(arrCom);
