import express from "express"
import { ApolloServer, gql } from 'apollo-server-express'

import { PORT } from './constants.js'
import { EnsQuerySubgraph } from './datasource.js'
import { ENS } from "./services/ens.js"

const typeDefs = gql`
  type ENS {
    id: String
    name: String
  }

  type Query {
    ENS: [ENS]!
  }
`;

const dataSources = () => ({
  ens: new EnsQuerySubgraph(),
})

const resolvers = {
  Query: {
    ENS: async (_, __, { dataSources }) => {
      return await dataSources.ens.getData();
    },
  }
}

/*
* Create an apollo server to eventually 
* subscribe to SetENSName events
*/

const server = new ApolloServer({
  typeDefs,
  dataSources: dataSources,
  resolvers: resolvers
});

await server.start();

const app = express();
server.applyMiddleware({ app });

await new Promise(resolve => app.listen({ port: PORT }, resolve));
console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);

// initialize service
const ens = new ENS()
ens.pollNames()