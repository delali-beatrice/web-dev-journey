const cityElement = document.getElementById("city");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");
const iconElement = document.getElementById("weather-icon");
const inputElement = document.getElementById("city-input");
const searchButton = document.getElementById("search");

const apiKey = "c6c6afc21c658b1f98d944297913f0a7";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

async function getWeather(city) {
    try {
        const response = await fetch(`${baseUrl}${city}&appid=${apiKey}`);
        const data = await response.json();

        // weather data to be displayed on a card
        const cityName = data.name;
        const temperature = (data.main.temp - 273.15).toFixed(2); // convert Kelvin to Celsius
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;

        cityElement.textContent = `City: ${cityName}`;
        temperatureElement.textContent = `Temeperature: ${temperature}°C`;
        descriptionElement.textContent = `Description: ${description}`;
        iconElement.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        
    } catch (error) {
        console.log("There was an error fetching data. Please try again", error)
    }
}

searchButton.addEventListener("click", () => {
    const city = inputElement.value;
    getWeather(city);
});
