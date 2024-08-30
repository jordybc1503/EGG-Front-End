function findOutlier(integers){
    //your code here
    const checkArray = integers.filter(e=>e%2===0)
    if(checkArray.length===1){
      return checkArray[0]
    }else {
      return integers.filter(e=>e%2!==0)[0]
    }
    
  }