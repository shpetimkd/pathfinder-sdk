import { IGetNext } from '../types';
import { Base } from './base';

export class PathFinder extends Base {
  async getNext(config: IGetNext): Promise<any> {
    const { path, payload, token } = config || {};
    return await this.post(path, payload, token);
  }
}

// const getUrl = (gameName: string, gameId?: string) => {
//   switch (gameName) {
//     case 'Swap-Hop':
//       return `https://https://platform-game-viewer.dev.magpie.org/${gameId}`;
//     case 'SWR':
//       return 'https://assessments.dev.magpie.org/swr/tutorial';
//     case 'Letter-Sounds':
//       return 'https://assessments.dev.magpie.org/letter-sounds/tutorial';
//     default:
//       return '';
//   }
// };
