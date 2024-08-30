function doubleEveryOther(input){
    input.sort((a, b) => a - b); // Sort the array in ascending order
    const result = []

   for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
        if(input[i]+2===input[j]){
            result.push([input[i], input[j]])
        }                
    }    
   }
   return result
}

console.log(doubleEveryOther([1,2,3,4]))