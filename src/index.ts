import { PathFinder } from './resources/pathfinder';

export class Library {
  pathFinder: any;

  constructor(config: { apiKey: string; httpClient?: string }) {
    this.pathFinder = new PathFinder(config);
  }
}
