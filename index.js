document.addEventListener('DOMContentLoaded', () => {
  const citySelect = document.getElementById('city-select');
  const fetchWeatherButton = document.getElementById('fetch-weather');
  const weatherResult = document.getElementById('weather-result');
  const temperatureChartCtx = document.getElementById('temperature-chart').getContext('2d');

  let temperatureChart;

  fetchWeatherButton.addEventListener('click', async () => {
      const city = citySelect.value;
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
      updateTemperatureChart(weatherData.temperature);
  });

  async function fetchWeatherData(city) {
      try {
          const response = await fetch('data.json');
          const data = await response.json();
          const cityWeather = data.find(item => item.city === city);
          return {
              city: cityWeather.city,
              temperature: cityWeather.temperature,
              condition: cityWeather.condition,
              icon: getWeatherIcon(cityWeather.condition)
          };
      } catch (error) {
          console.error('Error fetching weather data:', error);
      }
  }

  function displayWeatherData(data) {
      weatherResult.innerHTML = `
          <h2>Clima en ${data.city}</h2>
          <p>Temperatura: ${data.temperature}°C</p>
          <p>Condición: ${data.condition}</p>
          <img src="${data.icon}" alt="${data.condition}">
      `;
  }

  function updateTemperatureChart(temperature) {
      if (temperatureChart) {
          temperatureChart.destroy();
      }
      temperatureChart = new Chart(temperatureChartCtx, {
          type: 'bar',
          data: {
              labels: ['Temperatura'],
              datasets: [{
                  label: '°C',
                  data: [temperature],
                  backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                  borderColor: ['rgba(54, 162, 235, 1)'],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
          }
      });
  }

  function getWeatherIcon(condition) {
      const iconMap = {
          'Soleado': 'https://cdn.weatherapi.com/weather/64x64/day/113.png',
          'Nublado': 'https://cdn.weatherapi.com/weather/64x64/day/116.png',
          'Lluvia': 'https://cdn.weatherapi.com/weather/64x64/day/308.png'
      };
      return iconMap[condition] || 'https://cdn.weatherapi.com/weather/64x64/day/113.png';
  }
});