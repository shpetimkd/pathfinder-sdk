import { IGetNext } from '../types';
import { Base } from './base';

export class PathFinder extends Base {
  async getNext(config: IGetNext): Promise<any> {
    try {
      const { path, token } = config || {};
      return await this.get(path, token);
    } catch (error) {
      throw error;
    }
  }
}
