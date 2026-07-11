console.log()

let favoriteThings = ["music", "coding", "novels", "exploring", "traveling"];

// forEach - loop each item 
console.log("My favorite things are: ")
favoriteThings.forEach ((things) => {
    console.log(things);
});

console.log()

// map - create another array by changing each word to uppercase
console.log("My favorite things in capital letters: ")
favoriteThings.map ((things) => {
    console.log(things.toUpperCase());
});

console.log()

// filter - returns items that meet a condition defined
console.log('Displaying favorite things that ends with "ing": ');
let ingThings = favoriteThings.filter((things) => {
    let endsWithIng = things.endsWith("ing");
    return endsWithIng;
});

ingThings.forEach((thing) => {
    console.log(thing);
})

console.log()

// object of me
let myself = {name: "Kpemini Delali Beatrice", age: 20, hobbies: "read novels, exploring, coding", skills: "HTML, CSS, JavaScript, Python, C++, Java"}

    console.log(`My name is ${myself.name}.`)
    console.log(`I am ${myself.age} years of age.`)
    console.log(`My hobbies are: ${myself.hobbies}`)
    console.log(`My skills are: ${myself.skills}`)

myself.gender = "Female";
    console.log(`I am a ${myself.gender}`)

console.log()


// an array of objects - cities
let cities = [
    {name:"Accra", country: "Ghana", temperature: "30"},
    {name: "Kumasi", country: "Ghana", temperature: "27"},
    {name: "Temale", country: "Ghana", temperature: "25"},
    {name: "Winneba", country: "Ghana", temperature: "35"}
]

console.log("Cities and their temperature: ")
cities.forEach((city) => {
    console.log(`${city.name} → ${city.country} → ${city.temperature}°C`)
})

console.log()
// filter objects in the array - to display hot cities
const hot = cities.filter((city) => {
    const hottest = city.temperature >= 30;
    return hottest
})

console.log(`The hot cities are: `)
hot.forEach((city) => {
    console.log(`${city.name} ==> ${city.temperature}°C`)
})


// map objects in array - to give weather summary
console.log()

console.log("Weather summary of the cities: ")

cities.map((city) => {
    console.log(`The temperature in ${city.name} is ${city.temperature}°C`)
})