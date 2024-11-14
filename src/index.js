import "./styles.css";
import { getData } from "./modules/getData.js";

const weatherSearchButton = document.querySelector("#weather-search-button");
const weatherSearchBox = document.querySelector("#weather-search");

weatherSearchButton.addEventListener("click", getData);
weatherSearchBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    weatherSearchButton.click();
  }
});
