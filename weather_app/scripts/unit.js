let lastWeatherData = null;

const celsiusBtn = document.getElementById("unit-c");
const fahrenheitBtn = document.getElementById("unit-f");
const temperatureElement = document.getElementById("temperature");
const feelsLike = document.getElementById("feels-like");

export function setLastWeatherData(data) {
    lastWeatherData = data;
}

export function getLastWeatherData() {
    return lastWeatherData;
}

export function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit.toFixed(2);
}

export function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit -32) * 9/5;
    return celsius.toFixed(2);
}

export function updateTemperatureDisplay(unit) {
   const data = getLastWeatherData();
   if (!data) return;

   const celsiusTemp = data.main.temp;
   const celsiusFeelsLike = data.main.feels_like;

   if (unit === "F") {
    temperatureElement.textContent = `${celsiusToFahrenheit(celsiusTemp)}°F`;
    feelsLike.textContent = `${celsiusToFahrenheit(celsiusFeelsLike)}°F`;
   } else {
    temperatureElement.textContent = `${Math.round(celsiusTemp)}°C`;
    feelsLike.textContent = `${Math.round(celsiusFeelsLike)}°C`;
   }
}

celsiusBtn.addEventListener("click", () => {
    updateTemperatureDisplay("C");
    celsiusBtn.classList.add("active");
    celsiusBtn.classList.remove("active");
});

fahrenheitBtn.addEventListener("click", () => {
    updateTemperatureDisplay("F");
    fahrenheitBtn.classList.add("active");
    fahrenheitBtn.classList.remove("active");
})