let productCart=[];
let prodID=0;


function addProduct(){
    let productName = document.getElementById("txtProduct").value;
    productCart.push(productName);
    display(productName);
    document.getElementById("txtProduct").value="";
}

function display(newProduct){
    let value1 = Math.random() * 255;
    let value2 = Math.random() * 255;
    let value3 = Math.random() * 255;
    let item2 = `
        <div class="to-do-item" style="background-color:rgb(${value1},${value2},${value3},0.6);">
            <p>${newProduct}</p>
            <p>✍️</p>
        </div>`
    ;
    const ul = document.getElementById("list-products");
    ul.innerHTML+=item2;
    prodID++;
}

function init(){
    console.log("Init");
}
window.onload=init; //Wait to render the html