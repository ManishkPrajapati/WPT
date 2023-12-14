let arr=[12,35,45,34]

let callback = ((arr,element,ind)=>{
    console.log(ind,element)
})
// console.log(callback)
arr.forEach(callback)