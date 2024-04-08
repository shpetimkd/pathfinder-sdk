export enum EventTypes {
  CALIPER = 'Caliper',
  NEXT = 'Next',
}
export interface Config {
  baseUrl: string;
  apiKey: string;
  token?: string;
}

export interface IGetNext {
  path: string;
  payload: IPayloadType;
  token: string;
}

export interface ICaliperEventType {
  data: {
    [key: string]: string | number | object | Array<any> | boolean | Date | null | undefined | any;
  };
  dataVersion: string;
  sendTime: string;
  sensor: string;
}

export interface INextPathEventType {
  completedActivityId?: string;
}

export interface IPathFinderType {
  type?: EventTypes;
  body?: ICaliperEventType;
}

export interface IPayloadType {
  next?: boolean;
  events?: IPathFinderType[];
}
