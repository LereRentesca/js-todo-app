let productCart=[];
let prodID=0;

function addProduct(){
    let productName = document.getElementById("txtProduct").value;
    productCart.push(productName);
    display(productName);
    document.getElementById("txtProduct").value="";
    updateNumberProducts();
}

function display(newProduct){
    let item = `<li id="${prodID}">${newProduct} <span onclick="deleteProduct(${prodID})">🗑️</span></li> `;
    const ul = document.getElementById("list-products");
    ul.innerHTML+=item;
    prodID++;
}

function updateNumberProducts(){
    document.getElementById("length-products").innerHTML=productCart.length;
}

function deleteProduct(id){
    document.getElementById(id).remove();
    productCart.pop();
    updateNumberProducts();
}

function init(){
    console.log("Init");
    updateNumberProducts();
}
window.onload=init; //Wait to render the html