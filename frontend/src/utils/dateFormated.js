import { format } from "date-fns";

function dateFormat(date, dateFormat){
  let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;
  let dateFormated = format(onlyDate, dateFormat);

  return dateFormated;
}

export default dateFormat;