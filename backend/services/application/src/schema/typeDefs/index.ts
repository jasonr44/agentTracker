const typeDefs = `
  type GreetingResponse {
    greeting: String
  }

  type Query {
    hello: String
  }

  type Mutation {
    sayHello(
      name: String
    ): GreetingResponse
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

export default typeDefs;
