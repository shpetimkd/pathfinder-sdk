import { IGetNext } from '../types';
import { Base } from './base';

export class PathFinder extends Base {
  async getNext(config: IGetNext): Promise<any> {
    const { path, payload, token } = config || {};
    const nextPath: any = await this.post(path, payload, token);

    return {
      response: nextPath,
      actual: true,
    };

    if (!nextPath.path.length) {
      return {
        nextActionType: 'error',
      };
    }

    const detailsNextPath = nextPath.path.find((p) => p.id === nextPath.next);

    if (!detailsNextPath) {
      return {
        nextActionType: 'error',
      };
    }

    return {
      nextActionType: 'continue',
      url: getUrl(detailsNextPath.name, detailsNextPath.next),
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
