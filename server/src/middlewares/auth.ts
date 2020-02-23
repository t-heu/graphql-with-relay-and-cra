import { verify } from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from "../config/auth";

export default async (req: any, res: any, next: any) => {
  const accessToken = req.cookies["access-token"];

  try {
    const data = verify(accessToken, ACCESS_TOKEN_SECRET) as any;
    (req as any).userId = data.userId;
    
  } catch(err) {
    console.log('failed')
  }
  
  next();
}
