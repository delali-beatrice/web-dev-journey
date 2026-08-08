import {getWeatherData, getWeatherDataByCoords} from "./api.js"
import {displayWeatherData, showLoading, hideLoading, showError, hideError} from "./ui.js";
import { setLastWeatherData, getLastWeatherData } from "./unit.js";
import { getCurrentCoords } from "./location.js";
import { toggleFavorite } from "./favorites.js";

const searchForm = document.getElementById("search-form");
const inputElement = document.getElementById("city-input");

const button = document.getElementById("search-btn");

// search for a city
searchForm.addEventListener("submit", async(event) => {
    event.preventDefault();

    const city = inputElement.value.trim();

    if (city === "") {
        showError("Please enter a city name.");
        return;
    }

    showLoading();
    hideError();

    const data = await getWeatherData(city);
    hideLoading();

    if (!data) {
        showError("City not found. Check the spelling and try again.");
    } else {
        displayWeatherData(data);
        setLastWeatherData(data);
    }
});


// use my location
const locationBtn = document.getElementById("use-location-btn");

locationBtn.addEventListener("click", async() => {
    showLoading();
    hideError();

    try {
        const coords = await getCurrentCoords();
        const data = await getWeatherDataByCoords(coords.latitude, coords.longtitude);
        hideLoading();

        if(!data) {
            showError("Location weather not found.")
        } else {
            displayWeatherData(data);
            setLastWeatherData(data);
        }
    } catch(error) {
        hideLoading();
        showError("Coldn't access your location. Please allow location access and try again.")
    }
});

//weather details for popular cities
const popularCities = document.querySelectorAll(".city-chip");

popularCities.forEach((cityBtn) => {
    cityBtn.addEventListener("click", async () => {
        const city = cityBtn.dataset.city;

        showLoading();
        hideError();

        const data = await getWeatherData(city);
        hideLoading();

        if(!data) {
            showError("City not found.")
        } else {
            displayWeatherData(data);
            setLastWeatherData(data);
        }
    })
});

//event listener for favorites
const starredElement = document.getElementById("starred");

starredElement.addEventListener("click", () => {
    const data = getLastWeatherData();
    if (!data) return;
  
    const cityName = data.name;
    const isFavorited = toggleFavorite(cityName);
    const starIcon = starredElement.querySelector("i");
  
    if (isFavorited) {
      starredElement.classList.add("favorited");
      starIcon.classList.remove("fa-regular");
      starIcon.classList.add("fa-solid");
    } else {
      starredElement.classList.remove("favorited");
      starIcon.classList.remove("fa-solid");
      starIcon.classList.add("fa-regular");
    }
  });