const { multiplicar, division, resta, suma } = require('./operations')

let i = 0
let j = 0
let cb = 0

function ciclosOp(m,d,r,s) {
    if(m > 0) i++
    if(d > 0) i++
    if(r > 0) i++
    if(s > 0) i++
    return i
}

function realizarOP(m,d,r,s,con,l) {
    while (j < con) {
        while (cb < m) {
            if(m > 0) multiplicar(l)
            cb++
        }
        cb = 0
        while (cb < d) {
            if(d > 0) division(l)
            cb++
        }
        cb = 0
        while (cb < r) {
            if(r > 0) resta(l)
            cb++
        }
        cb = 0
        while (cb < s) {
            if(s > 0) suma(l)
            cb++
        }
        cb = 0
        j++
    }
}

module.exports = {
    ciclosOp,
    realizarOP
}