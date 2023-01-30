console.log("Link correctly");

let num = 5; //Integer
let num2 = 3; //Integer
let user = "Luis"; //String
let isActive = true; //bool

console.log(num+num2);

document.write(
    '<p class="text"> Name: '    + user     + '</p>'+
    '<p class="text"> Student: ' + isActive + '</p>'+
    '<p class="text"> GPA: '     + num      + '</p>');

//Exercise #1

let numChildren = 0;
let partnerName = "No one";
let geoLocation = "Germany";
let jobTitle = "Developer";

// document.write(
//     '<p class="text"> You will be a '+jobTitle+' in '+geoLocation+', and married to '+partnerName+' with '+numChildren+' kids.</p>'
// );

document.write(
    `
    <p class="text"> You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numChildren} kids.</p> 
    `
);

//Exercise #2

document.write(`<h2>Exercise 2</h2>`);
document.write(`<bu`);

let userName;
let userEmail;
let password;
let age;
let country;
let salaryMonthly;
let m=12;

requestParam();

function requestParam() {
    userName = prompt("Enter your username:");
    userEmail = prompt("Enter you email");
    password = prompt("Enter your password");
    salaryMonthly = prompt("Enter your salary");

    document.write(`
        <p>Name: ${userName}</p>
        <p>Email: ${userEmail}</p>
        <p>Salary: $${salaryMonthly*m}</p>
    `);
}