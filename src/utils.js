import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE, HOURS_IN_DAY } from './constants';

export const normalizePageHash = () => {
  const hash = window.location.hash.slice(1);

  if ([PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS].includes(hash)) {
    return hash;
  } else {
    window.location.hash = PAGE_TIMELINE;
  }
  return PAGE_TIMELINE;
}

export const generateTimelineItems = () => {
  const timelimeItems = [];

  for (let hour = 0; hour < HOURS_IN_DAY; hour++) {
    timelimeItems.push({ hour });
}

  return timelimeItems
} 