import { API } from './api/index.js'
const api = new API()
export class EnsQuerySubgraph {
  async getData() {
    try {
      const response = await api.getENSNames()
      return response.setENSNames;
    } catch (error) {
      console.error(error);
    }
  }
}