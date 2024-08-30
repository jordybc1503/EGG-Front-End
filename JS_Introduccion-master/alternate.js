const arrBooleans = [true, false, true, false]


function alternate(items) {

    if (items.length === 0) {
        return null; // Return null for empty list
    }

    let eval = items[0];

    for(let i=1; i<items.length; i++){
        eval = eval || items[i];
    }
    
    return eval ;
  }

  // Example usage:
console.log(alternate([true, false, true])); // Output: true
console.log(alternate([false, false])); // Output: false
console.log(alternate([])); // Output: null