import "./styles.css";

const API_KEY = "SAT6EY6L4YMCXRXSGGRK2T8Q7";
const weatherSearchButton = document.querySelector("#weather-search-button");
const weatherSearchBox = document.querySelector("#weather-search");

weatherSearchButton.addEventListener("click", getData);

async function getData() {
  const location = weatherSearchBox.value;
  const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=${API_KEY}`;

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

function processData(data) {
  const processedData = [];
  console.log(data.days); // data for 15 days
  data.days.forEach((day) => {
    processedData.push(filterDayObject(day));
  });
  console.log(processedData); // processed (filtered) data
}

function filterDayObject(dayObject) {
  const keys = [
    "conditions",
    "datetime",
    "description",
    "sunrise",
    "sunset",
    "temp",
    "tempmax",
    "tempmin",
    "uvindex",
    "icon",
  ];

  const dailyData = Object.keys(dayObject)
    .filter((key) => keys.includes(key))
    .reduce((obj, key) => {
      obj[key] = dayObject[key];
      return obj;
    }, {});

  return dailyData;
}
