function multiplicar(l) {
    for(index in l) {   
        if(l[index] == '*') {
            i = parseInt(index) + 1
            op = parseFloat(l[index-1]) * parseFloat(l[i])
            l.splice(index-1,3, op)
            return l
        }
    } 
}

function division(l) {
    for(index in l) {   
        if(l[index] == '/') {
            i = parseInt(index) + 1
            op = parseFloat(l[index-1]) / parseFloat(l[i])
            l.splice(index-1,3, op)
            return l
        }
    } 
}

function resta(l) {
    for(index in l) {   
        if(l[index] == '-') {
            i = parseInt(index) + 1
            op = parseFloat(l[index-1]) - parseFloat(l[i])
            l.splice(index-1,3, op)
            return l
        }
    } 
}

function suma(l) {
    for(index in l) {   
        if(l[index] == '+') {
            i = parseInt(index) + 1
            op = parseFloat(l[index-1]) + parseFloat(l[i])
            l.splice(index-1,3, op)
            return l
        }
    } 
}

module.exports = {
    multiplicar,
    division,
    suma,
    resta
}