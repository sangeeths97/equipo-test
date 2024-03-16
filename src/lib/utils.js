import { parseISO, format, differenceInYears } from "date-fns";

export const formatDate = (isoDateString) => {
  const date = parseISO(isoDateString);
  const formattedDate = format(date, "dd-MMM-yyyy");
  return formattedDate;
};

export const findAge = (isoDateString) => {
  const birthdate = parseISO(isoDateString);

  const today = new Date();

  const age = differenceInYears(today, birthdate);
  return age;
};
