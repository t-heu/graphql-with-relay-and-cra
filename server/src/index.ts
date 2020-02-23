import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import * as express from "express";
import * as helmet from "helmet"
import * as cookieParser from "cookie-parser";

import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
//import { verify } from "jsonwebtoken";
//import { ACCESS_TOKEN_SECRET } from "./config/auth";
import auth from './middlewares/auth'

//const startServer = async () => {
class App {
  public express: express.Application
  private server: any
  
  public constructor() {
    this.express = express()
    this.server = new ApolloServer({
      // These will be defined for both new or existing servers
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
  /*this.app.use((req, _, next) => {
    const accessToken = req.cookies["access-token"];
    console.log(accessToken)
    try {
      const data = verify(accessToken, ACCESS_TOKEN_SECRET) as any;
      (req as any).userId = data.userId;
    } catch {
      console.log('err')
    }
    next();
  })*/

  this.server.applyMiddleware({ app: this.express }); // app is from an existing express app
  }
};

export default new App().express