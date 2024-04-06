import { Base } from "./base";
export declare class PathFinder extends Base {
    getPath(): any;
    fetchData(endpoint: string, options?: {
        cookies?: string;
    }): Promise<any>;
}
