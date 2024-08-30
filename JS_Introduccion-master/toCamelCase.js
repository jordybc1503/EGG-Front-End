function toCamelCase(str){
    const arr = str.replace(/[^a-zA-Z]/g,"_").split('')
    return arr.map((e,index,str)=>str[index-1]==="_" ? e.toUpperCase():e)
     .filter(e=>e!=="_").join("")
  
  }

  console.log(toCamelCase("the-stealth-warrior"))
  console.log(toCamelCase("the_stealth_warrior"))
 