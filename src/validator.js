import { MIDNIGHT_HOUR, NAV_ITEMS } from './constants';
import { HOURS_IN_DAY } from './constants';

export const isPageValid = (page) => {
  return Object.keys(NAV_ITEMS).includes(page);
};

export const validateTimelineItems = (timelimeItems) => {
  return timelimeItems.every(isTimelineItemValid);
};

export const isTimelineItemValid = ({ hour }) => {
  return typeof hour === 'number' && hour >= MIDNIGHT_HOUR && hour < HOURS_IN_DAY;
};

export const validateSelectOptions = (options) => {
  return options.every(isSelectOptionValid);
};

const isSelectOptionValid = ({ value, label }) => {
  return typeof value === 'number' && typeof label === 'string';
};
