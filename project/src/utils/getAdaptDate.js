import { MONTHS } from '../const';

export const getAdaptDate = (date) => {
  const aDate = new Date(date);
  const verboseDate = `${MONTHS[aDate.getMonth()]} ${aDate.getFullYear()}`;
  return verboseDate;
};
