const apiKey = "d3de143a3080e43f543f4ceedcb1d34f";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

export async function getWeatherData(city) {
    try {
        const response = await fetch(`${baseUrl}${city}&appid=${apiKey}&units=metric`);
        
        if (!response.ok) {
            throw new Error("City not found.");
        }

        const data = await response.json();
        return data;

    } catch(error) {
        console.log(`Something went wrong: ${error}`);
    }
}