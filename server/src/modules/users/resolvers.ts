import * as bcrypt from "bcryptjs";
/*import {
  Resolver,
  Query,
  Mutation,
  Arg,
  ObjectType,
  Field,
  Ctx,
  UseMiddleware,
  Int
} from "type-graphql";*/

import { User } from "../../entity/User";
import auth from "../../middlewares/auth"
//import { MyContext } from "../../MyContext"

interface iUser {
  token?: string
  password?: string
  count?: number
  id?: number
}
/*
@ObjectType()
class User {
  @Field()
  token: string;
  
  @Field()
  count: number;
  
  @Field()
  id: number;
  
  @Field()
  email: string;
  
  @Field()
  password: string
  
  //@Field(() => User)
  //User
}*/

//@Resolver()
class UserModule {
  async me(_, req) {
    if(!req) {
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