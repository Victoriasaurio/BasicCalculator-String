const { ciclosOp, realizarOP } = require('./ciclos')

//ex = '4-7+8+9/2*3'
ex = '9*2*3-9/1'

let l = []
let m = 0
let d = 0
let s = 0
let r = 0

for (e of ex) l.push(e)

l.map(contador => { 
    if(contador == '*') { m++ } 
    else if (contador == '/') { d++ }
    else if (contador == '+') { s++ }
    else if (contador == '-') { r++ }
})

ciclosOp(m,d,r,s)
realizarOP(m,d,r,s,ciclosOp(),l)

console.log(l)