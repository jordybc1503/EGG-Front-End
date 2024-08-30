function arrayDiff(a, b) {
    b.forEach(e1=> a = a.filter(e2=> e2!==e1) )

    return a 

}

console.log(arrayDiff([4,6,7,8],[4, 6]))
