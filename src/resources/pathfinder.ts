import { IGetNext, NextActionType, NextPathResponse } from '../types';
import { Base } from './base';

export class PathFinder extends Base {
  async getNext(config: IGetNext): Promise<any> {
    const { path, payload, token } = config || {};
    const nextPath: NextPathResponse = await this.post(path, payload, token);

    if (!nextPath.path.length) {
      return {
        nextActionType: NextActionType.ERROR,
      };
    }

    const detailsNextPath = nextPath.path.find((p) => p.id === nextPath.next);

    if (!detailsNextPath) {
      return {
        nextActionType: NextActionType.ERROR,
      };
    }

    return {
      nextActionType: NextActionType.CONTINUE,
      url: getUrl(detailsNextPath.name, detailsNextPath.id),
      activityTemplateSlug: detailsNextPath.name,
      activityTemplateGameName: detailsNextPath.name,
      lessonDisplayName: detailsNextPath.name,
    };
  }
}

const getUrl = (gameName: string, gameId?: string) => {
  switch (gameName) {
    case 'Swap-Hop':
      return `https://https://platform-game-viewer.dev.magpie.org/${gameId}`;
    case 'SWR':
      return 'https://assessments.dev.magpie.org/swr/tutorial';
    case 'Letter-Sounds':
      return 'https://assessments.dev.magpie.org/letter-sounds/tutorial';
    default:
      return '';
  }
};
