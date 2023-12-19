function Addmake(x){
    return function(y){
        return x+y;
    }
}

const add1 = Addmake(5)
const add2 = Addmake(50)
const add3 = Addmake(100)

// console.log(add1(5))
// console.log(add2(15))
// console.log(add1(10),add3(20))

function countFactory(val){
    let cnt = val
    function increment(){
        return ++cnt;
    }
    return increment;
}

let a = countFactory(12)
console.log(a())

function Hello(pick){

    function Spain(name){
        console.log("hola")
    }
    function France(n){
        console.log("bonjour")
    }
    function Italy(nn){
        console.log("salve")
    }

    switch (pick) {
        case 1: return Spain ; break;
        case 2: return France; break;
        case 3: return Italy; break;
        case 4: return (w)=>{console.log("nin hao",w)};break;
    }
}

let r = Hello(4)
r("Salvador")