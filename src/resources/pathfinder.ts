import { Base } from './base';
const resourceName = 'status';

export class PathFinder extends Base {
//   getPostById(id: number): Promise<any> {
//     return this.request(`/${resourceName}/${id}`);
//   }

  getPath(newPost: any): Promise<any> {
    return this.request(`/${resourceName}`, {
      method: 'POST',
      body: JSON.stringify(newPost),
    });
  }
}
