import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String!
    token: String
  }

  type Query {
    me: User
  }
  
  type Mutation {
    register(email: String!, password: String!): Boolean!
    login(email: String!, password: String!): User
    updateUser(password: String): User
    deleteUser(id: ID!): Boolean
  }
`;

/*
 *fragmento so funciona em graphiql(playground) ele server como uma forma de evitar repetições em blocos
exemplo de uso
fragment Dash on User {
  email
  id
}
*/