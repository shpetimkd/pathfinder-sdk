import { AxiosResponse } from 'axios';
import { Config } from './types';
interface IPathFinder {
    get<T>(path: string, token?: string): Promise<AxiosResponse<any, any> | Awaited<T>>;
}
export declare class Library {
    pathFinder: IPathFinder;
    constructor(config: Config);
}
export {};
