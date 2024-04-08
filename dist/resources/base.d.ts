import { AxiosResponse } from 'axios';
type Config = {
    apiKey: string;
    baseUrl?: string;
};
export declare abstract class Base {
    private baseUrl;
    private apiKey;
    constructor(config: Config);
    get<T>(path: string, token?: string): Promise<AxiosResponse<any, any> | Awaited<T>>;
}
export {};
