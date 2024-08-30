const cartproducts = JSON.parse(localStorage.getItem("cart"));
console.log(cartproducts);

function createCartCard(cartproducts) {
  //Crea el template ha renderizar
  const cartTemplate = cartproducts
    .map((cartProduct) => {
      return `
    <div class="cart-item" id="${cartProduct.idOrder}">
        <img class="cart-img" src="${cartProduct.photo[0]}" alt="${
        cartProduct.title
      }">
        <div class="product-cart-info">
            <h2 class="product-title">${cartProduct.title}</h2>
            <p class="product-description">${cartProduct.description}</p>
            <input type="number" name="amount" id="${cartProduct.id}" value="${
        cartProduct.amout
      }" min=1 class="product-amount" onchange="changeQuantity(event)">
        </div>
        <div class="product-subtotal">
        ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
            cartProduct.amout * cartProduct.price,)}
        </div>
    </div>
    `;
    })
    .join("");

  const cartSelector = document.querySelector("#cartproducts");
  cartSelector.innerHTML = cartTemplate;
}

createCartCard(cartproducts);

function changeQuantity(event) {
  // Obtener el elemento que disparó el evento
  const inputElement = event.target;
  // Obtener el contenedor más cercano con la clase 'cart-item'
  const cartItemElement = inputElement.closest(".cart-item");
  // Obtener el ID del contenedor
  const cartItemId = cartItemElement.id;
  // Imprimir el ID en la consola

  const arrayToUpdate = cartproducts.find((e) => e.idOrder === cartItemId);
  console.log(arrayToUpdate);

  arrayToUpdate.amout = parseInt(inputElement.value);

  // Convertir el array de productos nuevamente a formato JSON
  const stringifyCart = JSON.stringify(cartproducts);

  localStorage.setItem("cart", stringifyCart);

    //Actualización del subtotal
    const subTotal = cartItemElement.querySelector(".product-subtotal");
    subTotal.textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
        arrayToUpdate.amout * arrayToUpdate.price,);

}
