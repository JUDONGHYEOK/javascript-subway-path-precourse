import { ERROR, LEN } from '../constant/index.js';

function isEmpty(text) {
  return text === '';
}

function isOverLength(text, len) {
  return text.length >= len;
}

function isIncluded(station, data) {
  return data.includes(station);
}

function isSameStation(departure, arrival) {
  return departure === arrival;
}

export default function validateStaions(departure, arrival, data) {
  if (isEmpty(departure) || isEmpty(arrival)) {
    return ERROR.EMPTY;
  }
  if (!isOverLength(departure, LEN.MIN) || !isOverLength(arrival, LEN.MIN)) {
    return ERROR.NOT_OVER_MIN_LENGTH;
  }
  if (!isIncluded(departure, data) || !isIncluded(arrival, data)) {
    return ERROR.NOT_IN_DATA;
  }
  if (isSameStation(departure, arrival)) {
    return ERROR.SAME_STATIONS;
  }
  return null;
}
