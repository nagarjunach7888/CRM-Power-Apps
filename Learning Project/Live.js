// Selecting HTML elements
const button = document.getElementById("btn");
const output = document.getElementById("output");

// Show message when page loads
output.innerHTML = "Page Loaded Successfully!";

// Run code when button is clicked
button.addEventListener("click", function () {

    let firstName = "Nagarjuna";
    let age = 25;

    let message = `
        Hello ${firstName}! <br>
        Your age is ${age}. <br>
        Next year you will be ${age + 1}.
    `;

    output.innerHTML = message;

    console.log("Button clicked!");
});