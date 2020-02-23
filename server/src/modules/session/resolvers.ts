//import { IResolvers } from "graphql-tools";
import * as bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";

import { User } from "../../entity/User";
import { ACCESS_TOKEN_SECRET, EXPIRES_IN } from "../../config/auth";

interface iUser {
  token ? : string
  password ? : string
  count ? : number
  id ? : number
}

class SessionModule {
  async login (_, { email, password }, { res }) {
      const user = await <iUser > User.findOne({ where: { email } });

      if (!user) {
        throw new Error('user not exist')
      }

      const valid = await bcrypt.compare(password, user.password as string);

      if (!valid) {
        throw new Error('password wrong')
      }

      const accessToken = sign({ userId: user.id }, ACCESS_TOKEN_SECRET, {
        expiresIn: EXPIRES_IN
      });

      user!.token = accessToken

      if (process.env.NODE_ENV !== 'test') res.cookie("access-token", accessToken, { maxAge: 60 * 60 * 24 * 7, httpOnly: true })

      return user;
  }
}

export default new SessionModule()