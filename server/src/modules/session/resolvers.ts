//import { IResolvers } from "graphql-tools";
import * as bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";

import { User } from "../../entity/User";
import { ACCESS_TOKEN_SECRET, EXPIRES_IN } from "../../config/auth";

interface iUser {
  token?: string
  password?: string
  count?: number
  id?: number
}

class SessionModule {
  async login (_: any, { email, password }: any) {
    const user = await <iUser>User.findOne({ where: { email } });

    if (!user) {
      throw new Error('user not exist')
    }

    const valid = await bcrypt.compare(password, user.password as string);

    if (!valid) {
      throw new Error('password wrong')
    }

    return {
      user,
      token: sign({ userId: user.id }, ACCESS_TOKEN_SECRET, {
        expiresIn: EXPIRES_IN
      })
    };
  }
}

export default new SessionModule()
