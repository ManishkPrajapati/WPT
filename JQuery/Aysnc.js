let callback = ()=>{console.log("hello")}

let intervalId = setInterval(callback,500)

setTimeout(()=>{console.log("timeout is called")
clearInterval(intervalId)},2000)

