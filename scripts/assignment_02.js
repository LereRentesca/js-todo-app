const container = document.getElementById("ticket");
const btn = document.getElementById("toggle");
let productName;
let price;
let qty;
let totalPrice;
const taxes = 0.16;
let subtotalPrice;

btn.onclick = function () {
    container.style.display = "block";

    productName = prompt("Enter the product's name:");
    price = parseFloat(prompt("Enter the product's price:"));
    qty = parseFloat(prompt("Enter the quantity:"));

    subtotalPrice = price*qty;
    totalPrice = subtotalPrice+subtotalPrice*taxes;

    
    document.getElementById("ticket").innerHTML=`
        <h4>Receipt</h4>
        <div class="product-details">
            <p>Product's name: </p><p>${productName}</p>
        </div>
        <div class="product-details">
            <p>Product's price: </p><p>$${price}</p>
        </div>
        <div class="product-details">
            <p>Quantity: </p><p>${qty}</p>
        </div>
        <hr/>
        <div class="product-details">
            <p>Taxes: </p><p>${taxes*100} %</p>
        </div>
        <div class="product-details">
            <p>Subtotal: </p><p>$${subtotalPrice.toFixed(2)}</p>
        </div>
        <div class="product-details">
            <p>Total: </p><p>$${totalPrice.toFixed(2)}</p>
        </div>
        <hr/>
        <div class="product-details">
            <p class="copyright">Developed by: Luis Renteria</p>
        </div>
    `;
};