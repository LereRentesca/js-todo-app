function display() {
    let userName = prompt("Enter student name: ");
    let fsdi101 = Number(prompt("Enter your FSDI101 grade:"));
    let fsdi102 = Number(prompt("Enter your FSDI102 grade:"));
    let gpa;
    
    gpa = (fsdi101+fsdi102)/2;

    document.getElementById("text").innerHTML+=`
        <h5>Welcome ${userName}</h5>
        <p>Name: ${userName}</p>
        <p>GPA: ${gpa}</p>
    `;
}