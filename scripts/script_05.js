let myArray = ["10","String",{}];
let cart = ["Speakers","Laptop","Mouse","Headset"];
console.log(myArray);
console.log(cart);

//Exercise #1
let exercise = ["What's the meaning of life?",42,true];
for (const element of exercise) {
    console.log(element);
}

exercise.forEach(element => {
    console.log(element);
});

// Exercise #2
const numbers = [10,20,30,40,50];
console.table(numbers);
const months = ["Jan","Feb","Mar","Apr","May"];
console.table(months);

document.write("<h3>For loop for numbers</h3>")
for(const element of numbers){
    document.write(`<p>${element}</p>`);
}

document.write("<h3>For loop for months</h3>")
months.forEach(element =>{
    document.write(`<p>${element}</p>`);
});