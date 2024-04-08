import { Base } from './base';

export class PathFinder extends Base {
  async getNext(config: { path: string; token: string }): Promise<any> {
    try {
      const { path, token } = config || {};
      const response = await this.get(path, token);
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
}
