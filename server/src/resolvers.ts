import { IResolvers } from "graphql-tools";
import * as bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";

import { User } from "./entity/User";
import { ACCESS_TOKEN_SECRET, EXPIRES_IN } from "./config/auth";

interface iUser {
  token?: string
  password?: string
  count?: number
  id?: number
}

export const resolvers: IResolvers = {
  Query: {
    me: (_, __, { req }) => {
      if (!req.userId) {
        return null;
      }

      return User.findOne(req.userId);
    }
  },
  Mutation: {
    register: async (_, { email, password }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      
      await User.create({
        email,
        password: hashedPassword
      }).save();

      return true;
    },
    login: async (_, { email, password }, { res }) => {
      const user = await <iUser>User.findOne({ where: { email } });
      
      if (!user) {
        return null;
      }

      const valid = await bcrypt.compare(password, user.password as string);
      
      if (!valid) {
        throw new Error('password wrong')
      }
      
      const accessToken = sign({ userId: user.id }, ACCESS_TOKEN_SECRET, {
        expiresIn: EXPIRES_IN
      });
      
      user!.token = accessToken
      
      res.cookie("access-token", accessToken, { maxAge: 60 * 60 * 24 * 7, httpOnly: true })

      return user;
    }
  }
};
