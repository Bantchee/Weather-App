export async function getWeatherData(location, unit) {
    const jsonData = await fetchWeatherData(location, unit);
    const proccessedData = await processWeatherData(jsonData);

    console.log(proccessedData);
    return proccessedData;
}

async function fetchWeatherData(location, unit) {
    const mainElement = document.body.querySelector("#main");

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=8e53cd3e15f39c560c42a1df3c50b117&units=${unit}`, 
        {mode: 'cors'}
    );
    
    const weatherDataJson = await response.json();
    
    return weatherDataJson;
}

// NOT DONE
async function processWeatherData(jsonData) {

    let main = jsonData.main;
    let weather = jsonData.weather[0];

    return Object.assign(
        {},
        weather,
        main,
    );
}