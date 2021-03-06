import "reflect-metadata";
import { createConnection } from "typeorm";
import { makeExecutableSchema } from "graphql-tools"
import { graphql } from 'graphql'

import { typeDefs } from "../../src/typeDefs";
import { resolvers } from "../../src/modules";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

// teste de integração de auto nível
describe("rotas", () => {
  beforeAll(async () => {
    await createConnection();
  })

  //afterAll(async () => {})

  beforeEach(async () => {
    //await User.deleteMany({})
  })
  
  it("create registre", async () => {
    const email = 'mthg@gmail.com'
    const password = '1245'
  
    const mutation = `
        mutation {
          register(email: "${email}", password: "${password}")
        }
      `
  
    const res = await graphql(schema, mutation, {}, { email, password })
    
    expect(res.data.register).toBe(true) //toMatchObject({ })
  })

  it("user exist", async () => {
    const email = 'math@gmail.com'
    const password = '1245'
    
    const mutation = `
      mutation {
        register(email: "${email}", password: "${password}")
      }
    `
    
    const res = await graphql(schema, mutation, {}, { email, password })
    
    expect(res.errors[0].message).toBe('user exist')//toMatchObject({ })
  })
  
  it("password wrong", async () => {
    const email = 'math@gmail.com'
    const password = '1234'
    
    const mutation = `
      mutation {
        login(email: "${email}", password: "${password}") {
          token
          email
        }
      }
    `
    
    const res = await graphql(schema, mutation, {}, { email, password })
    
    expect(res.errors[0].message).toBe('password wrong')
  })
})