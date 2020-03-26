import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import * as express from "express";
import * as helmet from "helmet"
import * as cors from "cors"
import * as cookieParser from "cookie-parser";

import routes from './routes'
import { typeDefs } from "./typeDefs";
import { resolvers } from "./modules";

class App {
  public express: express.Application
  private server: any
  
  public constructor() {
    this.express = express()
    
    this.conect()
    this.middlewares()
  }
  
  private async conect(): Promise<any> {
    await createConnection();
  }
  
  private async middlewares(): Promise<any> {
    this.express.use(cors({
      origin: 'http://localhost:3000',
      credentials: true
    }))
    this.express.use(helmet())
    this.express.use(cookieParser())
    this.express.use(express.json())
    this.express.use('/api', routes)

    const ap = new ApolloServer({
      typeDefs,
      resolvers,
      context: ({ req, res }: any) => ({ req, res })
    })
 
    ap.applyMiddleware({ app: this.express, cors: false });
  }
};

export default new App().express
