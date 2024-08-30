
const cartSelector = document.querySelector("#totalProducts");
console.log(cartSelector)

function createTotalTemplate() {
  const arrayOfProducts = JSON.parse(localStorage.getItem("cart"));
  let total = 0;
  arrayOfProducts.forEach(
    (each) => (total = total + each.price * each.amout)
  );
  return `
    <h2>Resumen del pedido</h2>
    <div>
      <h3>Subtotal</h3>
      <h3>${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
        total,)}</h3>
    </div>
    <p>Incluye impuestos PAIS y percepcion AFIP</p>
    <button class="finish-buy">Finaliza tu compra</button> 
    `;
  
    
    
    
}

const totalTemplate = createTotalTemplate();

cartSelector.innerHTML = totalTemplate;