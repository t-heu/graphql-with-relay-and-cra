import 'reflect-metadata';
import express, {Request, Response} from 'express'
import { ApolloServer } from 'apollo-server-express'

import createConnection from './database'
import { typeDefs } from "./typeDefs";
import { resolvers } from "./modules";

interface Ia {
  req: Request;
  res: Response;
}

const app = express();
createConnection()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }: Ia) => ({ req, res })
})

server.applyMiddleware({ app, cors: false });

// private GraphQL API
//app.use('/graphql', (req, res, next) => auth(req, res, next));

app.listen(process.env.PORT || 3333)
console.log(`🚀  Server ready`)