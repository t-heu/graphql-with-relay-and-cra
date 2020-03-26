import { verify } from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from "../config/auth";

//import { MyContext } from "../MyContext";
/*
const auth = (request, response, next) => {
  const { authorization } = request.headers
  const tok = 
  
  if (!authorization) {
    return next()
  }

  try {
    console.log('B')
    const [, token] = authorization.split(' ')
    const data = verify(token, ACCESS_TOKEN_SECRET) as any;
    //console.log(data)
    (request as any).userId = data.userId
    
    return next()
  } catch (err) {
    console.log(err)
    throw new Error("token invalid");
  }
};*/

function auth(token: any) {
  try {

    const data = verify(token, ACCESS_TOKEN_SECRET) as string 
    return data.userId  
  } catch(err) {
    return false
  }
}

export default auth
