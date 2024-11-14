function displayLoader() {
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

  const span = document.createElement("span");
  span.classList.add("loader");

  // Iterate over each DOM element and append the loader span
  Object.values(domElements).forEach((item) => {
    if (item) {
      // Check if the element exists in the DOM
      item.append(span.cloneNode(true)); // Clone span for each element to avoid moving the same span
    }
  });
}

export { displayLoader };
