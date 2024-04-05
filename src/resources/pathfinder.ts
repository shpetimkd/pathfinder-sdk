import { Base } from './base';
const resourceName = 'status';

export class PathFinder extends Base {
//   getPostById(id: number): Promise<any> {
//     return this.request(`/${resourceName}/${id}`);
//   }

  getPath(): any {
    return fetch('http://localhost:4000/status', {
      credentials: 'include'
    }).then(response => response.json());
  }
}
