const shipLookup = {
  carrier: "C5",
  battleship: "B4",
  cruiser: "C3",
  submarine: "S3",
  destroyer: "D2",
};

const getKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
};

export { getKeyByValue, shipLookup };
