import { GraphQLDataSource } from 'apollo-datasource-graphql';
import { gql } from 'apollo-server-express';

export class EnsQuerySubgraph extends GraphQLDataSource {
  async getData() {
    const query = gql`{
        setENSNames {
          id
          name
        }
      }
    `;

    try {
      const response = await this.query(query);
      console.log(response.data.setENSNames)
      return response.data.setENSNames;
    } catch (error) {
        console.log(response)
      console.error(error);
    }
  }
}