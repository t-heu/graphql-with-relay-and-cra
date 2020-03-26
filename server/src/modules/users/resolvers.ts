import * as bcrypt from "bcryptjs";

import { User } from "../../entity/User";

//import { MyContext } from "../../MyContext"
import auth from '../../middlewares/auth'

interface iUser {
  token?: string
  password?: string
  count?: number
  id?: number
}

class UserModule {
  async me(_, root, { req }: any) {
    console.log(req.cookies)
    if(!auth(req.cookies['access-token'])) {
      throw Error('You are not authenticated!')
    }
    
    return await User.findOne(req.userId)
  }
  
  async register(_, { email, password }) {
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
    
  /*async update(_, {}, { res }) {
  
    return ['update']
  },
    
  async delete(_, {}, { res }) {
  
    return ['delete']
  }*/
};

export default new UserModule()
