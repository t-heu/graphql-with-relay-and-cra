import { verify } from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from "../config/auth";

import { MyContext } from "../MyContext";

const auth = <MyContext>(req, res, next) => {
  const { authorization } = req.headers
  
  if (!authorization) {
    return next()
  }

  try {
    const [, token] = authorization.split(' ')
    const data = verify(token, ACCESS_TOKEN_SECRET) as any;
    //console.log(data)
    (req as any).userId = data.userId
    
    return next()
  } catch (err) {
    console.log(err)
    throw new Error("token invalid");
  }
};

export default auth
