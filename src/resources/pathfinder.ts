import { Base } from "./base";
const resourceName = "status";
import axios from "axios";

export class PathFinder extends Base {
  private readonly config: any;
  constructor(config: { apiKey: string; httpClient?: string }) {
    super(config);
    this.config = config;
  }
  //   getPostById(id: number): Promise<any> {
  //     return this.request(`/${resourceName}/${id}`);
  //   }

  getPath(): any {
    return this.config;
    // axios
    //   .get('http://localhost:4000/status', {
    //     headers: {
    //       Cookie: "cookie1=value; cookie2=value; cookie3=value;",
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   });
    // return fetch('http://localhost:4000/status', {
    //   credentials: 'include',
    //   mode: 'cors',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization:
    //       'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MTIyMzY2MDMsImV4cCI6MTc0Mzc3MjYwMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.ZeFIty-RmaR5jyo5zit8EJMaQ_8xevhr1w9tV5osb9M'
    //   }
    // }).then(response => response.json());
  }
}
