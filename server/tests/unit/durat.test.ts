import "reflect-metadata";
import { createConnection } from "typeorm";
import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import { makeExecutableSchema } from "graphql-tools"

/*
var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        },
      },
    },
  }),
});*/

import { typeDefs } from "../../src/typeDefs";
import { resolvers } from "../../src/resolvers";
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
  /*: {
    Mutation: {
      register: (root, args) => true//({ email: "Ada", password: "Lovelace" })
    }
  }*/
});

describe("rotas", () => {
  beforeAll(async () => {
    await createConnection();
  })

  //afterAll(async () => {})

  beforeEach(async () => {
    //await User.deleteMany({})
  })

  it("POST", async () => {
    const email = 'jhon@'
    const password = 'boboIsMyPsswrd'
    
    const mutation = `
      mutation {
        register(email: "jggg@gmail.com", password: "1245")
      }
    `
    
    const res = await graphql(schema, mutation, {}, { email, password })
    console.log(res)
    expect(res.data.register).toBe(true)//toMatchObject({ })
  })
})