import { state } from "./state";
import { getMeasurementUnits, formatDateAndTime } from "./helperFunctions";
import { updateWeatherData } from "./updateWeatherData";

function displayData(data) {
  const currentDateTime = formatDateAndTime(data.processedData[0].datetime);
  const currentMeasurements = getMeasurementUnits(state.currentMeasurement);

  // DOM elements
  const domElements = {
    weatherLocation: document.querySelector("#weatherLocation"),
    weatherDateTime: document.querySelector("#weatherDateTime"),
    currentIcon: document.querySelector("#currentIcon"),
    currentTemperature: document.querySelector("#currentTemperature"),
    maxTemperature: document.querySelector("#maxTemperature"),
    minTemperature: document.querySelector("#minTemperature"),
    feelslikeTemperature: document.querySelector("#feelslikeTemperature"),
    sunriseValue: document.querySelector("#sunriseValue"),
    sunsetValue: document.querySelector("#sunsetValue"),
    chanceOfRainValue: document.querySelector("#chanceOfRainValue"),
    humidityValue: document.querySelector("#humidityValue"),
    windValue: document.querySelector("#windValue"),
    uvIndexValue: document.querySelector("#uvIndexValue"),
  };

  // Add formatted date and time to data
  data.formattedDate = currentDateTime.formattedDate;
  data.formattedTime = currentDateTime.formattedTime;

  // Update the DOM with weather data
  updateWeatherData(domElements, data, currentMeasurements);
}

export { displayData };
