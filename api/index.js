import { request, gql } from 'graphql-request'
import { SUBGRAPH_URL } from '../constants.js'
export class API {
  async getENSNames() {
    const query = gql`{
        setENSNames {
          id
          name
        }
      }
    `;

    try {
      const data = await request(SUBGRAPH_URL, query)
      const json = JSON.parse(JSON.stringify(data))
      return json
    } catch (err) {
      return err
    }
  }
}