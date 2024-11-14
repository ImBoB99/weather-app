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
    "precipprob",
    "humidity",
    "windspeed",
  ];

  const dailyData = Object.keys(dayObject)
    .filter((key) => keys.includes(key))
    .reduce((obj, key) => {
      obj[key] = dayObject[key];
      return obj;
    }, {});

  return dailyData;
}

export { filterDayObject };
