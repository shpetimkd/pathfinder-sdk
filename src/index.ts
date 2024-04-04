import { PathFinder } from './resources/pathfinder';

export class Library {
  pathFinder: any;

  constructor(config: { apiKey: string; baseUrl?: string }) {
    this.pathFinder = new PathFinder(config);
  }
}
