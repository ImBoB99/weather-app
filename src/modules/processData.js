import { filterDayObject } from "./filterDayObject";

function processData(data) {
  const processedDataObject = {};
  processedDataObject.processedData = [];
  console.log(data); // data for 15 days
  processedDataObject.resolvedAddress = data.resolvedAddress;
  processedDataObject.currentTemp = data.currentConditions.temp;
  processedDataObject.currentFeelsLike = data.currentConditions.feelslike;
  processedDataObject.icon = data.currentConditions.icon;
  console.log(data.currentConditions["temp"]);
  data.days.forEach((day) => {
    processedDataObject.processedData.push(filterDayObject(day));
  });
  console.log(processedDataObject); // processed (filtered) data
  displayController(processedDataObject);
}

function displayController(data) {
  // Load all images in the `src/images` directory with `.svg`, `.png`, `.jpg`, etc. extensions
  // eslint-disable-next-line no-undef
  const icons = require.context(
    "../images",
    false,
    /\.(png|svg|jpg|jpeg|gif)$/i,
  );

  const currentTime = new Date().toLocaleTimeString();

  const weatherLocation = document.querySelector("#weatherLocation");
  const weatherDateTime = document.querySelector("#weatherDateTime");
  const currentIcon = document.querySelector("#currentIcon");
  const currentTemperature = document.querySelector("#currentTemperature");
  const maxTemperature = document.querySelector("#maxTemperature");
  const minTemperature = document.querySelector("#minTemperature");
  const feelslikeTemperature = document.querySelector("#feelslikeTemperature");

  const sunriseValue = document.querySelector("#sunriseValue");
  const sunsetValue = document.querySelector("#sunsetValue");
  const chanceOfRainValue = document.querySelector("#chanceOfRainValue");
  const humidityValue = document.querySelector("#humidityValue");
  const windValue = document.querySelector("#windValue");
  const uvIndexValue = document.querySelector("#uvIndexValue");

  weatherLocation.innerText = data.resolvedAddress;
  weatherDateTime.innerText = `${data.processedData[0].datetime} | ${currentTime}`;
  const iconPath = `./${data.icon}.svg`; // dynamically generate the file path
  currentIcon.src = icons(iconPath); // use the path to get the image URL
  currentTemperature.innerHTML = `${data.currentTemp}&deg;C`;
  maxTemperature.innerHTML = `${data.processedData[0].tempmax}&deg;C`;
  minTemperature.innerHTML = `${data.processedData[0].tempmin}&deg;C`;
  feelslikeTemperature.innerHTML = `Feels like ${data.currentFeelsLike}&deg;C`;

  sunriseValue.innerHTML = `${data.processedData[0].sunrise}`;
  sunsetValue.innerHTML = `${data.processedData[0].sunset}`;
  chanceOfRainValue.innerHTML = `${data.processedData[0].precipprob}%`;
  humidityValue.innerHTML = `${data.processedData[0].humidity}%`;
  windValue.innerHTML = `${data.processedData[0].windspeed}km/h`;
  uvIndexValue.innerHTML = `${data.processedData[0].uvindex}`;
}

export { processData };
