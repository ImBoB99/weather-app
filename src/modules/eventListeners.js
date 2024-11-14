import { state } from "./state.js";
import { getData } from "./getData.js";

const weatherSearchButton = document.querySelector("#weather-search-button");
const weatherSearchBox = document.querySelector("#weather-search");
const measurementToggle = document.querySelector("#measurementToggle");

weatherSearchButton.addEventListener("click", () => {
  const location = weatherSearchBox.value;
  getData(location);
});

weatherSearchBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    weatherSearchButton.click();
  }
});

measurementToggle.addEventListener("change", () => {
  state.currentMeasurement =
    state.currentMeasurement === "metric" ? "us" : "metric";
  if (state.currentSearchLocation !== null) {
    getData(state.currentSearchLocation); // call api and retrieve new data
  }
});
