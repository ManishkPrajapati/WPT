let arr = [50,42,63,12,10,25]
// arr.sort((n1,n2)=>{
//     if(n1>n2) return 1;
//     if(n1<n2) return -1;
//     return 0;
// })
console.log(arr)

let arr1 = [{fname:'supriya',age:20,marks:68},{fname:'trisha',age:22,marks:82},
{fname:'swamini',age:19,marks:78},{fname:'sharvari',age:23,marks:66}]
// console.log(arr1)
// arr1.sort((n1,n2)=>{
//     if(n1.marks>n2.marks) return 1;
//     if(n1.marks<n2.marks) return -1;
//     else return 0;
// })
// console.log(arr1)

let square = arr.map((e)=>{return e*e})
console.log(square)

let n = arr1.map((nam) =>{return nam.fname})
console.log(n)
let even = arr1.map((evenp,i)=>{
    if(i%2==0)
    return evenp.fname;
})
console.log(even)