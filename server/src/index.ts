import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import * as express from "express";
//import express from 'express'

import * as cookieParser from "cookie-parser";

import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
import { verify } from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from "./config/auth";

//const startServer = async () => {
class App {
  public app: express.Application
  private server: any
  
  public constructor() {
    this.app = express()
    this.server = new ApolloServer({
      // These will be defined for both new or existing servers
      typeDefs,
      resolvers,
      context: ({ req, res }: any) => ({ req, res })
    })
    
    this.middlewares()
    this.conect()
  }
  
  private async conect(): Promise<any> {
    await createConnection();
  }
  
  private middlewares(): void {
  this.app.use(cookieParser());

  this.app.use((req, _, next) => {
    const accessToken = req.cookies["access-token"];
    try {
      const data = verify(accessToken, ACCESS_TOKEN_SECRET) as any;
      (req as any).userId = data.userId;
    } catch {}
    next();
  });

  this.server.applyMiddleware({ app: this.app }); // app is from an existing express app
  }
};

export default new App().app

//startServer();
