async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'afb3533e039d96175c6e9de8daad6031'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    const cityName = document.getElementById('cityName');
    const description = document.getElementById('description');
    const temperature = document.getElementById('temperature');
    const weatherIcon = document.getElementById('weatherIcon');
    const weatherContainer = document.getElementById('weatherContainer');

    cityName.textContent = data.name;
    description.textContent = data.weather[0].description;
    temperature.textContent = `Temperature: ${data.main.temp} °C`;
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    weatherContainer.classList.remove('hidden');
}

function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
}

// Initialize with light mode
document.body.classList.add('light-mode');
