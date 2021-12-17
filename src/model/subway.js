import { path } from '../data/index.js';
import Path from './path.js';
import Dijkstra from '../utils/Dijkstra.js';
import { TEXT } from '../constant/index.js';

export default class Subway {
  constructor() {
    this.init();
    this.distanceDijkstra = new Dijkstra();
    this.timeDijkstra = new Dijkstra();
    this.createDijkstra();
  }

  init() {
    this.case = [];
    path.forEach((line) => {
      line.distance.forEach((dis, idx) => {
        this.case.push(
          new Path([line.point[idx], line.point[idx + 1]], dis, line.time[idx])
        );
      });
    });
    console.log(this.case);
  }

  createDijkstra() {
    this.case.forEach((cas) => {
      this.distanceDijkstra.addEdge(...cas.point, cas.distance);
      this.timeDijkstra.addEdge(...cas.point, cas.time);
    });
  }

  findShortestPath(type, departure, arrival) {
    if (type === TEXT.TYPE_TIME) {
      this.path = this.timeDijkstra.findShortestPath(departure, arrival);
    }
    if (type === TEXT.TYPE_DISTANCE) {
      this.path = this.distanceDijkstra.findShortestPath(departure, arrival);
    }
    if (!this.path) {
      return undefined;
    }
    this.distance = 0;
    this.time = 0;
    for (let i = 0; i < this.path.length - 1; i += 1) {
      this.case.forEach((cas) => {
        if (cas.included(this.path[i], this.path[i + 1])) {
          this.distance += cas.distance;
          this.time += cas.time;
        }
      });
    }
    return this.path;
  }
}
