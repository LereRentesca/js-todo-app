let productCart=[];
let prodID=0;

function addProduct(){
    let productName = document.getElementById("txtProduct").value;
    productCart.push(productName);
    display(productName);
    document.getElementById("txtProduct").value="";
}

function display(newProduct){
    let item = `<li id="${prodID}">${newProduct} <span onclick="deleteProduct(${prodID})">🗑️</span></li> `;
    let item2 = `
        <div class="to-do-item">
            <p>${newProduct}</p>
            <p>🗑️</p>
        </div>`
    ;
    const ul = document.getElementById("list-products");
    ul.innerHTML+=item2;
    prodID++;
}


function deleteProduct(id){
    document.getElementById(id).remove();
    productCart.pop();
}

function init(){
    console.log("Init");
}
window.onload=init; //Wait to render the html