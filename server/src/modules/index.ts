import UserModule from './users/resolvers'
import SessionModule from './session/resolvers'

import { IResolvers } from "graphql-tools";

export const resolvers: IResolvers = {
  Query: {
    me: UserModule.me,
  },
  
  Mutation: {
    register: UserModule.register,
    login: SessionModule.login
  }
}
