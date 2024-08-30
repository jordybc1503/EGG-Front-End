

//Find the params of url
const query = location.search;
const params = new URLSearchParams(query);
const id = params.get('id');
console.log(id);

//Function to render the products detail
function printDetails(id){
    const product = products.find(e=> e.id===id);
    console.log(product)
    const detailsTemplate = `
      <article class="product-detailContainer">
        <section class="product-images-block">
            <div class="product-images">
                ${product.photo.map(photo=>
                    `<img class="mini-img" src="${photo}" alt="${product.title}" onclick="changeMini(event)"/>`
                ).join("")}
            </div>
            <img
                class="big-img" 
                id="big-img"
                src="${product.photo[0]}" 
                alt="${product.title}" 
            />
        </section>
        <div class="product-description-block">
            <h1 class="product-title">${product.title}</h1>
            <h2>Color<h2>
            <select id="colorSelector" class="product-select">
                ${product.colors.map(color=> `<option value=${color}>${color}</option>` ).join("")}
            </select>
            <h2>Descripción<h2>
            <p class="product-description">
            ${product.description}
            </p>

        </div>
        <div class="product-checkout-block">
            <div class="checkout-container">
            
                <p class="checkout-total-label">Total:</p>
                <p id="checkout-total-price" class="checkout-total-price">$ ${product.price}</p>
                <p class="checkout-description">${product.taxPolicy}</p>
                <ul class="checkout-policy-list">
                    <li>Agrega el producto al carrito para conocer los costos de envío</li>
                    <li>Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal</li>
                </ul> 
                <input type="number" onChange="changeSubtotal" value=1 min=0 max=${product.stock}>
                <button type="button" class="cart-btn" onclick="saveProduct()">Añadir al Carrito</button> 
            </div>
        </div>
      </article>  `
    ;
    const detailsSelector = document.querySelector("#details")

    detailsSelector.innerHTML = detailsTemplate;
    
}

printDetails(id)

//Function to change images to render
function changeMini(event){
    const rute = event.target.src;
    const bigImage = document.getElementById("big-img");
    bigImage.src = rute;
    console.log("ChangeMini")

}


//Funtion to change the subtotal
function changeSubtotal(event){
    const amount = event.target.value;
    const totalPriceEle = document.getElementById("checkout-total-price");
    const product = products.find(e=> e.id===id)
   
    const totalPrice = product.price*amount;
    totalPriceEle.textContent = '$ ' + totalPrice.toFixed(2);
    
}



// Obtén una referencia al input
const inputElement = document.querySelector('input[type="number"]');

// Agrega un event listener para el evento 'change' del input
inputElement.addEventListener('change', changeSubtotal);


function saveProduct() {

  const product = products.find((each) => each.id === id);
  product.amout = parseInt(document.querySelector('input[type="number"]').value);
  product.subTotal = product.price*product.amount;
  product.idOrder =  generateUniqueId();
  // Obtain cart fron local store
  let cart = localStorage.getItem("cart");

  // Si el carrito está vacío o no existe en localStorage
  if (!cart) {
    // Crear un nuevo array con el producto y guardarlo en localStorage
    cart = [product];
  } else {
    // Si el carrito existe en localStorage, convertirlo de JSON a array
    cart = JSON.parse(cart);
    // Agregar el nuevo producto al array existente
    cart.push(product);
  }

  // Convertir el array de productos nuevamente a formato JSON
  const stringifyCart = JSON.stringify(cart);
  // Guardar el carrito actualizado en localStorage
  localStorage.setItem("cart", stringifyCart);
}


//generateUniqueId

function generateUniqueId(length = 8) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}