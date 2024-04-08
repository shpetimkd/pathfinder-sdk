import { IGetNext } from '../types';
import { Base } from './base';
export declare class PathFinder extends Base {
    getNext(config: IGetNext): Promise<any>;
}
