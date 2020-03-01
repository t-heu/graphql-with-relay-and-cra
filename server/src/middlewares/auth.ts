import { verify } from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from "../config/auth";

import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../MyContext";

const auth: MiddlewareFn<MyContext> = ({ context }, next) => {
  const authorization = context.req.headers.authorization;

  if (!authorization) {
    throw new Error("not authenticated");
  }

  try {
    const [, token] = authorization.split(' ')
    const data = verify(token, ACCESS_TOKEN_SECRET) as any;
    
    (req as any).userId = data.userId
  } catch (err) {
    console.log(err);
    throw new Error("not authenticated");
  }

  return next();
};

export default auth
/*
export default async (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) throw new Error("not authenticated")
  //return next()//return res.status(401).json({ error: 'Token not provided' });

  try {
    const [, token] = authHeader.split(' ')
    const data = verify(token, ACCESS_TOKEN_SECRET) as any;
    
    (req as any).userId = data.userId;

    //return next();
  } catch (err) {
    console.log(err)
    //return res.status(401).json({ error: 'Token Invalid' });
  }
  
  return next()
};*/