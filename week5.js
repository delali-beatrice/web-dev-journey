// regular functions



function greet(name = "World") {
    console.log(`Hello ${name}!!!`)

    return name
}

console.log()
let name = "Beatrice"
greeting = greet(name)



function even_odd_checker(num) {
    if (num % 2 == 0)
        console.log("The number is even")
    else
        console.log("The number is odd")

    return num
}

console.log()
let number = 5
number_check = even_odd_checker(number)



function calculator(num1, num2, operator) {
    if (operator == "+")
        console.log(num1 + num2)
    else if (operator == "-")
        console.log(num1 - num2)
    else if (operator == "/")
        console.log(num1 / num2)
    else if (operator == "*")
        console.log(num1 * num2)
    else if (operator == "%")
        console.log(num1 % num2)
    else
        console.log("Use these one of these operators: +, -, /, *, %")

    return num1, num2, operator
}

console.log()
let calculate = calculator(3, 5, "/")



// arrow functions

console.log()
console.log("ARROW FUNCTIONS")


const greet1 = (name = "World") => {
    console.log(`Hello ${name}!!!`)

    return name
}

console.log()
// call greet()
greet1("Ann")


const even_odd = (num) => {
    if (num % 2 == 0)
        console.log("The number is even")
    else
        console.log("The number is odd")

    return num
}

console.log()
// call even_odd()
even_odd(8)


const calculator1 = (num1, num2, operator) => {
    if (operator == "+")
        console.log(num1 + num2)
    else if (operator == "-")
        console.log(num1 - num2)
    else if (operator == "/")
        console.log(num1 / num2)
    else if (operator == "*")
        console.log(num1 * num2)
    else if (operator == "%")
        console.log(num1 % num2)
    else
        console.log("Use these one of these operators: +, -, /, *, %")

    return num1, num2, operator
}

console.log()
//call calculator()
calculator1(8, 4, "%")


// for loop

console.log()
console.log("FOR LOOP")

num = 1

for (let i = 0; i < 10; i++) {
    console.log(num++);
}


// while loop

console.log()
console.log("WHILE LOOP")
let count = 10;

while (count >= 1) {
    console.log(count);
    count--
}


// grade calculator

console.log()
console.log("GRADE CALCULATOR")
console.log()

const grade_calcultor = (score) => {
    if (score >= 90)
        console.log("Grade: A+")
    else if (score >= 80)
        console.log("Grade: A-")
    else if (score >= 70)
        console.log("Grade: B")
    else if (score >= 60)
        console.log("Grade: C")
    else if (score >= 50)
        console.log("Grade: D")
    else if (score >= 40)
        console.log("Grade: E")
    else
        console.log("Grade: F")

    return score
}

grade = grade_calcultor(0)