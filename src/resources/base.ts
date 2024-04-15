import axios, { AxiosResponse } from 'axios';
import { IPayloadType } from '../types';

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

    return await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': this.apiKey,
        Cookie: token,
      },
    });
  }

  public async post<T>(path: string, body: IPayloadType, token?: string): Promise<T> {
    const url = `${this.baseUrl}${path}`;

    try {
      const response = await axios.post(url, body, {
        headers: {
          'Content-Type': 'application/json',
          'api-key': this.apiKey,
          Cookie: token,
          Authorization: 'test',
        },
      });

      return response.data;
    } catch (err) {
      throw err;
    }
  }
}
