function greatestProduct(input) {
    // todo
    if(input.length<=5){ return "Error"}
    
    input = input.split("").map(e=>parseInt(e));
    const len = input.length;
    let result = 0;
    for(let i=0; i< len - 4;i++){
      const temp = input.slice(i,i+5).reduce((acum,curr)=>acum*curr,1)
      console.log(temp)
      if(result < temp ){ result = temp }

    } 
    return result
}

console.log(greatestProduct('4541654454512345'))