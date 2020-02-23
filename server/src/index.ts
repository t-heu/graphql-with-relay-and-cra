import "reflect-metadata";
/*import dotenv from 'dotenv'
dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})*/
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import * as express from "express";
import * as helmet from "helmet"
import * as cookieParser from "cookie-parser";

import { typeDefs } from "./typeDefs";
import { resolvers } from "./modules";
import auth from './middlewares/auth'

class App {
  public express: express.Application
  private server: any
  
  public constructor() {
    this.express = express()
    this.server = new ApolloServer({
      typeDefs,
      resolvers,
      context: ({ req, res }: any) => ({ req, res })
    })
    
    this.conect()
    this.middlewares()
  }
  
  private async conect(): Promise<any> {
    await createConnection();
  }
  
  private middlewares(): void {
    this.express.use(helmet())
  this.express.use(cookieParser())
  this.express.use(auth)

  this.server.applyMiddleware({ app: this.express });
  }
};

export default new App().express