import "./styles.css";
import "./modules/eventListeners.js";
import { getData } from "./modules/getData.js";

// initially display weather for London
window.onload = () => {
  getData("London"); // This will run after everything (DOM, CSS, JS, images, etc.) is loaded
};
