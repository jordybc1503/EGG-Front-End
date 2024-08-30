function generateHashtag (str) {
    if(str.length ===0 || str.length > 139){
        return false
    }
    return "#"+ str.trim()
                .split(" ") 
                .map(e=>
                    {
                    e=e[0].toUpperCase()+e.slice(1);
                    return e
                    }
                ).join('')
  }

console.log(generateHashtag(" Hello world"))