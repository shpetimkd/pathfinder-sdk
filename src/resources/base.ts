import axios, { AxiosResponse } from 'axios';

type Config = {
  apiKey: string;
  baseUrl?: string;
};

export abstract class Base {
  private baseUrl: string;
  private apiKey: string;

  constructor(config: Config) {
    this.baseUrl = config.baseUrl;
    this.apiKey = config.apiKey;
  }

  public async get<T>(path: string, token?: string): Promise<AxiosResponse<any, any> | Awaited<T>> {
    const url = `${this.baseUrl}${path}`;

    return await axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
          'api-key': this.apiKey,
          Cookie: token,
        },
      })
      .then((response) => {
        if ([200, 201, 204].includes(response.status)) {
          return response;
        }
        throw new Error(response.statusText);
      });
  }
}
