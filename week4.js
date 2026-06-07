// mini calculator
let num1 = 20;
let num2 = 5;

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);

console.log(`${num2} ** 2 = ${num2 ** 2}`)
console.log(`${num1}++ = ${num1 ++}`)
console.log(`${num2}++ = ${num2 ++}`)


//checking the typeof for variables
let name = "Beatrice";
let age = 15;
let decimal = 4.98;
let isStudent = true;
let number;

console.log(`Type of name variable: ${typeof(name)}`);
console.log(`Type of age variable: ${typeof(age)}`);
console.log(`Type of decimal variable: ${typeof(decimal)}`);
console.log(`Type of isStudent variable: ${typeof(isStudent)}`);
console.log(`Type of number variable: ${typeof(number)}`);

// comparison
let n = "15";

console.log(`'"${n}" === ${age}' = ${n === age}`)

//string concantenation using backticks
console.log(`Hello, my name is ${name}. I am ${age} years of age.`)
console.log(`Are you a student? Answer: ${isStudent}`)
console.log(`My height is ${decimal}`)