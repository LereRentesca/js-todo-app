let result;

function display(){
    let a = Number(prompt("Enter the first number:"));
    let b = Number(prompt("Enter the second number:"));
    operations(a,b);
}

function operations(a,b){
    document.getElementById("show-results").innerHTML=`
        <p>${a} + ${b} = ${a+b}</p>
        <p>${a} - ${b} = ${a-b}</p>
        <p>${a} * ${b} = ${a*b}</p>
        <p>${a} / ${b} = ${(a/b).toFixed(2)}</p>
    `;
}