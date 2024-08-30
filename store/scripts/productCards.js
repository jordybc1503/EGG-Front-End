
//Función para crear la tarjeta del producto
function createCard(product) {
    return   `
    <article class="product-card">
        <a href="./details.html?id=${product.id}">
          <img class="product-img" src="${product.photo[0]}" alt="${product.id}" />
          <div class="product-info">
            <span class="product-title">${product.title}</span>
            <span class="product-description">${product.supplier}</span>
            <div class="product-price-block">
              <span class="price">$${product.price}</span>
              <span class="discount">${product.onsale}</span>
            </div>
            <div class="product-tax-policy">${product.taxPolicy}</div>
          </div>
        </a>  
      </article>
    
`;
}

//Renderiza los productos de acuerdo usando la funcion create Card

function printCards(arrayOfProducts, idSelector){
    let productsTemplate = "";
    for (const element of arrayOfProducts) {
        productsTemplate = productsTemplate + createCard(element)
    }
    
    //Renderizamos los productos del archivo Products

    const productsSelector  = document.getElementById(idSelector);


    productsSelector.innerHTML = productsTemplate;
    
}

//Llamado de la función para renderizar
printCards(products, "products");