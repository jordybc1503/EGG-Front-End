function narcissistic(value) {
    // Code me to return true or false
    const strNum = value.toString().split('').map(e=>parseInt(e));
    const len = strNum.length;
    return value === strNum.reduce((acum, curr)=> acum + Math.pow(curr,len),0)
  }


  console.log(narcissistic(4210818))