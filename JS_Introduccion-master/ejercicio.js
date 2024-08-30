function binSum(num) {
    if(num<10){
        return num
    } else{
        const binNum = num.toString(2);
        console.log(binNum)
        const arr = binNum.split('').map(e=>parseInt(e))
        const result1 = arr.reduce((acum, act)=>acum+act)
        const result2 = binSum(result1)
        return result2
    }


}

console.log(binSum(5555545555555555555555555880))