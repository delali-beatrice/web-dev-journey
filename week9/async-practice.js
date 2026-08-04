//===Async

// consoles => "Start" first
// then => End
// lastly => This ran after 3 seconds
console.log("Start");

setTimeout(() => {
    console.log("This ran after 3 seconds")
}, 3000);

console.log("End");


// Promise
const weatherCheck = new Promise((resolve, reject) => {
    let cityFound = false;

    if(cityFound) {
        resolve("City data found!");
    } else {
        reject("City not found. Please check the spelling");
    }
});

weatherCheck
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

// async/await

async function checkWeather() {
    try {
        const result = await weatherCheck;
        console.log(result);
    } catch (error) {
            console.log(error);
    }
}

checkWeather();

