export const dateArrayToString = dateArray => {
  const [year, month, date, hour, minute] = dateArray;
  const dateString = `${year}-${month}-${date} ${hour}:${minute}`;
  return dateString;
};

export const StringToDateArray = () => {};
