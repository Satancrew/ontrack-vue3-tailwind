import { PAGE_TIMELINE, HOURS_IN_DAY, MIDNIGHT_HOUR } from './constants';
import { isPageValid } from './validator';

// Берем название страницы и сохраняем ее в хеш, если ее нет, то ставим страницу timeline
export const normalizePageHash = () => {
  const page = window.location.hash.slice(1);

  if (isPageValid(page)) {
    return page;
  } else {
    window.location.hash = PAGE_TIMELINE;
  }
  return PAGE_TIMELINE;
}

// Генерируем часы от полуночи до 24 
export const generateTimelineItems = () => {
  const timelimeItems = [];

  for (let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
    timelimeItems.push({ hour });
}

  return timelimeItems
} 