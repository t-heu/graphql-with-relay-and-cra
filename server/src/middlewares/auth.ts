import { verify } from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from '../config/auth'

type authT = {
  id: string
  iat: number
  exp: number
}

const auth = (request: any, requireAuth = true) => {
  const { authorization } = request.headers

  if (authorization) {
    const [, token] = authorization.split(' ')
    const { id } = verify(token, ACCESS_TOKEN_SECRET) as authT;
    
    return id
  }
  if (requireAuth) {
    throw new Error('Login in to access resource');
  }
  return null
}

export default auth