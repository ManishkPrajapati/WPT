let regex = /abc/i
let s ="abc"
s="pachdb"
s="AbC"

regex = /[A-Z]/
s="5G65664644sffg"

regex = /[a-sA-G]/
s = "KlBaNdji"

regex =/^[A-Z]+/
s = "AJndia"

let rv = s.match(regex)
console.log(rv)