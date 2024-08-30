function onLine(points) {
    //Check if has only on point or nothing
    if(points.length<=1){
        return true
    }

    
    const x = points.map(e=>e[0]);
    
    const y = points.map(e=>e[1])
    
    const m = []
    if(y.every(e=>e===y[0])){
        return true
    }
    
    let ySorted  = points.map(e=>e[1]); 
    
    ySorted = ySorted.sort((a, b)=> b-a);
    
    const uniqueElements = ySorted.filter((e, i, ySorted)=> i === ySorted.length - 1 || e!==ySorted[i+1])
    
    if(uniqueElements.size < y.length){return false}
   
    for(let i=0; i< y.length-1; i++)
    {
        m.push((x[i+1]-x[i])/(y[i+1]-y[i]))
    }
    console.log(m)
    return m.every(e=>e===m[0]); // All points lie on the same line
}

// Examples
console.log(onLine([[1,2], [7, 4], [22, 9]])); // Output: true
console.log(onLine([[1,2], [2,4], [3,5]])); // Output: false
console.log(onLine([[1,2]])); // Output: true
console.log(onLine([])); // Output: true
