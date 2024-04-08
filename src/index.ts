import { AxiosResponse } from 'axios';
import { PathFinder } from './resources/pathfinder';
import { Config, IGetNext } from './types';

interface IPathFinder {
  get<T>(path: string, token?: string): Promise<AxiosResponse<any, any> | Awaited<T>>;
  getNext(config: IGetNext): Promise<any>;
}

export class Library {
  pathFinder: IPathFinder;

  constructor(config: Config) {
    this.pathFinder = new PathFinder(config);
  }
}
