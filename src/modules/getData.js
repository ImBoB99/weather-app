import { processData } from "./processData";
import { state } from "./state";

const API_KEY = "SAT6EY6L4YMCXRXSGGRK2T8Q7";

async function getData(location) {
  const measurement = state.currentMeasurement;
  const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=${API_KEY}&unitGroup=${measurement}`;

  if (location === "" || location === null) {
    return console.log("Location must be filled in");
  }

  state.currentSearchLocation = location;

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
