export async function getWeatherData(location, unit) {
    const jsonData = await fetchWeatherData(location, unit);
    if(jsonData.cod[0] !== "4") {
        const proccessedData = await processWeatherData(jsonData);
        return proccessedData;
    } else {
        return jsonData.message;
    }
}

async function fetchWeatherData(location, unit) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=8e53cd3e15f39c560c42a1df3c50b117&units=${unit}`, 
        {mode: 'cors'}
    );
    
    const weatherDataJson = await response.json();
    return weatherDataJson;
}

// NOT DONE
async function processWeatherData(jsonData) {
    const data = {
        location: jsonData.name,
        'weather-description': jsonData.weather[0].description,
        date: new Date(),
        temp: jsonData.main.temp,
        'feels-like': jsonData.main.feels_like,
        'min-temp': jsonData.main.temp_min,
        'max-temp': jsonData.main.temp_max,
        wind: jsonData.wind.speed,
        humidity: jsonData.main.humidity + '%',
    }
    return data;
}