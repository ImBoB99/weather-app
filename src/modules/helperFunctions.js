import { format } from "date-fns";

function getIcon(iconName) {
  // Load all images in the `src/images` directory with `.svg`, `.png`, `.jpg`, etc. extensions
  // eslint-disable-next-line no-undef
  const icons = require.context(
    "../images",
    false,
    /\.(png|svg|jpg|jpeg|gif)$/i,
  );
  const iconPath = `./${iconName}.svg`; // dynamically generate the file path
  return icons(iconPath); // require.context makes func that accepts string relative file path
}

function getMeasurementUnits(type) {
  // look up state for current measurement type (metric or us)
  return type === "metric"
    ? { temp: "°C", speed: "km/h" }
    : { temp: "°F", speed: "mph" };
}

function formatDateAndTime(date) {
  const formattedTime = format(new Date(), "hh:mm a");
  const formattedDate = format(date, "dd/MM/yyyy");

  return { formattedTime, formattedDate };
}
export { getIcon, getMeasurementUnits, formatDateAndTime };
