import { PathFinder } from './resources/pathfinder';
import { Config } from './types';

export class Library {
  pathFinder: any;

  constructor(config: Config) {
    this.pathFinder = new PathFinder(config);
  }
}
