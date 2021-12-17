export default class Path {
  constructor(point, distance, time) {
    this.point = point;
    this.distance = distance;
    this.time = time;
  }

  included(start, departure) {
    return this.point.includes(start) && this.point.includes(departure);
  }
}
