const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
const weatherResult = document.getElementById('weatherResult');

function getWeather() {
    const cityInput = document.getElementById('cityInput').value;

    if (!cityInput) {
        alert('Please enter a city.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                weatherResult.innerHTML = 'City not found';
            } else {
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                weatherResult.innerHTML = `Temperature: ${temperature}°C, Description: ${description}`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherResult.innerHTML = 'Error fetching weather data';
        });
}
