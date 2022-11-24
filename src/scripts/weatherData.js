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

    let name = await jsonData.name;
    let main = await jsonData.main;
    let weather = await jsonData.weather[0];
    let wind = await jsonData.wind;

    return Object.assign(
        {},
        {name},
        {weather},
        {main},
        {wind},
    );
}