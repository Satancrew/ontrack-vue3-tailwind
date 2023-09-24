import { MIDNIGHT_HOUR, NAV_ITEMS, HOURS_IN_DAY } from './constants';

export const isPageValid = (page) => {
  return Object.keys(NAV_ITEMS).includes(page);
};

export const validateTimelineItems = (timelimeItems) => {
  return timelimeItems.every(isTimelineItemValid);
};

export const isTimelineItemValid = ({ hour }) => {
  return isHourValid(hour);
};

export const validateSelectOptions = (options) => {
  return options.every(isSelectOptionValid);
};

export const isUndefinedOrNull = (value) => {
  return isNull(value) || isUndefined(value);
};

export const isNumberOrNull = (value) => {
  return isNumber(value) || isNull(value);
};

// Проверка типов
const isNull = (value) => {
  return value === null;
};

const isUndefined = (value) => {
  return value === undefined;
};

const isNumber = (value) => {
  return typeof value === 'number';
};

const isString = (value) => {
  return typeof value === 'string';
};

// Проверка временного интервала
const isBetween = (value, start, end) => {
  return value >= start && value < end;
};

// Проверка валидности опции выпадающего списка
const isSelectOptionValid = ({ value, label }) => {
  return isNumber(value) && isString(label);
};

// Проверка валидности часа
export const isHourValid = (hour) => {
  return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY);
};
