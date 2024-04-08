import { Base } from './base';
export declare class PathFinder extends Base {
    getNext(config: {
        path: string;
        token: string;
    }): Promise<any>;
}
