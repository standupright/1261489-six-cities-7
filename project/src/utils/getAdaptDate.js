import { MONTHS } from '../const';

export const getAdaptDate = (date) => {
  const aDate = new Date(date);
  const adaptDate = `${MONTHS[aDate.getMonth()]} ${aDate.getFullYear()}`;
  return adaptDate;
};
