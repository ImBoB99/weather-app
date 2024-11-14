import { filterDayObject } from "./filterDayObject";
import { displayData } from "./displayData";

function processData(data) {
  const processedDataObject = {};
  processedDataObject.processedData = [];
  processedDataObject.resolvedAddress = data.resolvedAddress;
  processedDataObject.currentTemp = data.currentConditions.temp;
  processedDataObject.currentFeelsLike = data.currentConditions.feelslike;
  processedDataObject.icon = data.currentConditions.icon;
  data.days.forEach((day) => {
    processedDataObject.processedData.push(filterDayObject(day));
  });
  displayData(processedDataObject);
}

export { processData };
