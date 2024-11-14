import cityData from "../cities.json";
import { getData } from "./getData.js";

const cities = cityData;

function citySearchSuggestions(cityInput, suggestionsBox) {
  const query = cityInput.value.toLowerCase().trim();

  if (query.length >= 3) {
    suggestionsBox.style.display = "block";

    const filteredCities = cities.filter((city) =>
      city.city.toLowerCase().includes(query),
    );

    suggestionsBox.innerHTML = ""; // Clear previous suggestions

    filteredCities.slice(0, 10).forEach((city) => {
      const suggestion = document.createElement("div");
      suggestion.classList.add("suggestion");
      suggestion.textContent = `${city.city}, ${city.country}`;

      suggestion.addEventListener("click", () => {
        cityInput.value = `${city.city}`;
        suggestionsBox.innerHTML = ""; // Clear suggestions
        suggestionsBox.style.display = "none"; // Hide suggestions
        getData(city.city); // Fetch weather for the selected city
      });

      suggestionsBox.appendChild(suggestion); // Append the suggestion to the container
    });
  } else {
    suggestionsBox.style.display = "none"; // Hide if input length < 3
  }
}

export { citySearchSuggestions };
