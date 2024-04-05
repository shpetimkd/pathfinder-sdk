import { Base } from "./base";
export declare class PathFinder extends Base {
    private readonly config;
    constructor(config: {
        apiKey: string;
        httpClient?: string;
    });
    getPath(): any;
}
