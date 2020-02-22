import { IResolvers } from "graphql-tools";
import * as bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";

import { User } from "./entity/User";
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from "./config/auth";

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

      const refreshToken = sign(
        { userId: user.id, count: user.count },
        REFRESH_TOKEN_SECRET,
        {
          expiresIn: "7d"
        }
      );
      const accessToken = sign({ userId: user.id }, ACCESS_TOKEN_SECRET, {
        expiresIn: "15min"
      });
      
      user!.token = accessToken
      console.log(user)
      res.cookie("refresh-token", refreshToken);
      res.cookie("access-token", accessToken);

      return user;
    }
  }
};
