export function displayWeatherData(data) {
    const cardElement = document.getElementById("weather-card");
    const cityElement = document.getElementById("city-name");
    const dateElement = document.getElementById("date-today");
    const iconElement = document.getElementById("weather-icon");
    const tempElement = document.getElementById("temperature");
    const humidityElement = document.getElementById("humidity");
    const windElement = document.getElementById("wind");
    const feelsLike = document.getElementById("feels-like");
    const conditionElement = document.getElementById("condition");
    
    cardElement.classList.remove("hidden");
    cityElement.textContent = data.name;
    const currentDate = new Date();
    dateElement.textContent = currentDate.toDateString();
    iconElement.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    tempElement.textContent = `${Math.round(data.main.temp)}°C`;
    humidityElement.textContent = `${data.main.humidity}%`;
    windElement.textContent = `${data.wind.speed}m/s`;
    feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
    conditionElement.textContent = data.weather[0].description;
}

export function showLoading() {
    document.getElementById("loading").classList.remove("hidden");
}

export function hideLoading() {
    document.getElementById("loading").classList.add("hidden");
}

export function showError(message) {
    const errorElement = document.getElementById("error-text");
    errorElement.textContent = message;
    
    document.getElementById("error").classList.remove("hidden");
}

export function hideError() {
    document.getElementById("error").classList.add("hidden");
}