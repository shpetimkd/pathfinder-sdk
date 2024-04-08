import { IGetNext } from '../types';
import { Base } from './base';

export class PathFinder extends Base {
  async getNext(config: IGetNext): Promise<any> {
    try {
      const { path, payload, token } = config || {};
      return await this.post(path, payload, token);
    } catch (error) {
      throw error;
    }
  }
}
