function isPronic(n){
    // Happy Coding ^_^
    if(n===0){
        return true
    }
    n = Math.abs(n)
    const divors = Array(n+1).fill(0).map((e,index) => index).filter(e=>n%e===0).map(e=>[e, n/e])
   
    return divors.filter(e=>e[0]===e[1]+1||e[1]===e[0]+1).length >=1
  } 

  console.log(isPronic(5))
  console.log(isPronic(0))
  console.log(isPronic(4))
  console.log(isPronic(-27))