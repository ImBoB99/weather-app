import { state } from "./state.js";
import { getData } from "./getData.js";
import { citySearchSuggestions } from "./citySearchSuggestions.js";

const weatherSearchButton = document.querySelector("#weather-search-button");
const weatherSearchBox = document.querySelector("#weather-search");
const measurementToggle = document.querySelector("#measurementToggle");
const citySuggestionsContainer = document.querySelector("#city-suggestions");

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

weatherSearchBox.addEventListener("input", () => {
  citySearchSuggestions(weatherSearchBox, citySuggestionsContainer);
});

weatherSearchBox.addEventListener("click", () => {
  citySearchSuggestions(weatherSearchBox, citySuggestionsContainer);
});

// Event listener to hide citySuggestionsContainer when clicking outside
document.addEventListener("click", (event) => {
  if (
    !citySuggestionsContainer.contains(event.target) && // Click outside suggestions
    !weatherSearchBox.contains(event.target) // Click outside search box
  ) {
    citySuggestionsContainer.style.display = "none"; // Hide suggestions
  }
});
