import { AxiosResponse } from 'axios';
import { Config, IGetNext } from './types';
interface IPathFinder {
    get<T>(path: string, token?: string): Promise<AxiosResponse<any, any> | Awaited<T>>;
    getNext(config: IGetNext): Promise<any>;
}
export declare class Library {
    pathFinder: IPathFinder;
    constructor(config: Config);
}
export {};
