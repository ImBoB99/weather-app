import { processData } from "./processData";

const API_KEY = "SAT6EY6L4YMCXRXSGGRK2T8Q7";
const weatherSearchBox = document.querySelector("#weather-search");

async function getData() {
  const location = weatherSearchBox.value;
  const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=${API_KEY}&unitGroup=metric`;

  if (location === "" || location === null) {
    return console.log("Location must be filled in");
  }

  try {
    const response = await fetch(URL, { mode: "cors" });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const weatherData = await response.json();
    processData(weatherData);
  } catch (error) {
    console.error(error.message);
  }
}

export { getData };
