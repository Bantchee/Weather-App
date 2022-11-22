export async function getWeatherData(location, unit) {
    const mainElement = document.body.querySelector("#main");

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=8e53cd3e15f39c560c42a1df3c50b117&units=${unit}`, 
        {mode: 'cors'}
    );
    
    const weatherData = await response.json();
    console.log(weatherData);
}