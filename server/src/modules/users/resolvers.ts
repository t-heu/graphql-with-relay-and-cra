import * as bcrypt from "bcryptjs";
import { Request } from 'express';

import { User } from "../../entity/User";
import auth from '../../middlewares/auth'

interface iUser {
  token?: string
  password?: string
  count?: number
  id?: number
}

interface IReq {
  req: Request
}

class UserModule {
  async me(_: any, root: any, { req }: IReq) {
    const id = auth(req) as string
    
    return await User.findOne(id)
  }
  
  async register(_: any, { email, password }: any) {
    const user = await <iUser>User.findOne({ where: { email } });
      
    if (user) {
      throw new Error('user exist')
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    await User.create({
      email,
      password: hashedPassword
    }).save();

    return true;
  }
};

export default new UserModule()
