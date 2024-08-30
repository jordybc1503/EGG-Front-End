function captureText(event){
    //Save the captured event in a variable
    const prodSearched = event.target.value.toLowerCase(); // Text searched in lower case
    
    //look up for the variables thar coincide
    const filterProducts = products.filter(product=> product.title.toLowerCase().includes(prodSearched)); 
    
    //update the render of products products
    printCards(filterProducts, "products");

   
   
    

    
    

};



const searchSelector = document.getElementById("search");


// Forma 3

searchSelector.addEventListener("keyup", event=>captureText(event));