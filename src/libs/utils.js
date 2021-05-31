export const dateArrayToString = dateArray => {
  const [year, month, date, hour, minute] = dateArray;
  const decHour = `0${hour}`.slice(-2);
  const decMinute = `0${minute}`.slice(-2);
  const dateString = `${year}-${month}-${date}     ${decHour}:${decMinute}`;
  return dateString;
};

export const StringToDateArray = () => {};
