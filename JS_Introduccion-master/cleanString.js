function cleanString(s) {
   while(s.includes("#")){
    
    const indexToRemove = s.indexOf("#")
    //console.log(indexToRemove)
    if(indexToRemove!==0){
      s = s.slice(0, indexToRemove-1) + s.slice(indexToRemove+1,s.length)
      console.log("Verdad", s)
    } else{
      s=s.slice(indexToRemove+1,s.length)
    }
    
    
   }
    return s
}

  console.log(cleanString("##"))

  /*
  let s = "#"
  const indexToRemove = s.indexOf("#")
  //console.log(indexToRemove)
  if(indexToRemove!==0){
    s = s.slice(0, indexToRemove-1) + s.slice(indexToRemove+1,s.length)
    console.log("Verdad", s)
  } else{
    s=s.slice(indexToRemove+1,s.length)
  }
    
  console.log(s)
  */