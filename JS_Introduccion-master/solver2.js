const solver =(arr, num) => 
    { return (arr.map((e, i, arr)=> arr.map((e1, j)=> e1+e))).flat().some(e=> e===num)
    } 
        


const solver2 = (arr, num)=> {
    const arrDiffNum = arr.map(e=>e-num);
    return arr.some(e=> arrDiffNum.some(e1=>e1===e))
}


function solver3(arr, target) {
    const seenNumbers = new Set();
    console.log("SeegnNumbers", seenNumbers)
    for (const num of arr) {
        const complement = target - num;
        if (seenNumbers.has(complement)) {
            return true;
        }
        seenNumbers.add(num);
    }
    return false;
}


console.log(solver([5, 4, 6, 1, 4], 5))
console.log(solver2([5, 4, 6, 1, 4], 5))

console.log(solver3([5, 4, 6], 5))