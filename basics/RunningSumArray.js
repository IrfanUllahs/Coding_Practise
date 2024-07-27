let arr=[1]
let accArr=[]
for(i=0; i<arr.length; i++){
    if(i==0){
        accArr.push(arr[i])
        continue;
    }
    let sum=0;
    for(j=0; j<=i; j++){
        sum+=arr[j]
         
    }
    accArr.push(sum)
}
console.log(accArr)
