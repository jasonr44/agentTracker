const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
  Mutation: {
    sayHello: (_: any, { name }: { name: string }) => {
      let user = 'Guest';

      if (name) {
        user = name;
      }
      const greeting = `Hi there, ${user}`;
      return { greeting };
    },
  },
};

export default resolvers;
