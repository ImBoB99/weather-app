import { getIcon } from "./helperFunctions";
// Function to update the DOM with weather data
function updateWeatherData(domElements, data, units) {
  domElements.weatherLocation.innerText = data.resolvedAddress;
  domElements.weatherDateTime.innerText = `${data.formattedDate} | ${data.formattedTime}`;
  domElements.currentIcon.src = getIcon(data.icon);
  domElements.currentTemperature.innerHTML = `${data.currentTemp}${units.temp}`;
  domElements.maxTemperature.innerHTML = `${data.processedData[0].tempmax}${units.temp}`;
  domElements.minTemperature.innerHTML = `${data.processedData[0].tempmin}${units.temp}`;
  domElements.feelslikeTemperature.innerHTML = `Feels like ${data.currentFeelsLike}${units.temp}`;

  // Update weather details
  domElements.sunriseValue.innerHTML = `${data.processedData[0].sunrise}`;
  domElements.sunsetValue.innerHTML = `${data.processedData[0].sunset}`;
  domElements.chanceOfRainValue.innerHTML = `${data.processedData[0].precipprob}%`;
  domElements.humidityValue.innerHTML = `${data.processedData[0].humidity}%`;
  domElements.windValue.innerHTML = `${data.processedData[0].windspeed}${units.speed}`;
  domElements.uvIndexValue.innerHTML = `${data.processedData[0].uvindex}`;
}

export { updateWeatherData };
