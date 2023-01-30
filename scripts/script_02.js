// let promptName = prompt("Enter your name");

// let greetTwo = function(name){
//     return `<p>Welcome ${name}!</p>`;
// }

// document.write(greetTwo(promptName));

function greet(name){
    return "Hello " + name + "!";
}

console.log(greet("Luis"));

function sum(a,b) {
    return a+b;
}

console.log(sum(5,2));

function multiplyThree(a) {
    return console.log(a*3);
}

multiplyThree(5);

function multiplyThreeTwo(a) {
    let total = a*3;
    document.write(`
    <p>${a} x 3 = ${total}</p>
    `);
}

multiplyThreeTwo(5);