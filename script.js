console.log("My name is Beatrice")
console.log("hello beatrice!")
console.log("God is the greatest!")

let name = prompt("What's your name? ");
console.log("Hello, " + name )

let head = document.getElementById("heading")

head.textContent = "This is my heading"

let button = document.getElementById("btn")

button.addEventListener("click", function() {
    let head = document.getElementById("heading")
    head.textContent = "You clicked the button which triggered the content of the heading to change";
});
