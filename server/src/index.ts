import "reflect-metadata";
/*import dotenv from 'dotenv'
dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})*/
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql"
import * as express from "express";
import * as helmet from "helmet"
import * as cors from "cors"
import * as cookieParser from "cookie-parser";

import { typeDefs } from "./typeDefs";
import { resolvers } from "./modules";
import UserModule from "./modules/users/resolvers"
import auth from './middlewares/auth'

class App {
  public express: express.Application
  private server: any
  
  public constructor() {
    this.express = express()
    
    this.conect()
    this.middlewares()
  }
  
  async init(): Promise<any> {
    const ap = new ApolloServer({
      typeDefs,
      schema: await buildSchema({
        resolvers: [resolvers]
      }),
      context: ({ req, res }: any) => ({ req, res })
    })
    
    return ap
  }
  
  private async conect(): Promise<any> {
    await createConnection();
  }
  
  private async middlewares(): void {
    this.express.use(cors())
    this.express.use(helmet())
    this.express.use(cookieParser())
    //this.express.use(express.json())
    //this.express.use(auth)

    //this.server
    const ap = new ApolloServer({
      //typeDefs,
      schema: await buildSchema({
        resolvers: [UserModule]
      }),
      context: ({ req, res }: any) => ({ req, res })
    })
 
    ap.applyMiddleware({ app: this.express, cors: false });
  }
};

export default new App().express