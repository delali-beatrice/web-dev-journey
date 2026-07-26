// let weatherData = {
//     city: "Accra", temp: 30, humidity: 20, condition: "The weather is very hot"
// };
// let {city, temp, humidity, condition} = weatherData;

// console.log(city);
// console.log(temp);
// console.log(humidity);
// console.log(condition);

let student = {name: "Anna", age: 20, course: "Business Administration", 
    skills: ["Public Speaking", "Communication Skills", "Presentation skills"]
};

let {name, age, course} = student;
let [skill1, skill2] = student.skills;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Course: ${course}`);
console.log(`Skills: ${skill1}, ${skill2}...`);

let frontendSkills = ["JavaScript", "React", "CSS"];
let backendSkills = ["Node.js", "Express.js"];

let allSkills = [...frontendSkills, ...backendSkills]
console.log(`Technical Skills: ${allSkills}`);

let updatedStudent = {...student, course: "CyberSecurity"};
console.log(`Course changed using the ...spread operator by craeting a copy: ${updatedStudent.course}`);
console.log(`But the initial course in the student object didn't change: ${course}`);

function averageScore(...scores) {
    return scores.reduce((total, n) => total + n, 0) / scores.length;
}

console.log(averageScore(5, 5, 5));
console.log(averageScore(10, 10, 10, 10, 10));

//optional chaining
student.lecturer = {name: "Mr. Daniel"};
// doesn't crash
console.log(student.mentor?.contact?.email)
//crashes
//console.log(student.mentor.contact.email)

// || vs ??
let bonusPoints = 0;

console.log(bonusPoints || "No bonus");  
// prints the next condition if the falsy condition is false

console.log(bonusPoints ?? "No bonus");  
// prints the next condition if the nullish condition is null or undefined but the first if condition is not null or undefined

