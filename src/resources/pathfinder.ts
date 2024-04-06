import { Base } from "./base";
const resourceName = "status";
import axios from "axios";

const baseUrl = 'http://localhost:4010';
export class PathFinder extends Base {
  //   getPostById(id: number): Promise<any> {
  //     return this.request(`/${resourceName}/${id}`);
  //   }

  getPath(): any {
    axios
      .get('http://localhost:4000/status', {
        headers: {
          Cookie: "cookie1=value; cookie2=value; cookie3=value;",
        },
      })
      .then((response) => {
        console.log(response);
      });
  }

  // Inside your SDK's method
async fetchData(endpoint: string, options?: { cookies?: string }): Promise<any> {
  try {
    const { cookies } = options || {};
    const response = await axios.get(`${baseUrl}/${endpoint}`, {
      headers: {
        Authorization: `Bearer somebearertoken`,
        Cookie: cookies,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

}
